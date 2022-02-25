import React, {useState} from 'react'
import UserTable from './components/UserTable';
//libreria para manejar Id de una forma mas simple
import {v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {

  //constante lista que tiene informacion de los usuarios array de objetos, el uuidv4() es una funcion que nos genera los id
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  //Estado de la tabla userData, users es el nombre del estado, setUsers es el nombre con el que podemos llamar al estado de la tabla para modificarla y dentro del useState ingresamos el valor para inicializarlo en este caso vamos a inicializar  la tabla de objetos userData 
  const [users, setUsers] = useState(usersData)






  //Se crea funcion AGREGAR NUEVOS USUARIOS recibe como parametro un usuario(objetos con sus propiedades id,name,username), luego generamos un id para este usuario nuevo y modificamos el array para añadirle el nuevo usuario,los tres puntos que van antes del nombre de la lista significa que se va a concatenar a el array el user
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }
  //el usuario que recibe la funcion addUser (user) lo capturamos en el formulario que esta en el componente AddUserForm



//Funcion para eliminar usuarios
const deleteUser = id => {

  //se genera un nuevo array excluyendo el valor identificado con el id que pasamos por parametro
  const arrayFiltrado = users.filter(user => user.id !== id)
  
  setUsers(arrayFiltrado)
}


//Funcion para editar Usuarios
const [editing, setEditing] = useState(false);

const [currentUser, setCurrentUser] = useState({
  id: null, name: '', username:''
});

const editRow = (user) => {

  setEditing(true);
  setCurrentUser({ id: user.id, name: user.name, username: user.username})
  
}







  return (

    //Maquetacion inicial
    <div className="container">
    <h1>CRUD App with Hooks</h1>
    <div className="flex-row">
      <div className="flex-large">



      {/**Esto es un condicional que pregunta si el botton editar fue presionado si es asi ejecuta el primer bloque de codigo para editar usuario y muestra todo el bloque en pantalla por eso es importante que este dentro de un contenedor div ya que se va a ejecutar todo, si no es asi ejecuta el 'else' segundo bloque de codigo */}
      {
        editing ? (
          <div>

            <h2>Edit User</h2>
            <EditUserForm
            currentUser={currentUser}
            />
            

          </div>
        ) : (
          <div>
          <h2>Add user</h2>
        <AddUserForm addUser={addUser}/>
        </div>
        )

      }
        

        
      </div>
      <div className="flex-large">
        <h2>View users</h2>
      
        {/* Añadimos la tabla componente en la columna View users
        Adicional con users le pasamos la informacion de la userData como un props al componente UserTable*/}
        <UserTable 
        users={users} 
        deleteUser={deleteUser} 
        setEditing={setEditing}
        editRow={editRow}
        /> 
      </div>
    </div>
  </div>
  );
}

export default App;
