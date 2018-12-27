import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';

import api from './lib/api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      session_token: null
    }
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
            .catch(err => console.log(err));
        }
        else {
          throw new Error('Incorrect response data');
        }
      })
      .catch(err => console.log(err));
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
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="row">
        <div className="col-12">
          <Header
            user={this.state.user}
            onLogout={this.handlerLogout}/>
          <Main 
            user={this.state.user}
            onLogin={this.handlerLogin}/>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
