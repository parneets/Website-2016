import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './../themes/mainTheme.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {Home} from './home.jsx';
import {About} from './about.jsx';
import {Projects} from './projects.jsx';

import './../less/main.less'

class Main extends React.Component {

    static childContextTypes = {
        muiTheme: React.PropTypes.object,
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
        };
    }

    render() {
        return (
            <div className="main-div">
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="projects" component={Projects} />
    </Route>
  </Router>
), document.getElementById('content'));
