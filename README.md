# **OfBusiness Raw Materials Procurement Platform**

## 📌 Project Overview
This is a **B2B platform** for raw materials procurement. It includes a user-friendly frontend and a secure backend API that enables businesses to **search, compare, and purchase raw materials efficiently**.

---
## 🚀 Installation Process  

### **1️⃣ Clone the Repository**  
First, clone the repository to your local machine:  

```sh
git clone https://github.com/udaykalyan97/ZyelumSCMsolutions.git
cd ZyelumSCMsolutions
```

### **Step 2: Install Dependencies**  
```sh
npm install
```

### **Step 4: Start the Backend Server**  
```sh
npm start
```

---
## 📌 How to Run Tests  

```sh
npm test
```

---
## 🛠️ Tech Stack

### **Frontend**
- **React.js** (with TailwindCSS for styling)
- **React Router** (for navigation)
- **Axios** (for API calls)

### **Backend**
- **Node.js** (Express.js framework)
- **MongoDB** (Database)
- **Mongoose** (ODM for MongoDB)
- **JWT Authentication** (for secure login)
- **Helmet & CORS** (for security)

### **Deployment**
- **Frontend**: Vercel / Netlify
- **Backend**: Railway / Render / AWS
- **Database**: MongoDB Atlas

---

## 📂 Project Structure

/client (Frontend)
  ├── src/
  │   ├── components/
  │   ├── componentUtils/
  |   ├── Utils/
  │   ├── App.js
  │   ├── index.js
  │   └── package.json
  ├── public/

/api (Backend)
  ├── config/
  │   ├── db.js
  ├── controllers/
  │   ├── authController.js
  │   ├── partnerController.js
  ├── models/
  │   ├── User.js
  │   ├── Partner.js
  ├── routes/
  │   ├── authRoutes.js
  │   ├── partnerRoutes.js
  ├── middleware/
  │   ├── authMiddleware.js
  ├── server.js
  ├── .env
  ├── package.json


## 🔗 API Endpoints

### **Authentication (Users)**

| Method | Endpoint             | Description          |
|--------|----------------------|----------------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login`    | Log in a user       |
| `GET`  | `/api/auth/logout`   | Log out a user      |

### **Partners**

| Method | Endpoint        | Description         |
|--------|----------------|---------------------|
| `GET`  | `/api/partners` | Fetch all partners |


## 🔒 Security Features
- **JWT Authentication** for user login  
- **Password Hashing** using `bcrypt.js`  
- **Helmet.js & CORS** for enhanced security  

---

## 📜 License
This project is licensed under the **MIT License**.  

---

## 🙌 Contributors
- **Developer** - *Uday Kalyan*  
- **Contributions Welcome!** Submit a PR or open an issue.  
