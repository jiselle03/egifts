import React from 'react';

import Form from '../form/Form';
import Input from '../form/Input';

const SignUpPage = () => {
    return (
        <main>
            <Form>
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone Number" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Password Confirmation" />
            </Form>
        </main>
    );
};

export default SignUpPage;
