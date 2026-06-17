import pandas as pd
import joblib

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import os

os.makedirs("../saved_models", exist_ok=True)

df = pd.read_csv("../../data/processed/scored_events.csv")

cols = [
    "event_type",
    "priority",
    "event_cause",
    "requires_road_closure",
    "zone",
    "risk"
]

df = df[cols]

df = df.fillna("Unknown")

encoders = {}

for col in cols:

    le = LabelEncoder()

    df[col] = le.fit_transform(
        df[col].astype(str)
    )

    encoders[col] = le

X = df.drop("risk", axis=1)

y = df["risk"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X_train, y_train)

joblib.dump(
    model,
    "../saved_models/risk_model.pkl"
)

joblib.dump(
    encoders,
    "../saved_models/encoders.pkl"
)

print("Model Saved")