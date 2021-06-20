// ** create-user.component.js ** //

import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


export default class CreateUser extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            isAuth:true
        }
    }

    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            name: this.state.name,
            email: this.state.email
        };

        axios.post('http://localhost:4000/users/create', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({isAuth:false})
        this.setState({ name: '', email: '' })
        {this.props.history.push('/items')}
            
    }


    render() {
        if(!this.state.isAuth){
            return(
                <div>
                {console.log("In Here")}
                <Redirect to = "/users"/>
                </div>
            )
        }
        else{
        return (
            <div className="container">
                <div>
                    <div className = "row">
                        <div className="col-6">
                        </div>
                        <div className="col-6">
                            <br></br><h1>User signup</h1>
                            <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Add User Name</label>
                                <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Add User Email</label>
                                <input type="text" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <input type="submit" value="Create User" className="btn btn-success btn-block" />
                            </div>
                        </form></div>
                    </div>
                </div>
            </div>
        )}
    }
}