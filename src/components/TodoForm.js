import React from 'react'

const TodoForm = ({submitHandler,todo,setTodo,editId}) => {
  return (
    <div>
          <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2" onSubmit={submitHandler}>
              <div className="col-12">
                <div className="form-outline">
                  <input type="text" id="form1" className="form-control" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
                  <label className="form-label" for="form1">Enter a task here</label>
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">{editId? "edit":"Save"}</button>
              </div>

            
            </form>
    </div>
  )
}

export default TodoForm