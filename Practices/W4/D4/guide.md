# W4 D4 : Using MongoDB with Express via Mongoose

Watch recorded class at:
https://drive.google.com/file/d/1WUiW2eH3iwlWqi2Yn_eDJPMepj7W-Z6a/view?usp=drivesdk

MongoDB is a popular NoSQL database that provides a flexible and scalable solution for storing and managing data. When using MongoDB with Express.js, Mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js, simplifies interaction with the database. In this tutorial, we'll cover how to set up MongoDB with Express.js using Mongoose.

## Introduction to NoSQL

NoSQL databases like MongoDB and DynamoDB are designed to store and manage unstructured or semi-structured data. Unlike traditional SQL databases, they don't require a fixed schema and provide horizontal scalability.

## NoSQL vs SQL Database

- **Performance**: NoSQL databases often offer better performance for read-heavy workloads and horizontal scaling due to their distributed architecture.
- **Use Cases**: NoSQL databases are suitable for scenarios requiring flexible data models, real-time analytics, and scalability, such as social networks, IoT applications, and content management systems.
- **Data Organization**: NoSQL databases organize data in collections (MongoDB) or tables (DynamoDB), where each document or item can have a different structure.
- **Deployment Cost**: NoSQL databases can be more cost-effective for scaling horizontally, as they often require less infrastructure overhead compared to vertically scaling SQL databases.

## Setting up MongoDB via Docker

1. Install Docker on your machine if you haven't already. [Docker Installation Guide](https://docs.docker.com/get-docker/)
2. Pull the MongoDB Docker image:

   ```bash
   docker pull mongo
   ```

3. Run MongoDB as a Docker container:

   ```bash
   docker run --name my-mongodb -d -p 27017:27017 mongo
   ```

## Connect to MongoDB in Express App

1. Install Mongoose in your Express.js project:

   ```bash
   npm install mongoose
   ```

2. In your Express app, connect to MongoDB using Mongoose:

   ```javascript
   const mongoose = require('mongoose');

   // MongoDB connection URI
   const mongoURI = 'mongodb://localhost:27017/mydatabase';

   // Connect to MongoDB
   mongoose.connect(mongoURI)
     .then(() => console.log('MongoDB connected'))
     .catch(err => console.error('MongoDB connection error:', err));
   ```

3. Define Mongoose schemas and models to interact with MongoDB collections:

   ```javascript
   // Define a schema
   const userSchema = new mongoose.Schema({
     name: String,
     age: Number,
     email: String
   });

   // Create a model
   const User = mongoose.model('User', userSchema);

   // Example usage
   const newUser = new User({ name: 'John', age: 30, email: 'john@example.com' });
   newUser.save().then((user) => console.log('User created:', user)).catch(err => console.error('Error:', err));
   ```