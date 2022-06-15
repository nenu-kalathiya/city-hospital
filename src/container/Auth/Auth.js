import React, { useState } from 'react';

function Auth(props) {
    const [user, setUser] = useState('login');
    const [reset, setReset] = useState('true')
    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">

                    {
                        reset === 'true' ?
                            <h2>Forgot Password</h2>
                            :
                            user === 'login' ?
                                <h2>Login</h2>
                                :
                                <h2>Sign Up</h2>
                    }

                </div>
                <div className="php-email-form">
                    <div className="row">
                        {
                            reset === 'true' ?
                            <>
                                <a href="#" >Forgot Password</a>
                            </>
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
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                    </div>
                    <div>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input type="password" className="form-control" name="password" id="password" placeholder="Your password" data-rule="password" data-msg="Please enter a valid password" />
                            <div className="validate" />
                        </div>

                    </div>

                    <div className='text-start'>
                        {
                            user === 'login' ?
                                <>
                                    <p className='d-inline-block me-2 mt-3'>Create New Account</p><button onClick={() => setUser('Signup')}>Sign Up</button>
                                </>
                                :
                                <>
                                    <p className='d-inline-block me-2 mt-3'>Already Have An Account ?</p><button onClick={() => setUser('login')}>Login</button>
                                </>

                        }
                    </div>


                    <div className="text-center">
                        {
                            user === 'login' ?
                                <button type="submit">Login</button>
                                :
                                <button type='submit'>Sign Up</button>

                        }
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Auth;