import { useState } from 'react';  //imprta useState (hook) para gestinr el estado en componentes funcioanles 
import './App.css';  //importar css paa app
function App() {
    //define 'name' con el valor inicial "sofia" y 'setName' que actualiza el nombre
    const [name, setName] = useState('Sofia');
    const [newName, setNewName] = useState('')
    
    const changeName = (e) => {
        e.preventDefault()
        if (newName.trim()) {  //elimina espcios
            setName(newName)          //cog el valor incertado
            setNewName('')            //limpia
        }

    }

    //renderiza jsx
    return(
        <div>
            <h2>Teacher Name: {name} </h2>      {/*muestra el nombre actual*/}
            <form onSubmit={changeName}>
                <input type='text' 
                value={newName} 
                onChange={(e) => setNewName(e.target.value)} //funcion anonima que cada vez q cmbie el valor de 'newName' lo añada  'setNewName' que a su vez va a valer 'newName'
                placeholder='add a name'
                />
                <button type='submit'>Add</button>
            </form>
        
            {/*nombres de los profesores*/}
            <ul>
                <li onClick={() => setName("Data")}>Data</li>
                <li onClick={() => setName("Reyes")}>Reyes</li>
                <li onClick={() => setName("Yolanda")}>Yolanda</li> 
            </ul>
        </div>
    );
}

export default App;



/*
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('Sofia')
  const [newName, setNewName] = useState('')

  const hadleNameChange = (profesor) => {
    setName(profesor)
  }

  const changeName = (e) => {
    e.preventDefault()
    if(newName.trim()) {
      setName(newName)
      setNewName('')
    }
  }
  
  return (
    <>
      <h2>Teacher name: {name}</h2>
      <form onSubmit={changeName}>
        <input 
          type='text' 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)}          
          placeholder='add a name'
        />
        <button type='submit'>Add</button>
      </form>
    <ul>
      <li onClick={() => hadleNameChange("Data")}>Data</li>
      <li onClick={() => hadleNameChange("Reyes")}>Reyes</li>
      <li onClick={() => hadleNameChange("Soraya")}>Soraya</li>
    </ul>
    </>
  )
}

export default App
*/