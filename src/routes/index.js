import React from 'react';
import { Route, IndexRoute } from 'react-router';

import NewsMain from '../components/news_main';
import NewsDetails from '../components/news_details';
import App from '../components/app';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={NewsMain} />  
        <Route path="/article" component={NewsDetails} />
    </Route>
);