import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bool, func, object } from 'prop-types';

import { Title } from '../Typography';
import Flex from '../Flex';
import Button from '../Button';
import { categories } from '../../global/Content';

const Menu = props => {
    const { open, currentUser, handleSignOut, handleClose } = props;

    return (
      <StyledMenu open={open}>
          <MenuHeader>
              <Link to="/"><Title>eGifts</Title></Link>

              <Flex justify="center">
                  {currentUser && (
                    <>
                      <Button as="a" href="/account">Account</Button>
                      <Button onClick={handleSignOut}>Sign Out</Button>
                    </>
                  )}
                  {!currentUser && (
                    <>
                        <Button as="a" href="/sign-in">Sign In</Button>
                        <Button as="a" href="/sign-up">Sign Up</Button>
                    </>
                  )}
              </Flex>
          </MenuHeader>

          <MenuBody>
            <Title as="h3">Categories</Title>
            <ul>
                {categories.map(category => (
                  <li key={category.name} onClick={() => handleClose()}>
                    <Link to={`/${category.link}`}>{category.name}</Link>
                  </li>
                ))}
            </ul>
          </MenuBody>
      </StyledMenu> 
    )
};

Menu.propTypes = {
    open: bool.isRequired,
    currentUser: object,
    handleSignOut: func.isRequired,
};

export default Menu;

const StyledMenu = styled.nav`
  background: ${({ theme }) => theme.background};
  height: 100vh;
  width: 100vw;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  background-color: ${({ theme }) => theme.secondary};
  position: fixed;
  
  @media screen and (min-width: ${({ theme }) => theme.medium}) {
    width: ${({ theme }) => theme.drawer};;
  }

  h1 {
    color: ${({ theme }) => theme.background};
    text-align: right;
  }

  h3, ul {
    margin: 1rem 1.5rem 0rem 1.5rem;
    padding: 0;
  }

  li {
    list-style: none;
    line-height: 2.5rem;
  }

  li > a {
    font-size: 1.5rem;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.25rem;
    color: ${({ theme }) => theme.primary};
    transition: color 0.3s linear;
    
    @media screen and (min-width: ${({ theme }) => theme.medium}) {
      font-size: 1.1rem;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;  

Menu.propTypes = {
  theme: object,
  open: bool.isRequired,
};

const MenuHeader = styled.div`
  background-color: ${({ theme }) => theme.accent};
`;

const MenuBody = styled.div`
  padding: 1rem;
`;
