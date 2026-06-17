from fastapi import APIRouter
import pandas as pd

router = APIRouter()

@router.get("/hotspots")
def hotspots():

    df = pd.read_csv(
        "../data/processed/scored_events.csv"
    )

    top = (
        df.groupby("junction")
        .size()
        .sort_values(ascending=False)
        .head(10)
    )

    return top.to_dict()