import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import StreamPage from './containers/StreamPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={StreamPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
