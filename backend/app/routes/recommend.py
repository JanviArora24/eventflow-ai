from fastapi import APIRouter

router = APIRouter()

@router.get("/recommend/{score}")
def recommend(score: int):

    if score >= 70:
        return {
            "risk": "Critical",
            "officers": 15,
            "barricades": 8
        }

    elif score >= 50:
        return {
            "risk": "High",
            "officers": 10,
            "barricades": 5
        }

    elif score >= 30:
        return {
            "risk": "Medium",
            "officers": 5,
            "barricades": 3
        }

    return {
        "risk": "Low",
        "officers": 2,
        "barricades": 1
    }