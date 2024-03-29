import React from 'react'
import If from './If'

export default props => {
    return (
        <div>
            <h2>O número é {props.number}</h2>
            <If test={props.number % 2 === 0}>
                <span>Par</span>
            </If>
            <If test={props.number % 1 === 0}>
                <span>Impar</span>
            </If>
        </div>
    )
}