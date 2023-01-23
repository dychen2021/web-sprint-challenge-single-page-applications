import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
  
import Home from "./components/Home";
import Form from "./components/Form";
import Confirmation from "./components/Confirmation";
  
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Form" component={Form} />
          <Route path="/Confirmation" component={Confirmation} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
  
export default App;
