import React, { useState, useEffect } from 'react';
import UserList from '../UserList/UserList';
import '../SearchUser/SearchUser.css';

const SearchUser = () => {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);
  const [searched, setSearched] = useState(false); // Agregar variable searched
  const [allUsers, setAllUsers] = useState([]);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingData = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = existingData.find((user) => user.email === email);

    if (foundUser) {
      setUser(foundUser);
    } else {
      setUser("not found");
    }

    setSearched(true); // Actualizar valor de searched
  };
  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('users')) || [];
    setAllUsers(existingData);
  }, []);


  const handleClear = () => {
    setEmail('');
    setUser(null);
    setSearched(false);
    const existingData = JSON.parse(localStorage.getItem('users')) || [];
    setAllUsers(existingData);
  }

  return (
    <div>
      <h1>Busqueda de Usuarios por Email</h1>
      <div>
        <form className='container-form' onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleChange} />

          <button className='btn-enviar' onClick={handleSubmit}>Enviar</button>
          <button className='btn-clear' onClick={handleClear}>Clear</button>

        </form>
      </div>

      <div>
        {user && user !== "not found" ? (
          <div className='container-busqueda'>
            <h2>Usuario encontrado:</h2>
            <div className='container-usuario-encontrado'>
              <p>Nombre: {user.nombre}</p>
              <p>Email: {user.email}</p>
              <p>Edad: {user.edad}</p>
              <p>Teléfono: {user.telefono}</p>
              <p>Género: {user.genero}</p>
              <p>Tipo de tarjeta: {user['tipo trajeta']}</p>
            </div>
          </div>
        ) : user === "not found" ? (
          <div>
            
            <UserList/> 

          </div>
        ) : searched ? (
          <div className='container-busqueda'>
            <h2>Lista de usuarios:</h2>
            {JSON.parse(localStorage.getItem('users')).map((user, index) => (
              <div className='container-usuario-encontrado' key={index}>
                <p>Nombre: {user.nombre}</p>
                <p>Email: {user.email}</p>
                <p>Edad: {user.edad}</p>
                <p>Teléfono: {user.telefono}</p>
                <p>Género: {user.genero}</p>
                <p>Tipo de tarjeta: {user['tipo trajeta']}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchUser;
