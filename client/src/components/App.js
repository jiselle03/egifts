import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import User from '../api/user';
import Session from '../api/session';

import AuthRoute from './AuthRoute';
import Container from './Container';
import LoadingCircle from './LoadingCircle';
import NavBar from './navbar/NavBar';

import WelcomePage from './pages/WelcomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';

import { ThemeProvider } from 'styled-components';
import theme from '../global/theme';
import GlobalStyles from '../global/global';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const getUser = useCallback(() => {
    User.current().then(user => {
      typeof user.id !== "number" ? setCurrentUser(null) : setCurrentUser(user);
      setIsLoading(false);
    });
  }, []);

  const destroySession = () => Session.destroy().then(setCurrentUser(null));

  useEffect(() => getUser(), [getUser]);

  if (isLoading) return (<LoadingCircle />);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles open={open} />

        <NavBar 
          open={open}
          setOpen={setOpen}
          currentUser={currentUser} 
          onSignOut={destroySession} 
        />

        <Container open={open}>
          <Switch>
            <Route exact path='/' component={WelcomePage}/>
            <Route 
              path='/sign-in'
              render={routeProps => <SignInPage {...routeProps} onSignIn={getUser} />}  
            />
            <Route 
              path='/sign-up'
              render={routeProps => <SignUpPage {...routeProps} onSignUp={getUser} />}  
            />
            <Route component={NotFoundPage} />
          </Switch>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
