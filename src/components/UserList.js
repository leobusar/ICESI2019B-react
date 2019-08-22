import React, { Component } from 'react';
import UserItem from "./UserItem";

class UserList extends Component {

    componentDidMount(){
      //  console.log(this.props.users);
    }

    onEditHandle(user){
        //console.log(user)
        this.props.onEdit(user)
    }

    render() {
        let listaUsuarios= this.props.users.map( usuario =>
            <UserItem key={usuario.id} user={usuario}  onEdit={this.onEditHandle.bind(this)}/> )

        return (
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">email</th>
                    <th scope="col">Area</th>
                    <th scope="col">Actions</th>
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