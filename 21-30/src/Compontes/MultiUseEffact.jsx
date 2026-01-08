import React,{useState, useEffect} from 'react'

const MultiUseEffact = () => {
     const [state, setState] = useState(0);
    useEffect(() => {
        console.log("Component Mounted");}, []);

    useEffect(() => {
        console.log("State changed");}, [state]);

  return (
    <div>
      
    </div>
  )
}

export default MultiUseEffact
