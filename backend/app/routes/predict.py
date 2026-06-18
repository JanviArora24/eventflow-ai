from fastapi import APIRouter
from pydantic import BaseModel
import joblib
import pandas as pd
from pathlib import Path

router = APIRouter()
BASE_DIR = Path(__file__).resolve().parents[3]

model = joblib.load(
    BASE_DIR / "ml" / "saved_models" / "risk_model.pkl"
)

encoders = joblib.load(
    BASE_DIR / "ml" / "saved_models" / "encoders.pkl"
)

class PredictRequest(BaseModel):
    event_type: str
    priority: str
    event_cause: str
    requires_road_closure: str
    zone: str

@router.post("/predict")
def predict(data: PredictRequest):

    input_data = {
        "event_type": data.event_type,
        "priority": data.priority,
        "event_cause": data.event_cause,
        "requires_road_closure": data.requires_road_closure,
        "zone": data.zone,
    }

    df = pd.DataFrame([input_data])

    for col in df.columns:
        value = str(df[col].iloc[0])

        if value not in encoders[col].classes_:
            return {
                "error": f"Invalid value '{value}' for {col}"
            }

        df[col] = encoders[col].transform(
            df[col].astype(str)
        )

    prediction = model.predict(df)[0]
    

    risk = encoders["risk"].inverse_transform(
        [prediction]
    )[0]

    recommendations = {
        "Low": {"officers": 2, "barricades": 1},
        "Medium": {"officers": 5, "barricades": 3},
        "High": {"officers": 10, "barricades": 5},
        "Critical": {"officers": 15, "barricades": 8},
    }

    return {
        "predicted_risk": risk,
        "officers": recommendations[risk]["officers"],
        "barricades": recommendations[risk]["barricades"],
    }