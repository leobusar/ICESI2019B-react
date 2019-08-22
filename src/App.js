import React, {Component} from 'react';
import './App.css';
import Header from './Header'
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import firebase from './config/firebase'; 

class App extends Component {

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

    let users = []
    // this.state.database.collection("usuarios").get().then(
    //   querySnapshot =>{ querySnapshot.forEach( doc => {
    //     users.push(doc.data())
    //   })
    //   this.setState({users: users})
    // });
    
    console.log(users);
  }

  addUser(user){
    let users = this.state.users; 
    users.push(user);
    console.log(users);
    this.setState({
      users: users
    })
  
  }

  onEditHandle(user){
   // console.log(user)
    this.setState({
      useredit: user
    })
  }

  render() {

    var  empresa="NaN"

    return (
      <div className="container">
          <Header corporation={empresa}></Header>
          <UserList users={this.state.users} onEdit={this.onEditHandle.bind(this)} />
          <UserForm onAdd={this.addUser.bind(this)} useredit={this.state.useredit} />
      </div>
    );
  }
}

export default App;
