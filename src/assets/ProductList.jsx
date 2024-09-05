import React from 'react'

export default function ProductList({ products }) {
  return (
    <>
        <ul>
            { products.map(el => (
                <li key = {el.id}> {el.title} | {el.category} | $ {el.price}</li>
            ))}
        </ul>
    </>
  )
}
