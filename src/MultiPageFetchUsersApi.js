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

    const apiUrl = "https://616b023e16e7120017fa11de.mockapi.io/api/users";
    const response = await fetch(apiUrl);
    const userData = await response.json();
    this.setState({ loadingData: false, users: userData });
  }
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
              ({ name, avatar, id, userId, email, Country }, index) => {
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
                        {`Id: ${id}`}
                        <br />
                        {`User: ${name}`}
                        <br />
                        {`User Id: ${userId}`}
                        <br />
                        {`Email: ${email}`}
                        <br />
                        {`Country: ${Country}`}
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
