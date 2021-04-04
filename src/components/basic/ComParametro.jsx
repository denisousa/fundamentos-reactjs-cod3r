import React from 'react'

export default props => {
    return <div>
        <h1>{props.title}</h1>
        <p>{Array(10).fill(0)}</p>
    </div>
}
