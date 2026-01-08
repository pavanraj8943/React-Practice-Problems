import React, { useState } from 'react'

const CheckBoxDemo = () => {
    const [checked, setChecked] = useState(true)
  return (
    <div>
      <input type='checkbox' checked={checked} onChange={
        e=>setChecked(e.target.checked)
      } />
    </div>
  )
}

export default CheckBoxDemo
