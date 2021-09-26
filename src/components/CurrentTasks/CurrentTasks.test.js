import renderer from 'react-test-renderer';
import CurrentTasks from './CurrentTasks';

test('should render CurrentTasks component', () => {
    const tasks = [{id:1, title:'test', priority: 3, seconds: 5}]
    const tree = renderer.create(<CurrentTasks currentTasks={tasks} />).toJSON();
    expect(tree).toMatchSnapshot();
})