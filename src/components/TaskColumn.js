import React from 'react';
import TaskItem from './TaskItem';
import { useDrop } from 'react-dnd';

const TaskColumn = ({
    status,
    tasks,
    setTasks,
    todos,
    inProgress,
    closed }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToColumn(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    // console.log(tasks);

    let tasksByStatus = todos;
    if (status == "inprogress") { tasksByStatus = inProgress };
    if (status == "closed") { tasksByStatus = closed };

    const addItemToColumn = (id) => {
        // console.log("dropped ", id, status)


        setTasks((prev) => {
            const mTasks = prev.map(t => {
                if (t.id == id) {
                    return { ...t, status: status }

                }

                return t;

            })

            return mTasks;

        })
    }

    return (
        <div className='col' ref={drop}>
            <h1>{status.toUpperCase()}</h1>
            <div className='taskList'>
                {tasksByStatus.length > 0 && tasksByStatus.map((task) => (
                    <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
                ))}
            </div>
        </div>
    )
}

export default TaskColumn