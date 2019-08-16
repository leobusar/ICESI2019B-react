import React, { Component } from 'react';
import UserItem from "./UserItem";

class UserList extends Component {

    UNSAFE_componentWillMount(){
      //  console.log(this.props.users);
    }

    render() {
        let listaUsuarios= this.props.users.map( usuario =>
            <UserItem key={usuario.id} user={usuario} /> )

        return (
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">email</th>
                    <th scope="col">Area</th>
                </tr>
            </thead>
            <tbody>
                {listaUsuarios}
            </tbody>
            </table>  
        );
      }
    }
    
export default UserList;    