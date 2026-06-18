# EventFlow AI 🚦

AI-powered traffic congestion prediction and resource recommendation system for planned and unplanned events.

## Problem Statement

Political rallies, festivals, sports events, construction activities, accidents, and sudden gatherings often create localized traffic congestion.

### Current Challenges

- Event impact is not quantified in advance.
- Resource deployment is experience-driven.
- No data-driven congestion forecasting system exists.
- Traffic authorities lack proactive manpower and barricading recommendations.

## Our Solution

EventFlow AI uses historical traffic event data to predict congestion risk levels and recommend optimal resource deployment.

The system:

- Predicts congestion risk using Machine Learning.
- Identifies high-risk hotspots using geospatial visualization.
- Recommends required police officers and barricades.
- Provides analytics for traffic event patterns.

---

## Key Features

- 📊 Interactive Analytics Dashboard
- 🗺️ Heatmap of congestion hotspots
- 🤖 ML-based congestion risk prediction
- 👮 Resource recommendation engine
- 🚧 Barricade requirement estimation

---

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Chart.js
- React Chart.js 2
- Leaflet
- React Leaflet

### Backend

- FastAPI
- Pandas
- Joblib
- Scikit-learn

### Machine Learning

- Random Forest Classifier
- Label Encoding

---

## Dataset

- Bengaluru Traffic Event Dataset
- 8,173 records
- 46 columns

### Features Used

- `event_type`
- `priority`
- `event_cause`
- `requires_road_closure`
- `zone`

### Target Variable

- `risk`

Risk categories:

- Low
- Medium
- High
- Critical

---

## Machine Learning Pipeline

```text
Historical Event Data
          ↓
Data Cleaning & Preprocessing
          ↓
Congestion Score Generation
          ↓
Risk Classification
          ↓
Feature Encoding
          ↓
Random Forest Training
          ↓
Model Evaluation
          ↓
FastAPI Deployment
```

## Machine Learning Pipeline

```text
Historical Event Data
          ↓
Data Cleaning & Preprocessing
          ↓
Congestion Score Generation
          ↓
Risk Classification
          ↓
Feature Encoding
          ↓
Random Forest Training
          ↓
Model Evaluation
          ↓
FastAPI Deployment
```

## Model Performance

| Metric            | Value                    |
| ----------------- | ------------------------ |
| Model             | Random Forest Classifier |
| Accuracy          | 91.74%                   |
| Weighted F1 Score | 0.91                     |

## System Architecture

```text
React Frontend
      ↓
FastAPI Backend
      ↓
Prediction API
      ↓
Random Forest Model
      ↓
Resource Recommendation Engine
```

## API Endpoints

### Dashboard Statistics

* `GET /stats`

### Analytics

* `GET /events-by-type`
* `GET /events-by-zone`
* `GET /events-by-priority`

### Heatmap

* `GET /heatmap`

### Prediction

* `POST /predict`
