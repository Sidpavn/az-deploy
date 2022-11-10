import {Navigate, useRoutes } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// layouts

import DashboardApp from './pages/DashboardApp';

import Questions from './pages/play-quiz';

// ----------------------------------------------------------------------
export default function Routee() {
    return (
      <>
        <Container>
          <Router>
            <Route path='/' component={DashboardApp} exact></Route>
            <Route path='/q/:cat/:dif/:no' component={Questions} exact></Route>
          </Router>
        </Container>
      </>
    );
  }
