import React, {useEffect, useState} from 'react'

const Vehiculos = () => {
  const [nombreVehiculo, setNombreVehiculo] = useState('');

    useEffect(()=>{
        console.log("Hola, soy un use effect que se ejecuta solo una vez cuando la página se renderiza,porque tiene el array de dependecias vacío");
        //paso2
        //paso3
        //paso4
    },[]);

    useEffect(() => {
        console.log("esto es una función que se ejecuta cada que cambia el valor de nombreVehiculo")
        console.log("el valor de la variable es", nombreVehiculo)
    }, [nombreVehiculo])

    const enviarDatosAlBackend = () =>{
        console.log("El valor de la variable nombreVehiculo es:", nombreVehiculo)

    }


    return (
        <form className='flex flex-col'>
            <h2>Formulario de Creación de vehículos</h2>
            <input onChange={ (e) =>{setNombreVehiculo(e.target.value)}} type='text' placeholder= 'Nombre del vehiculo'/>
            <input onChange={(e) =>{console.log('marca:', e.target.value)}} type='text' placeholder='Marca del vehículo'/>
            <input type='text' placeholder='Modelo del vehículo'/>
            <button type ="button" onClick={enviarDatosAlBackend} className='bg-indigo-500 text-white'>Enviar Datos</button>
        </form>
    )
}

export default Vehiculos
