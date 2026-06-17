from fastapi import APIRouter
import pandas as pd

router = APIRouter()

@router.get("/events-by-priority")
def events_by_priority():

    df = pd.read_csv("../data/processed/scored_events.csv")

    result = (
        df.groupby("priority")
        .size()
        .to_dict()
    )

    return result