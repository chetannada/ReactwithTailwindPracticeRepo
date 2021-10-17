import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import MultiPageFetchUsersApi from "./MultiPageFetchUsersApi";

class MultiPageFetchUserData extends Component {
  render() {
    return (
      <Router>
        <div className="text-center">
          <h1 className="text-xl">
            <Link to={"/"}>Home</Link>
            <span> | </span>
            <Link to={"/users"}>Multi Page Fetch User Data</Link>
          </h1>
          <nav></nav>
          <hr />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact></Route>
            <Route path="/users">
              <MultiPageFetchUsersApi />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MultiPageFetchUserData;
