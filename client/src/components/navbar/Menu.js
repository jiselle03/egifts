import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { bool, func, object } from 'prop-types';

import Button from '../Button';

const Menu = props => {
    const { open, currentUser, handleSignOut } = props;

    return (
        <StyledMenu open={open}>
            <div>
                <h1>eGifts</h1>
                <div>
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
                </div>
            </div>

            <h2>Categories</h2>
            <ul>
                <li><Link to="/entertainment">Entertainment</Link></li>
                <li><Link to="/food-and-drinks">Food & Drinks</Link></li>
                <li><Link to="/health-and-beauty">Health & Beauty</Link></li>
            </ul>
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
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  height: 100vh;
  width: ${({ theme }) => theme.drawer};
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  background-color: ${({ theme }) => theme.secondary};
  
  @media (max-width: ${({ theme }) => theme.medium}) {
    width: 100%;
  }

  div {
    background: ${({ theme }) => theme.accent};
  }

  div div {
    display: flex;
    justify-content: center;
  }

  h1 {
    color: ${({ theme }) => theme.background};
    text-align: right;
    margin: 1rem;
  }

  h2, ul {
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
    
    @media (max-width: ${({ theme }) => theme.medium}) {
      font-size: 1.5rem;
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
