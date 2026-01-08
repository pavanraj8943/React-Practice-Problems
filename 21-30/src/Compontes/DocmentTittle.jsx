import React, { useEffect,useState } from 'react'

// const DocmentTittle = () => {
//     const[count,setCount]=useState(0);
//  useEffect(()=>{
//         document.title =`Count ${count}`;},[count]);
//   return (
//     <div>
//         <h7>{count}</h7>
//       <button onClick={()=>setCount(count+1)}>Count {count}</button>
//     </div>
//   )
// }

// export default DocmentTittle


// const ComponentDidUpdate = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("count changed:", count);
//   }, [count]); 

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>
//       +
//       </button>
//     </div>
//   );
// };

// export default ComponentDidUpdate;




const ComponentWillUnmount = () => {
  const [count, setCount] = useState(8);

  useEffect(() => {
   return ()=>console.log("Cleanup before unmount:", count)
  }, []); 

  return (
    <div>
    
    </div>
  );
};

export default ComponentWillUnmount;