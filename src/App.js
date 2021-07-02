import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./pages/user/User";
import UserTodos from "./pages/user/UserTodos";
import UserState from "./context/userContext/userState";

function App() {
  return (
    <UserState>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={User} />
          <Route path="/user/:id" exact component={UserTodos} />
        </Switch>
      </Router>
    </UserState>
  );
}

export default App;
