import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Home from './home'
import About from './about'
import Detail from './detail/detail'

class Navigation extends Component {
    render () {
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        </ul>

                        <hr />

                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/detail/:id" component={Detail} />
                    </div>
                    </Router>

            </div>
            )
    }
}

export default Navigation