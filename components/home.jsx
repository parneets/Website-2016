import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Paper from 'material-ui/lib/paper';
import Divider from 'material-ui/lib/divider';

import {Footer} from './footer.jsx'

import './../less/main.less'
import './../less/home.less'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {

        const navStyle = {
            textAlign: 'center',
        }

        const buttonStyle = {
            position: 'absolute',
            width: '56px',
            top: '65%',
            left: '0px',
            right: '0px',
            margin: '0 auto',
        };

        const iconStyle = {
            fontSize: '1.5em'
        }

        const menuStyle = {
            textAlign: 'center',
            fontSize: '1.1em'
        }

        const picStyle = {
            height: 150,
            width: 150,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            overflow: 'hidden'
        };

        return (
                <div className="home-container">

                    <LeftNav
                        style={navStyle}
                        docked={false}
                        width={230}
                        open={this.state.open}
                        onRequestChange={open => this.setState({open})}
                    >

                        <Paper style={picStyle} zDepth={2} circle={true}>
                            <img className="nav-pic" src="./../pics/parneet1.jpg" />
                        </Paper>

                        <Divider />

                        <Link to="/">
                            <MenuItem style={menuStyle} onTouchTap={this.handleClose}>Home</MenuItem>
                        </Link>
                        <Link to="/about">
                            <MenuItem style={menuStyle} onTouchTap={this.handleClose}>About Me</MenuItem>
                        </Link>
                        <Link to="/projects">
                            <MenuItem style={menuStyle} onTouchTap={this.handleClose}>Projects</MenuItem>
                        </Link>
                        <Link to="/experience">
                            <MenuItem style={menuStyle} onTouchTap={this.handleClose}>Experience</MenuItem>
                        </Link>

                    </LeftNav>

                    <img
                        src="./pics/triangle.png"
                        className="home-pic"/>

                    <span className="home-heading">Parneet Singh</span>
                    <span className="home-quote">Converting caffiene into code since 2013</span>


                    <FloatingActionButton style={buttonStyle} onTouchTap={this.handleToggle} iconStyle={iconStyle}>
                        <i className="material-icons">power_settings_new</i>
                    </FloatingActionButton>

                    <Footer isHome={true} />

                </div>
        );
    }
}

export {
    Home
}
