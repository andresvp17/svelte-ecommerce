import { get, writable } from "svelte/store";

export const cartItems = writable([]) 

export const addProducts = (id, price) => {
    let products = get(cartItems)
    let productPosition = products.find(product => product.id === id)
    if (productPosition) {
        return cartItems.update(() => {
            let updatedProducts = products.map(product => {
                if (product.id === id) {
                    return { ...product, quantity: product.quantity + 1 }
                }
                return product
            })
            return updatedProducts
        })
    } 
    return cartItems.update(() => [...products, { id, quantity: 1, price }])
}

export const removeProduct = (id) => {
    let products = get(cartItems)
    let productPosition = products.findIndex(product => product.id === id)

    if (products[productPosition]?.quantity - 1 === 0) products.splice(productPosition, 1)

    return cartItems.update(() => {
        let updatedProducts = products.map(product => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity - 1 }
            }
            return product
        })
        return updatedProducts
    })
}