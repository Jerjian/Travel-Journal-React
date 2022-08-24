import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from "./components/Nav"
import Travel from "./components/Travel"
import data from "./data/data"


const travels = data.map(travel=>{
  return(
    <Travel
      key={travel.title}
      description={travel}
    />
  )
})
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav/>
      {travels}
    </div>
  )
}

export default App
