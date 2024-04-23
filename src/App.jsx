
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard/CoffeeCard'
import { useState } from 'react'

function App() {

  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)


  return (
    <>
      <h1 className='text-6xl text-purple-600 text-center'>Coffee store</h1>
      <h2>Hot hot coffee {coffees.length}</h2>
      <div className='grid grid-cols-2 gap-5 w-11/12 mx-auto'>
      {
        coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
      }
      </div>
    </>
  )
}

export default App
