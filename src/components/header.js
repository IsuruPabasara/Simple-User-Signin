import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Header extends Component{

    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false
        }
    }
    render(){
        if(this.state.isLoggedIn){
            return (
                <div className="App">
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand"><h3>Hello there!</h3></a>
        
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/create-user">Create User</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users">Users List</Link>
                        </li>
                        {}
                        </ul>
                    </div>
                    </nav>
                </header>
                </div>
            );

        }
        else{
            return (
                <div className="App">
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand"><h3>Hello there!</h3></a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/create-user">Create User</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users">Users List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/items">Item List</Link>
                        </li>
                        </ul>
                    </div>
                    </nav>
                </header>
                </div>
            );
        }
    }
}

export default Header;