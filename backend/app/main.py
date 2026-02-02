from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from app.config import get_settings
from app.database import init_db
from app.api import public, admin

settings = get_settings()

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Lifespan event handler."""
    await init_db()
    yield

app = FastAPI(
    title="Anvaya Club API",
    description="Backend API for Anvaya Club Display Platform",
    version="1.0.0",
    lifespan=lifespan
)

origins = settings.cors_origins.split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




app.include_router(public.router, prefix="/api", tags=["Public"])
app.include_router(admin.router, prefix="/api/admin", tags=["Admin"])

@app.get("/")
async def root():
    """Root endpoint - health check."""
    return {
        "message": "Anvaya Club API",
        "status": "running",
        "version": "1.0.0"
    }

@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=settings.port, reload=True)
