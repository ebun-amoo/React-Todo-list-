import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);
    }
  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
        <input type="text" className='edit-todo-input' value={value} placeholder='Update Task...' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='edit-todo-btn'>Update Task</button>
    </form>
  )
}
