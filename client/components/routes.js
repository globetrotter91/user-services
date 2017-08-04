import React from 'react'; 
import { Switch, Route , IndexRoute } from 'react-router' ;
import AuthenticateComponent from './../utils/authenticate.component'; 
import HomeComponent from './home/home.component';
import SignupComponent from './account/signup.component';
import LoginComponent from './account/login.component';
import ForgotPasswordComponent from './account/forgot.password.component' ;
import ProfileComponent from './account/profile.component' ;
const AppRoutes = () => (
  <Switch>
      <Route exact path='/' component={AuthenticateComponent(HomeComponent)} />
      <Route path='/home' component={AuthenticateComponent(HomeComponent)} />
      <Route path='/signup' component={SignupComponent} />
      <Route path='/login' component={LoginComponent} />
      <Route path='/forgot-password' component={ForgotPasswordComponent} />
      <Route path='/profile' component={AuthenticateComponent(ProfileComponent)} />
  </Switch>
)

export default (
    <Route path='/' component={AppRoutes}> </Route>
)