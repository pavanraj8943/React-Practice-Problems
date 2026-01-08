import React, { useState } from 'react'

const RadioDemo = () => {
    const [choice, setChoice] = useState("A")
  return (
    <div>
      <input type='radio' value="A" checked={choice==="A"} onChange={e=> setChoice(e.target.value)}/> A
       <input type='radio' value="B" checked={choice==="B"} onChange={e=> setChoice(e.target.value)}/> B
    </div>
  )
}

export default RadioDemo
