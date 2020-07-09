import React from 'react'

const List = ({lista, onclick, setTodo}) => {

    

    function deleteTodo(id)
    {
        onclick(lista.filter( (todo)=> todo.id !== id ))
    }

 

      const editTodo =(id) => {

        onclick(lista.filter( (todo)=> todo.id !== id )) ;
    
        const todoToEdit = lista.find(todo => todo.id === id)
        console.log(todoToEdit) ;
    
        setTodo(todoToEdit.titre);

      }

    
    return (
        <div  style={{marginTop:'2%',marginRight:'8%',marginLeft:'8%'}}>
            
            
    {lista.map((tasked)=>(
        

       <div style={{display:'flex',alignItems:'center',justifyContent:'center' ,backgroundColor:'pink'}}>

            <button style={{margin:'5px' ,color:'red',borderRadius:'9px'}}  onClick={()=>deleteTodo(tasked.id)}> X </button>

            <button style={{margin:'5px' ,borderRadius:'9px' ,backgroundColor:'green',color:'white'}}  onClick={()=>editTodo(tasked.id)}> Edit </button>
            <h1 style={{marginLeft:'85px'}} >{tasked.titre}</h1>

       </div>    )


             )} 
            
            
            
            
    </div>
    
    
    
            
        
    )
}

export default List
