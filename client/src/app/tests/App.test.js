import React from 'react';
import { shallow } from 'enzyme';
import { App } from "../App";
import { Landing } from "../../landing";

function setup() {
    const props = {
        sayHi: jest.fn(),
        sayYeah: jest.fn(),
        doPing: jest.fn()
    };
    const enzymeWrapper = shallow(<App {...props} />);
    return {
      props,
      enzymeWrapper
    }
}

describe('<App />', () => {
   it('renders <Landing /> components', () => {
       const { enzymeWrapper } = setup();
       expect(enzymeWrapper).toMatchSnapshot();
   })
});

