import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('<Card />', () => {
    //tests to make sure it runs
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Card title="test" content="test" />, div);

        ReactDOM.unmountComponentAtNode(div);
    });

    //test to make sure it renders the same thing as last time 
    it('renders this UI as expected', () => {
        const tree = renderer.create(<Card />).toJSON();

        expect(tree).toMatchSnapshot();

    });
});