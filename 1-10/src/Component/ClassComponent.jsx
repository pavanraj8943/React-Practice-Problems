import React,{Component} from "react";

// class Greeting extends Component{
//     render(){
//         return <h1>Hello {this.props.name}</h1>
//     }
// }

function Greeting({ name }) {
  return <h4>Hello {name}</h4>;
}

export default Greeting

