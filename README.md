# Anvaya Club Website

A display platform for the Anvaya Club of the AI & ML Department at Dayananda Sagar College of Engineering.

## Overview

Anvaya Club is a student community fostering innovation and collaboration in AI/ML. This platform showcases club activities, photos, and reports organized by different wings.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, TypeScript, Vite, Tailwind CSS, Framer Motion |
| Backend | FastAPI, Python 3.11+, SQLAlchemy (async), PostgreSQL |
| Storage | Cloudinary (images & PDFs) |
| Auth | JWT-based admin authentication |

## Project Structure

```
anvaya/
├── backend/               # FastAPI backend
│   ├── app/
│   │   ├── api/          # API routes (public, admin)
│   │   ├── models/       # SQLAlchemy models
│   │   ├── schemas/      # Pydantic schemas
│   │   ├── services/     # Business logic (CRUD, auth, cloudinary)
│   │   ├── config.py     # Environment configuration
│   │   ├── database.py   # Database connection
│   │   ├── exceptions.py # Custom exceptions
│   │   └── main.py       # FastAPI app entry point
│   ├── .env.example      # Environment template
│   └── requirements.txt  # Python dependencies
│
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API client services
│   │   ├── hooks/        # Custom React hooks
│   │   ├── types/        # TypeScript type definitions
│   │   └── utils/        # Utility functions
│   ├── .env.example      # Environment template
│   └── package.json      # Node dependencies
│
└── README.md             # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.11+
- PostgreSQL database
- Cloudinary account

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure environment:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. Run the server:
   ```bash
   uvicorn app.main:app --reload
   ```

   The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment:
   ```bash
   cp .env.example .env
   # Edit .env if needed
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## API Documentation

Once the backend is running, access the interactive API docs:

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

### Key Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/wings` | List all wings |
| GET | `/api/wings/{slug}` | Get wing with activities & photos |
| GET | `/api/activities` | List all activities |
| GET | `/api/statistics/activities` | Activity statistics by wing |
| POST | `/api/admin/login` | Admin authentication |
| POST | `/api/admin/photos` | Upload photos (admin) |
| POST | `/api/admin/activities` | Create activity (admin) |

## Environment Variables

### Backend (.env)

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `ADMIN_USERNAME` | Admin login username | Yes |
| `ADMIN_PASSWORD` | Admin login password | Yes |
| `JWT_SECRET` | Secret key for JWT tokens | Yes |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | Yes |
| `CLOUDINARY_API_KEY` | Cloudinary API key | Yes |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | Yes |
| `CORS_ORIGINS` | Allowed CORS origins | Yes |
| `PORT` | Server port (default: 8000) | No |

### Frontend (.env)

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_BASE_URL` | Backend API URL | Yes |

## Features

### Public Features
- View club wings and their descriptions
- Browse activity history with dates and coordinators
- View photo galleries for each wing
- Download activity reports (PDFs)
- Activity statistics with year filtering

### Admin Features
- Secure JWT-based authentication
- Upload photos to wings
- Create activities with optional PDF reports
- Delete photos and activities
- Manage content per wing

## Development

### Running Tests

```bash
# Frontend type checking
cd frontend && npm run type-check

# Backend syntax check
cd backend && python -m py_compile app/main.py
```

### Building for Production

```bash
# Frontend
cd frontend && npm run build

# Output in frontend/dist/
```

## Deployment

The project includes a `render.yaml` for deployment to Render.com. Configure the environment variables in your deployment platform's dashboard.

## License

This project is developed for Dayananda Sagar College of Engineering.