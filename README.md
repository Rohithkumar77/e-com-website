
---

# E-commerce Website

![E-commerce Website Screenshot](./assets/screenshot.png](https://github.com/Rohithkumar77/Assests/blob/main/Screenshot_18-9-2024_174547_localhost.j)


This is an e-commerce website built with **Node.js**, **Express.js**, and **MongoDB** for backend operations. The project supports environment-based configuration and has a frontend setup.I have used **ReactJS** for frontend

## Table of Contents
1. [Getting Started](#getting-started)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Environment Variables](#environment-variables)
5. [Running the Project](#running-the-project)
6. [Scripts](#scripts)
7. [Technologies Used](#technologies-used)

## Getting Started

Follow these steps to get the project up and running on your local machine.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (either local or cloud)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd ecom-website
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```


## Environment Variables

You will need to set up the following environment variables in a `.env` file located in the root of the project.

Create the `.env` file:

```bash
touch .env
```

Add the following variables to the `.env` file:

```plaintext
MONGO_URI=<Your MongoDB URI>
PORT=<Your desired port, e.g., 5000>
NODE_ENV=production
```

## Running the Project

1. **Development Mode:**
   ```bash
   npm run dev
   ```

2. **Production Build:**
   To create a production build and run the project:

   ```bash
   npm run build
   npm run start
   ```

## Scripts

Here are the available scripts you can run:

- **`npm run dev`**: Runs the backend in development mode using `nodemon`.
- **`npm run build`**: Installs dependencies, including frontend, and builds the frontend.
- **`npm run start`**: Starts the backend in production mode.

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: ODM for MongoDB
- **Nodemon**: Development tool for auto-restarting the server
- **Cross-env**: Cross-platform environment variable support
- **dotenv**: Module to load environment variables
- **ReactJs**: FrontEnd/ User Interface
---

Feel free to modify this README according to any changes in your project structure.
