import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import RaisedButton from 'material-ui/lib/raised-button';
import {SideNav} from './sideNav.jsx';

import './../less/main.less'

class Main extends React.Component {

    render() {
        return (
            <div className="main-div">

                <SideNav docked={true} />

                <RaisedButton label="Default" />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('content'));
