import React from "react";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
} from "react-router-dom";


import AxiosGetFetchApi from "./AxiosGetFetchApi";
import axios from "axios";

export default function NestedRouting() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>


        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}    
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user/:id">
            <User />
          </Route>
          <Route path="/user">
            <AxiosGetFetchApi />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About</h2>;
}


export const User = () => {
  const { id } = useParams();

  const [userData, setuserData] = useState(null);

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get(`https://616a755d16e7120017fa0fac.mockapi.io/api/users/${id}`)
      .then((response) => {
        setuserData(response.data.name);
      });
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div>
      <div className="bg-yellow-300 w-max px-3 rounded-md">User ID: {id} </div>
      <br />
      <div className="bg-gray-300 w-max px-3 rounded-md">
        User Name: {userData}
      </div>
    </div>
  );
};