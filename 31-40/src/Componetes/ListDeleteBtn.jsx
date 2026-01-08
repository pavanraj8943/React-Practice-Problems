import React from 'react'

function ListWithDelete() {
    const [items, setItems] = React.useState(["A","B"]);
    const remove = i =>setItems(items.filter(x=>x!==i))
    return (
        <ul>
            {items.map(i=><li key={i}>{i} <button onClick={()=>remove(i)}>Delete</button></li>)}
        </ul>
    )
}
export default ListWithDelete;