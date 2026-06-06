---
idioma: "en"
titulo: "Heart Disease Prediction Pipeline"
fecha: 2026-03-01
resumen: "End-to-end data science pipeline for cardiovascular risk prediction using the UCI dataset: clinical data cleaning, feature engineering, and logistic regression."
stack: ["Python", "Pandas", "Scikit-learn", "Logistic Regression", "Jupyter Notebook"]
repo: "https://github.com/alejandrofdez10/heart-disease-prediction-pipeline"
destacado: true
---

## Overview

A complete data science pipeline focused on **cleaning, preprocessing, feature engineering, and baseline modelling** for cardiovascular disease prediction. Developed for the *Data Preparation and Cleaning* course at the **University of Navarra**.

## About the data

UCI Machine Learning Repository — cardiovascular disease dataset:

- **303 patients** with 14 clinical features
- Variables: age, blood pressure, cholesterol, angina, etc.
- Target: binary classification (0 = Healthy, 1 = At risk)

## Methodology

### 1. Data Cleaning
- Removal of zero-variance columns (`VarianceThreshold`) and duplicate rows
- Imputation of physiologically impossible values (blood pressure or cholesterol = 0) using the **median**, which is robust to clinical outliers

### 2. Outlier Analysis
Unusually high values (e.g. extreme cholesterol) were **intentionally kept**. In a clinical context, these outliers represent the most critical patients and are vital for accurate medical prediction.

### 3. Modelling
Logistic Regression was chosen because in medicine **interpretability is as important as accuracy**. The model's coefficients directly explain the impact of each variable (`major_vessels`, `chest_pain`) on disease risk.

## Future work
- Non-linear models (Random Forest, Gradient Boosting)
- Advanced feature selection
- Decision threshold tuning based on the clinical cost of false negatives
