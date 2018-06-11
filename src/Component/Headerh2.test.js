import React from 'react';
import Headerh2 from './Headerh2'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';


it('finds the className of Headerh2', () => {
    const wrapper = shallow(<Headerh2/>);
    expect(wrapper.find('h2').hasClass("HeaderClass")).toBe(true);
});