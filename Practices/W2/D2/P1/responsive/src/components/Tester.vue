<template>
  <div>
    <div class="flex justify-center mb-4">
      <button @click="toggleView" class="px-4 py-2 bg-blue-500 text-white rounded-md">Current View : {{currentView}}</button>
    </div>
    <div :class="containerClasses" class="transition duration-100 ease-in-out">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentView: 'mobile',
      views: ['mobile', 'small', 'medium', 'large', 'full']
    };
  },
  computed: {
    containerClasses() {
      return {
        'max-w-xs': this.currentView === 'mobile',
        'max-w-sm': this.currentView === 'small',
        'max-w-md': this.currentView === 'medium',
        'max-w-lg': this.currentView === 'large',
        'w-full': this.currentView === 'full',
        'mx-auto': true,
        'p-4': true,
        'bg-gray-200': true,
        'rounded-md': true,
      };
    }
  },
  methods: {
    toggleView() {
      const currentIndex = this.views.indexOf(this.currentView);
      this.currentView = this.views[(currentIndex + 1) % this.views.length];
    }
  }
};
</script>
