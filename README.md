# 🚀 RoleBase – MERN Role-Based Authentication System

A simple and attractive **MERN stack** project featuring **role-based authentication** for **Admin**, **Manager**, and **User** roles.  
It includes **JWT authentication**, **MongoDB integration**, and a **React frontend** styled with **Tailwind CSS (CDN)**.

---

## 📋 Features

✅ Register & Login using JWT authentication  
✅ Role-based dashboard access (Admin / Manager / User)  
✅ Protected routes using React Router  
✅ Simple UI with Tailwind CSS (CDN)  
✅ MongoDB + Express + React + Node setup  
✅ Logout and persistent login using localStorage  

---

## 🛠️ Tech Stack

**Frontend:** React, React Router, Tailwind CSS (via CDN)  
**Backend:** Node.js, Express.js, MongoDB, JWT, bcrypt  
**Database:** MongoDB  Atlas

---

## 📂 Folder Structure

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
https://github.com/shijuvtm/RoleBase-Access.git
cd RoleBase-Access
```
### 2️⃣ Setup Backend
```bash
cd backend
npm install
```
---

#### Create .env file:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/rolebase
JWT_SECRET=your_secret_key_here

---

**Generate a secure JWT secret:**
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```
---

### Start backend:
```bash
node server.js
```
**Server runs at ➡️ http://localhost:5000**

### 3️⃣ Setup Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at ➡️ http://localhost:5173

---

## 🧠 API Endpoints

**🔹 Register User**

POST /api/auth/register

{
  "name": "shiju",
  "email": "shiju@gmail.com",
  "password": "123456",
  "role": "Admin"
}

**🔹 Login User**

POST /api/auth/login

{
  "email": "shiju@gmail.com",
  "password": "123456"
}

**🔹 Response Example**

{
  "message": "Login successful",
  "user": {
    "id": "653c2e9e8f4a1f1b3a45f3c9",
    "name": "shiju",
    "email": "shiju@gmail.com",
    "role": "Admin"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}


---

### 🧑‍💼 Role Access

**Role	Accessible Routes**

Admin :- 	/admin, /manager, /user, /
Manager:- /manager, /user, /
User :- 	/user, /



---

## 🎨 Tailwind CSS (via CDN)

In your public/index.html, add this line inside <head>:

<script src="https://cdn.tailwindcss.com"></script>

No setup required — Tailwind works instantly.


---

## 🔒 Authentication Flow

1. User registers → Data stored in MongoDB Atlas with hashed password

2. On login → Backend validates credentials

3. JWT token generated and stored in localStorage

4. React Context manages user state

5. Protected routes check allowed roles using ProtectedRoute component

   
## 👨‍💻 Author

**Shiju A**
💼 Full Stack Developer | JavaScript & Python Enthusiast
📧 shijuavtm@gmail.com



