# W1 D5 Practice 1: Using Pinia with Vue 3

Pinia is a state management library for Vue.js that is designed to work seamlessly with Vue 3. It provides a simple and intuitive API for managing application state, making it easy to share data between components and manage complex application state.

In this tutorial, we will walk through the steps of setting up and using Pinia with Vue 3 in a Vue project.

## Step 1: Setting up the Project & Install Pinia
1. Open your terminal.
2. Navigate to the directory with existing the project.
   ```bash
   cd state-management
   ```
3. Install dependencies by running:
   ```bash
   npm install
   ```
4.  you need to install Pinia in your Vue project. You can do this via npm or yarn:

```bash
npm install pinia
```

## Step 2: Setup Pinia in your Vue App

Once Pinia is installed, you need to set it up in your Vue app. This involves creating a Pinia store and using it to manage your application state.

Create a new file called `pinia.js` in your project's `src` directory:

```javascript
import { createPinia } from 'pinia'

const pinia = createPinia()

export default pinia
```

Next, import the Pinia instance into your main Vue app file (usually `main.js` or `App.vue`) and use it to provide Pinia to your entire Vue app:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import pinia from './pinia.js'

const app = createApp(App)

app.use(pinia)

app.mount('#app')
```

## Step 3: Define and Use Pinia Stores

Now that Pinia is set up in your Vue app, you can define and use Pinia stores to manage your application state.

Create a new file called `counter.js` in your project's `src/store` directory:

```javascript
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})
```

Now, you can use this store in your Vue components:

```html
<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment()">Increment</button>
    <button @click="counter.decrement()">Decrement</button>
  </div>
</template>

<script>
import { useCounterStore } from '@/store/counter'

export default {
  setup() {
    const counter = useCounterStore()

    return {
      counter
    }
  }
}
</script>
```

### Getters:

Getters in Pinia are functions that compute derived state from the store's state. They are used to access and compute values based on the state.

Let's add a getter to our counter store to double the count:

```javascript
import { counterStore } from './store'

counterStore.defineGetters({
  doubleCount: (state) => state.count * 2,
})
```

### Actions:

Actions in Pinia are functions used to perform asynchronous operations or to mutate the store's state.

Let's add an action to increment the count:

```javascript
import { counterStore } from './store'

counterStore.defineActions({
  increment() {
    this.count++
  },
})
```

### Using the Store in Components:

Now, let's see how to use the store in Vue components:

```html
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { counterStore } from './store'

export default {
  data() {
    return {
      count: counterStore.count,
      doubleCount: counterStore.doubleCount,
    }
  },
  methods: {
    increment() {
      counterStore.increment()
    },
  },
}
</script>
```
