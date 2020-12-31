import React from 'react';

import User from '../../../api/user';

import { Title } from '../../Typography';
import { Form, Input, Label } from '../../Form';
import Button from '../../Button';

const AccountEditPage = props => {
    const { onUpdateUser, history } = props;
    const { id, first_name, last_name, email, phone_number } = props.currentUser;

    const updateUser = event => {
        event.preventDefault();
        const { currentTarget: form } = event;
        const fd = new FormData(form);

        const updatedUser = {
            user: {
                first_name: fd.get("first_name"),
                last_name: fd.get("last_name"),
                email: fd.get("email"),
                phone_number: fd.get("phone_number")
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
            <Title as="h3">Update Profile</Title>

            <Form onSubmit={updateUser}>
                <Label htmlFor="first_name">First Name</Label>
                <Input type="text" name="first_name" defaultValue={first_name} />

                <Label htmlFor="last_name">Last Name</Label>
                <Input type="text" name="last_name" defaultValue={last_name} />

                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" defaultValue={email} />

                <Label htmlFor="phone_number">Phone Number</Label>
                <Input type="tel" name="phone_number" defaultValue={phone_number} />

                <Button primary type="submit">Update</Button>
            </Form>
        </>
    );
};

export default AccountEditPage;
