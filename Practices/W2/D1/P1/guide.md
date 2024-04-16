# W2 D1 : Utility-First CSS with Tailwind CSS 3

Watch recorded class at:
https://drive.google.com/file/d/1gVgl-39ry5_m453y53H0erto3SwAoU9z/view?usp=drivesdk

## Overview of Utility-First CSS

Utility-first CSS is a methodology where styles are applied directly in the HTML markup using functional or "utility"
classes. Each utility class has a single purpose or function, and by combining them directly in the markup, you can
construct complex designs without leaving the HTML.

## Installing Tailwind CSS 3 in a Pure HTML Project

1. Start by creating a new directory for your project and navigate into it:
   ```shell
   cd my-tailwind-project
   ```

2. Initialize a new project:
   ```shell
   npm init -y
   ```

3. Install Tailwind CSS via npm:
   ```shell
   npm install -D tailwindcss
   ```

4. Create a CSS file that will contain your styles, e.g., `styles.css`:
   ```shell
   touch styles.css
   ```

5. Add the Tailwind directives to your CSS file:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. Generate your `tailwind.config.js` file:
   ```shell
   npx tailwindcss init
   ```

7. Add a build script to your `package.json`:
   ```json
   {
     "scripts": {
       "build-css": "tailwindcss build -i styles.css -o output.css"
     }
   }
   ```

8. Configure `tailwind.config.js`

   ```js
   module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
    }
   ```

8. Run the build script to generate your output CSS:
   ```shell
   npm run build-css
   ```

9. Start using Tailwind in your HTML
   Add your compiled CSS file to the `<head>` and start using Tailwind’s utility classes to style your content.
   ```html
    <!doctype html>
    <html>
    <head>
         ...
         <link href="output.css" rel="stylesheet">
     </head>
     <body>
         ...
     </body>
     </html>
    ```

## Configuration and Customization

- You can customize your `tailwind.config.js` file to extend or override the default Tailwind CSS configuration.
- For example, to change the primary color:
  ```js
  module.exports = {
    theme: {
        extend: {
            colors: {
                primary: '#ff3e00',
            },
        },
    },
  };
  ```

## Understanding Utility Classes

- Utility classes in Tailwind CSS are named using a consistent naming convention that makes it intuitive to pick up and
  learn.
- For example, `.text-center` aligns text to the center, `.mt-4` adds margin-top with the value of 1rem, etc.
