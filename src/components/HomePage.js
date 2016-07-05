import React from 'react';
// import {Link} from 'react-router';
import LiveStream from '../containers/LiveStream';

const HomePage = () => {
  return (
    <div>
      <h1>YOUTUBE STREAM</h1>
      <LiveStream YTStream={{obj:true}} />
      <h2>Get Started</h2>
      <ol>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
    </div>
  );
};

export default HomePage;
