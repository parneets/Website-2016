import React from 'react';
import ReactDOM from 'react-dom';

import IconButton from 'material-ui/lib/icon-button';
import Paper from 'material-ui/lib/paper';

import {SmartNav} from './smartNav.jsx';
import {Footer} from './footer.jsx'
import {Card, CardPic} from './card.jsx'

import './../less/main.less'
import './../less/projects.less'

class Projects extends React.Component {
    render() {

        const style = {
            margin: '12px'
        }

        return (
            <div className="expand-full">
                <SmartNav name="Projects"/>

                <div className="content-body">

                    <div className="quote">
                        <p>Live as if you were to die tomorrow. Learn as if you were to live forever.</p>
                        <p className="author">- Mahatama Gandhi</p>
                    </div>

                    <Card>
                        <div className="card-heading">Personal Website v2.0
                            <span className="card-actions">
                                <IconButton tooltip="Play Store">
                                    <i className="material-icons">local_grocery_store</i>
                                </IconButton>
                                <IconButton onTouchTap={()=>{console.log('yo')}} tooltip="Github">
                                    <i className="material-icons">folder_open</i>
                                </IconButton>
                            </span>
                            <p className="card-timeDetails">Winter 2016</p>
                        </div>
                        <p>Created a Tic Tac Toe game for the Android platform.</p>
                        <p>This project was mainly an effort to make myself familiar with the all the stages in the life of a mobile application. </p>
                        <p>Published it on Play store and received positive user feedback.</p>
                        <p>Developed a compact game algorithm and simple design.</p>

                        <CardPic>
                            <img src="./../pics/material-design.png" className="card-picture" />
                        </CardPic>

                        <CardPic>
                            <img src="./../pics/react.png" className="card-picture" />
                        </CardPic>

                    </Card>

                    <Card>
                        <div className="card-heading">Android Application
                            <span className="card-actions">
                                <IconButton tooltip="Play Store">
                                    <i className="material-icons">local_grocery_store</i>
                                </IconButton>
                                <IconButton onTouchTap={()=>{console.log('yo')}} tooltip="Github">
                                    <i className="material-icons">folder_open</i>
                                </IconButton>
                            </span>
                            <p className="card-timeDetails">Summer 2015</p>
                        </div>
                        <p>Created a Tic Tac Toe game for the <span className="skill">Android</span> platform.</p>
                        <p>This project was mainly an effort to make myself familiar with the all the stages in the life of a mobile application. </p>
                        <p>Published it on Play store and received positive user feedback.</p>
                        <p>Developed a compact game algorithm and simple design.</p>

                        <CardPic>
                            <img src="./../pics/android1.png" className="card-picture" />
                        </CardPic>
                        <CardPic>
                            <img src="./../pics/android2.png" className="card-picture" />
                        </CardPic>

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
