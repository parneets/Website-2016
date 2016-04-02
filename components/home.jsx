import React from 'react';
import ReactDOM from 'react-dom';

import RaisedButton from 'material-ui/lib/raised-button';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

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

        const buttonStyle = {
            position: 'absolute',
            width: '40px',
            top: '65%',
            left: '0px',
            right: '0px',
            margin: '0 auto',
        };

        return (

            <div className="home-container">

                <LeftNav
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </LeftNav>

                <img
                    src="./pics/triangle.png"
                    className="home-pic"/>

                <span className="home-heading">Parneet Singh</span>
                <span className="home-quote">Converting caffiene to code since 2013</span>

                <RaisedButton label="Explore" primary={true} style={buttonStyle}
                        onTouchTap={this.handleToggle}/>

            </div>
        );
    }
}

export {
    Home
}
