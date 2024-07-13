
import { useEffect, useState } from 'react'
import './App.css'
import Fruit from './Components/Fruit/Fruit'

function App() {
  const [fruits, setFruits] = useState([])

  useEffect(()=>{
    fetch('../public/data.json')
    .then(res => res.json())
    .then(info => setFruits(info))
  }, [])

  return (
    <div>
      <h2 className=' text-4xl font-semibold text-blue-800'>Fruit Database</h2>
      <p className=' font-medium my-5'>No of fruits: {fruits.length}</p>
      <div className='flex gap-5 items-center'>
        {
          fruits.map(fruit => <Fruit key={fruit.id} fruit={fruit} />)
        }
      </div>
    </div>
  )
}

export default App
