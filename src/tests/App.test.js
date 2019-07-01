import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import {App, Routes} from '../App'
import ReactLoading from 'react-loading';
import SummaryPage from "../pages/SummaryPage";

configure({adapter: new Adapter()});

describe('<App/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App/>);
    });
    it('should render a loading spinner if loading state set true', () => {
        wrapper.setProps({view: 'loading'});
        expect((wrapper).find(ReactLoading)).toHaveLength(1)
    });

    it('should render a Summary page if summaryPage Mode is enabled', () => {
        wrapper.setProps({summaryPageMode: true});
        expect((wrapper).find(SummaryPage)).toHaveLength(1);
    });

    it('should render Routes as default', () => {
        expect((wrapper).find(Routes)).toHaveLength(1);
    })
});