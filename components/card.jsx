import React from 'react';
import ReactDOM from 'react-dom';

import Paper from 'material-ui/lib/paper';

class CardPic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isActive: false};
    }

    handleToggle = () => this.setState({isActive: !this.state.isActive});

    render() {
        const imgStyle = {
            height: 120,
            width: 120,
            textAlign: 'center',
            display: 'inline-block',
            overflow: 'hidden',
            margin: '5px'
        }

        let zDepth= this.state.isActive ? 5 : 1
        return(
            <div style={{display: 'inline-block'}}
                    onMouseEnter={this.handleToggle}
                    onMouseLeave={this.handleToggle}>
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

    handleToggle = () => this.setState({isActive: !this.state.isActive});

    render() {
        const style = {
            minHeight: 100,
            width: '85%',
            marginBottom: '40',
            textAlign: 'left',
            display: 'inline-block',
            padding: '10px',
        };
        let zDepth= this.state.isActive ? 5 : 1
        return(
            <div>
                <Paper style={style} zDepth={zDepth} onMouseEnter={this.handleToggle} onMouseLeave={this.handleToggle}>
                    {this.props.children}
                </Paper>
            </div>
        )
    }
}

export {
    Card, CardPic
}
