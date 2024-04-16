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
        <ProductCard v-for="product in productsData.products" :key="product.id" :product="product"
          @add-to-cart="cartAction.addCart" @remove-from-cart="cartAction.removeCart" />
      </div>
    </main>
  </div>
</template>
  
<script>
import ProductCard from "@/components/ProductCard.vue";
import { productStore } from "@/store/products";
import { cartStore } from "@/store/carts"
export default {
  components: {
    ProductCard,
  },
  setup() {
    const productsData = productStore();
    const cartAction = cartStore();
    return {
      productsData,
      cartAction
    }
  },
  methods: {

  },
  computed: {
    cartCount() {
      return this.cartAction.cart.length;
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
  