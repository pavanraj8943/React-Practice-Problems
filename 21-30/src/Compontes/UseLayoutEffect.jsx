import React,{useLayoutEffect} from 'react'

const LayoutEffect = () => {
useLayoutEffect(() => {
  console.log("Runs Before Paint");
}, []);

  
  return (
    <div>
      
    </div>
  )
}

export default LayoutEffect
