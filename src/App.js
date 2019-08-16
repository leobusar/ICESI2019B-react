import React, {Component} from 'react';
import './App.css';
import Header from './Header'
import UserList from './components/UserList';
import UserForm from './components/UserForm';


class App extends Component {

  constructor(){
    super();
    this.state = {
      users: [
        {email: "example@gmail.com", id: 1234,  area:"Desarrollo" },
        {email: "mail@gmail.com", id: 1235,  area:"Desarrollo" },
        {email: "example2@gmail.com", id: 1236,  area:"Soporte" },
        {email: "prueba@gmail.com", id: 1237,  area:"Desarrollo" }
      ]
    }
  }

  addUser(user){
    let users = this.state.users; 
    users.push(user);
    console.log(users);
    this.setState({
      users: users
    })
  
  }

  render() {

    var  empresa="NaN"

    return (
      <div className="container">
          <Header corporation={empresa}></Header>
          <UserList users={this.state.users} />
          <UserForm onAdd={this.addUser.bind(this)} />
      </div>
    );
  }
}

export default App;
