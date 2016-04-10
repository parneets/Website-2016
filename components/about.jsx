import React from 'react';
import ReactDOM from 'react-dom';

import {SmartNav} from './smartNav.jsx';
import {Footer} from './footer.jsx'
import {Card, CardPic} from './card.jsx'

import './../less/main.less'
import './../less/about.less'

class About extends React.Component {

    componentWillMount () {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="expand-full">
                <SmartNav name="About Me"/>

                <div className="content-body">

                    <div className="quote">
                        <p>In the end, it's not the years in your life that count. It's the life in your years.</p>
                        <span className="author">- Abraham Lincoln</span>
                    </div>

                    <Card>

                        <div className="card-heading">Introduction</div>
                        <div className="card-content-container">
                            <p>Hey there, I am a second year Software Engineering student at the University of Waterloo.</p>
                            <p>Words that describe me are hacker, fitness freak, dog lover, tech enthusiast and a big time Coldplay fan.</p>
                            <p>I like to build things that make life easier.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/uw.jpg" className="card-picture" />
                            </CardPic>
                        </div>

                    </Card>



                    <Card>

                        <div className="card-heading">Chess</div>
                        <div className="card-content-container">
                            <p>I am a member of the University of Waterloo Chess club and I relish playing chess with fellow members.</p>
                            <p>During my school, I competed in various local and inter-state Chess championships.</p>
                            <p>I consider chess to be a highly intellectual and thoghtful game which is an amazing treat for the human brain.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/chess.png" className="card-picture" />
                            </CardPic>
                        </div>

                    </Card>

                    <Card>

                        <div className="card-heading">Social Service</div>
                        <div className="card-content-container">
                            <p>I like to take initatives and give back to the society whenever possible.</p>
                            <p>In my high school, I was an active member of the National Service Scheme, which is one of India's biggest welfare and service program sponsored by the government itself.</p>
                            <p>I believe technology is a great tool to combat poverty and health issues around the globe.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/nss.jpeg" className="card-picture" />
                            </CardPic>
                        </div>

                    </Card>

                    <Card>

                        <div className="card-heading">Travelling</div>
                        <div className="card-content-container">
                            <p>I like to explore new places and go on excursions with my friends.</p>
                            <p>I have travelled to 5 different countries and many popular cities across the globe.</p>
                            <p>The feeling of joy you get while watching a spectacular view is unparalleled and priceless.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/travel.jpg" className="card-picture" />
                            </CardPic>
                        </div>

                    </Card>

                    <Card>

                        <div className="card-heading">Fitness</div>
                        <div className="card-content-container">
                            <p>In my opinion, living healthy and being proactive is a duty of all human beings.</p>
                            <p>I like to practice Yoga, on most weekends or whenever I feel distressed. It helps me get my mind and body in sync.</p>
                            <p>Every so often, I like to go out for long runs or bike trips.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/yoga.jpg" className="card-picture" />
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
    About
}
