import React from 'react';

const Contact = () => {
    return (
        <div className="page pt-contact" data-simplebar>
            <section className="container">

                <div className="header-page mt-70 mob-mt">
                    <h2>Contact</h2>
                    <span></span>
                </div>

                <div className="row mt-100">
                    <div className="col-lg-12 col-sm-12">
                        <div className="contact-form ">
                            <form method="post" className="box-1 contact-valid" id="contact-form">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <input type="text" name="name" id="name" className="form-control" placeholder="Name *" />
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <input type="email" name="email" id="email" className="form-control" placeholder="Email *" />
                                    </div>
                                    <div className="col-lg-12 col-sm-12">
                                        <textarea className="form-control" name="note" id="note" placeholder="Your Message"></textarea>
                                    </div>
                                    <div className="col-lg-12 col-sm-12 text-center">
                                        <button type="submit" className="btn-st">Send Message</button>
                                        <div id="loader">
                                            <i className="fas fa-sync"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-12">
                                        <div className="error-messages">
                                            <div id="success">
                                                <i className="far fa-check-circle"></i>Thank you, your message has been sent.
                                            </div>
                                            <div id="error">
                                                <i className="far fa-times-circle"></i>Error occurred while sending email. Please try again later.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                <div className="box-2 contact-info">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 info">
                            <i className="fas fa-paper-plane"></i>
                            <p>diegohuarcaya@upeu.edu.pe</p>
                            <span>Email</span>
                        </div>
                        <div className="col-lg-4 col-sm-12 info">
                            <i className="fas fa-map-marker-alt"></i>
                            <p>Ayacucho, Peru</p>
                            <span>Address</span>
                        </div>
                        <div className="col-lg-4 col-sm-12 info">
                            <i className="fas fa-phone"></i>
                            <p>(+51) 969817045</p>
                            <span>Phone</span>
                        </div>
                    </div>
                </div>


                <div className="google-map box-1 mt-100 mb-100">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="map" data-latitude="40.712775" data-longitude="-74.005973" data-zoom="14"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;