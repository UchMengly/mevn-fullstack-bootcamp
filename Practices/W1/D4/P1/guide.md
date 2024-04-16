# W1 D4 Practice 1: Understanding Component's style, slot, form & input

### Setting up the Project
1. Open your terminal.
2. Navigate to the directory with existing the project.
   ```bash
   cd my-vue-app
   ```
3. Install dependencies by running:
   ```bash
   npm install
   ```

### Component Style
By default, all style written in `<style>` in any component are global.

1. **Scope Style:**
   - Scoped styles are defined within the `<style scoped>` tag of a Vue component.
   - They are isolated to the component, meaning they won't affect elements outside of it.
   - Create a new Vue component file, let's say `ScopedComponent.vue`, in the `src/components` directory.
   - Define your component template, script, and style as follows:
     ```html
     <!-- ScopedComponent.vue -->
     <template>
       <div class="scoped-component">
         <p>This is a scoped component!</p>
       </div>
     </template>

     <script>
     export default {
       name: 'ScopedComponent',
     }
     </script>

     <style scoped>
     .scoped-component {
       color: blue;
     }
     </style>
     ```
   - In your main App component (`App.vue`), import and use this component.
   
2. **Global Styles:**
   - Create a global styles file, for example, `styles.css`, in the `src/assets` directory.
   - Add your global CSS rules in this file.
   - Import this global styles file in your main `App.vue` file using `import './assets/styles.css';`.

### Component Slot
#### Explanation:
Slots in Vue 3 allow you to define placeholders in your component's template that can be filled with content when using the component. This allows for greater flexibility and reusability of components.
To use slots in Vue 3, you can follow these steps:

1. **Define a Parent Component:**
   Create a Vue component where you want to use slots. This will be the parent component.

   ```html
   <!-- ParentComponent.vue -->
   <template>
     <div>
       <h2>Parent Component</h2>
       <slot></slot>
     </div>
   </template>

   <script>
   export default {
     name: 'ParentComponent'
   }
   </script>
   ```

2. **Use the Slot:**
   Within the parent component's template, place a `<slot>` element where you want the content to be rendered.

3. **Define Child Components:**
   Create child components that will be rendered inside the slot.

   ```html
   <!-- ChildComponent.vue -->
   <template>
     <div>
       <h3>Child Component</h3>
       <p>This is content from the child component.</p>
     </div>
   </template>

   <script>
   export default {
     name: 'ChildComponent'
   }
   </script>
   ```

4. **Use Parent Component with Child Component:**
   In your application or another component, use the parent component and include the child component within its tags. Any content inside the parent component tags will be passed into the slot.

   ```html
   <template>
     <div>
       <ParentComponent>
         <ChildComponent></ChildComponent>
       </ParentComponent>
     </div>
   </template>

   <script>
   import ParentComponent from './ParentComponent.vue';
   import ChildComponent from './ChildComponent.vue';

   export default {
     components: {
       ParentComponent,
       ChildComponent
     }
   }
   </script>
   ```

In this example, the content of `ChildComponent` will be rendered inside the slot defined in `ParentComponent`. This allows for flexible composition of components, where the parent component can provide a template structure while allowing the child components to define their specific content.

### Form & Input
#### Explanation:
Vue 3 makes it easy to handle forms and inputs using the `v-model` directive, which enables two-way data binding between form input elements and Vue instance data.
1. Create a new Vue component file, e.g., `FormComponent.vue`.
2. Define your component template, script, and style as follows:
   ```html
   <!-- FormComponent.vue -->
   <template>
     <form @submit.prevent="submitForm">
       <label for="username">Username:</label>
       <input type="text" id="username" v-model="username">
       <button type="submit">Submit</button>
     </form>
   </template>

   <script>
   export default {
     name: 'FormComponent',
     data() {
       return {
         username: ''
       };
     },
     methods: {
       submitForm() {
         // Handle form submission
         console.log('Form submitted with username:', this.username);
       }
     }
   }
   </script>

   <style>
   /* Add styles if needed */
   </style>
   ```
3. In `App.vue`, use this component.

### Testing CSS Styles
- To test CSS styles, you can add various CSS rules and properties to the components' styles defined above.
- Experiment with different styles, such as colors, margins, padding, etc., to observe their effects on the components.