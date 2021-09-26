import Task from "../Task/Task";

const CurrentTasks = ({ currentTasks, setCompletedTasks, setCurrentTasks, setWaitingTasks }) => {
    return (
        <article>
            <header>Obecnie wykonywane zadania</header>
            <ul>
                {currentTasks.map(task => <Task key={task.id} {...task} setCompletedTasks={setCompletedTasks} setCurrentTasks={setCurrentTasks} setWaitingTasks={setWaitingTasks} />)}
            </ul>
        </article>
    )
}

export default CurrentTasks;