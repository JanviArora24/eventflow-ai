from fastapi import APIRouter
import pandas as pd

router = APIRouter()

@router.get("/heatmap")
def heatmap():

    df = pd.read_csv(
        "../data/processed/scored_events.csv"
    )

    return df[
        ["latitude","longitude","risk"]
    ].to_dict(orient="records")