import React from "react"
import LoginForm from "./LoginForm"
import {styled} from "@mui/material/styles"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

const LoginHeader = () => {
    return (
        <Router>
            <Route exact path="/">
                <div className="Comp1">
                    <h1 className="loginText">
                        Welcome back <br/> to <span className="w600">CMC</span>
                    </h1>
                </div>
            </Route>
            <Route exact path="/Create">
                <div className="Comp1">
                    <h1 className="loginText">
                        Create <br/> new <span className="w600">Account</span>
                    </h1>
                </div>
            </Route>
        </Router>
    )
}

export default LoginHeader
