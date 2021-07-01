import React from 'react';
import imaged from '../../img/software.jpeg'

const Portafolio = () => {
    return (
        <div class="page pt-portfolio" data-simplebar>
            <section class="container">

                <div class="header-page mt-70 mob-mt">
                    <h2>Portfolio</h2>
                    <span></span>
                </div>

                <div class="row portfolio-items mt-100 mb-100">

                    <div class="item col-lg-4 col-sm-6 graphic">
                        <figure>
                            <img alt="" src={imaged} />
                            <figcaption>
                                <h3>Landing Page Nedian SAC</h3>
                                <p>Graphic</p><i class="fas fa-image"></i>
                                <a class="image-link" href="https://nediansac.com.pe/"> </a>
                            </figcaption>
                        </figure>
                    </div>

                    <div class="item col-lg-4 col-sm-6 design">
                        <figure>
                            <img alt="" src={imaged} />
                            <figcaption>
                                <h3>Libre landing page</h3>
                                <p>Graphic</p><i class="fas fa-video"></i>
                                <a class="video-link" href="https://www.libre.com.pe/"> </a>
                            </figcaption>
                        </figure>
                    </div>


                    <div class="item col-lg-4 col-sm-6 design">
                        <figure>
                            <img alt="" src={imaged} />
                            <figcaption>
                                <h3>Cefra APP</h3>
                                <p>Mobile App</p><i class="fas fa-image"></i>
                                <a class="image-link" href="https://play.google.com/store/apps/details?id=pe.com.cefra.cefra"> </a>
                            </figcaption>
                        </figure>
                    </div>


                    <div class="item col-lg-4 col-sm-6 brand">
                        <figure>
                            <img alt="" src={imaged} />
                            <figcaption>
                                <h3>San Gabán Mobile</h3>
                                <p>Mobile App</p><i class="fas fa-video"></i>
                                <a class="video-link" href="https://play.google.com/store/apps/details?id=com.sangaban.sangabanmovil"> </a>
                            </figcaption>
                        </figure>
                    </div>


                    <div class="item col-lg-4 col-sm-6 graphic">
                        <figure>
                            <img alt="" src={imaged} />
                            <figcaption>
                                <h3>Adomi Aliados</h3>
                                <p>Mobile App</p><i class="fas fa-image"></i>
                                <a class="image-link" href="https://play.google.com/store/apps/details?id=com.adomi.empresas"> </a>
                            </figcaption>
                        </figure>
                    </div>


                    <div class="item col-lg-4 col-sm-6 design">
                        <figure>
                            <img alt="" src={imaged} />
                            <figcaption>
                                <h3>Adomi Pedidos</h3>
                                <p>Mobile App</p><i class="fas fa-video"></i>
                                <a class="video-link" href="https://play.google.com/store/apps/details?id=com.adomi.pedidos"> </a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portafolio;