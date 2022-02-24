import React from 'react'

//props es el valor pasado por parametro en donde se esta implementando el componente en este caso App.js

function UserTable(props) {
  return (

    //Tabla en HTML
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {
            //condicional para preguntar si la lista viene llena o vacia su estructura es la siguiente props.user.length > 0 ? verdadero : (negativa). se llama if de linea
            props.users.length > 0 ?
        //funcion para recorrer y pintar en el tbody iterando las veces en las que esta inicializada la lista. Luego pasamos la informacion a dinamica se va a ir cambiando con el nombre del props seguido de su propiedad y la actualiza en la tabla
            props.users.map(user=>(
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                    <button className="button muted-button">Edit</button>{" "}
                    <button className="button muted-button">Delete</button>
                    </td>
                </tr>
            
            )) : ( //Despues de los dos puntos viene la negativa del if de linea
                <tr>
                    <td colSpan={3}>No Users</td>
                </tr>

            )
        }
      
    </tbody>
  </table>

  )
}

export default UserTable