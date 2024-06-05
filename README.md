# MERN Stack E-commerce Application

# Overview

This is a full-featured e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js). The app provides a seamless shopping experience with a variety of products, a secure checkout process, and three integrated payment methods.

# Features

User Authentication (Registration, Login, Logout)
Product Listings with Search and Filter
Shopping Cart Management
Order Processing and History

# Admin Panel for Product and Order Management

# Three Payment Methods:

Credit Card
PayPal
Stripe

# Technologies Used

Frontend:
React.js
Redux for State Management
React Router for Navigation

# Backend:

Node.js
Express.js
MongoDB with Mongoose
Payment Integrations:
PayPal API
Stripe API
Custom Credit Card Processing

# Getting Started

# Prerequisites

# Make sure you have the following installed on your machine:

Node.js
MongoDB
npm (Node Package Manager)
Installation
Clone the repository:

git clone https://github.com/Reavampop/Mern-Ecommerce.git
cd mern-ecommerce-app
Install dependencies for both frontend and backend:

# For backend

cd backend
npm install

# For frontend

cd ../frontend
npm install
Set up environment variables:

Create a .env file in the backend directory and add the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
STRIPE_SECRET_KEY=your_stripe_secret_key
Running the Application
Start the backend server:

cd backend
npm start
Start the frontend development server:

cd frontend
npm start
Access the application:

Open your browser and go to http://localhost:3000

Folder Structure
arduino
Copy code
mern-ecommerce-app/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── utils/
│ ├── server.js
│ └── .env
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── redux/
│ │ ├── App.js
│ │ ├── index.js
│ └── .env
├── README.md
Contributing
Fork the repository.
Create your feature branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a Pull Request.
License
Distributed under the MIT License. See LICENSE for more information.

Contact
marckoDev - marckfriencecoto30@gmail.com

# Setup the server

# Project Link: https://github.com/Unshack/Graphic-Shirt
