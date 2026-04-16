import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'


function App() {

  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);

  useEffect(()=> {

    axios.get("https://lanciweb.github.io/demo/api/actresses/")
    .then(res => {setActresses(res.data); console.log(res.data);
    })
    .catch(error => console.log("Caricamento delle attrici fallito, codice errore: " + error.message))

    axios.get("https://lanciweb.github.io/demo/api/actors")
    .then(res => {setActors(res.data); console.log(res.data);
    })
    .catch(error => console.log("Caricamento degli attori fallito, codice errore: " + error.message))
    

  }, [])

  return (
    <>
      
    </>
  )
}

export default App
