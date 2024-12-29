import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Header from './components/Header';


function App() {
  const [todo, settodo] =  useState({
          items: []
    })

    function handleChange(event) {
      let Newedit = {...todo}
      Newedit.items.text = event.target.value;
      settodo(Newedit);
     
    }


    function Additem(event) {
      event.preventDefault()
      let textinput =todo.items.text
      let newItem = {
        text: textinput,
        key: Math.floor(Math.random() * 50000),
        isCompleted: false
      }

      if(newItem.text !== "")
      {
        let newItems = [...todo.items, newItem]
        settodo({items: newItems}) 
      
      }

    }

    function completeTodo(key){
      const completeTodo = todo.items.map((todo) => {
        if(todo.key === key) {
          return {...todo, isCompleted:!todo.isCompleted}
        }
        else{
          return todo;
        }
      } )
      settodo({items: completeTodo})
    }

    function deleteTodo(key){
      const filteredItems = todo.items.filter((item) =>{
        return item.key !== key;
      
      })
      settodo({items: filteredItems})
    } 

     function updateTodo(text, key){
      const updatedItems = todo.items.map((item) => {
        if(item.key === key) {
          return {...item, text: text}
        }
        else{
          return item;
        }
      } )
      settodo({items: updatedItems})
     }

     useEffect(()=>{
      GetFromLocalStorage()
     },[])



     useEffect(() => {
      SavetoLocalStorage()
     }, [todo.items])

    

     function SavetoLocalStorage(){
      localStorage.setItem("save", JSON.stringify(todo.items))
     }

     function GetFromLocalStorage(){

      if(localStorage.getItem("save")){
        let data = JSON.parse(localStorage.getItem("save"))
        settodo({items: data})
      }else{
        settodo({items: []})
      }
     }
  return (
<div>
        <div>
           <header>
             <Header />
           </header>
        </div>

        <div>
  <main>
    <TodoForm 
      items={todo.items}
      handleChange={handleChange}
      Additem={Additem}
   
      
    />
    <TodoList 
      items={todo.items}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      updateTodo={updateTodo}
    />
   
  </main>
 
        </div>

         <div>
             <footer>
              <p>&copy; 2024 Abdimalik Said Elmi. All Rights Reserved.</p>
            </footer>
         </div>
 </div>
    
  );
}

export default App;
