# Frontend Project

A web application project showcasing a structured frontend designed for an e-commerce or similar system. The project includes features such as categories, banners, and a dynamic product display.

## Key Features
- **Dynamic Categories**: Displays various product categories dynamically.
- **Product Details**: Detailed view for individual products.
- **Banners**: Attractive promotional banners integrated into the UI.
- **Responsive Design**: Fully responsive layout accessible on all devices.
- **Reusable Components**: Efficient and modular structure using React components.

## Project Structure
- **Home.jsx**: Renders the homepage layout.
- **Categories.jsx**: Displays product categories.
- **Banner.jsx & Banner2.jsx**: Renders promotional banners.
- **Category.jsx**: Handles individual category data and display.
- **ProductDetails.jsx**: Displays detailed information about a selected product.
- **Navbar.jsx**: Navigation bar for the website.
- **Footer.jsx**: Footer section.

## Technologies Used
- **Frontend**: React.js
- **Styling**: CSS, Tailwind CSS, DaisyUI



## Installation

Follow these steps to set up and run the project locally:

### Step 1: Create a New Vite Project
Create a new Vite project using the following commands:
```bash
npm create vite@latest .
cd my-project
```

### Step 2: Install Tailwind CSS
Install Tailwind CSS and its peer dependencies, and generate configuration files:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3: Configure Template Paths
Add the paths to all of your template files in the `tailwind.config.js` file:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 4: Add Tailwind Directives to CSS
Include the Tailwind directives in the `./src/index.css` file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 5: Start the Development Server
Run the development server to start your project:
```bash
npm run dev
```


### Step 6: Start Using Tailwind CSS
Use Tailwind’s utility classes to style your content. For example, in `App.jsx`:
```javascript
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```
### Step 7: Install DaisyUI
Install DaisyUI for additional pre-designed components:
```bash
npm i -D daisyui@latest
```
Add DaisyUI to the `plugins` array in `tailwind.config.js`:
```javascript
plugins: [
    require('daisyui'),
  ],
```
