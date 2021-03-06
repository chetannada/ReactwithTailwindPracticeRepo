import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class MultiPageFetchUserApi extends Component {
  // FetchUsersFromApi is class component which fetching users data from below API
  constructor(props) {
    super(props);
    this.state = { loadingData: true, users: [] };
  }

  async MultifetchDataAsyncFunction() {
    // MultifetchDataAsyncFunction is fetching users data from this API

    const apiUrl = "https://616a755d16e7120017fa0fac.mockapi.io/api/users";
    const response = await fetch(apiUrl);
    const userData = await response.json();
    this.setState({ loadingData: false, users: userData });
  }
  // Execute componentDidMount method after component render 
  componentDidMount() {
    this.MultifetchDataAsyncFunction();
  }
  render() {
    if (this.state.loadingData) {
      return <p>Loading...</p>;
    }
    const { users } = this.state;

    return (
      <Router>
        <div className="bg-green-400 ">
          <div className="flex flex-wrap">
            {users.map(
              ({ name, avatar, id, email, city, job, department, country, vehicle, phone }, index) => {
                return (
                  <div className="my-1 mx-1.5 text-left" key={index}>
                    <p className="p-5 rounded-xl">
                      {
                        <Link to={`/users/${name}`}>
                          <img
                            className="rounded-xl h-36 w-36"
                            src={avatar}
                            alt="Avatar"
                          />
                        </Link>
                      }
                    </p>
                    {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
                    <Switch>
                      
                      <Route path={`/users/${name}`}>
                      <div className="ml-6">
                        <div className="bg-yellow-300 w-max px-3 rounded-md">{`Id: ${id}`}</div>
                        <br />
                        <div className="bg-gray-300 w-max px-3 rounded-md">{`Name: ${name}`}</div>
                        <br />
                        <div className="bg-yellow-300 w-max px-3 rounded-md">{`Email: ${email}`}</div>
                        <br />
                        <div className="bg-gray-300 w-max px-3 rounded-md">{`Job Title: ${job}`}</div>
                        <br />
                        <div className="bg-yellow-300 w-max px-3 rounded-md">{`Department: ${department}`}</div>
                        <br />
                        <div className="bg-gray-300 w-max px-3 rounded-md">{`Vehicle: ${vehicle}`}</div>
                        <br />
                        <div className="bg-yellow-300 w-max px-3 rounded-md">{`Phone Number: ${phone}`}</div>
                        <br />
                        <div className="bg-gray-300 w-max px-3 rounded-md">{`City: ${city}`}</div>
                        <br />
                        <div className="bg-yellow-300 w-max px-3 rounded-md">{`Country: ${country}`}</div>
                        </div>
                      </Route>
                      
                    </Switch>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </Router>
    );
  }
}

export default MultiPageFetchUserApi;