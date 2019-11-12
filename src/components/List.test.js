import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import store from './store';

let testStore = [
    { id: 'a', title: 'First card', content: 'lorem ipsum' },
    { id: 'b', title: 'Second card', content: 'lorem ipsum' },
    { id: 'c', title: 'Third card', content: 'lorem ipsum' },
    { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
    { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
]
describe('<List />', () => {

    //tests to make sure it runs 
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<List header="test" cards={testStore} />, div);

        ReactDOM.unmountComponentAtNode(div);
    });

    //test to make sure it renders the same thing as last time 
    it('renders this UI as expected', () => {
        const tree = renderer.create(<List header={store.header} cards={testStore} />).toJSON();

        expect(tree).toMatchSnapshot();

    });

});