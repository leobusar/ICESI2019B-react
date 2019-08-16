import React, { Component } from 'react';

class UserForm extends Component {
    handleSubmit(e){
        e.preventDefault();
        //console.log(this.refs);
        let user = {
            id: this.refs.id.value,
            email: this.refs.email.value,
            area: this.refs.area.value
        }
        this.refs.id.value = ""
        this.refs.email.value = ""
        this.refs.area.value =""        
        this.props.onAdd(user)
        //console.log(user)
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
            <label forhtml="id">Identification Number</label>
            <input type="number" ref="id" className="form-control" id="id" placeholder="Enter Identification" />
        </div>
        <div className="form-group">
            <label forhtml="email">Email address</label>
            <input type="email" ref="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
            <label forhtml="area">Area</label>
            <input type="text" ref="area" className="form-control" id="area" placeholder="Enter Area" />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        );
      }
    }
    
export default UserForm;    