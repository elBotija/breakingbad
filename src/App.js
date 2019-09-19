import React,{useState, useEffect} from 'react'
import axios from 'axios'

function Frase({frase}){
  if(frase && frase.quote){
    return(
      <div className="frase">
        <h1>{frase.quote}</h1>
        <p>-{frase.author}</p>
      </div>
    )
  }else{
    return "Loading..."
  }
}

function App(){

  const [frase, obtenerFrase] = useState({})

  const consultarAPI = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    obtenerFrase(resultado.data[0])
  }

  useEffect(
    ()=>{
      consultarAPI()
    },[]
  )

  console.log(frase)

  return (
    <div className="contenedor">
      <Frase frase={frase}/>
      <button onClick={consultarAPI}>Generar Nueva Frase</button>
    </div>
  )
}

export default App