import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';

import User from '../../api/user';

import Form from '../form/Form';
import Input from '../form/Input';
import Button from '../Button';

const SignUpPage = props => {
    const { onSignUp, history } = props;

    const createUser = event => {
        event.preventDefault();
        const { currentTarget: form } = event;
        const fd = new FormData(form);
        const newUser = {
            user:{
                first_name: fd.get("first_name"),
                last_name: fd.get("last_name"),
                email: fd.get("email"),
                phone: fd.get("phone_number"),
                password: fd.get("password"),
                password_confirmation: fd.get("password_confirmation")
            }
        };
        
        User.create(newUser).then(res => {
            if (res.id) {
                if (typeof onSignUp === "function") onSignUp();
                history.push("/");
            };
        });
    };

    return (
        <Form onSubmit={createUser}>
            <Input type="text" name="first_name" placeholder="First Name" half />
            <Input type="text" name="last_name" placeholder="Last Name" half />
            <Input type="email" name="email" placeholder="Email" half />
            <Input type="tel" name="phone_number" placeholder="Phone Number" half />
            <Input type="password" name="password" placeholder="Password" half />
            <Input type="password" name="password_confirmation" placeholder="Password Confirmation" half />

            <Button primary type="submit">Sign Up</Button>

            Already have an account? <Link to='/sign-in' className={global.link}>SIGN IN</Link>.
        </Form>
    );
};

SignUpPage.propTypes = {
    onSignUp: func.isRequired,
};

export default SignUpPage;
