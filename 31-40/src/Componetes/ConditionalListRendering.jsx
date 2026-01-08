import React from 'react'

const ConditionalListRendering = () => {
  const items =["Mobile","Laptop","Tablet"];
   

  return (
    <div>
       {items.length>0 ? items.map(item => <li key={item}>{item}</li>) : <p>no items</p>}
    </div>
  )
}

export default ConditionalListRendering
