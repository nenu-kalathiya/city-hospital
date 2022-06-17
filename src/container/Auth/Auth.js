import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik, Form, Formik } from 'formik';

function Auth(props) {
    const [user, setUser] = useState('login');
    const [reset, setReset] = useState(false)

    let schema = yup.object().shape({
        email: yup.string().email("Enter Your Email ID").required("Enter Valid Email ID!"),
        password: yup.string().required("Enter Your Password"),
    });

    const formikobj = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema : schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleChange, errors, handleSubmit } = formikobj

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">

                    {
                        reset ?
                            <h2>Forgot Password</h2>
                            :
                            user === 'login' ?
                                <h2>Login</h2>
                                :
                                <h2>Sign Up</h2>
                    }

                </div>

                <Formik values={formikobj}>
                    <Form onSubmit={handleSubmit()} className="php-email-form">
                        <div className="row">
                            {
                                reset ?
                                    null
                                    :
                                    user === 'login' ?
                                        null
                                        :
                                        <div className="col-md-4 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate" />
                                        </div>
                            }
                        </div>
                        <div className='row'>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={handleChange}/>
                                <p>{errors.email}</p>
                                <div className="validate" />
                            </div>
                        </div>

                        <div>
                            {
                                reset ?
                                    null
                                    :
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Your password" data-rule="password" data-msg="Please enter a valid password" onChange={handleChange} />
                                        <p>{errors.password}</p>
                                        <div className="validate" />
                                    </div>
                            }

                        </div>

                        <div className='text-start'>
                            {
                                reset ?
                                    <>
                                        <p className='d-inline-block me-2 mt-3'>Already Have An Account ?</p>
                                        <button type='submit'>Login</button>
                                    </>
                                    :
                                    user === 'login' ?
                                        <>
                                            <p className='d-inline-block me-2 mt-3'>Create New Account</p><button onClick={() => setUser('Signup')}>Sign Up</button>
                                            <a className='d-block' onClick={() => setReset(true)}>Forgot Password ?</a>
                                        </>
                                        :
                                        <>
                                            <p className='d-inline-block me-2 mt-3'>Already Have An Account ?</p><button onClick={() => { setReset(false); setUser('login') }}>Login</button>
                                        </>

                            }
                        </div>


                        <div className="text-center">
                            {
                                reset ?
                                    <button type="submit">submit</button>
                                    :
                                    user === 'login' ?
                                        <button type="submit">Login</button>
                                        :
                                        <button type='submit'>Sign Up</button>

                            }
                        </div>
                    </Form>
                </Formik>

            </div>
        </section>

    );
}

export default Auth;