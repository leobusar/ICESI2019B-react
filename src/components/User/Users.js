import React, {Component} from 'react';

import UserList from './UserList';
import UserForm from './UserForm';
import firebase from '../../config/firebase'; 

class Users extends Component {
1
    constructor(){
      super();
      this.state = {
        users: [
          {email: "example@gmail.com", id: 1234,  area:"Desarrollo" },
          {email: "mail@gmail.com", id: 1235,  area:"Desarrollo" },
          {email: "example2@gmail.com", id: 1236,  area:"Soporte" },
          {email: "prueba@gmail.com", id: 1237,  area:"Desarrollo" }
        ],
        useredit: {email: "", id: "",  area:""},
        database: firebase.firestore()
      }
    }
  
    componentDidMount(){
      //const users = firebase.database().ref('users');
      this.refresh()
    }
    
    refresh(){
      let users = []
      this.state.database.collection("usuarios").get().then(
        querySnapshot =>{ querySnapshot.forEach( doc => {
          users.push(doc.data())
        })
        this.setState({users: users})
      });    
    }
  
  
    addUser(user){
      // let users = this.state.users;
      // users.push(user);
      // console.log(users);
      // this.setState({
      //   users: users
      // })
      if(user.id===""){         
        let id= Math.ceil(Math.random()*1000000)
        user.id = ""+id
      }
      this.state.database.collection("usuarios").doc(user.id).set(user)
  
      this.refresh()
  
    }
  
    onEditHandle(user){
     // console.log(user)
      this.setState({
        useredit: user
      })
    }
  
    onDeleteHandle(user){
      this.state.database.collection("usuarios").doc(user.id).delete()
      this.refresh()
    }
  
    render() {
  
      var  empresa="NaN"
  
      return (
        <div className="container">
            <UserList users={this.state.users} onEdit={this.onEditHandle.bind(this)}  onDelete={this.onDeleteHandle.bind(this)}/>
            <UserForm onAdd={this.addUser.bind(this)} useredit={this.state.useredit} />
        </div>
      );
    }
  }
  
  export default Users;
  