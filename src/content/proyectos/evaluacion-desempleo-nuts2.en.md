---
idioma: "en"
titulo: "Regional Unemployment Policy Evaluation (NUTS2)"
fecha: 2026-03-01
resumen: "Python analytics pipeline to evaluate unemployment dynamics in Madrid, Catalonia and Valencia using Machine Learning and Causal Inference."
stack: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"]
repo: "https://github.com/alejandrofdez10/Evaluacion-Politicas-Desempleo-NUTS2"
destacado: true
---

## Overview

An analytical pipeline built in Python (Google Colab) to evaluate unemployment dynamics in three Spanish NUTS2 regions: **Madrid, Catalonia and Valencia**.

## What it does

- Data ingestion and cleaning of regional unemployment statistics
- Exploratory Data Analysis (EDA) with regional and time-period visualisations
- Predictive modelling with **Random Forest** to estimate future unemployment rates
- Causal evaluation with **Difference-in-Differences (DiD)** to measure the impact of simulated training subsidy policies

## Tech stack

| Tool | Purpose |
|---|---|
| Python / Pandas | Data cleaning & transformation |
| Scikit-learn | Random Forest modelling |
| Matplotlib / Seaborn | Visualisation |
| DiD (econometrics) | Causal inference |

## Context

Academic project for teaching purposes. The training subsidy programme and regional treatment assignments are illustrative constructs to demonstrate econometric methods.
