from fastapi import FastAPI

from app.routes.stats import router as stats_router
from app.routes.heatmap import router as heatmap_router
from app.routes.hotspots import router as hotspots_router
from app.routes.recommend import router as recommend_router
from app.routes.predict import router as predict_router
from app.routes.events_by_type import router as type_router
from app.routes.events_by_zone import router as zone_router
from app.routes.events_by_priority import router as priority_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="EventFlow AI")
origins = [
    "http://localhost:5173",
"https://eventflow-ai-rho.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(stats_router)
app.include_router(heatmap_router)
app.include_router(hotspots_router)
app.include_router(recommend_router)
app.include_router(predict_router)
app.include_router(type_router)
app.include_router(zone_router)
app.include_router(priority_router)

@app.get("/")
def home():
    return {
        "message": "EventFlow AI Running"
    }