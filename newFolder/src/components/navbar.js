import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Login from "./login"
import Register from "./register"
import Dashboard from "./dashboard"
import UserList from "./user-list"
import BlogList from "./blog-list"

function NavBar() {
    return (
        <div>
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>Admin Panel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="/login">LogIN</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link href="/userList">User-List</Nav.Link>
                            {/* <Nav.Link href="/userDetails">User-Details</Nav.Link> */}
                            <Nav.Link href="/blogList">Blog-List</Nav.Link>
                            {/* <Nav.Link href="/blogDetails">Blog-Details</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/userList">
                        <UserList />
                    </Route>
                    {/* <Route path="/userDetails">
                        <UserDetails />
                    </Route> */}
                    <Route path="/blogList">
                        <BlogList />
                    </Route>
                    {/* <Route path="/blogDetails">
                        <BlogDetails />
                    </Route> */}
                </Switch>
            </Router>
        </div>
    )
}
// function UserDetails() {
//     return <h2>User Details</h2>;
// }


// function BlogDetails() {
//     return <h2>Blog Details</h2>;
// }

export default NavBar