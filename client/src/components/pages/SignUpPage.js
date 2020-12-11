import React from 'react';
import { func } from 'prop-types';

import Form from '../form/Form';
import Input from '../form/Input';

const SignUpPage = props => {
    const { onSignUp } = props;

    return (
        <main>
            <Form>
                <Input type="text" placeholder="First Name" half />
                <Input type="text" placeholder="Last Name" half />
                <Input type="email" placeholder="Email" half />
                <Input type="tel" placeholder="Phone Number" half />
                <Input type="password" placeholder="Password" half />
                <Input type="password" placeholder="Password Confirmation" half />
            </Form>
        </main>
    );
};

SignUpPage.propTypes = {
    onSignUp: func.isRequired,
};

export default SignUpPage;
