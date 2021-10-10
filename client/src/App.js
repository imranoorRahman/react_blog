import TopBar from "./components/topbar/TopBar";
import Home from "./components/pages/home/Home";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";
import Settings from "./components/pages/settings/Settings";
import Write from "./components/pages/write/Write";
import Single from "./components/pages/single/Single";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = true; // no logged in user
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Login />}</Route>
        <Route path="/post/:postId"><Single /></Route>
      </Switch>
    </Router>
  );
}

export default App;
