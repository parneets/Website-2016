import React from 'react';
import ReactDOM from 'react-dom';

import {SmartNav} from './smartNav.jsx';
import {Footer} from './footer.jsx'
import {Card} from './card.jsx'

import './../less/main.less'
import './../less/projects.less'

class Projects extends React.Component {
    render() {
        return (
            <div className="expand-full">
                <SmartNav name="About Me"/>

                <div className="content-body">
                    <Card>
                        <p className="card-heading">Introduction</p>
                        <p>Hey there, I am a second year Software Engineering student at the University of Waterloo.</p>
                        <p>Software and technology have always intrigued me since childhood. The love has only grown over the years. </p>
                        <p>The ability to create amazing pieces of software and applicaitions from scratch and bring your imagination to reality is unparalled and unpreceedented in my opinion. I aspire to use this ability to create something useful for mankind.</p>
                    </Card>

                    <Card>
                        <p className="card-heading">Yoga</p>
                    </Card>

                </div>

                <Footer isHome={false} />

            </div>
        );
    }
}

export {
    Projects
}
