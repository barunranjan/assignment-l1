import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./pages/user/User";
import UserTodos from "./pages/user/UserTodos";
import UserEdit from "./pages/user/userEdit/UserEdit";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={User} />
        <Route path="/user/:id" exact component={UserTodos} />
        <Route path="/user/edit/:id" exact component={UserEdit} />
      </Switch>
    </Router>
  );
}

export default App;
