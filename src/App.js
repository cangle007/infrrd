import React, { Component } from "react";
import { Provider } from "react-redux";
import setupStore from "./redux/setupStore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainContainer from "./redux/containers/MainContainer";
import createBrowserHistory from "history/createBrowserHistory"; //deprecating soon. use the one belong?

export const history = createBrowserHistory();
const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path='/' component={MainContainer} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}
