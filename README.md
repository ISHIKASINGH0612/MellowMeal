🌟 Overview

MellowMeal is a beautifully designed, interactive food ordering web application built using React + Vite.
The project focuses on delivering a smooth UI, aesthetic design, and clean component architecture, providing users with a simple yet engaging experience while browsing food menus.

Users are welcomed with a visually appealing Opening Page, followed by an interactive Menu Explorer, where they can filter dishes by category (Breakfast, Lunch, Evening, Dinner, All). Each item displays its image, description, and an order button.

🚀 Features
🔷 1. Opening Landing Page

Full-screen aesthetic background

Smooth fade + slide animations

“Explore Menu” button for navigation

Brand title & tagline

![alt text](public/images/screen1.png)

🔷 2. Interactive Menu Page

Filter menu items by category

Dynamic rendering using React Hooks

Elegant card layout with images, titles, descriptions

Uniform image sizes using CSS object-fit

Highlighted active filter buttons

Fully responsive grid

![alt text](public/images/screen2.png)

🔷 3. Clean Component Architecture

OpeningPage.jsx

Restaurant.jsx

MenuCard.jsx

Navbar.jsx

menuApi.js (Mock API data)
![alt text](public/images/screen3.png)

🔷 4. Smooth Page Navigation

Explore button scrolls/navigates to menu

Order button can navigate to a separate order page

🔷 5. No Backend Needed (Mock API)

Data stored locally in menuApi.js

Serves as a replacement for real API during development

📁 Project Structure
MellowMeal/
│── public/
│   └── images/ (backgrounds & food items)
│
│── src/
│   ├── components/
│   │   ├── OpeningPage/
│   │   │   └── OpeningPage.jsx
│   │   ├── Basics/
│   │   │   └── Restaurant.jsx
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx
│   │   ├── MenuCard/
│   │   │   └── MenuCard.jsx
│   │   └── Hooks/ (optional hooks)
│   │
│   ├── menuApi.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── OpeningPage.css
│   └── style.css
│
└── README.md

🛠️ Tech Stack
Frontend

React.js

Vite

JSX Components

CSS3

Flexbox + Grid

Tools

VS Code

Git & GitHub

Chrome DevTools

🔧 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/YOUR-USERNAME/MellowMeal.git

2️⃣ Navigate to project directory
cd MellowMeal

3️⃣ Install dependencies
npm install

4️⃣ Run the development server
npm run dev


Your app will start at:

http://localhost:5173/

🎨 Design Choices
✔ Purple, dark-themed UI
✔ Smooth animation transitions
✔ Large, clear dish images
✔ Clean card layout
✔ Aesthetic typography (Cormorant Garamond + Lato)

The goal was to create a calming, premium restaurant feel.

📦 Mock API (menuApi.js)

The project uses a local JSON-like array to mimic backend API data.
Each food item object includes:

{
  id: 1,
  image: "images/maggi.jpg",
  name: "Maggi",
  category: "breakfast",
  price: "12₹",
  description: "Tasty hot Maggi..."
}


This allows frontend UI to function without a backend.

📚 React Concepts Used

useState Hook

Props (passing data to components)

Array.map() for dynamic rendering

Component composition

Conditional rendering

Event handlers (onClick)

🎯 Future Enhancements

Login / Signup page

Add to Cart functionality

Checkout Page

Real backend API integration

Admin panel for adding/editing menu items

Dark mode

Mobile-first redesign

👩‍💻 Author

Ishika Singh
Passionate Full-Stack Developer in making
Loves building beautiful UI and practical real-world projects.

⭐ If you liked this project

Donot forget to give it a star ⭐ on GitHub!