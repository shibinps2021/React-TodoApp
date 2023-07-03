import React from 'react'

const AllTodos = ({todos,EditHandler,deleteHandler}) => {
  return (
    <>
    {todos.map((item,index)=>{
        return(
          <tr key={item.id}>
          <th scope="row">{index+1}</th>
          <td>{item.todo}</td>
          <td>
            <button type="submit" className="btn btn-success" onClick={()=>EditHandler(item.id)}>Edit</button>
            <button type="submit" className="btn btn-danger ms-1" onClick={()=>deleteHandler(item.id)}>Delete</button>
          </td>
        </tr>
        )
      })}
      </>
  )
}

export default AllTodos