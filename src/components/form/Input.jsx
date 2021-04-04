import React, { useState } from 'react'

export default props => {
    let [name, setName] = useState('Pedro') // useState retorna um array de 2 elementos: value e funciton.

    return (
        <div>
            <h3>{name}</h3>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
    )
}