import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import AppBar from 'material-ui/lib/app-bar';
import Paper from 'material-ui/lib/paper';
import Divider from 'material-ui/lib/divider';
import FloatingActionButton from 'material-ui/lib/floating-action-button';

import './../less/main.less'

class SmartNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            width: window.innerWidth,
        };
    }

    componentDidMount () {
        window.addEventListener('resize', this.handleResize);
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    handleResize = () => this.setState({width: window.innerWidth});

    render() {

        const menuStyle = {
            textAlign: 'center',
            fontSize: '1.1em'
        }
        const navStyleBig = {
            zIndex: '0',
            paddingTop: '65px',
            textAlign: 'center'
        }
        const navStyleSmall = {
            zIndex: '9990',
            textAlign: 'center'
        }
        const appBarStyle = {
            zIndex: '100',
            position: 'fixed'
        }
        const titleStyleBig = {
            marginLeft: '50px'
        }

        const resumeButton = {
            position: 'absolute',
            bottom: '20px',
            left: '50px',
            right: '50px',
        }

        const picStyle = {
            height: 150,
            width: 150,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            overflow: 'hidden'
        }

        const iconStyle = {
            margin: '0px 7px',
            padding: '0px',
        }

        const githubIcon = {
             margin: '0px 7px',
            padding: '0px',
            fontSize: '1.4em'
        }

        let docked = (this.state.width < 820) ? false : true
        let navOpen = (this.state.width < 820) ? this.state.open : true
        let showMenu = (this.state.width < 820) ? true : false
        let navStyle = (this.state.width < 820) ? navStyleSmall : navStyleBig
        let titleStyle= (this.state.width < 820) ? {} : titleStyleBig

        return (
            <div>
                <AppBar
                    titleStyle={titleStyle}
                    style={appBarStyle}
                    title={this.props.name}
                    showMenuIconButton={showMenu}
                    onLeftIconButtonTouchTap={this.handleToggle}
                    iconElementRight={
                        <div className="contact-icons">

                            <FloatingActionButton mini={true} style={iconStyle}>
                                <i className="fa fa-envelope" />
                            </FloatingActionButton>


                                <FloatingActionButton mini={true} style={githubIcon}>
                                    <i className="fa fa-github" />
                                </FloatingActionButton>

                        </div>
                    }
                    zDepth={4}
                />

                <LeftNav
                    style={navStyle}
                    docked={docked}
                    width={230}
                    open={navOpen}
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



            </div>
        );
    }
}

export {
    SmartNav
}
