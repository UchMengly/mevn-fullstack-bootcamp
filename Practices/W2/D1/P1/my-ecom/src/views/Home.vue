<template>
  <div>
    <nav class="container-fluid">
      <ul>
        <li><strong>PC Accessories Shop</strong></li>
      </ul>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li>
          <a href="#" role="button">
            Cart
            <span class="cart-count" v-if="cartCount > 0">{{ cartCount }}</span>
          </a>
        </li>
      </ul>
    </nav>
    <main class="container">
      <div class="grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
          @remove-from-cart="removeFromCart"
        />
      </div>
    </main>
  </div>
</template>
  
<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
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
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(product) {
      const item = this.cart.find((item) => item.id === product.id);
      if (!item) {
        this.cart.push({ ...product });
        product.inCart = true;
      }
    },
    removeFromCart(product) {
      const index = this.cart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        this.cart.splice(index, 1);
        product.inCart = false;
      }
    },
  },
  computed: {
    cartCount() {
      return this.cart.length;
    },
  },
};
</script>
  
<style>
/* Global Styles */
body,
html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.container-fluid {
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
}

.container-fluid ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

.container-fluid li a {
  text-decoration: none;
  color: #333;
}

.container {
  padding: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
.cart-count {
  background-color: #ff4500;
  color: white;
  border-radius: 50%;
  padding: 0 6px;
  font-size: 0.75rem;
  margin-left: 4px;
  vertical-align: top;
}
</style>
  