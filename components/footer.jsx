import React from 'react';
import ReactDOM from 'react-dom';

import './../less/footer.less'

class Footer extends React.Component {
    render () {
        let className = this.props.isHome ? "footerHome" : "footerGeneral"
        return (
            <div className={className}>
                <p>&copy; 2016 Parneet Singh</p>
            </div>
        )
    }
}

export {
    Footer
}
