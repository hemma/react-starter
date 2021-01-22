import React from 'react';
import { shallow } from 'enzyme';
import App, { Home, Version } from './App';

it('renders', () => {
  const app = shallow(<App />);
  expect(app).toBeDefined();
});

describe('home', () => {
  it('displays Hello World', () => {
    const home = shallow(<Home />);
    expect(home.find('p').text()).toEqual('Hello World!');
  });
});

describe('version', () => {
  it('displays version', async () => {
    const version = shallow(<Version />);
    expect(version.find('p').text()).toEqual('0.0.1');
  });
});
