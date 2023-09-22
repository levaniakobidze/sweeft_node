# 🚗 Automobile Parking Application

The Automobile Parking Application is a Node.js and Express-based API that provides functionality for users to manage their automobiles and book parking spaces in designated zones. It also includes an administrator interface for managing parking zones.

## Features

- 🔑 User Registration, Authorization, and Password Recovery
- 🚘 Add, Edit, and Delete Automobiles in User Profiles
- 💰 Virtual Balance for Users (Initial Balance: 100)
- 🛠 Administrator Dashboard for Managing Parking Zones
- 🅿️ Book Parking Spaces and Track Parking Histories
- 📖 View User-Specific Parking Histories

## Technologies Used

- 🟩 Node.js
- 🚀 Express.js
- 🐬 MySQL
- 🟨 JavaScript

## Folder Structure

- `app/`: Contains core application logic.
  - `controllers/`: Handles request processing and response generation.
  - `models/`: Defines database models for User, Car, ParkingZone, ParkingHistory.
  - `routes/`: Manages routing for user and admin actions.
- `config/`: Contains database configuration settings.
- `tests/`: Contains unit and integration tests for the API.
- `package.json`: Lists dependencies and scripts for the application.
- `server.js`: Entry point of the application.

## Setup

1. 📋 Clone this repository.
2. 📦 Install dependencies with `npm install`.
3. ⚙️ Configure the MySQL database in `config/database.js`.
4. 🚀 Run the application with `node server.js`.

## Usage

- 🌐 Visit `http://localhost:8000` to access the application.
- 🚀 API routes can be accessed using tools like Postman or cURL.
