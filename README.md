# 🚀 React Tasks Dashboard (CodeLab PRO)

A modern **React-based Tasks Dashboard** with authentication, modular task system, and clean UI/UX. Built to help developers practice logic building and improve problem-solving skills.

---

## 🌐 Live Demo

🔗 https://preeminent-arithmetic-3a737b.netlify.app/auth

## 📂 GitHub Repository

🔗 https://github.com/AhmedDevx07/React-Tasks-Dashboard

---

## ✨ Features

* 🔐 Authentication System (Login / Signup / Google Auth)
* 🧠 Modular Task System (Dynamic Routes)
* 🎨 Modern UI (Tailwind CSS + Glassmorphism)
* 🔄 Protected Routes (Private Dashboard Access)
* ⚡ Fast Performance (Vite + React)
* 🌍 Responsive Design

---

## 🛠️ Tech Stack

* ⚛️ React.js
* 🔥 Firebase Authentication
* 🎨 Tailwind CSS
* 🧭 React Router DOM
* ⚡ Vite

---

## 📁 Project Structure

```bash
src/
 ├── components/
 ├── context/
 │    ├── AuthContext.jsx
 │    └── TaskContext.jsx
 ├── hooks/
 │    └── useAuth.js
 ├── layout/
 │    └── DashboardLayout.jsx
 ├── pages/
 │    ├── Auth.jsx
 │    ├── TaskPage.jsx
 │    └── NotFound.jsx
 ├── routes/
 │    └── PrivateRoute.jsx
 ├── firebase/
 │    └── firebase.js
 ├── App.jsx
 └── main.jsx
```

---

## 🔐 Authentication Flow

1. User lands on `/auth`
2. Login / Signup / Google Auth
3. Firebase verifies user
4. Redirect to Dashboard
5. Protected routes prevent unauthorized access

---

## ⚙️ Installation & Setup

```bash
# Clone the repo
git clone https://github.com/AhmedDevx07/React-Tasks-Dashboard.git

# Navigate to project
cd React-Tasks-Dashboard

# Install dependencies
npm install

# Run project
npm run dev
```

---

## 🔥 Environment Variables

Create a `.env` file in root:

```env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

---
 
## 🚀 Future Improvements

* 🔹 User Profile System
* 🔹 Firestore Integration (Save Tasks)
* 🔹 Dark/Light Theme Toggle
* 🔹 Notifications System
* 🔹 Role-Based Access (Admin/User)

---

## 👨‍💻 Author

**Muhammad Ahmed**

* 💼 MERN Stack Developer
* 🌐 GitHub: https://github.com/AhmedDevx07

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and share it with others!

---
