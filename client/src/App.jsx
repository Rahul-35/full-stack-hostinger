import { useState , useEffect} from 'react'
import './App.css'

function App() {

  const[message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://147.79.71.114:5000/api/message")
      .then((response) => response.json())
      .then((data)=>setMessage(data.message))
      .catch((error)=>{
        console.error("Error fetching message:", error);
      })
  }, [])

  return (
    <>
        <h1>Welcome to frontend</h1>
        <h2>data {message}</h2>
        <img src='http://147.79.71.114:5000/images/indw.jpg'/>
    </>
  )
}

export default App
