import React, {useState} from 'react'
import UserTable from './components/UserTable';
//libreria para manejar Id de una forma mas simple
import {v4 as uuidv4 } from 'uuid';

function App() {

  //constante lista que tiene informacion de los usuarios array de objetos, el uuidv4() es una funcion que nos genera los id
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  //Estado de la tabla userData, users es el nombre del estado, setUsers es el nombre con el que podemos llamar al estado de la tabla para modificarla y dentro del useState ingresamos el valor para inicializarlo en este caso vamos a inicializar  la tabla de objetos userData 
  const [users, setUsers] = useState(usersData)

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
      
        {/* Añadimos la tabla componente en la columna View users
        Adicional con users le pasamos la informacion de la userData como un props al componente UserTable*/}
        <UserTable users={users}/> 
      </div>
    </div>
  </div>
  );
}

export default App;
