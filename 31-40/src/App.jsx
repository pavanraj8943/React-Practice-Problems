import React from 'react'
import ListRenderingUniqueKey from './Componetes/ListRenderingUniqueKey'
import NestedList from './Componetes/NestedList'
import ConditionalListRendering from './Componetes/ConditionalListRendering'
import FilterListDynamically from './Componetes/FilterListDynamically'
import SortListDynamically from './Componetes/SortListDynamically'

const App = () => {
  return (
    <div>
      <ListRenderingUniqueKey />
      <NestedList />
      <ConditionalListRendering />
      <FilterListDynamically />
      <SortListDynamically />
    </div>
  )
}

export default App
