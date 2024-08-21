import React from 'react';
import './TaskItem.css';
import toast from 'react-hot-toast';
import { useDrag } from 'react-dnd';

const TaskItem = ({ task, tasks, setTasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item:{id : task.id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  console.log(isDragging)


  const handleRemove = (taskid) => {
    const fTasks = tasks.filter(t => t.id !== taskid);

    setTasks(fTasks);
    localStorage.setItem('tasks', JSON.stringify(fTasks));
    toast.success("Task removed successfully")

  }

  return (
    <div className={`task-item ${task.status}`} ref={drag}>
      <p>{task.title}</p>

      <svg
        onClick={() => handleRemove(task.id)}
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>

    </div>
  )
}

export default TaskItem