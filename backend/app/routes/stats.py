from fastapi import APIRouter
import pandas as pd

router = APIRouter()

@router.get("/stats")
def get_stats():

    df = pd.read_csv("../data/processed/scored_events.csv")

    return {
        "total_events": len(df),
        "critical_events":
            len(df[df["risk"]=="Critical"]),
        "high_events":
            len(df[df["risk"]=="High"]),
        "planned_events":
            len(df[df["event_type"]=="planned"]),
        "unplanned_events":
            len(df[df["event_type"]=="unplanned"])
    }