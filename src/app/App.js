import './App.css';
import {Route, Switch} from "react-router";
import {routes} from "./routes";

const App = () => {

  return (
    <Switch>
      {routes.map((route) => {
        return <Route path={route.path}>{route.component}</Route>;
      })}
    </Switch>
  );
};

export default App;
