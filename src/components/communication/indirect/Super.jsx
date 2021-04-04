import React, { useState } from 'react'
import Sub from './Sub'

export default props =>
    {
        const [text, setText] = useState('Value')
        const [num, setNum] = useState(0)

        function whenClickSub(value, text) {
            console.log('Action')
            setText(text)
            setNum(value)
        }

        return (    
            <div>
                <h4>{text}: {num}</h4>
                <Sub click={whenClickSub}></Sub>
            </div>
        )
    }
