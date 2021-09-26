import React, { useState } from "react";

const CreateTask = ({ setWaitingTasks, setCurrentTasks }) => {
    const [priority, setPriority] = useState(1);

    const handleChange = (e) => {
        setPriority(Number(e.target.value));
    }

    const handleClick = () => {
        const seconds = Math.floor(Math.random() * 6) + 5;
        const task = { id: Date.now(), title: seconds, seconds, priority };

        setCurrentTasks(prevState => {
            if (prevState.length >= 10) {
                setWaitingTasks(prevWaitingTasks => {
                    if (prevWaitingTasks.length === 0) return [task]
                    let i = 0
                    for (i; i < prevWaitingTasks.length; i++) {
                        if (prevWaitingTasks[i].priority <= priority) {
                            break;
                        }
                    }
                    const waitingTasks = prevWaitingTasks.slice(0)
                    waitingTasks.splice(i, 0, task)

                    return waitingTasks
                })
                return prevState
            } else {
                return [...prevState, task]
            }
        })
    }

    return (
        <section>
            <input type="number" name="priority" id="priority" min="1" data-testid="priority" onChange={handleChange} value={priority} />
            <button onClick={handleClick}>dodaj zadanie</button>
        </section>
    )
}

export default CreateTask;