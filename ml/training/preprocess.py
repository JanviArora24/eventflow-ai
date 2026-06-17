import pandas as pd

df = pd.read_csv("../../data/raw/events.csv")

df = df.drop_duplicates()

df["latitude"] = pd.to_numeric(df["latitude"], errors="coerce")
df["longitude"] = pd.to_numeric(df["longitude"], errors="coerce")

df = df.dropna(subset=["latitude", "longitude"])

df.to_csv(
    "../../data/processed/clean_events.csv",
    index=False
)

print(df.shape)