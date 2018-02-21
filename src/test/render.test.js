import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from '../ui/Header';
import React from 'react';
import Search from '../Search';
import Footer from '../ui/Footer';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<Header />);

it('SHould find ', () => {
    expect(wrapper.find('header').hasClass('header')).toBe(true);
    expect(wrapper.find('.hero-form').hasClass('col-off-2')).toBe(true);
    expect(wrapper.contains(<Search />)).toEqual(true);
});
