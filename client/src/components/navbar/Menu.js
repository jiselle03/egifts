import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { bool } from 'prop-types';

import Button from '../Button';

const Menu = props => {
    const { open } = props;

    return (
        <StyledMenu open={open}>
            <div>
                <h1>eGifts</h1>
                <div>
                    <Link to="/sign-in"><Button>Sign In</Button></Link>
                    <Link to="/sign-up"><Button>Sign Up</Button></Link>
                </div>
            </div>

            <h2>Categories</h2>
            <ul>
                <li><a href="/">Entertainment</a></li>
                <li><a href="/">Food & Drinks</a></li>
            </ul>
        </StyledMenu>
        
    )
};

Menu.propTypes = {
    open: bool.isRequired,
};

export default Menu;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  height: 100vh;
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

  h1, h2, ul {
    padding: 0 2rem;
  }

  h1 {
    color: ${({ theme }) => theme.background};
    text-align: right;
    margin: 1rem;
  }

  h2 {
    text-transform: uppercase;
  }

  li {
    list-style: none;
    padding: 1rem 0;
  }

  a {
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