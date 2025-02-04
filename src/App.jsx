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
                placeholder='add a name please'
                />
                <button type='submit'>Add</button>
            </form>
        
            {/*nombres de los profesores*/}
            <ul>
                <li onClick={() => setName("Data")}>Data</li>
                <li onClick={() => setName("Reyes")}>Reyes</li>
                <li onClick={() => setName("Soraya")}>Soraya</li>
                <li onClick={() => setName("Yolanda")}>Yolanda</li> 
            </ul>
        </div>
    );
}

export default App;
