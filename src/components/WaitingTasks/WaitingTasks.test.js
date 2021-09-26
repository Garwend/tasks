import renderer from 'react-test-renderer';
import WaitingTasks from './WaitingTasks';

test('should render WaitingTasks component', () => {
    const tasks = [{id:1, priority: 3, seconds: 5}]
    const tree = renderer.create(<WaitingTasks waitingTasks={tasks} />).toJSON();
    expect(tree).toMatchSnapshot();
})