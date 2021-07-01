import React from 'react';
import user from '../../img/foto.jpg'

const About = () => {
    return (
        <div>
            <div className="page pt-about" data-simplebar>
                <section className="container">
                    <div className="header-page mt-70 mob-mt">
                        <h2>About Me</h2>
                        <span></span>
                    </div>
                    <div className="row mt-100">
                        <div className="col-lg-12 col-sm-12">
                            <div className="info box-1">
                                <div className="row">
                                    <div className="col-lg-3 col-sm-4">
                                        <div className="photo">
                                            <img alt="" src={user} />
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-sm-8">
                                        <h4>Diego Huarcaya</h4>
                                        <div className="loc">
                                            <i className="fas fa-map-marked-alt"></i> Ayacucho, Peru
                                        </div>
                                        <p>Hello! I’m Diego Huarcaya a self-taught Software engineer Junior with nearly 2 years in developing software, playing the roles of developer, software architect, and junior
                                        data scientist. With predominant technical knowledge in Dart (Flutter), Python, and JS languages. Experienced throughout the
                                        entire project life cycle, from design to implementation and until integration. Passionate in the area of Emerging Technologies,
                                        Data Science and Artificial Intelligence.
                                        </p>
                                        <p>Responsible, motivated, self-taught person and willing to join efforts to achieve
                                        companies’ goals. Photography, astronomy and mountain biking lover.
                                        </p>
                                    </div>


                                    <div className="col-lg-3 col-sm-4">
                                        <div className="info-icon">
                                            <i className="fas fa-award"></i>
                                            <div className="desc-icon">
                                                <h6>2 Years Job</h6>
                                                <p>Experience</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-3 col-sm-4">
                                        <div className="info-icon">
                                            <i className="fas fa-certificate"></i>
                                            <div className="desc-icon">
                                                <h6>10+ Projects</h6>
                                                <p>Completed</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-3 col-sm-4">
                                        <div className="info-icon">
                                            <i className="fas fa-user-astronaut"></i>
                                            <div className="desc-icon">
                                                <h6>Freelance</h6>
                                                <p>Available</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-12 pt-50">
                                        <a href="https://drive.google.com/file/d/1UNfIqBI2GicZfsaXXhXzhYV9E42_ebva/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-st">Download CV</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row mt-100">


                        <div className="col-md-12">
                            <div className="header-box mb-50">
                                <h3>My Interests</h3>
                            </div>
                        </div>

                        <div className="col-lg-12 col-sm-12">
                            <div className="box-2">
                                <div className="row">

                                    <div className="col-lg-3 col-sm-6">
                                        <div className="inter-icon">
                                            <i className="fas fa-music"></i>
                                            <div className="desc-inter">
                                                <h6>Music</h6>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-3 col-sm-6">
                                        <div className="inter-icon">
                                            <i className="fas fa-route"></i>
                                            <div className="desc-inter">
                                                <h6>Travelling</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-sm-6">
                                        <div className="inter-icon">
                                            <i className="far fa-image"></i>
                                            <div className="desc-inter">
                                                <h6>Photos / Astrophotography</h6>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-3 col-sm-6">
                                        <div className="inter-icon">
                                            <i className="fas fa-film"></i>
                                            <div className="desc-inter">
                                                <h6>Movies</h6>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-3 col-sm-6">
                                        <div className="inter-icon">
                                            <i className="fas fa-space-shuttle"></i>
                                            <div className="desc-inter">
                                                <h6>Space</h6>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-3 col-sm-6">
                                        <div className="inter-icon">
                                            <i className="fas fa-book"></i>
                                            <div className="desc-inter">
                                                <h6>Books</h6>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-3 col-sm-6">
                                        <div className="inter-icon">
                                            <i className="fas fa-gamepad"></i>
                                            <div className="desc-inter">
                                                <h6>Video games</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-sm-6">
                                        <div className="inter-icon">
                                            <i className="fas fa-tree"></i>
                                            <div className="desc-inter">
                                                <h6>Mountain Bike</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About;