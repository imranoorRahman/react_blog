import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let user; // = true; // no logged in user
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
