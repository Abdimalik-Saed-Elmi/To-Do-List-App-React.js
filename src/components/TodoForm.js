import React from 'react'
import "../App.css"

function TodoForm(props) {
  return (
    <div>
    <div className='Add-top'>
            <form onSubmit={props.Additem}>
                <input type='text' placeholder='Add Task' 
                value={props.items.text || ""}
                onChange={props.handleChange}
                />
                <button type='submit'
                >+</button>
            </form>
    </div>
    </div>
  )
}

export default TodoForm
