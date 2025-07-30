# 🚀 Backend API – Social Post App

This is the **backend service** for the Social Post App, built with **Node.js**, **Express**, and **MongoDB**. It handles authentication, user management, and post creation/retrieval.

---

## 📌 Features

- 🔐 **Authentication (JWT-based)**

  - Signup
  - Login
  - Password encryption with bcrypt

- 🧑‍💻 **User Management**

  - Register a new user
  - Authenticate user on login

- 📝 **Post Management**

  - Create a post
  - Get all posts
  - Search posts by title or content

- ✅ **Validation**
  - Input validation on user and post data

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Security:** JWT, bcrypt
- **Environment Config:** dotenv
- **CORS:** Enabled for frontend integration

---

## 📁 Folder Structure

backend/
├── index.js
├── models/
│ ├── user.js
│ └── project.js
├── routes/
│ ├── auth.js
│ └── post.js
| |\_\_ profile.js
├── utils/
│ └── validation.js
├── middleware/
│ └── auth.js
├── .env
├── db.js
└── package.json

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/social-post-backend.git
cd social-post-backend
2️⃣ Install Dependencies

npm install
3️⃣ Configure Environment Variables
Create a .env file in the root of the project:


PORT=7777
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4️⃣ Run the Server
For development (with auto-restart using nodemon):


nodemon src/app.js
Or for production:

npm start

```
