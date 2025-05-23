# 🏠 Airbnb Clone

A fully functional Airbnb-style home rental platform built with **Node.js**, **Express**, **MongoDB**, and **EJS**. This application allows users to register as **Hosts** to list properties or as **Clients** to browse and favorite them.

**🌐 Live Demo:** [https://airbnb-aksrivastava.onrender.com/](https://airbnb-aksrivastava.onrender.com/)

---

## 🚀 Features

### 👥 Authentication
- User signup and login with form validation
- Secure password hashing using `bcryptjs`
- Session-based login system via `express-session`

### 🧑‍💼 Host Panel
- Create new listings with image upload support
- Update and delete existing listings
- View a dashboard of hosted properties

### 🧑‍💻 Client Panel
- Browse all listed properties
- View detailed property information
- Favorite/unfavorite homes
- Access personal favorites list

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Frontend:** EJS Templates, Tailwind CSS  
- **Database:** MongoDB (via Mongoose)  
- **Authentication:** express-session, bcryptjs  
- **Validation:** express-validator  
- **File Uploads:** multer  

---

## 📁 Project Structure

```
airbnb-clone/
├── controllers/         # Handles route logic (auth, host, client)
├── models/              # MongoDB schemas (User, Home)
├── routes/              # Route definitions for API and views
├── views/               # EJS templates (auth, host, client, partials)
├── public/              # Static files (CSS, images)
├── uploads/             # Uploaded images for listings
├── app.js               # Main server entry point
├── tailwind.config.js   # Tailwind configuration
├── package.json         # Dependencies and scripts
```

---

## 🖼️ Screenshots

### 🏠 Index / Landing Page
*Welcome screen with quick access to login or signup.*

![image](https://github.com/user-attachments/assets/39baff9d-d648-45ad-bff3-39f6520ab6ab)


---

### 🔐 Authentication Pages

#### 📝 Signup Page  
*Register a new account with input validation.*

![image](https://github.com/user-attachments/assets/45bbc1d7-f096-4e0c-b66e-b385e2a110e9)


#### 🔑 Login Page  
*Secure login with form validation.*

![image](https://github.com/user-attachments/assets/30078b18-8c5a-4cfe-abbe-4ef490490f27)


---



## 🧑‍💼 Host Views

### 🏘️ Host Dashboard
*View all your listings with options to edit or delete.*

![image](https://github.com/user-attachments/assets/149f8b51-e299-4cfb-a735-4eba8cc1363f)


### ➕ Add Home Page
*Form to list a new property with image upload support.*

![image](https://github.com/user-attachments/assets/425668ee-aaf1-4c72-bf7c-b26fd5b9c8e7)


### ✏️ Edit Home Page
*Update property details.*

![image](https://github.com/user-attachments/assets/3c1f2f6a-55f5-4354-b26a-cb57bd64eaa2)


---

## 🧑‍💻 Client Views

### 🏡 Homes Listing Page
*Browse all available homes. Click for more details or add to favorites.*

![image](https://github.com/user-attachments/assets/6b0cb71a-b008-4c98-b9f3-e697298f9379)


### 🔍 Home Details Page
*View detailed information for a selected property.*

![image](https://github.com/user-attachments/assets/777534f7-2a5e-4833-abce-edaf4a7c9806)


### ❤️ Favorites Page
*View and manage your list of favorite properties.*

![image](https://github.com/user-attachments/assets/04f36ae6-0c80-4818-a09e-3f76e46e9261)



---


## ⚙️ Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/akshatsrivastavagit/airbnb-clone.git
cd airbnb-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file with the following values:

```env
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
```

### 4. Run the application

```bash
npm run dev
```

### 5. Access the application

Visit: `http://localhost:3000`

---

## 📡 Deployment

This project is deployed on [Render](https://render.com/). You can view the live application here:

🔗 **[Live Site](https://airbnb-aksrivastava.onrender.com/)**

---
