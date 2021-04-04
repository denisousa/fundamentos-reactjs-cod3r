import React from 'react'

export default props => 
    <div>
        <label htmlFor="stepInput">Step:</label>
        <input
            id="stepInput"
            type="number"
            value={props.step}
            onChange={e => props.onStepChange(+e.target.value)}
            style={{
                fontSize: '1.4rem',
                width: '60px'
            }}
        />
    </div>