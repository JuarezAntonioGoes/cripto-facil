import { Switch } from "react-router-dom";
import { Route } from "./route";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import Rebalance from "../Pages/Rebalance";
import Accounting from "../Pages/Accounting/Index";
import Dashboard from "../Pages/Dashboard/";
import Transactions from "../Pages/Transactions";

import Home from "../Pages/Home";
import HomePage from "../Pages/HomePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/rebalance" component={Rebalance} />
      <Route exact path="/accounting" component={Accounting} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/transactions/:id" component={Transactions} />
    </Switch>
  );
};

export default Routes;
