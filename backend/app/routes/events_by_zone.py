from fastapi import APIRouter
import pandas as pd

router = APIRouter()

@router.get("/events-by-zone")
def events_by_zone():

    df = pd.read_csv("../data/processed/scored_events.csv")

    result = (
        df.groupby("zone")
        .size()
        .sort_values(ascending=False)
        .head(10)
        .to_dict()
    )

    return result