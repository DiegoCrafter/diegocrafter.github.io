import React, { Fragment, useState } from 'react';
import { IntlProvider, FormattedMessage } from "react-intl";
import NavBar from '../../components/navigator';
import sample from '../../video/baha.mp4';
import en from '../../lang/locales/en_US.json'
import es from '../../lang/locales/es_ES.json'

const Home = () => {

    const [locale, setLocale] = useState("en");
    const messages = { en, es };

    return (
        <Fragment>
            <IntlProvider locale={locale} messages={messages[locale]}>
                <NavBar />
                <div className="pt-home">
                    <div className="addition-bg">
                        <div className="html-video-container">
                            <video className='videoTag' autoPlay loop muted>
                                <source src={sample} type='video/mp4' />
                            </video>
                        </div>
                    </div>
                    <section>
                        <div className="banner">
                            <h1>Diego Huarcaya</h1>
                            <p className="cd-headline rotate-1">
                                <span><FormattedMessage id="who"/></span>
                                <span className="cd-words-wrapper">
                                    <b className="is-visible"><FormattedMessage id="welcome"/></b>
                                </span>
                            </p>
                        </div>
                        <div className="lang">
                            <ul>
                                <li><a onClick={() => setLocale('en')} href className={
                                    locale === 'en' ? 'active' : ''
                                }>eng</a></li>
                                <li><a onClick={() => setLocale('es')} href className={
                                    locale === 'es' ? 'active' : ''
                                }>es</a></li>
                            </ul>
                        </div>
                        <div className="social">
                            <ul>
                                <li><a href="https://web.facebook.com/diego.huarcayataquiri/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://www.instagram.com/diegocrafter21/" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
                                <li><a href="https://www.instagram.com/diegocrafter21/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/diego-huarcaya/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </IntlProvider>
        </Fragment>
    )
}

export default Home;