import React, { useState } from 'react';
import { func } from 'prop-types';

import Session from '../../api/session';

import Form from '../form/Form';
import Input from '../form/Input';
import Button from '../Button';

const SignInPage = props => {
    const { onSignIn } = props;

    const [errors, setErrors] = useState([]);

    const createSession = event => {
        event.preventDefault();
        const { currentTarget: form } = event;
        const fd = new FormData(form);
        setErrors([]);
        
        Session.create({
            email: fd.get("email"),
            password: fd.get("password")
        }).then(data => {
            if (data.status === 404) {
                setErrors([...errors, { message: "Wrong email or password"}]);
            } else {
                if (typeof onSignIn === "function") onSignIn();
                props.history.push("/");
            };
        });
    };

    return (
        <main>
            <Form onSubmit={createSession}>
                <Input type="email" name="email" placeholder="Email" />
                <Input type="password" name="password" placeholder="Password" />
                <Button primary type="submit">Sign In</Button>
            </Form>
        </main>
    );
};

SignInPage.propTypes = {
    onSignIn: func.isRequired,
};

export default SignInPage;
