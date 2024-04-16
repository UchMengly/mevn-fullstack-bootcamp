import { defineStore } from 'pinia'
export const productStore = defineStore('product', {
    state: () => ({
        products: [
            {
                id: 1,
                name: "Gaming Mouse",
                price: "$50",
                inCart: false,
                image: "https://source.unsplash.com/random/200x200?gaming-mouse",
            },
            {
                id: 2,
                name: "Mechanical Keyboard",
                price: "$70",
                inCart: false,
                image:
                    "https://source.unsplash.com/random/200x200?mechanical-keyboard",
            },
            {
                id: 3,
                name: "Gaming Headset",
                price: "$90",
                inCart: false,
                image: "https://source.unsplash.com/random/200x200?gaming-headset",
            },
            {
                id: 4,
                name: "Monitor",
                price: "$200",
                inCart: false,
                image: "https://source.unsplash.com/random/200x200?monitor",
            },
            {
                id: 5,
                name: "Graphics Card",
                price: "$500",
                inCart: false,
                image: "https://source.unsplash.com/random/200x200?graphics-card",
            },
            {
                id: 6,
                name: "Gaming Chair",
                price: "$250",
                inCart: false,
                image: "https://source.unsplash.com/random/200x200?gaming-chair",
            },
        ]

    })
})