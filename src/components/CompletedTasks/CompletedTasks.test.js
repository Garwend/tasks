import renderer from 'react-test-renderer';
import CompletedTask from './CompletedTasks';

test('should render CompletedTask component', () => {
    const tasks = [{id:1, title:'test', priority: 3, seconds: 5}]
    const tree = renderer.create(<CompletedTask completedTasks={tasks} />).toJSON();
    expect(tree).toMatchSnapshot();
})