# Full-Stack Personal Portfolio Website

[![React](https://img.shields.io/badge/Frontend-React%2018-2563EB?style=flat-square)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js%20%2F%20Express-0F172A?style=flat-square)](https://nodejs.org/)
[![Database](https://img.shields.io/badge/Database-MongoDB%20Atlas-2563EB?style=flat-square)](https://www.mongodb.com/atlas)
[![License](https://img.shields.io/badge/License-MIT-0F172A?style=flat-square)](LICENSE)

A production-ready full-stack developer portfolio engineered for the **Thiranex Full Stack Development Internship (Task-1)** by **Sheshagiri S** (B.Tech in Artificial Intelligence & Data Science).

Designed strictly adhering to a restrained **3-color palette**, responsive across all viewports, and featuring real-time client-server database persistence for contact inquiries.

---

## 🎨 Strict 3-Color Design System

The visual design is restricted to three colors, prioritizing typography, spatial balance, and contrast:

| Color Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| **Deep Navy** | `#0F172A` | Primary background, surface depths, modal backing |
| **White** | `#FFFFFF` | Primary headings, readable text, high-contrast borders |
| **Professional Blue** | `#2563EB` | Interactive buttons, active links, accents, focus rings |

> **Design Rule**: No gradients, multi-color themes, orange, green, purple, or red are used. Alert states and card interactions derive exclusively from opacity variations of this three-color foundation.

---

## 📋 Features & Structure

1. **Hero Section**: Concise professional identity, current academic status, primary call-to-actions (*View Projects*, *Contact Me*), and direct GitHub/LinkedIn profiles.
2. **About Section**: Focused narrative covering full-stack web engineering, artificial intelligence & data science foundations, and continuous development.
3. **Skills Section**: Structured skill cards categorized into *Programming*, *Frontend*, *Backend*, *Database*, *AI / Data*, and *Tools* without arbitrary percentage indicators.
4. **Projects Section**: Centralized repository showcase with technology tags, source code links, and demo indicators.
5. **Contact Section**: Interactive form with frontend validation (regex email formatting, required fields), real-time loading feedback, and direct persistence to MongoDB via Express REST API.
6. **API Health Monitoring**: Live backend health endpoint (`GET /api/health`).

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 18](https://react.dev/) (Vite)
- **Styling**: Pure Modern CSS (Variables, Flexbox, CSS Grid)
- **Icons**: [Lucide React](https://lucide.dev/) (rendered strictly in `#FFFFFF` / `#2563EB`)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Framework**: [Express.js 4](https://expressjs.com/)
- **CORS & Middleware**: `cors`, `dotenv`, built-in `express.json` parser

### Database
- **Database**: [MongoDB Atlas](https://www.mongodb.com/atlas) (Cloud Cluster) / MongoDB Community
- **ODM**: [Mongoose 8](https://mongoosejs.com/)

---

## 📁 Project Directory Structure

```text
Task-1_portfolio/
├── frontend/                     # React.js client application
│   ├── public/                   # Static assets & icons
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   │   ├── Navbar.jsx        # Sticky navigation with mobile menu
│   │   │   ├── Footer.jsx        # Semantic footer & verified links
│   │   │   ├── ProjectCard.jsx   # Project showcase card
│   │   │   └── SkillCategory.jsx # Technical competency card
│   │   ├── sections/             # Core single-page portfolio sections
│   │   │   ├── Hero.jsx          # Intro & primary CTAs
│   │   │   ├── About.jsx         # Academic & technical narrative
│   │   │   ├── Skills.jsx        # Categorized skills
│   │   │   ├── Projects.jsx      # Centralized projects showcase
│   │   │   └── Contact.jsx       # Validated form with API integration
│   │   ├── data/                 # Centralized editable data files
│   │   │   ├── projects.js       # Projects repository list
│   │   │   └── skills.js         # Skills taxonomy
│   │   ├── App.jsx               # Root application component
│   │   ├── main.jsx              # DOM entry point
│   │   └── index.css             # 3-color design system & custom CSS
│   ├── index.html                # SEO title & meta description
│   ├── vite.config.js            # Vite build & proxy config
│   ├── .env.example              # Frontend environment template
│   └── package.json              # Frontend dependencies
│
├── backend/                      # Node.js + Express backend API
│   ├── config/
│   │   └── db.js                 # Resilient MongoDB Mongoose connection
│   ├── controllers/
│   │   └── contactController.js  # Validation & database controller
│   ├── models/
│   │   └── Contact.js            # Mongoose schema (name, email, subject, message)
│   ├── routes/
│   │   └── api.js                # Express API endpoints (/contact, /health)
│   ├── server.js                 # Express server configuration & middleware
│   ├── .env.example              # Backend environment template
│   └── package.json              # Backend dependencies
│
├── package.json                  # Root convenience scripts
└── README.md                     # Complete documentation
```

---

## ⚙️ Local Development Setup

### Prerequisites
- **Node.js**: v18.0.0 or later installed
- **npm**: v9.0.0 or later
- **MongoDB**: Local MongoDB instance or free [MongoDB Atlas](https://www.mongodb.com/atlas) account

---

### Step 1: Clone or Navigate to the Repository

```bash
cd "Task-1_portfolio"
```

---

### Step 2: Backend Configuration & Startup

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create the environment file:
   ```bash
   cp .env.example .env
   ```

4. Configure your `.env` file:
   ```env
   PORT=5001
   NODE_ENV=development
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/portfolio?retryWrites=true&w=majority
   CLIENT_URL=http://localhost:5173
   ```
   *(Note: Default port 5001 is used to prevent port conflicts with macOS AirPlay receiver on port 5000).*

5. Start the backend server:
   ```bash
   npm start
   # Or for auto-reloading during development:
   npm run dev
   ```

6. Verify that the backend is live:
   - Visit `http://localhost:5001/api/health` in your browser.
   - You should see `{ "status": "ok", "service": "Sheshagiri S Portfolio API" }`.

---

### Step 3: Frontend Configuration & Startup

1. In a new terminal window, navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create the environment file:
   ```bash
   cp .env.example .env
   ```

4. Verify your `frontend/.env` file:
   ```env
   VITE_API_URL=http://localhost:5001/api
   ```

5. Launch the Vite development server:
   ```bash
   npm run dev
   ```

6. Open your browser at `http://localhost:5173`.

---

## 🌐 API Reference

### Health Check
- **Endpoint**: `GET /api/health`
- **Description**: Verifies that the Express API is running and returns database connection state.
- **Response (200 OK)**:
  ```json
  {
    "status": "ok",
    "service": "Sheshagiri S Portfolio API",
    "database": "Connected",
    "timestamp": "2026-08-30T12:35:05.742Z",
    "uptime": 124.5
  }
  ```

### Contact Message Submission
- **Endpoint**: `POST /api/contact`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "name": "Alex Smith",
    "email": "alex@example.com",
    "subject": "Full-Stack Developer Internship Inquiry",
    "message": "Hello Sheshagiri, I reviewed your portfolio and would like to discuss an opportunity."
  }
  ```
- **Success Response (201 Created)**:
  ```json
  {
    "success": true,
    "message": "Thank you for reaching out! Your message has been saved successfully.",
    "data": {
      "id": "6723a1f9e2b1c40012ab34cd",
      "name": "Alex Smith",
      "email": "alex@example.com",
      "subject": "Full-Stack Developer Internship Inquiry",
      "createdAt": "2026-08-30T12:35:10.000Z"
    }
  }
  ```
- **Error Response (400 Bad Request)**:
  ```json
  {
    "success": false,
    "error": "Please provide a valid email address format (e.g. name@example.com)."
  }
  ```

---

## 🗄️ MongoDB Atlas Setup Guide

1. Log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a free **M0 Shared Cluster**.
3. Under **Database Access**, create a database user with read/write permissions.
4. Under **Network Access**, add IP `0.0.0.0/0` (Allow access from anywhere for cloud deployment) or your current IP for local testing.
5. In your cluster view, click **Connect** > **Drivers (Node.js)**.
6. Copy the connection string and paste it into `backend/.env` as `MONGODB_URI`:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

---

## 🚀 Production Deployment Instructions

### 1. Backend Deployment (Render / Railway)

#### Deploying on Render:
1. Create a new **Web Service** on [Render](https://render.com/).
2. Connect your GitHub repository.
3. Set **Root Directory** to `backend`.
4. Set **Build Command** to `npm install`.
5. Set **Start Command** to `npm start`.
6. Add the following **Environment Variables**:
   - `NODE_ENV`: `production`
   - `PORT`: `10000` (or leave default for Render)
   - `MONGODB_URI`: Your MongoDB Atlas URI
   - `CLIENT_URL`: Your deployed frontend URL (e.g., `https://sheshagiri-portfolio.vercel.app`)
7. Click **Deploy**. Note down your live backend URL (e.g., `https://portfolio-backend-xyz.onrender.com`).

---

### 2. Frontend Deployment (Vercel)

#### Deploying on Vercel:
1. Import your repository on [Vercel](https://vercel.com/).
2. Select the **Root Directory** as `frontend`.
3. Framework Preset: **Vite**.
4. In **Environment Variables**, add:
   - `VITE_API_URL`: `https://portfolio-backend-xyz.onrender.com/api`
5. Click **Deploy**.

---

## 📝 Customizing Portfolio Data

To update personal contact details, projects, or skills, modify the centralized data files:
- **Profile & Links**: Edit [`frontend/src/data/profile.js`](file:///frontend/src/data/profile.js)
- **Projects**: Edit [`frontend/src/data/projects.js`](file:///frontend/src/data/projects.js)
- **Skills**: Edit [`frontend/src/data/skills.js`](file:///frontend/src/data/skills.js)

---

## 📄 License & Credits

Developed by **Sheshagiri S** for the **Thiranex Full Stack Development Internship Task**.
Distributed under the MIT License.
