import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Home = () => {
    return <h2>Home</h2>
}

const About = () => {
    const { userid } = useParams();

    return <h2>About: {userid}</h2>
}

const Users = () => {
    const { username } = useParams();

    return <h2>Users: {username}</h2>
}

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/2">About</Link>
            </li>
            <li>
              <Link to="/users/ismu">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about/:userid">
            <About />
          </Route>
          <Route path="/users/:username">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
