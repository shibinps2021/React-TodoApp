

import { useState } from 'react';
import './App.css';
import uuid from 'react-uuid';
import TodoForm from './components/TodoForm';
import AllTodos from './components/AllTodos';
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(0);
  const submitHandler=(e)=>{
    e.preventDefault();
    let id=uuid()

    if(editId){
      const editTodo=todos.find((i)=>i.id === editId)
      const updateTodo=todos.map((t)=>
      t.id === editTodo.id 
      ?
      (t={id:t.id,todo}) 
      : {id:t.id,todo:t.todo}
      )
      console.log(updateTodo);
      setTodos(updateTodo);
      setEditId(0)
      setTodo("")
      return
    }
    if(todo !==""){
      setTodos([...todos,{id:id,todo}])
      setTodo("")
    }
  }

  const deleteHandler=(id)=>{
     const newItem=todos.filter((item)=>{
      return item.id !== id;
     })
     setTodos(newItem)
  }
  const EditHandler=(id)=>{
    const editItem=todos.find((i)=>{
      return i.id ===id;
    })
    setTodo(editItem.todo)
    setEditId(id)
  }
  return (
    <div classNameName="App">
      <section className="vh-100" style={{backgroundColor: "#eee"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div className="card rounded-3">
          <div className="card-body p-4">

            <h4 className="text-center my-3 pb-3">To Do App</h4>

          <TodoForm submitHandler={submitHandler} todo={todo} setTodo={setTodo} editId={editId}/>

            <table className="table mb-4">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Todo item</th>
                  
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
               <AllTodos todos={todos} EditHandler={EditHandler} deleteHandler={deleteHandler}/>
              
               
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default App;
