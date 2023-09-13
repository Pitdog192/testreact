import React, {useState, useEffect} from 'react'

function App() {
  
  const [dataFetch, setDataFetch] = useState()

  useEffect(() =>{
      try {
        fetch('/data')
        .then(res => res.json())   
        .then(datos => setDataFetch(datos))
      } catch (error) {
        console.log(`Error del fetch: ${error}`)
      }
  }, [])


  return (
    <div className="App">
      {
        (typeof dataFetch?.usuarios === 'undefined') 
        ? (<p>Loading....</p>) 
        : (dataFetch.usuarios.map((usr, i) => <p key={i}>{usr}</p>))
      }
    </div>
  );
}

export default App;