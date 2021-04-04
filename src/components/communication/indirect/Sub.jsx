import React from 'react'

export default props => {
    function action() {
        props.click(Math.random(), 'Generate')
    }

    return (
        <div>
            <button onClick={action}>Change</button>
        </div>
    )
}
