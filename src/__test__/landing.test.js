import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { configure as configureEnzyme, mount } from 'enzyme';
import Landing from '../component/landing/landing';

configureEnzyme( { adapter: new Adapter() });

describe('#Landing', () => {
  const testState = {
    sections: [
      {
        title: 'Kona',
        id: 1234,
        createdOn: new Date(),
      },
      {
        title: 'Auggie',
        id: 12345,
        createdOn: new Date(),
      },
    ],
    cards: {
      1234: [],
      12345: [],
    },
  };
  test('Testing Landing', () => {
    const middleware = [];
    const mockStoreFactory = configureStore(middleware);
    
    const mountedLanding = mount(<Provider store={mockStoreFactory()}><Landing/></Provider>);
    console.log(mountedLanding.html());
  });
});