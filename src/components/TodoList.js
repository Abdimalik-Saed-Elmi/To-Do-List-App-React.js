import React from 'react'
import "../App.css"

function TodoList(props) {
  const items = props.items

  const Taskstatus =items.map(item =>{
    return item.isCompleted
  })

  const completedTask = Taskstatus.filter(item =>{
    return item === true
  })

  const notcompleted = Taskstatus.filter(item =>{
    return item !== true
  })
  return (
  
    <div className='task-card'>
      {items.map((item) =>(

     
        <div className={item.isCompleted ? 'task-done' : 'task-header'}>
            <div className='task-title'>
                <input type='text' 
                style={{textDecoration : item.isCompleted ? 'line-through' : 'none'}}
                value={item.text}
                onChange={(e)=>{
                  props.updateTodo(e.target.value, item.key)
                }}
                />
                <i className='fa fa-trash fa-lg task-icon' 
                onClick={()=>{props.deleteTodo(item.key)}}
                />
                <i className='fa fa-check-circle fa-lg task-icon' 
                onClick={()=>{  
                  props.completeTodo(item.key)
                }}
                />

            </div>

        </div>
       ))}
        <div className='all-tasks'>
          <div className="task-msg">
            {notcompleted.length} Tasks left
          </div>
          <div className='task-msg'>
            {completedTask.length} Completed
          </div>
        </div>
    </div>
  )
}

export default TodoList
