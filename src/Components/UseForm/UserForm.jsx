import { useEffect, useState } from 'react'
import "../UseForm/UseForm.css";

const UserForm = () => {

    const [mensaje, setMensaje] = useState("");
    const [user, setUser] = useState("");

    const handleInput = (event) => {
        const inputName = event.target.name;
        setUser(prev => {
            return {
                ...prev,
                [inputName]: event.target.value
            }
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const existingData = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = existingData.some(
            (item) => item.email === user.email
        );

        if (userExists) {
            setMensaje("Ya ha sido agregado un usuario con este Email");
        } else {
            existingData.push(user);
            localStorage.setItem("users", JSON.stringify(existingData));
            setMensaje("El usuario se agregó correctamente");

        }

        event.target.reset();

        setTimeout(() => {
            setMensaje("");
        }, 3000);
    };

    return (
        <div className='container-form'>
            {mensaje && <p style={{ color: 'red', margin: '20px' }}>{mensaje}</p>}
            <form className='form-container' onSubmit={handleSubmit} >
                <label>Nombre:</label>
                <input type="text" name="nombre" onChange={handleInput} />

                <label>Email:</label>
                <input type="email" name="email" onChange={handleInput} />

                <label>Edad:</label>
                <input type="text" name="edad" onChange={handleInput} />

                <label>Telefono:</label>
                <input type="text" name="telefono" onChange={handleInput} />

                <label>Seleciona tu Genero :</label>

                <div className='container-genero'>

                    <input type="radio" name="genero" value="masculino" onChange={handleInput} />
                    <label htmlFor="opcion1">Masculino</label>

                    <input type="radio" name="genero" value="femenino" onChange={handleInput} />
                    <label htmlFor="opcion2">Femenino</label>

                    <input type="radio" name="genero" value="no binario" onChange={handleInput} />
                    <label htmlFor="opcion3">No binario</label>

                    <input type="radio" name="genero" value="otros" onChange={handleInput} />
                    <label htmlFor="opcion4">otros /prefiero no decirlo</label>
                </div>
                <select name="tipo trajeta" id="select" onChange={handleInput} defaultValue="" required>
                    <option value="" disabled>Selecciona tu tarjeta</option>
                    <option value="basica">Básica</option>
                    <option value="premium">Premium</option>
                    <option value="bussiness">Bussiness</option>
                </select>

                <div className='container-checkbox'>
                    <input type="checkbox" id="myCheckbox" name="myCheckbox" value="myCheckboxValue" required />
                    <label htmlFor="myCheckbox">Acepto recibir publicidad por email</label>
                </div>

                <input id="submit" type="submit" />
            </form>

        </div>
    )
}

export default UserForm