import React from 'react';
import ReactDOM from 'react-dom';

import Divider from 'material-ui/lib/divider';

import {SmartNav} from './smartNav.jsx';
import {Footer} from './footer.jsx'
import {Card, CardPic} from './card.jsx'

import './../less/main.less'

class Experience extends React.Component {

    componentWillMount () {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="expand-full">
                <SmartNav name="Experience"/>

                <div className="content-body">

                    <div className="quote">
                        <p>I could either watch it happen, or be a part of it.</p>
                        <p className="author">- Elon Musk</p>
                    </div>

                    <Card>
                        <div className="card-heading">Software Developer
                            <span className="card-actions">
                                Mississauga,On ;&nbsp; Sept/16 - Dec/16
                            </span>
                            <p className="card-timeDetails">D+H Limited Partnership</p>
                        </div>

                        <div className="card-content-container">
                            <p>Created a mobile application from scratch using Ionic 2 for iOS and Android platforms.</p>
                            <p>The mobile application allowed users to take tests , view results and reports , publish tests and even edit profile.</p>
                            <p>Implemented multiple user roles, authentication, push notifications and native features.</p>
                            <p>Developed automated end to end tests using Protractor and integrated with build pipeline.</p>
                            <p>Inspection time after every build was reduced from 1 hour to15 minutes on average.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/dh.png" className="card-picture" />
                            </CardPic>

                            <CardPic>
                                <img src="./../pics/ionic.png" className="card-picture" />
                            </CardPic>
                        </div>

                    </Card>

                    <Card>
                        <div className="card-heading">Web Applications Developer
                            <span className="card-actions">
                                Burlington,On ;&nbsp; Jan/16 - Apr/16
                            </span>
                            <p className="card-timeDetails">Evertz Microsystems</p>
                        </div>

                        <div className="card-content-container">
                            <p>Independently designed and developed 3 different web applications over a period of 4 months.</p>
                            <p>Used <a href="https://facebook.github.io/react/" target="_blank">React</a> with <a href="https://facebook.github.io/react/docs/jsx-in-depth.html" target="_blank">JSX</a> for the front end and <a href="http://redux.js.org/" target="_blank">Redux</a> as the design architecture.</p>
                            <p>Fetched server data using <a href="http://www.evertz.com/">Evertz web api</a> accomplished by <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" target="_blank">websocket</a> connections.</p>
                            <p>Applications were based heavily on Google's <a href="https://www.google.com/design/spec/material-design/introduction.html" target="_blank">Material design</a> patterns and guidelines.</p>
                            <p>Deployed finished apps using <a href="https://www.nginx.com/resources/wiki/" target="_blank">NGINX</a> to serve the content.</p>
                            <p>Developed numerous reusable and easily instatiable React components for use by other team members.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/evertz.png" className="card-picture" />
                            </CardPic>

                            <CardPic>
                                <img src="./../pics/react.png" className="card-picture" />
                            </CardPic>
                        </div>

                    </Card>

                    <Card>
                        <div className="card-heading">IT Administrator
                            <span className="card-actions">
                                Mississauga,On ;&nbsp; May/15 - Aug/15
                            </span>
                            <p className="card-timeDetails">PRGX Canada Corporation</p>
                        </div>
                        <div className="card-content-container">
                            <p>Maintained and installed company <a href="https://en.wikipedia.org/wiki/Server_(computing)" target="_blank">servers</a> and systems and configured <a href="https://en.wikipedia.org/wiki/Router_(computing)" target="_blank">network routers</a>.</p>
                            <p>Provided technical support for computer and <a href="https://en.wikipedia.org/wiki/Local_area_network" target="_blank">LAN</a> related issues.</p>
                            <p>Developed a document viewing system using <a href="https://en.wikipedia.org/wiki/SQL" target="_blank">SQL</a> and <a href="https://en.wikipedia.org/wiki/Visual_Basic" target="_blank">visual basic</a>.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/prgx.png" className="card-picture" />
                            </CardPic>
                        </div>

                    </Card>

                    <Card>
                        <div className="card-heading">IT Support Specialist
                            <span className="card-actions">
                                Chandigarh,India ;&nbsp; Jan/14 - Aug/14
                            </span>
                            <p className="card-timeDetails">Dominant Marketing Agencies</p>
                        </div>
                        <div className="card-content-container">
                            <p>Installed, configured and tested hardware and software.</p>
                            <p>Responded to phone and e-mail requests for technical support.</p>
                            <p>Performed preventive maintenance.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/itSupport.png" className="card-picture" />
                            </CardPic>
                        </div>

                    </Card>

                </div>

                <Footer isHome={false} />

            </div>
        );
    }
}

export {
    Experience
}
