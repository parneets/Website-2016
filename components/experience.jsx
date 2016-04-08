import React from 'react';
import ReactDOM from 'react-dom';

import Divider from 'material-ui/lib/divider';

import {SmartNav} from './smartNav.jsx';
import {Footer} from './footer.jsx'
import {Card, CardPic} from './card.jsx'

import './../less/main.less'

class Experience extends React.Component {
    render() {
        return (
            <div className="expand-full">
                <SmartNav name="About Me"/>

                <div className="content-body">

                    <div className="quote">
                        <p>I could either watch it happen, or be part of it.</p>
                        <p className="author">- Elon Musk</p>
                    </div>

                    <Card>
                        <div className="card-heading">Web Applications Developer
                            <span className="card-actions">
                                Burlington,On ;&nbsp; Jan/16 - Apr/16
                            </span>
                            <p className="card-timeDetails">Evertz Microsystems</p>
                        </div>

                        <div className="card-content-container">
                            <p>Created a Tic Tac Toe game for the Android platform.</p>
                            <p>This project was mainly an effort to make myself familiar with the all the stages in the life of a mobile application. </p>
                            <p>Published it on Play store and received positive user feedback.</p>
                            <p>Developed a compact game algorithm and simple design.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/material-design.png" className="card-picture" />
                            </CardPic>

                            <CardPic>
                                <img src="./../pics/react.png" className="card-picture" />
                            </CardPic>
                        </div>

                    </Card>

                    <Card>
                        <div className="card-heading">Network Engineer
                            <span className="card-actions">
                                Mississauga,On ;&nbsp; May/15 - Aug/15
                            </span>
                            <p className="card-timeDetails">PRGX Canada Corporation</p>
                        </div>
                        <div className="card-content-container">
                            <p>Created a Tic Tac Toe game for the Android platform.</p>
                            <p>This project was mainly an effort to make myself familiar with the all the stages in the life of a mobile application. </p>
                            <p>Published it on Play store and received positive user feedback.</p>
                            <p>Developed a compact game algorithm and simple design.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/material-design.png" className="card-picture" />
                            </CardPic>

                            <CardPic>
                                <img src="./../pics/react.png" className="card-picture" />
                            </CardPic>
                        </div>

                    </Card>

                    <Card>
                        <div className="card-heading">IT Specialist
                            <span className="card-actions">
                                Chandigarh,India ;&nbsp; Jan/14 - Aug/14
                            </span>
                            <p className="card-timeDetails">Dominant Marketing Agencies</p>
                        </div>
                        <div className="card-content-container">
                            <p>Created a Tic Tac Toe game for the Android platform.</p>
                            <p>This project was mainly an effort to make myself familiar with the all the stages in the life of a mobile application. </p>
                            <p>Published it on Play store and received positive user feedback.</p>
                            <p>Developed a compact game algorithm and simple design.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/material-design.png" className="card-picture" />
                            </CardPic>

                            <CardPic>
                                <img src="./../pics/react.png" className="card-picture" />
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
