import React from 'react'
import UserTable from './components/UserTable';
function App() {
  return (

    //Maquetacion inicial
    <div className="container">
    <h1>CRUD App with Hooks</h1>
    <div className="flex-row">
      <div className="flex-large">
        <h2>Add user</h2>
      </div>
      <div className="flex-large">
        <h2>View users</h2>
      
        {/* Añadimos la tabla componente en la columna View users*/}
        <UserTable/> 
      </div>
    </div>
  </div>
  );
}

export default App;
