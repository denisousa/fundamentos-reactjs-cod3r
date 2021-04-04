import React from 'react'

export default props => 
    <div>
        <div onClick={props.onIncrement}>+</div>
        <div onClick={props.onDecrement}>-</div>
    </div>