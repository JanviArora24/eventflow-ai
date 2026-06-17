from fastapi import APIRouter
import pandas as pd

router = APIRouter()

@router.get("/events-by-type")
def events_by_type():

    df = pd.read_csv("../data/processed/scored_events.csv")

    result = (
        df.groupby("event_type")
        .size()
        .to_dict()
    )

    return result