import React from 'react'
import ListRenderingUniqueKey from './Componetes/ListRenderingUniqueKey'
import NestedList from './Componetes/NestedList'
import ConditionalListRendering from './Componetes/ConditionalListRendering'
import FilterListDynamically from './Componetes/FilterListDynamically'

const App = () => {
  return (
    <div>
      <ListRenderingUniqueKey />
      <NestedList />
      <ConditionalListRendering />
      <FilterListDynamically />
    </div>
  )
}

export default App
