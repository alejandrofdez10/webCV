---
idioma: "es"
titulo: "Documentos Desclasificados del 23-F — Machine Learning"
fecha: 2026-06-01
resumen: "Análisis integral de 167 documentos desclasificados del golpe de Estado del 23-F (RTVE) mediante un pipeline completo: scraping, NLP, grafos y 6 casos de ML."
stack: ["Python", "Scikit-learn", "BERTopic", "NetworkX", "Plotly", "BeautifulSoup"]
repo: "https://github.com/NachoATM/machine_learning"
destacado: true
---

## Descripción

Análisis integral de los **167 documentos desclasificados del 23-F** publicados por RTVE, mediante un pipeline completo de scraping → corpus → 6 casos de ML, NLP, grafos y visualización interactiva.

**Equipo:** Ander Corta Arrieta · Jose Ignacio Esteban González · Alejandro Fernández Rubio  
**Institución:** Universidad de Navarra (2025-2026)

## Flujo del proyecto

```
23fbuscador.rtve.es
  → Scraper23F (requests + BeautifulSoup, caché JSON)
  → 167 documentos (OCR + metadatos)
  → CorpusBuilder (feature engineering)
  → DataFrame estructurado
  → 6 casos de análisis
```

## Los 6 casos de análisis

| # | Caso | Técnicas |
|---|---|---|
| 1 | EDA + Clustering | TF-IDF · KMeans · PCA · Elbow/Silhouette |
| 2 | Grafo de actores | NetworkX · Louvain · betweenness |
| 3 | Topic Modeling | BERTopic · SentenceTransformers · UMAP |
| 4 | Clasificador | LogisticRegression · RandomForest · LinearSVC |
| 5 | Espacio-temporal | IsolationForest · PCA · geocoding |
| 6 | Explorador interactivo | Grafos + TF-IDF + HTML/JS autónomo |

## Arquitectura

El proyecto está orquestado desde `main.ipynb`. Cada caso hereda de una interfaz común `BaseCaso` con métodos `run()` y `export()`. Los casos 3 y 6 generan paneles HTML interactivos.
