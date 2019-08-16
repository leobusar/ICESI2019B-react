import React, { Component } from 'react';

class UserItem extends Component {
    render() {
        let user = this.props.user
        return (
          <tr>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.area}</td>
          </tr>            
        );
      }
    }
    
export default UserItem;    