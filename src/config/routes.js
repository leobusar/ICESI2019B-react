import React  from  'react'
import  { Route, Link, Switch, BrowserRouter as Router } from  'react-router-dom'
import   Home  from '../components/Home/Home'
import  Users  from '../components/User/Users'

const routing = (
    <Router>
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
        </ul>
    </div>
    <Switch>
        <Route exact  path="/" component={Home} />
        <Route path="/users" component={Users} />
    </Switch>
    </Router>
) 

export default routing 