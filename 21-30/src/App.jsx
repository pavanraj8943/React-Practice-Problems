import React from 'react'
import ExampleComponent from './Compontes/componentDidMount'
import UseEffectExample from './Compontes/UseEffact'
import CleanUp from './Compontes/CleanUp'
import FetchApi from './Compontes/FetchApi'
import DocmentTittle from './Compontes/DocmentTittle'
import FetchData from './Compontes/FetchData'
import MultiUseEffact from './Compontes/MultiUseEffact'
import LayoutEffect from './Compontes/UseLayoutEffect'
const App = () => {
  return (
    <div>
      <ExampleComponent />
      <UseEffectExample />
      {/* <CleanUp /> */}
      {/* <FetchApi /> */}
      <DocmentTittle /> 
      <FetchData />
      <MultiUseEffact />
      <LayoutEffect />
    </div>
  )
}

export default App
