import { useEffect, useState } from "react"
import axios from 'axios';


function App() {
  const [jokes,setJokes]  = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  })
  return (
    <>
      <h1>Chai aur fullstack</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
            <h1>{joke.title}</h1>
            <h2>{joke.content}</h2>
          </div>
        ))
      }
    </>
  )
}

export default App
