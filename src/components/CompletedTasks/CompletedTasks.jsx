import Task from "../Task/Task";

const CompletedTasks = ({ completedTasks, setCompletedTasks }) => {
    return (
        <article className='tasks-wrap'>
            <header>Skończone zadania</header>
            <ul>
                {completedTasks.map(task => <Task key={task.id} {...task} setCompletedTasks={setCompletedTasks} />)}
            </ul>
        </article>
    )
}

export default CompletedTasks;