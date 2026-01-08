import React, { useState } from 'react'

const ToggleDiv = () => {

    const [visible , setVisible] = useState(false)
  return (
    <div>
      
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && <div>Now you see Me!</div>}

    </div>
  )
}

export default ToggleDiv
