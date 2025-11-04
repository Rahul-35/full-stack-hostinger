import { useState , useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[message, setMessage] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/api/message')
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
    </>
  )
}

export default App
