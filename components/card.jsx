import React from 'react';
import ReactDOM from 'react-dom';

import Paper from 'material-ui/lib/paper';

class CardPic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isActive: false};
    }

    handleOpen = () => this.setState({isActive: true});
    handleClose = () => this.setState({isActive: false});

    render() {
        const imgStyle = {
            height: 120,
            width: 120,
            textAlign: 'center',
            display: 'inline-block',
            overflow: 'hidden',
            margin: '5px'
        }

        let zDepth= this.state.isActive ? 3 : 1
        return(
            <div style={{display: 'inline-block'}}
                    onMouseEnter={this.handleOpen}
                    onMouseLeave={this.handleClose}>
                <Paper style={imgStyle} zDepth={zDepth}>
                    {this.props.children}
                </Paper>
            </div>
        )
    }
}

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isActive: false};
    }

    handleOpen = () => this.setState({isActive: true});
    handleClose = () => this.setState({isActive: false});

    render() {
        const style = {
            minHeight: 100,
            width: '85%',
            marginBottom: '40',
            textAlign: 'left',
            display: 'inline-block',
            padding: '10px',
        };
        let zDepth= this.state.isActive ? 3 : 1
        return(
            <div>
                <Paper style={style} zDepth={zDepth} onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose}>
                    {this.props.children}
                </Paper>
            </div>
        )
    }
}

export {
    Card, CardPic
}
