import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Contact = () => {
    const [show, setShow] = useState(false);

    const validationSchema = Yup.object({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        message: Yup.string().required()
    })

    const initialValues = {
        name: '',
        email: '',
        message: ''
    }

    const sendMesage = async (email, message, name) => {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        await axios.post('https://formsubmit.co/ajax/diegohuarcaya@upeu.edu.pe', {
            name: name,
            message: message,
            email: email
        }).then(response => {
            if(response.status === 200){
                setShow(true)
            }
        })
            .catch(error => console.log(error))
    }


    return (
        <div className="page pt-contact" data-simplebar>
            <section className="container">

                <div className="header-page mt-70 mob-mt">
                    <h2>Contact</h2>
                    <span></span>
                </div>

                <Formik
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit={(values, { resetForm }) => {
                        const { email, message, name } = values;
                        sendMesage(email, message, name)
                        resetForm()
                    }}
                >
                    {(formik) => {
                        const { errors, touched } = formik;
                        return (
                            <div className="row mt-100">
                                <div className="col-lg-12 col-sm-12">
                                    <div className="contact-form ">
                                        <Form method="post" className="box-1 contact-valid" id="contact-form">
                                            <div className="row">
                                                <div className="col-lg-6 col-sm-12">
                                                    <Field type="text" name="name" id="name" className="form-control" placeholder="Name *" />
                                                </div>
                                                {touched.name && errors.name && <div>{errors.name}</div>}
                                                <div className="col-lg-6 col-sm-12">
                                                    <Field type="email" name="email" id="email" className="form-control" placeholder="Email *" />

                                                </div>
                                                {touched.email && errors.email && <div>{errors.email}</div>}
                                                <div className="col-lg-12 col-sm-12">
                                                    <Field className="form-control" name="message" id="note" placeholder="Your Message"></Field>
                                                    {touched.message && errors.message && <div >{errors.message}</div>}
                                                </div>

                                                <div className="col-lg-12 col-sm-12 text-center mt-5">
                                                    <button type="submit" className="btn-st">Send Message</button>
                                                    <div id="loader">
                                                        <i className="fas fa-sync"></i>
                                                    </div>
                                                </div>

                                            </div>
                                        </Form>
                                    </div>
                                    {
                                        show ? <div className="alert alert-success mt-5" role="alert">
                                            Thank you! your message was sent.
                                        </div> : <div></div>
                                    }
                                </div>

                            </div>

                        )
                    }}

                </Formik>


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