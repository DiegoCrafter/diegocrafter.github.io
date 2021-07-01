/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Fragment } from 'react';
import logo from '../img/logo.png'

const NavBar = () => {
    return (
        <Fragment>
            <div className="header-mobile">
                <a className="header-toggle" href><i className="fas fa-bars"></i></a>
            </div>
            <nav className="header-main" data-simplebar>
                <div className="logo">
                    <img src={logo} alt='logo'/>
                </div>
                <ul>
                    <li data-tooltip="home" data-position="top">
                        <a href={'#home'} className="icon-h fas fa-house-damage"></a>
                    </li>
                    <li data-tooltip="about" data-position="top">
                        <a href={'#about'} className="icon-a fas fa-user-tie"></a>
                    </li>
                    <li data-tooltip="resume" data-position="top">
                        <a href="#resume" className="icon-r fas fa-address-book"></a>
                    </li>
                    <li data-tooltip="portfolio" data-position="top">
                        <a href="#portfolio" className="icon-p fas fa-briefcase"></a>
                    </li>
                    <li data-tooltip="blog" data-position="top">
                        <a href="#blog" className="icon-b fas fa-receipt"></a>
                    </li>
                    <li data-tooltip="contact" data-position="bottom">
                        <a href="#contact" className="icon-c fas fa-envelope"></a>
                    </li>
                </ul>

                <a className="music-bg" href>
                    <div className="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p> Sound </p>
                </a>
            </nav>
        </Fragment>
    )
}

export default NavBar;