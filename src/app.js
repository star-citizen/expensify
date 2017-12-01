import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const DashboardPage = () => (
    <div>
      Dashboard Page
    </div>
);
const AddExpense = () => (
    <div>
      Add Expense Page
    </div>
);
const EditExpense = () => (
  <div>
    Edit Expense Page
  </div>
);
const HelpPage = () => (
  <div>
    Help Page
  </div>
);
const NotFoundPage = () => (
    <div>
      404 Not Found! - <Link to="/">Go Home</Link>
    </div>
);
const Header = () => (
  <header>
    <h1>Expensify</h1>
  </header>
);


const routes = (
  <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={DashboardPage} exact={true}/>
            <Route path="/create" component={AddExpense} />
            <Route path="/edit" component={EditExpense} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));