# User List MERN Application

Welcome to the User List MERN Application! This project showcases a comprehensive implementation of the MERN (MongoDB, Express.js, React.js, Node.js) stack to create a dynamic and responsive web application for managing a list of users.

## Table of Contents

- [User List MERN Application](#user-list-mern-application)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Contributing](#contributing)
  - [Contact](#contact)

## Introduction

This application is a CRUD (Create, Read, Update, Delete) system for managing user information. It provides a seamless interface for adding, viewing, editing, and deleting users from a centralized database.

## Features

- **Create Users:** Add new users with details such as name, email, and phone number.
- **View Users:** Display a list of all users with their details.
- **Update Users:** Edit user information directly from the list.
- **Delete Users:** Remove users from the database.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Real-time Updates:** Instant feedback on CRUD operations.

## Technologies Used

- **Frontend:**
  - React.js
  - CSS3
  - Bootstrap

- **Backend:**
  - Node.js
  - Express.js

- **Database:**
  - MongoDB

- **Others:**
  - Mongoose (for MongoDB object modeling)
  - Axios (for making HTTP requests)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/zahralatif/userlist-MERN.git
   cd userlist-MERN
   ```

2. **Install dependencies:**
   ```sh
   # Install backend dependencies
   cd server
   npm install
   
   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. **Setup environment variables:**
   Create a `.env` file in the `server` directory with the following content:
   ```env
   MONGO_URL=your_mongodb_connection_string
   PORT=3000
   ```

4. **Run the application:**
   ```sh
   # Run backend server
   cd server
   npm start
   
   # Run frontend server
   cd ../client
   npm start
   ```

## Usage

Once the application is up and running, you can access it at `http://localhost:3000` (or the port specified in your environment variables). The user interface will allow you to perform all CRUD operations seamlessly.

## API Endpoints

The backend API provides the following endpoints:

- **GET /api/users:** Retrieve all users.
- **POST /api/users:** Add a new user.
- **GET /api/users/:id:** Retrieve a user by ID.
- **PUT /api/users/:id:** Update a user by ID.
- **DELETE /api/users/:id:** Delete a user by ID.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## Contact

For any inquiries or feedback, feel free to reach out:

- Zahra Latif
- [GitHub Profile](https://github.com/zahralatif)
- [Email](mailto:zahralatif.dev@gmail.com)
