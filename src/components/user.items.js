import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Items extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] ,
            isAuth:true
        };
    }

    
    componentDidMount() {
        axios.get('http://localhost:4000/users')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
            if(!this.state.isAuth){
                return(
                    <div>
                    {console.log("In Here")}
                    <Redirect to = "/create-user"/>
                    </div>
                )
            }
            else{
            return (
                <div className="wrapper-users">
                    <div className="container">
                        <table className="table table-striped table-dark">
                            <thead className="thead-dark">
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.dataTable()}
                            </tbody>
                        </table>
                        <Button onClick={()=>(this.setState({isAuth:false}))}>Logout</Button>
                    </div>
                </div>
            )}
        
    }
}