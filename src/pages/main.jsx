import React, { Fragment } from 'react';
import About from './about/about';
import Blog from './blog/blog';
import Contact from './contact/contact';
import Home from './home/home';
import Portafolio from './portafolio/portaflio';
import Resume from './resume/resume';

const Main = () => {
    return (
        <Fragment>
            <div id="home">
                <div id="about">
                    <div id="resume">
                        <div id="portfolio">
                            <div id="blog">
                                <div id="contact">
                                    <Home />
                                    <About />
                                    <Portafolio />
                                    <Resume />
                                    <Blog />
                                    <Contact />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Main;