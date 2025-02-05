import { useState } from 'react';  //imprta useState (hook) para gestinr el estado en componentes funcioanles 
import './App.css';  //importar css paa app

function App() {
    //define 'name' con el valor inicial "sofia" y 'setName' que actualiza el nombre
    const [name, setName] = useState('Sofia');
    const [newName, setNewName] = useState('')
    const [nameList, setNameList] = useState(["Data", "Reyes", "Soraya"]);   //solo si quieres agregar a la lista de lo contrario esta linea de codigo se elimina para tener un codigo mas limpio

    const hadleNameChange = (e) => {
        e.preventDefault()
        if (newName.trim()) {  //elimina espcios
            setName(newName);          //cog el valor incertado
            setNameList([...nameList, newName]);    //añade a la lista
            setNewName('');            //limpia
        }

    };

    //renderiza jsx
    return(
        <div>
          <h1>Hello {name} </h1>
          <h2>Teacher Name: {name} </h2>      {/*muestra el nombre actual*/}
          <form onSubmit={hadleNameChange}>
            <input type='text' 
                value={newName} 
                onChange={(e) => setNewName(e.target.value)} //funcion anonima que cada vez q cambie el valor de 'newName' lo añada  'setNewName' que a su vez va a valer 'newName'
                placeholder='add a name please'
            />
            <button type='submit'>Add</button>
          </form>
        
            {/*nombres de los profesores*/}
            {/* <ul>
                <li onClick={() => setName("Data")}>Data</li>
                <li onClick={() => setName("Reyes")}>Reyes</li>
                <li onClick={() => setName("Soraya")}>Soraya</li>
            </ul> */}

            <ul>
              {nameList.map((profesor, index) => (
                <li key={index} onClick={() => setName(profesor)}>{profesor}</li>
              ))}
            </ul>
        </div>
    );
}

export default App;