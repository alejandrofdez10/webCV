---
idioma: "en"
titulo: "23-F Declassified Documents — Machine Learning"
fecha: 2026-06-01
resumen: "Full analysis of 167 documents from Spain's 1981 coup attempt (RTVE) via a complete pipeline: scraping, NLP, graph analysis, and 6 ML use cases."
stack: ["Python", "Scikit-learn", "BERTopic", "NetworkX", "Plotly", "BeautifulSoup"]
repo: "https://github.com/NachoATM/machine_learning"
destacado: true
---

## Overview

A complete analysis of **167 declassified documents from Spain's 23-F coup attempt** (published by RTVE), using a full pipeline: scraping → corpus → 6 ML, NLP, graph analysis and interactive visualisation cases.

**Team:** Ander Corta Arrieta · Jose Ignacio Esteban González · Alejandro Fernández Rubio  
**Institution:** Universidad de Navarra (2025-2026)

## Project flow

```
23fbuscador.rtve.es
  → Scraper23F (requests + BeautifulSoup, JSON cache)
  → 167 documents (OCR + metadata)
  → CorpusBuilder (feature engineering)
  → Structured DataFrame
  → 6 analysis cases
```

## The 6 analysis cases

| # | Case | Techniques |
|---|---|---|
| 1 | EDA + Clustering | TF-IDF · KMeans · PCA · Elbow/Silhouette |
| 2 | Actor graph | NetworkX · Louvain · betweenness |
| 3 | Topic Modelling | BERTopic · SentenceTransformers · UMAP |
| 4 | Classifier | LogisticRegression · RandomForest · LinearSVC |
| 5 | Spatio-temporal | IsolationForest · PCA · geocoding |
| 6 | Interactive explorer | Graphs + TF-IDF + standalone HTML/JS |

## Architecture

Orchestrated from `main.ipynb`. Each case inherits from a common `BaseCaso` interface with `run()` and `export()` methods. Cases 3 and 6 produce standalone interactive HTML panels.
