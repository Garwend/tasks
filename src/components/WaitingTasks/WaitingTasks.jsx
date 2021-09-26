import Task from "../Task/Task";

const WaitingTasks = ({ waitingTasks, setWaitingTasks }) => {
    return (
        <article>
            <header>Zadania w kolejce</header>
            <ul>
                {waitingTasks.map(task => <Task key={task.id} {...task} setWaitingTasks={setWaitingTasks} />)}
            </ul>
        </article>
    )
}

export default WaitingTasks;