import React from 'react'

const SortListDynamically = () => {
    const items =["Mobiles","Laptop", "Tablet"]

  return (
    <div>
      {items.sort((a, b) => a-b)
      .map((item, i) => <li key={i}>{item}</li>)}
    </div>
  )
}

export default SortListDynamically
