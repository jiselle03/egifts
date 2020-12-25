import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import User from '../api/user';
import Session from '../api/session';

import AuthRoute from './AuthRoute';
import Container from './Container';
import LoadingCircle from './LoadingCircle';
import Header from './navbar/Header';
import { Title } from './Typography';
import Shortcuts from './Shortcuts';

import WelcomePage from './pages/WelcomePage';
import SignInPage from './pages/account/SignInPage';
import SignUpPage from './pages/account/SignUpPage';
import AccountShowPage from './pages/account/AccountShowPage';
import EntertainmentPage from './pages/categories/EntertainmentPage';
import FoodDrinksPage from './pages/categories/FoodDrinksPage';
import HealthBeautyPage from './pages/categories/HealthBeautyPage';
import StoreShowPage from './pages/StoreShowPage';
import ItemShowPage from './pages/ItemShowPage';
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
        
        <Title align="right">eGifts</Title>

        <Header 
          open={open}
          setOpen={setOpen}
          currentUser={currentUser} 
          onSignOut={destroySession} 
        />

        <Container open={open}>
          <Switch>
            <Route exact path='/' component={WelcomePage} />
            <Route 
              path='/sign-in'
              render={routeProps => <SignInPage {...routeProps} onSignIn={getUser} />}  
            />
            <Route 
              path='/sign-up'
              render={routeProps => <SignUpPage {...routeProps} onSignUp={getUser} />}  
            />
            <AuthRoute 
              exact path='/account'
              isAuthenticated={!!currentUser}
              render={routeProps => <AccountShowPage {...routeProps} currentUser={currentUser} />}
            />
            <Route path='/entertainment' component={EntertainmentPage} />
            <Route path='/food-and-drinks' component={FoodDrinksPage} />
            <Route path='/health-and-beauty' component={HealthBeautyPage} />
            <Route exact path='/stores/:id' component={StoreShowPage} />
            <Route exact path='/stores/:store_id/items/:id' component={ItemShowPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Container>

        <Shortcuts />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
