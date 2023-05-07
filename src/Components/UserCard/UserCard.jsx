import React from 'react'
import '../UserCard/UserCard.css';


const UserCard = () => {
  return (
    <div>

    <h1>UserCard</h1>
    <h2>Lista de usuarios</h2>

    <div className='container-lista'>
          {JSON.parse(localStorage.getItem('users')).map((user, index) => (
            <div className='container-usuario-card' key={index}>
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

export default UserCard