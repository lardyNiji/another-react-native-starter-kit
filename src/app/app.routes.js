/**
 * App Navigation
 */
import AppConfig from '../app/app.config';
import DashboardContainer from '../containers/DashboardContainer';
import IntroContainer from '../containers/IntroContainer';
import LoginContainer from '../containers/LoginContainer';
import React from 'react';
import ValidationPage from '../pages/validation/ValidationPage';
import store from '../redux/store';
import { Actions, Scene } from 'react-native-router-flux';
import { translate } from '../i18n/i18n';

/* Routes */
const AppRoutes = Actions.create(
  <Scene key="root" {...AppConfig.navbarProps}>

    <Scene key="intro" component={IntroContainer} hideNavBar initial />
    <Scene key="login" component={LoginContainer} hideNavBar />

    <Scene key="dashboard" {...AppConfig.navbarProps} component={DashboardContainer} title={() => `${translate('page.dashboard')} ${(store.getState().user.personne && (`${store.getState().user.personne.prenom} ${store.getState().user.personne.nom}`)) || ''}`} />

    <Scene key="validation" component={ValidationPage} title={translate('page.validation')} />
  </Scene>
);

export default AppRoutes;
