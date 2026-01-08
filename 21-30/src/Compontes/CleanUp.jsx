import React,{useEffect} from 'react'

const CleanUp = () => {

useEffect(()=>{
const timer = setInterval(() => 
    console.log("tick"),1000);
    return () => clearInterval(timer)
}, [1000]);


  return (
    <div>
      <h7>#</h7>
    </div>
  )
}

export default CleanUp
