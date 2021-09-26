import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CreateTask from "./CreateTask";

afterEach(cleanup);

test('priority value', () => {
    render(<CreateTask />);
    const numberInput = screen.getByTestId('priority');
    fireEvent.change(numberInput, {target: {value: '23'}})
    expect(numberInput.value).toBe('23')
})

test('should render CreateTask component', () => {
    const tree = renderer.create(<CreateTask />).toJSON();
    expect(tree).toMatchSnapshot();
})