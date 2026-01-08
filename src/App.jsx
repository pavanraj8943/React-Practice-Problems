import React from 'react'
import HelloWorld from './Component/FunctionalComponent'
import Greeting from './Component/ClassComponent'
import FruitsList from './Component/FunctionalComponent'
import User from './Component/FunctionalComponent'
import Clock from './Component/DateTime'

const App = () => {
  return (
    <div>
      <HelloWorld />
      {/* <Greeting name="Pavan Raj" /> */}
      <Clock />
   



    </div>
  )
}

export default App
