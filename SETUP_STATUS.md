# Backend Setup - Current Status

## ✅ What's Done
1. **Dependencies Installed** - All Python packages are now installed
2. **Fixed JWT Library** - Switched from python-jose to PyJWT (no Rust needed)
3. **Environment Setup** - Virtual environment created

## ⚠️ Current Issue
The backend server is having a database connection issue. This is likely because:
1. The database hasn't been initialized yet
2. OR your `.env` file needs the correct NeonDB connection string

## 🔧 Next Steps

### Option 1: Initialize Database (Recommended)
Run this command to create the database tables and seed wing data:

```bash
cd backend
python init_db.py
```

If this hangs or fails, it means your `DATABASE_URL` in `.env` might be incorrect.

### Option 2: Test Your .env File
1. Open `backend/.env`
2. Make sure `DATABASE_URL` looks like this:
   ```
   DATABASE_URL=postgresql+asyncpg://username:password@hostname.neon.tech/dbname
   ```
3. It MUST start with `postgresql+asyncpg://` (not just `postgresql://`)

### Option 3: Start Backend Server
After database is initialized, run:
```bash
cd backend
uvicorn app.main:app --reload
```

Server will run at `http://localhost:8000`

## 🎯 Frontend Setup

While we fix the backend, you can start the frontend:

```bash
cd frontend
npm install  # if not already done
npm run dev
```

Frontend will run at `http://localhost:5173`

## 📋 Complete Startup Checklist

- [ ] Backend `.env` has real credentials
- [ ] DATABASE_URL starts with `postgresql+asyncpg://`
- [ ] Run `python init_db.py` (creates tables + wings)
- [ ] Run `uvicorn app.main:app --reload` (starts backend)
- [ ] Run `npm run dev` in frontend folder (starts frontend)
- [ ] Visit `http://localhost:5173`

## 🐛 Common Errors

### "Could not connect to database"
**Fix**: Check your `DATABASE_URL` in `backend/.env`
- Make sure it's the correct NeonDB connection string
- Must use `postgresql+asyncpg://` prefix

### "Module not found"
**Fix**: Make sure virtual environment is activated
```bash
cd backend
.venv\Scripts\activate  # Windows
source .venv/bin/activate  # Mac/Linux
```

### init_db.py hangs
**Fix**: Database connection issue
- Verify NeonDB project is active (not suspended)
- Check connection string is correct
- Try pinging the database host

## 📞 Need Help?

If you're stuck, check:
1. `backend/.env` - Is DATABASE_URL correct?
2. NeonDB Dashboard - Is your project active?
3. Terminal errors - What's the exact error message?

Let me know the error and I'll help fix it!
