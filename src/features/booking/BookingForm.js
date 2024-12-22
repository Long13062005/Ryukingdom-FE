import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import {useParams} from "react-router-dom";

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required')
});

export function BookingForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [facility, setFacility] = useState({});
    const {id} = useParams();


    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            toast.success('Booking successful!');
        } catch (error) {
            console.error(error);
            setError('Booking failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h2>Book a Room</h2>
            <Formik
                initialValues={{ name: '', email: '', date: '', time: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="row">
                            <div className="col-6">
                                <div className="card" style={{width: "18rem"}}>
                                    <img src="..." className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label htmlFor="name">Name</label>
                                    <Field type="text" name="name" className="form-control" />
                                    <ErrorMessage name="name" component="div" className="text-danger" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email">Email</label>
                                    <Field type="email" name="email" className="form-control" />
                                    <ErrorMessage name="email" component="div" className="text-danger" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="date">Date</label>
                                    <Field type="date" name="date" className="form-control" />
                                    <ErrorMessage name="date" component="div" className="text-danger" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="time">Time</label>
                                    <Field type="time" name="time" className="form-control" />
                                    <ErrorMessage name="time" component="div" className="text-danger" />
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting || loading}>
                                    {loading ? 'Booking...' : 'Book Now'}
                                </button>
                                {error && <div className="text-danger mt-3">{error}</div>}
                            </div>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    );
}