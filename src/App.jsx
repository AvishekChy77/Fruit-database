
import { useEffect, useState } from 'react'
import './App.css'
import Country from './Components/Country/Country'

function App() {
  const [countries, setCountries] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const [visited, setVisited] = useState([])

  useEffect(  ()=>{
  async function dataFetch () {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all")
      if(!res.ok){
        throw new Error("Database not found!")
      }
      const data = await res.json()
      setCountries(data)
      console.log(data)
     }catch(error){
      console.error("Error:",error)
      setError(error)
     }
     finally{
        setLoading(false)
     }
  }
  dataFetch()
  }, [])

  if(loading){
    return <span className="loading loading-bars loading-lg"></span>
  }

  const handleVisit = (c)=>{
    const arr = [...visited]
    if(!arr.includes(c)){
      arr.push(c)
      setVisited(arr)
    }

  }

  return (
    <div>
      <nav>fdsds</nav>
      <h2 className=' text-4xl font-semibold '>Country Database</h2>
      <p className=' font-medium my-5'>No of Countries: {countries.length}</p>
      <div className='my-5'>
        <h2>Countries I've visited: {visited.length}</h2>
      </div>
      <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center'>
        {
          countries.map(country=> <Country key={country} country={country}  handleVisit ={handleVisit}/>)
        }
      </div>
    </div>
  )
}

export default App
