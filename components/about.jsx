import React from 'react';
import ReactDOM from 'react-dom';

import {SmartNav} from './smartNav.jsx';
import {Footer} from './footer.jsx'
import {Card, CardPic} from './card.jsx'

import './../less/main.less'
import './../less/about.less'

class About extends React.Component {
    render() {
        return (
            <div className="expand-full">
                <SmartNav name="About Me"/>

                <div className="content-body">

                    <Card>

                        <div className="card-heading">Introduction</div>
                        <div className="card-content-container">
                            <p>Hey there, I am a second year Software Engineering student at the University of Waterloo.</p>
                            <p>Software and technology have always intrigued me since childhood. The love has only grown over the years. </p>
                            <p>In my opinion, the ability to create amazing pieces of software and applicaitions from scratch and bring your imagination to reality is unparalled and unpreceedented. I aspire to use this ability to create something useful for mankind.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/material-design.png" className="card-picture" />
                            </CardPic>
                        </div>

                    </Card>



                    <Card>

                        <div className="card-heading">Chess</div>
                        <div className="card-content-container">
                            <p>I am a member of the University of Waterloo Chess club and I really enjoy playing chess with my fellow members.</p>
                            <p>I consider Chess to be a very interesting and contemplative game. In my school, I have competed in various local and inter-state Chess championships.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/material-design.png" className="card-picture" />
                            </CardPic>
                        </div>

                    </Card>

                    <Card>

                        <div className="card-heading">Social Service</div>
                        <div className="card-content-container">
                            <p>I like to take initatives to help the underpriveledged and needy people. I beleive to its the responsibilty of a human being to give back to the society.</p>
                            <p>In my high school, I was an active member of the National Service Scheme, which is one of India's biggest welfare and service program sponsored by the government itself.</p>
                            <p>I got the amazing oppurtunity to work as a speaker and presented at various national health camps organized all across the country over a period of two years.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/material-design.png" className="card-picture" />
                            </CardPic>
                        </div>

                    </Card>

                    <Card>

                        <div className="card-heading">Travelling</div>
                        <div className="card-content-container">
                            <p>I like to take initatives to help the underpriveledged and needy people. I beleive to its the responsibilty of a human being to give back to the society.</p>
                            <p>In my high school, I was an active member of the National Service Scheme, which is one of India's biggest welfare and service program sponsored by the government itself.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/material-design.png" className="card-picture" />
                            </CardPic>
                        </div>

                    </Card>

                    <Card>

                        <div className="card-heading">Fitness</div>
                        <div className="card-content-container">
                            <p>I like to take initatives to help the underpriveledged and needy people. I beleive to its the responsibilty of a human being to give back to the society.</p>
                            <p>In my high school, I was an active member of the National Service Scheme, which is one of India's biggest welfare and service program sponsored by the government itself.</p>
                        </div>

                        <div className="card-pics-container">
                            <CardPic>
                                <img src="./../pics/material-design.png" className="card-picture" />
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
