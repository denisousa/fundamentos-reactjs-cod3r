import React from 'react'
import products from '../../data/products'

export default props => {
    function getProducts() {
        return products.map(product => {
            return <li key={product.id}>{product.id} - {product.name} -> {product.price} </li>
        })
    }

    return (
        <div>
            <h2>Loop</h2>
            <ul>
                {getProducts()}
            </ul>
        </div>
    )
}