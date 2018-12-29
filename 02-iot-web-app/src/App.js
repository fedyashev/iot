import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Alert from './components/Alert';

import api from './lib/api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      session_token: null,
      message: null
    }
  }

  componentDidMount() {
    this.props.history.push('/login');
  }

  handlerLogin = (username, password) => {
    api.login(username, password)
      .then(res => {
        const {user_id, session_token} = res;
        if (user_id && session_token) {
          api.getUserById(user_id, session_token)
            .then(user => {
              this.setState({user, session_token}, () => {
                this.props.history.push('/data');
              })
            })
            .catch(err => {
              this.setState({message: err.message});
            });
        }
        else {
          throw new Error('Incorrect response data');
        }
      })
      .catch(err => {
        this.setState({message: err.message});
      });
  }

  handlerLogout = () => {
    if (!this.state.user || !this.state.session_token) return;
    const user_id = this.state.user._id;
    const session_token = this.state.session_token;
    api.logout(user_id, session_token)
      .then(res => {
        console.log(res);
        this.setState({user: null, session_token: null}, () => {
          this.props.history.push('/login');
        });
      })
      .catch(err => this.setState({message: err.message}));
  }

  handlerAlertClose = () => this.setState({message: null});

  //handleMessageClose = () => this.setState({message: null});

  handleSubmitRegistrateForm = (username, password, email) => {
    api.registrate(username, password, email)
      .then(res => {
        this.setState({message: 'Registration success.'}, () => {
          this.props.history.push('/login');
        })
      })
      .catch(err => {
        this.setState({message: err.message})
      });
  }

  handleCreateNewDevice = name => {
    if (!name) {
      this.setState({message: 'Incorrect new device name'});
    }
    else {
      const {user} = this.state;
      api.createNewDevice(user._id, this.state.session_token, name)
        .then(device => {
          const devices = [...user.devices, device];
          const newUser = {...user, devices};
          this.setState({user: newUser, message: `Device ${name} created.`});
        })
        .catch(err => {
          this.setState({message: err.message});
        });
    }
  }

  handleDeleteDevice = (device_id, isSubmit) => {
    if (isSubmit) {
      const {user, session_token} = this.state;
      api.deleteDevice(user._id, device_id, session_token)
        .then(res => {
          const devices = [...user.devices].filter(d => d._id !== device_id);
          const newUser = {...user, devices};
          this.props.history.push('/device');
          this.setState({user: newUser, message: 'Device deleted'});
        })
        .catch(err => this.setState({message: err.message}));
    }
    else {
      this.props.history.goBack();
    }

  }

  setErrorMessage = message => this.setState({message});

  isAuthenticated = () => this.state.session_token != null;

  handleCreateNewSensor = (device_id, name, units) => {
    if (!device_id || !name || !units) {
      this.setState({message: 'Incorrect sensor name or units'});
    }
    else {
      const {user, session_token} = this.state;
      const user_id = user._id;
      api.createNewSensor(user_id, device_id, session_token, name, units)
        .then(sensor => {
          const newUser = {...user};
          newUser.devices.find(d => d._id === device_id).sensors.push(sensor);
          this.setState({...this.state, user: newUser, message: 'Sensor created'}, () => {
            this.props.history.push(`/device/${device_id}`);
          });
        })
        .catch(err => this.setState({message: err.message}));
    }
  }

  handleRenameDevice = (device_id, name) => {
    const {user, session_token} = this.state;
    api.renameDevice(user._id, device_id, session_token, name)
      .then(device => {
        const newUser = {...user};
        newUser.devices.find(d => d._id === device_id).name = device.name;
        this.props.history.goBack();
        this.setState({...this.state, user: newUser, message: 'Device renamed'});
      })
      .catch(err => this.setState({...this.state, message: err.message}));
  }

  handleEditSensor = (device_id, sensor_id, name, units) => {
    const {user, session_token} = this.state;
    api.editSensor(user._id, device_id, sensor_id, session_token, name, units)
      .then(newSensor => {
        const newUser = {...user};
        const sensor = newUser
          .devices.find(d => d._id === device_id)
          .sensors.find(s => s._id === sensor_id);
        sensor.name = newSensor.name;
        sensor.units = newSensor.units;
        this.props.history.goBack();
        this.setState({...this.state, user: newUser, message: 'Sensor updated'});
      })
      .catch(err => this.setState({...this.state, message: err.message}));
  }

  handleDeleteSensor = (device_id, sensor_id, isSubmit) => {
    if (isSubmit) {
      const {user, session_token} = this.state;
      api.deleteSensor(user._id, device_id, sensor_id, session_token)
        .then(result => {
          const newUser = {...user};
          const sensors = newUser
            .devices.find(d => d._id === device_id)
            .sensors.filter(s => s._id !== sensor_id);
          const device = newUser.devices.find(d => d._id === device_id);
          device.sensors = sensors;
          this.props.history.push(`/device/${device_id}`);
          this.setState({...this.state, user: newUser, message: 'Sensor deleted'});
        })
        .catch(err => this.setState({...this.state, message: err.message}));
    }
    else {
      this.props.history.goBack();
    }
  }

  render() {
    const {user, message} = this.state;
    return (
      <div className="row">
        <div className="col-12">
          <Header user={user} onLogout={this.handlerLogout}/>
          {
            message && <Alert message={message} onAlertClose={this.handlerAlertClose}/>
          }
          <Main
            user={user}
            isAuthenticated={this.isAuthenticated}
            onLogin={this.handlerLogin}
            setErrorMessage={this.setErrorMessage}
            onSubmitRegistrateForm={this.handleSubmitRegistrateForm}
            onCreateNewDevice={this.handleCreateNewDevice}
            onDeleteDevice={this.handleDeleteDevice}
            onCreateSensor={this.handleCreateNewSensor}
            onRenameDevice={this.handleRenameDevice}
            onEditSensor={this.handleEditSensor}
            onDeleteSensor={this.handleDeleteSensor}/>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
