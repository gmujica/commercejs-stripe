import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Products, NavBar, Cart } from './components'

const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

    const fetchProducts = async () => {
        const { data } = await commerce.products.list()

        setProducts(data)
    }

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve()

        setCart(cart)
    }

    const handleAddToCart = async (productId, quanity) => {
        const item = await commerce.cart.add(productId, quanity)

        setCart(item.cart)
    }

    useEffect(() => {
        fetchProducts()
        fetchCart()
    }, [])

    console.log('cart from App', cart);

    return (
        <div>
            <NavBar totalItems={cart.total_items} />
            {/*<Products products={products} onAddToCart={handleAddToCart} />*/}
            <Cart cart={cart} />
        </div>
    )
}

export default App
