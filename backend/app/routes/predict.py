from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class PredictRequest(BaseModel):
    event_type: str
    priority: str
    event_cause: str
    requires_road_closure: str
    zone: str

@router.post("/predict")
def predict(data: PredictRequest):

    score = 0

    if data.priority.lower() == "high":
        score += 40

    if data.requires_road_closure.lower() == "true":
        score += 30

    if data.event_type.lower() == "unplanned":
        score += 20

    if score >= 70:
        risk = "Critical"
        officers = 15
        barricades = 8

    elif score >= 50:
        risk = "High"
        officers = 10
        barricades = 5

    elif score >= 30:
        risk = "Medium"
        officers = 5
        barricades = 3

    else:
        risk = "Low"
        officers = 2
        barricades = 1

    return {
        "predicted_risk": risk,
        "officers": officers,
        "barricades": barricades
    }