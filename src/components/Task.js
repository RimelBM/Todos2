import React  from 'react'

function Task({onclick,list,todo,setTodo}) {

    

    const onclicked =() => {

        if(todo != '')
        {

        onclick([{id: Date.now() ,titre:todo},...list]);
        setTodo('') ;
        }

    }

    return (
        <div >
            <input style={{width:'60%',height:'32px' ,borderRadius:'9px',fontSize:'22px'}} type='text' placeholder='add a task' value={todo} onChange={(e)=>setTodo(e.target.value)} />
            <button style={{marginLeft:'10px', height:'35px' ,borderRadius:'9px',fontSize:'22px'}} onClick={onclicked} >Add</button>
        </div>
    )
}

export default Task
