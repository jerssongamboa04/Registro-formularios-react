import React from 'react'
import '../UserList/UserList.css';


const UserList = () => {
  return (
    <div>

      <h1>UserList</h1>
      <h2>Lista de usuarios segun su busqueda</h2>

      <div className='container-lista'>
            {JSON.parse(localStorage.getItem('users')).map((user, index) => (
              <div className='container-usuario-lista' key={index}>
                <p>Nombre: {user.nombre}</p>
                <p>Email: {user.email}</p>
                <p>Edad: {user.edad}</p>
                <p>Teléfono: {user.telefono}</p>
                <p>Género: {user.genero}</p>
                <p>Tipo de tarjeta: {user['tipo trajeta']}</p>
              </div>
            ))}
          </div>


    </div>
  )
}

export default UserList