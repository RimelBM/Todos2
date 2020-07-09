import React  from 'react';
import Todos from  './components/Todos' 

function App() {

  const title = 'My list of tasks'

  return (
    
   
      
        
         <div style={{textAlign:'center',marginTop:'5%' ,backgroundColor:'grey' ,borderRadius:'9px',marginLeft:'5%',marginRight:'5%'}}>
             <Todos title={title} />
        </div>

      
     
  );
}



export default App;
