import React from 'react'
import Son from './Son'

export default props =>
    <div>
        <Son lastname="Sousa"><strong>João</strong></Son>
        <Son {...props}><strong>João</strong></Son>
        <Son lastname={props.lastname}>Maria</Son>
        <Son lastname="Carvalho">Pedro</Son>
    </div>