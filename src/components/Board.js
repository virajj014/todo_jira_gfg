import React, { useEffect, useState } from 'react'
import './Board.css'
import { v4 as uuidv4 } from 'uuid';
import TaskColumn from './TaskColumn';
import toast from 'react-hot-toast';


const Board = () => {
  const statuses = ["todo", "inprogress", "closed"];
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(
    {
      id: '',
      title: '',
      status: ''
    }
  );

  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, [])

  useEffect(() => {
    const todoss = tasks.filter((task) => task.status == 'todo');
    const inProgresss = tasks.filter((task) => task.status == 'inprogress');
    const closedd = tasks.filter((task) => task.status == 'closed');

    // console.log(todoss)
    // console.log(inProgresss)
    // console.log(closedd)


    setTodos(todoss)
    setInProgress(inProgresss)
    setClosed(closedd)
  }, [tasks])

  const handleSubmit = () => {
    const newTask = {
      ...task,
      id: uuidv4(),
      status: "todo"
    }


    setTasks(prev => {
      const updatedTasks = [...prev, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    })

    setTask(  {
      id: '',
      title: '',
      status: ''
    })

    toast.success("Task added successfully!!")
  }

  return (
    <div className='board'>
      <div className='addTask'>
        <input
          placeholder='add task here'
          value={task.title}
          onChange={(e) => {
            setTask({
              ...task,
              title: e.target.value
            });
          }}
        />
        <button onClick={handleSubmit}>+</button>
      </div>

      <div className='kanban'>
        {
          statuses.map((status) => {
            return (
              <TaskColumn
                key={status}
                status={status}
                tasks={tasks}
                setTasks={setTasks}
                todos={todos}
                inProgress={inProgress}
                closed={closed}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Board