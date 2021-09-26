import { useEffect } from "react";

import './Task.less'

const Task = ({ id, seconds, priority, setCompletedTasks = null, setCurrentTasks = null, setWaitingTasks = null }) => {
    useEffect(() => {
        if (setCurrentTasks !== null) {
            const timer = setTimeout(() => {
                console.log(`Zadanie wykonane po ${seconds} sekundach`);
                setCompletedTasks(prevState => [...prevState, { id, seconds, priority }]);
                setCurrentTasks(prevState => prevState.filter(task => task.id !== id));
                let waitingTask = null;
                setWaitingTasks(prevState => {
                    if (prevState.length > 0) {
                        waitingTask = prevState[0];
                        return prevState.slice(1)
                    } else {
                        return prevState
                    }
                })
                if (waitingTask !== null) setCurrentTasks(prevState => [...prevState, waitingTask])
            }, seconds * 1000)

            return () => clearTimeout(timer)
        }

    }, [id, seconds, setCompletedTasks, setCurrentTasks, setWaitingTasks, priority])

    const handleClick = () => {
        if (setCurrentTasks !== null) {
            setCurrentTasks(prevState => prevState.filter(task => task.id !== id));
        } else if (setCompletedTasks !== null) {
            setCompletedTasks(prevState => prevState.filter(task => task.id !== id));
        } else if (setWaitingTasks !== null) {
            setWaitingTasks(prevState => prevState.filter(task => task.id !== id));
        }
    }

    return (
        <li className='task'>
            <p><span>czas: </span> {seconds} sekund </p>
            <p><span>priorytet: </span> {priority}</p>
            <button className='delete-btn' onClick={handleClick}>usuń</button>
        </li>
    )
}

export default Task;