import React from 'react'
import ListRenderingUniqueKey from './Componetes/ListRenderingUniqueKey'
import NestedList from './Componetes/NestedList'
import ConditionalListRendering from './Componetes/ConditionalListRendering'
import FilterListDynamically from './Componetes/FilterListDynamically'
import SortListDynamically from './Componetes/SortListDynamically'
import ListKey from './Componetes/MapObjectKey'

const App = () => {
  return (
    <div>
      <ListRenderingUniqueKey />
      <NestedList />
      <ConditionalListRendering />
      <FilterListDynamically />
      <SortListDynamically />
      <ListKey />
    </div>
  )
}

export default App
