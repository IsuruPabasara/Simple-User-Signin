import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import CreateUser from "./components/create-user.component";
import Users from "./components/users.component";
import Header from "./components/header";
import Items from "./components/user.items"


export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {isAuth:true};
  }
  
  render(){  
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path='/create-user' 
              render = {props=>
                (
                  <CreateUser {...props} isAuth={this.state.isAuth}/>
                )
                }
            />
            <Route exact path='/users' 
              render = {props=>
                (
                  <Users {...props} isAuth={this.state.isAuth}/>
                )
                }
            />
            <Route exact path='/items' 
              render = {props=>
                (
                  <Items {...props} isAuth={this.state.isAuth}/>
                )
                }
            />
            <Route exact path='/' component={CreateUser} />
            
          </Switch>
        </div>
      </Router>
    );
  }
}