import React from 'react';

import Form from '../form/Form';
import Input from '../form/Input';

const SignUpPage = () => {
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

export default SignUpPage;
