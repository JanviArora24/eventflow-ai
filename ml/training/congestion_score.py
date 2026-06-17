import pandas as pd

df = pd.read_csv("../../data/processed/clean_events.csv")

scores = []

for _, row in df.iterrows():

    score = 0

    if str(row["priority"]).lower() == "high":
        score += 40

    if str(row["requires_road_closure"]).upper() == "TRUE":
        score += 30

    if str(row["event_type"]).lower() == "unplanned":
        score += 20

    if str(row["status"]).lower() == "active":
        score += 10

    scores.append(score)

df["congestion_score"] = scores


# STEP 4 RISK CLASSIFICATION YAHAN DAALNA HAI

def classify(score):

    if score >= 70:
        return "Critical"

    elif score >= 50:
        return "High"

    elif score >= 30:
        return "Medium"

    return "Low"

df["risk"] = df["congestion_score"].apply(classify)


# SAVE FILE
df.to_csv(
    "../../data/processed/scored_events.csv",
    index=False
)

print(df[["congestion_score", "risk"]].head())