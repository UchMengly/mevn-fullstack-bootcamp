import { defineStore } from 'pinia'
export const cartStore = defineStore('carts', {
    state: () => ({
        cart: [],
    }),
    actions: {
        addCart(product) {
            const item = this.cart.find((item) => item.id === product.id);
            if (!item) {
                this.cart.push({ ...product });
                product.inCart = true;
            }
        },
        removeCart(product) {
            const index = this.cart.findIndex((item) => item.id === product.id);
            if (index !== -1) {
                this.cart.splice(index, 1);
                product.inCart = false;
            }
        }
    }
})