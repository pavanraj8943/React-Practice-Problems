import React, { useState } from "react";

// const LoginForm = () => {
//   const [form, setForm] = useState({ username: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (form.username.length < 3) {
//       alert("Username too short");
//       return;
//     }

//     alert("Form submitted successfully");
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           value={form.username}
//           onChange={(e) =>
//             setForm({ ...form, username: e.target.value })
//           }
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;



// function MultiTnputForm(){
// const [form, setForm] = useState({name:"",email:""})
// const handleChange = e => setForm({...form,[e.target.name]:e.target.value})
//     return(
//         <>
//         <input name='name' value={form.name} onChange={handleChange} />
//         <input email='email' value={form.email} onChange={handleChange} />
//         </>
//     )
// }
// export default MultiTnputForm



function Increment (){
    const [prev, setCount] = useState(0);
    return (
     <>
     <h4>{prev}</h4>
     <button onClick={()=> setCount(prev=>prev + 1)}> + </button>
     </>
    )
}
export default Increment