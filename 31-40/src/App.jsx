import React from 'react'
import ListRenderingUniqueKey from './Componetes/ListRenderingUniqueKey'
import NestedList from './Componetes/NestedList'
import ConditionalListRendering from './Componetes/ConditionalListRendering'
import FilterListDynamically from './Componetes/FilterListDynamically'
import SortListDynamically from './Componetes/SortListDynamically'
import ListKey from './Componetes/MapObjectKey'
import NestedComponets from './Componetes/NestedComponets'

const App = () => {
  return (
    <div>
      <ListRenderingUniqueKey />
      <NestedList />
      <ConditionalListRendering />
      <FilterListDynamically />
      <SortListDynamically />
      <ListKey />
      <NestedComponets />
    </div>
  )
}

export default App
