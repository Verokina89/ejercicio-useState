import { useState } from 'react';  //imprta useState (hook) para gestinr el estado en componentes funcioanles 
import './App.css';  //importar css paa app
function App() {
    //define 'name' con el valor inicial "sofia" y 'setName' que actualiza el nombre
    const [name, setName] = useState("Sofia");

    //renderiza jsx
    return(
        <div>
            <h2>Teacher Name: {name} </h2>      {/*muestra el nombre actual*/}
        
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
