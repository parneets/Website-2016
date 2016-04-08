import React from 'react';
import ReactDOM from 'react-dom';

import IconButton from 'material-ui/lib/icon-button';
import Paper from 'material-ui/lib/paper';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import RaisedButton from 'material-ui/lib/raised-button';


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

        const iconStyle = {
            marginLeft: '5px',
        }

        const actionIconStyle = {
            color: '#FF4081',
        }

        const playStyle = {
            float: 'left',
            marginTop: '6px'
        }

        return (
            <div className="expand-full">
                <SmartNav name="Projects"/>

                <div className="content-body">

                    <div className="quote">
                        <p>Live as if you were to die tomorrow. Learn as if you were to live forever.</p>
                        <span className="author">- Mahatama Gandhi</span>
                    </div>

                    <Card>
                        <div className="card-heading">Personal Website v2.0
                            <span className="card-actions">

                                <IconButton style={actionIconStyle} onTouchTap={()=>{console.log('yo')}} tooltip="Source Code">
                                    <i className="material-icons">folder_open</i>
                                </IconButton>

                            </span>
                            <p className="card-timeDetails">Winter 2016</p>
                        </div>

                        <div className="card-content-container">
                            <p>Redesigned and revamped my personal website from scratch.</p>

                            <p>Used Facebook's <a href="https://facebook.github.io/react/" target="_blank">React</a> framework for user interface and <a href="https://github.com/reactjs/react-router" target="_blank">react-router</a> library to manage the routing.</p>

                            <p>Implemented using Google's <a href="https://facebook.github.io/react/" target="_blank">material design</a> pattern to produce a smooth user experience.</p>

                            <p>Written completely in <a href="http://www.ecma-international.org/ecma-262/6.0/" target="_blank">es6</a> along with <a href="https://facebook.github.io/react/docs/jsx-in-depth.html" target="_blank">jsx</a> and utilized <a href="https://babeljs.io/" target="_blank">Babel</a> for transpiling the code.</p>

                            <p>Used <a href="https://webpack.github.io/" target="_blank">Webpack</a> for module bundling and <a href="https://www.npmjs.com/" target="_blank">npm</a> to get various packages and dependencies.</p>

                            <p>The website is fully responsive and dynamic.</p>
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
                        <div className="card-heading">Android Application
                            <span className="card-actions">

                                <IconButton style={actionIconStyle} onTouchTap={()=>{console.log('yo')}} tooltip="Source Code">
                                    <i className="material-icons">folder_open</i>
                                </IconButton>

                            </span>
                            <p className="card-timeDetails">Summer 2015</p>
                        </div>

                        <div className="card-content-container">
                            <p>Created a Tic Tac Toe game for the <a href="https://www.android.com/" target="_blank">Android</a> platform.</p>

                            <p>This project was mainly an effort to make myself familiar with the all the stages in the life of a mobile application. </p>

                            <p>Published it on <a href="https://play.google.com/store/apps/details?id=me.parneetsingh.tictactoe" target="_blank">Play store</a> and received positive user feedback.</p>

                            <p>Developed a compact game algorithm and simple design using the <a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">MVC architecture</a>.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/android1.png" className="card-picture" />
                            </CardPic>

                            <CardPic>
                                <img src="./../pics/android-logo.png" className="card-picture" />
                            </CardPic>
                        </div>

                    </Card>

                    <Card>
                        <div className="card-heading">Leaping Jack
                            <span className="card-actions">

                                <IconButton style={actionIconStyle} onTouchTap={()=>{console.log('yo')}} tooltip="Play">
                                    <i className="material-icons">play_circle_outline</i>
                                </IconButton>

                                <IconButton style={actionIconStyle} onTouchTap={()=>{console.log('yo')}} tooltip="Source Code">
                                    <i className="material-icons">folder_open</i>
                                </IconButton>

                            </span>
                            <p className="card-timeDetails">Summer 2015</p>
                        </div>

                        <div className="card-content-container">
                            <p>Developed a simple game using <a href="http://www.w3schools.com/html/html5_canvas.asp" target="_blank">HTML-5 Canvas</a> and <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>.</p>
                            <p>The player is supposed to shoot ropes and attain maximum height.</p>
                            <p>Worked as an equal member of a two person team.</p>
                            <p>Developed a compact game logic and simple design.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/leaping-jack.png" className="card-picture" />
                            </CardPic>
                        </div>

                    </Card>

                    <Card>
                        <div className="card-heading">Personal Website v1.0
                            <span className="card-actions">

                                <IconButton style={actionIconStyle} onTouchTap={()=>{console.log('yo')}} tooltip="Source Code">
                                    <i className="material-icons">folder_open</i>
                                </IconButton>

                            </span>
                            <p className="card-timeDetails">Summer 2015</p>
                        </div>

                        <div className="card-content-container">
                            <p>Made a simple personal website using <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a> and <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>.</p>
                            <p>Used <a href="https://daneden.github.io/animate.css/" target="_blank">Animate.css</a> to add animation effects to the website.</p>
                            <p>Made the website mobile-friendly and responsive.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/bootstrap.jpg" className="card-picture" />
                            </CardPic>
                        </div>

                    </Card>

                    <Card>
                        <div className="card-heading">Scribbler Bot
                            <span className="card-actions">

                                <IconButton style={actionIconStyle} onTouchTap={()=>{console.log('yo')}} tooltip="Source Code">
                                    <i className="material-icons">folder_open</i>
                                </IconButton>

                            </span>
                            <p className="card-timeDetails">Winter 2015</p>
                        </div>

                        <div className="card-content-container">
                            <p>Programmed a Scribbler Bot with 5 teammates in <a href="https://www.python.org/" target="_blank">Python</a>.</p>
                            <p>The robot reached a point on a chessboard, selected by the user on the GUI.</p>
                            <p>My contribution was to successfully implement the <a href="https://en.wikipedia.org/wiki/Breadth-first_search" target="_blank">BFS</a> algorithm to calculate the shortest path. </p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/scribbler.png" className="card-picture" />
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
    Projects
}
