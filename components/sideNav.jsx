import React from 'react';
import ReactDOM from 'react-dom';

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

class SideNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    
    handleToggle = () => {
        this.setState({open: !this.state.open});
    }

    handleClose = () => {
        this.setState({open: false});
    }
    
    render() {
        return (
            <div>
                <RaisedButton
                    label="Open LeftNav"
                    onTouchTap={this.handleToggle}
                />
                <LeftNav
                    docked={this.props.docked}
                    width={200}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </LeftNav>
            </div>
        );
    }
}

export {
    SideNav
}