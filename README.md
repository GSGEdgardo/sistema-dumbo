#Sistema Dumbo

This project is a MERN (MongoDB, Express.js, React, Node.js) stack application.

## Technologies Used
- Node.js (14.xx)
- Express.js
- MongoDB
- React
- Tailwind CSS

## Setup

### Prerequisites
- Node.js
- MongoDB
- MongoDB Compass
- Postman

### Install Dependencies
1. Clone the repository: `git clone https://github.com/GSGEdgardo/sistema-dumbo.git`
2. Install MERN stack technologies: MongoDB, Node.js, React
3. Install MongoDB Compass for database management
4. Install Postman for API testing

### Backend
1. Navigate to the backend directory: `cd sistema-dumbo/src`
2. Install backend dependencies: `npm install`
3. Create a .env file in the backend directory with the following content:

```bash
MONGODB_URI=mongodb+srv://EdgardoOrtiz:Gaog_0197@cluster0.1kgwezc.mongodb.net/
```
4. Seed the database: `node src/seeder.js`
5. Start the backend server: `npm run dev`
6. Backend server URL: [http://localhost:3000](http://localhost:3000)

### Frontend
1. Navigate to the frontend directory: `cd sistema-dumbo/client`
2. Install frontend dependencies: `npm install`
3. Start the frontend server: `npm start`
4. Frontend server URL: [http://localhost:5173](http://localhost:5173)

### Postman Collection
- Find the Postman collection JSON file in the root directory of the project as 'Taller 2 OrtizE.postman_collection.json'.
