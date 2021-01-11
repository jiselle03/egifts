import React from 'react';

import User from '../../../api/user';

import { Title } from '../../Typography';
import { Form, Input, Label } from '../../Form';
import Button from '../../Button';

const AccountSecurityEditPage = props => {
    const { onUpdateUser, history } = props;
    const { id } = props.currentUser;

    const updateUser = event => {
        event.preventDefault();
        const { currentTarget: form } = event;
        const fd = new FormData(form);

        const updatedUser = {
            user: {
                current_password: fd.get("current_password"),
                new_password: fd.get("new_password"),
                new_password_confirmation: fd.get("new_password_confirmation")
            }
        };
    
        User.update(id, updatedUser)
          .then(() => {
            if (typeof onUpdateUser === "function") onUpdateUser();
            history.push("/account");
          });
    };

    return (
        <>
            <Title as="h3">Update Password</Title>

            <Form onSubmit={updateUser}>
                <Label htmlFor="current_password">Current Password</Label>
                <Input type="password" name="current_password" />

                <Label htmlFor="new_password">New Password</Label>
                <Input type="new_password" name="new_password" />

                <Label htmlFor="new_password_confirmation">New Password Confirmation</Label>
                <Input type="new_password_confirmation" name="new_password_confirmation" />

                <Button primary type="submit">Update</Button>
            </Form>
        </>
    );
};

export default AccountSecurityEditPage;
