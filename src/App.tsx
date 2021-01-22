import React from 'react';
import { Link, Router } from '@reach/router';

export const Home = () => (<p>Hello World!</p>);

export const Version = () => (<p>0.0.1</p>);

export default function App() {
  // return <p>Hello World!</p>;
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="version">Version</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Version path="/version" />
      </Router>
    </div>
  );
}
