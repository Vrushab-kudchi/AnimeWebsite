import React, { useContext } from 'react'
import CardsAdded from '../Components/CardsAdded'
import { Global } from '../context/global'

export default function Home() {
  // const value = useContext(Global)
  return (
    <div>
      <CardsAdded />
      {/* {value} */}

    </div>
  )
}
