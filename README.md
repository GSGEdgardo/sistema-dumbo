#Sistema Dumbo

This project is a MERN (MongoDB, Express.js, React, Node.js) stack application.

## Technologies Used
- Node.js (18.17.1)
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
3. Open MongoDB Compass, click the "Edit Connection String" option and replace the localhost URL with the MongoURL below this message

```bash
MONGODB_URI=mongodb+srv://EdgardoOrtiz:Gaog_0197@cluster0.1kgwezc.mongodb.net
```
4. Click "Connect" and the database will be connected to the backend already
5. IMPORTANT, this database is a cluster on Mongo Atlas, it already have data inside, I'm going to delete it, but if you want to delete it you need to go into Mongo Compass, inside `test` database, and drop both collections, you can't drop the entire database but you can drop the collections.
6. Seed the database: if you're on src folder, run `node seeder.js`, if you're not on src folder, run `node src/seeder.js` instead
7. Start the backend server: `npm run dev`
8. Backend server URL: [http://localhost:3000](http://localhost:3000)

### Frontend
1. Navigate to "sistema-dumbo" folder, use `cd client`
2. Install frontend dependencies: `npm install`
3. Start the frontend server: `npm run dev`
4. Frontend server URL: [http://localhost:5173](http://localhost:5173)

### Postman Collection
- Find the Postman collection JSON file in the root directory of the project as 'Taller 2 OrtizE.postman_collection.json'.
