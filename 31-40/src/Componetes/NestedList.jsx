import React from 'react'

const NestedList = () => {
    const categories = [
        { id: 1, name: "Electronics", items: ["Mobile", "Laptop"] },
        { id: 2, name: "Laptops", items: ["Dell", "HP"] }
    ];

    return (
        <div>
            {
                categories.map(c => (
                    <div key={c.id}>
                        <h4>{c.name}</h4>
                        <ul>
                            {c.items.map(i => <li key={i}>{i}</li>)}

                        </ul>

                    </div>
                ))
            }

        </div>
    )
}

export default NestedList
