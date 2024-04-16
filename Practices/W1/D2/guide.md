# W1 D2: Getting Started with Vue 3 as Widget (CDN)

Watch recorded class at:
https://drive.google.com/file/d/1mUN_eEEP7nVxbfS2nQhNdfKkcZwi_6sl/view?usp=sharing

In this exercise, we'll be using Vue 3 as a CDN to understand some fundamental concepts. Ensure you have a basic understanding of HTML and JavaScript before proceeding.

## Setting Up Vue CDN

1. **Include Vue CDN:**
    - Open your `index.html` file.
    - Add the Vue 3 CDN script just before the closing `</head>` tag:
        ```html
        <head>
            ...
            ...
            <script src="https://unpkg.com/vue@3"></script>
        </head>
        ```
2. **Create `app.js` File:**
    - Create a new file called `app.js` to put your Vue logic.
    - Ensure to include this file in your `index.html` before closing 
    `</body>` tag:
        ```html
        <body>
            ...
            <script src="app.js"></script>
        </body>
        ```

## Understanding Vue Instances

1. **Creating a Vue Instance:**
    - Open your `app.js` file.
    - Initialize a Vue instance:
        ```javascript
        const app = Vue.createApp({
            // Options will go here
        });
        ```

## Template Syntax and Directives

1. **Writing Templates in Vue Instance:**

    When writing templates within the Vue instance, you define the HTML structure directly within the JavaScript code. 
    ```javascript
    const app = Vue.createApp({
    template: `
        <div>
            <h1>Hello, Vue!</h1>
            <p>{{ message }}</p>
        </div>
            `,
        data() {
            return {
                message: 'Welcome to Vue!'
            };
        }
    });
    app.mount('#app');
    ```
2. **Writing Templates in index.html File**

    Alternatively, you can write the template directly within the index.html file by using the Vue directives directly in your HTML.
    ```html
    <div id="app">
        <h1>Hello, Vue!</h1>
        <p>{{ message }}</p>
    </div>
    <script>
    const app = Vue.createApp({
        data() {
            return {
                message: 'Welcome to Vue!'
            };
        }
    });
    app.mount('#app');
    </script>
    ```
3. **Binding Data:**
    - Inside the Vue instance in `app.js`, define a `data` property with some values:
        ```javascript
        const app = Vue.createApp({
            data() {
                return {
                    message: 'Hello, Vue!'
                }
            }
        });
        ```
    - In your HTML, use double curly braces `{{ }}` to bind the data:
        ```html
        <h2>{{ message }}</h2>
        ```

4. **Using Directives:**
    - Add an input field to your HTML:
        ```html
        <input type="text" v-model="message">
        ```
    - This binds the input field's value to the `message` data property. Try changing the input value and see how it affects the displayed message.

## Handling User Input with v-model

1. **Creating Reactive Forms:**
    - Inside `app.js`, add another data property for form handling:
        ```javascript
        const app = Vue.createApp({
            data() {
                return {
                    userInput: ''
                }
            }
        });
        ```
    - Bind this property to an input field:
        ```html
        <input type="text" v-model="userInput">
        ```

## Handling Mouse Events

1. **Mouse Event Handling:**
    - Inside `app.js`, define methods to handle mouse events:
        ```javascript
        const app = Vue.createApp({
            data() {
                return {
                    counter: 0
                }
            },
            methods: {
                increment() {
                    this.counter++;
                },
                decrement() {
                    this.counter--;
                }
            }
        });
        ```
    - Bind these methods to HTML elements:
        ```html
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        ```
    - This will increment or decrement the `counter` data property based on the button clicks.


## (Bonus) Creating a Small Project with Vue 3 as Widget (CDN)

In this exercise, you'll apply the concepts you've learned about Vue 3 CDN by creating a small interactive project. Let's build a simple to-do list application.

### Project Overview

The to-do list application should have the following functionalities:

- Display a list of to-do items.
- Allow users to add new to-do items.
- Allow users to mark to-do items as completed or delete them.

### Steps to Implement

1. **Setup:**
   - Create a new directory for your project.
   - Inside the directory, create the following files:
     - `index.html`
     - `app.js`

2. **HTML Setup:**
   - Open `index.html` and set up the basic HTML structure.
   - Include the Vue CDN script and link your `app.js` file.
   - Create input fields and buttons for adding new to-do items:
     ```html
     <input type="text" id="todoInput" v-model="newTodo">
     <button @click="addTodo">Add</button>
     ```
   - Display the list of to-do items:
     ```html
     <ul>
         <li v-for="(todo, index) in todos" :key="index">
             {{ todo }}
             <button @click="completeTodo(index)">Complete</button>
             <button @click="deleteTodo(index)">Delete</button>
         </li>
     </ul>
     ```

3. **Vue Instance and Data Setup:**
   - Open `app.js`.
   - Initialize a Vue instance and define data properties for managing to-do items:
     ```javascript
     const app = Vue.createApp({
         data() {
             return {
                 newTodo: '',
                 todos: []
             };
         }
     });
     ```

4. **Implement Methods:**
   - Implement methods for adding, completing, and deleting to-do items:
     ```javascript
     const app = Vue.createApp({
         data() {
             return {
                 newTodo: '',
                 todos: []
             };
         },
         methods: {
             addTodo() {
                 if (this.newTodo.trim() !== '') {
                     this.todos.push(this.newTodo);
                     this.newTodo = '';
                 }
             },
             completeTodo(index) {
                 this.todos.splice(index, 1);
             },
             deleteTodo(index) {
                 this.todos.splice(index, 1);
             }
         }
     });
     ```

5. **Testing:**
   - Open `index.html` in your browser.
   - Use the input field and "Add" button to add new to-do items.
   - Use the "Complete" button to mark to-do items as completed.
   - Use the "Delete" button to delete to-do items.

## Conclusion

Congratulations! You've successfully created a simple to-do list application using Vue 3 CDN. This project demonstrates the application of Vue concepts such as data binding, event handling, and method invocation.

Feel free to further enhance this application by adding features like editing to-do items, filtering completed items, or styling to improve the user experience. Happy coding!



