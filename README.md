# 🏠 Airbnb Clone

A full-featured Airbnb-style home rental platform built with **Node.js**, **Express**, **MongoDB**, and **EJS**. This application allows users to act as **Hosts** (listing and managing properties) or **Clients** (browsing and favoriting properties).

---

## 🚀 Features

### 👥 Authentication
- Signup & Login with input validation
- Password hashing using `bcryptjs`
- Session-based authentication system

### 🧑‍💼 Host Panel
- Add new home listings with image uploads
- Edit existing listings
- Delete listings
- View all hosted properties

### 🧑‍💻 Client Panel
- Browse all available homes
- View detailed property pages
- Mark properties as favorites
- View personal favorites list

### 📦 Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** EJS Templates, Tailwind CSS
- **Database:** MongoDB + Mongoose
- **Authentication:** express-session, bcryptjs
- **Validation:** express-validator
- **File Handling:** multer

---

## 🗂️ Project Structure

```
airbnb-clone/
├── controllers/         # Logic for authentication, hosting, and store
├── models/              # User and Home schemas
├── routes/              # Route definitions
├── views/               # EJS templates (auth, host, store, partials)
├── public/              # Static files like CSS and images
├── uploads/             # Uploaded property images
├── app.js               # Main entry point
├── tailwind.config.js   # Tailwind CSS configuration
├── package.json         # Project dependencies
```

---

## 🖼️ Screenshots

### 🧑‍💼 Host Dashboard
*Manage listings, upload photos, and monitor your homes.*

> 📷 Upload your screenshot and replace the path below
![Host Dashboard Screenshot](./screenshots/host-dashboard.png)

---

### 🧑‍💻 Client Experience
*Browse homes, add to favorites, and view details.*

> 📷 Upload your screenshot and replace the path below
![Client Home Page Screenshot](./screenshots/client-homepage.png)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/airbnb-clone.git
cd airbnb-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file and include your configuration:

```env
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
```

### 4. Run the application

```bash
npm run dev
```

### 5. Access in browser

Visit: `http://localhost:3000`

---

