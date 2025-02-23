# 📚 Gurukul - School CRM | MERN Stack Application

A full-fledged **School CRM (Classroom Management System)** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) with **Tailwind CSS** for a sleek UI. This application allows **Admins, Teachers, and Students** to manage classrooms, track analytics, and update their profiles efficiently.

## 🚀 Features

### 🔹 Admin Panel
- CRUD operations for **Students, Teachers, and Classes**.
- Assign subjects to teachers.
- View **financial and enrollment analytics**.
- Monitor salaries and student fee payments.

### 🔹 Teacher Dashboard
- Sign up and update personal details.
- View assigned **classes and students**.

### 🔹 Student Dashboard
- Sign up and enroll in a **class**.
- View **class details, subjects, and assigned teachers**.
- Update personal details.

### 🔹 Advanced Features
- **Analytics Dashboard**:
  - View the **male/female ratio** in classes.
  - Monitor **teacher salary expenses** and **student fee income**.
  - Toggle between **monthly and yearly** analytics.
- **Pagination, Sorting & Filtering** for large datasets.
- **Form Validation** for accurate data entry.

## 🛠️ Tech Stack

| **Technology** | **Usage** |
|---------------|----------|
| React.js | Frontend |
| Tailwind CSS | Styling |
| Node.js | Backend |
| Express.js | API & Routing |
| MongoDB | Database |
| JWT | Authentication |
| CORS | Security |
| Dotenv | Environment Variables |

## 📂 Folder Structure

```
/school-crm
│── /backend            # Backend Code (Express & MongoDB)
│   ├── /controllers    # Request Handlers
│   ├── /middlewares    # Validation & Authentication
│   ├── /models         # Mongoose Models
│   ├── /routes         # API Routes
│   ├── server.js       # Express Server
│   ├── .env            # Backend Environment Variables
│
│── /frontend           # Frontend Code (React & Tailwind)
│   ├── /src
│   │   ├── /components # Reusable UI Components
│   │   ├── /pages      # Screens & Views
│   │   ├── /context    # State Management
│   │   ├── App.jsx     # Main React App
│   │   ├── index.js    # React DOM Render
│   │── vite.config.js  # Vite Configuration
│   │── .env            # Frontend Environment Variables
│
└── README.md           # Documentation
```

## Screenshots
<div align="center">
  <img src="https://github.com/user-attachments/assets/a9d712be-8ff5-4508-99cc-215755032f8e"/>
  <p>**Gurukul - Home Page**</p>
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/14765e3d-3fdd-435c-83de-d68edd6bff13"/>
  <p>**Gurukul - Admin Panel**</p>
</div>

## ⚙️ Installation & Setup

### 🛠 Backend Setup
```bash
cd backend
npm install
```
1. Create a **.env** file in the backend root:
   ```
   MONGO_URL=your-mongodb-uri
   PRIVATE_SIGN_KEY=your-secret-key
   ```
2. Run the backend server:
   ```bash
   npm run dev
   ```

### 🎨 Frontend Setup
```bash
cd frontend
npm install
```
1. Create a **.env** file in the frontend root:
   ```
   VITE_BASE_URL=http://localhost:10000
   ```
2. Run the frontend:
   ```bash
   npm run dev
   ```

## 🌍 API Routes

### 📌 Admin Routes
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/admin/total-count` | Get total number of students & teachers |
| PUT | `/admin/update-student/:studentId` | Update student details |
| PUT | `/admin/update-teacher/:teacherId` | Update teacher details |
| GET | `/admin/students` | Get all students (without password) |
| GET | `/admin/teachers` | Get all teachers (without password) |
| GET | `/admin/analytics/enrollment/monthly/:year` | Get monthly enrollment analytics |
| GET | `/admin/analytics/enrollment/yearly` | Get yearly enrollment analytics |
| GET | `/admin/analytics/salary/:period/:year` | Get teacher salary analytics |
| GET | `/admin/analytics/financial/:period/:year` | Get financial analytics |

### 📌 Student Routes
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/students/create` | Create a student account |
| GET | `/students/:studentId` | Get student details |
| PUT | `/students/:studentId` | Update student details |
| DELETE | `/students/:studentId` | Delete student account |
| POST | `/students/signin` | Student login |

### 📌 Teacher Routes
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/teacher/signup` | Register as a teacher |
| POST | `/teacher/signin` | Teacher login |
| PUT | `/teacher/update/:userId` | Update teacher details |
| GET | `/teacher/:id` | Get teacher details |

## 📊 Analytics Features

- **Class Analytics**: Clicking on a class opens a dashboard with:
  - Class details
  - Teacher & student lists
  - **Gender ratio graph**
- **Financial Analytics**:
  - Toggle between **monthly & yearly views**.
  - Filter by **year or month**.
  - Monitor **teacher salary expenses & student fee payments**.

## 🛡 Authentication & Security
- **JWT (JSON Web Tokens)** for secure authentication.
- **Password hashing** for user security.
- **CORS-enabled** backend for cross-origin access.

## 💡 Future Improvements
✅ Add **role-based authentication** (RBAC).  
✅ Implement **file upload for student/teacher photos**.  
✅ Enhance **UI with animations & charts** for better UX.  

## 📜 License
This project is **open-source** under the MIT License.

## 🤝 Contributing
Want to contribute? Follow these steps:
1. **Fork** the repository.
2. Create a **new branch**: `git checkout -b feature-branch`
3. **Commit changes**: `git commit -m "Added new feature"`
4. **Push** to GitHub: `git push origin feature-branch`
5. **Create a Pull Request**!

## 📧 Contact
For queries or collaboration, contact:  
📩 **Email:** sachinalam9998@gmail.com    

