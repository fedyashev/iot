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
                this.props.history.push('/user');
              })
            })
            .catch(err => this.setState({message: err.message}));
        }
        else {
          throw new Error('Incorrect response data');
        }
      })
      .catch(err => this.setState({message: err.message}));
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
      .catch(err => this.setState({message: err.message}));
  }

  setErrorMessage = message => this.setState({message});

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
            onLogin={this.handlerLogin}
            setErrorMessage={this.setErrorMessage}
            onSubmitRegistrateForm={this.handleSubmitRegistrateForm}/>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
