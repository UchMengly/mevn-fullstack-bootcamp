<template>
  <div class="product-card">
    <img :src="product.image" alt="Product Image" class="product-image" />
    <h2>{{ product.name }}</h2>
    <p>{{ product.price }}</p>
    <button :class="{ 'in-cart': product.inCart }" @click="toggleCart">
      {{ product.inCart ? "In Cart" : "Add to Cart" }}
    </button>
  </div>
</template>
  
  <script>
export default {
  props: ["product"],
  methods: {
    toggleCart() {
      this.$emit(
        this.product.inCart ? "remove-from-cart" : "add-to-cart",
        this.product
      );
    },
  },
};
</script>
  
  <style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #fff;
  transition: box-shadow 0.3s ease-in-out;
}

.product-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-card h2 {
  margin: 0.5rem 0;
  font-size: 1.2rem;
  color: #333;
}

.product-card p {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #666;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #0056b3;
}

button.in-cart {
  background-color: #4caf50; /* A green background to indicate the item is in the cart */
}

button.in-cart:hover {
  background-color: #45a049; /* A darker green for hover state */
}
</style>
  