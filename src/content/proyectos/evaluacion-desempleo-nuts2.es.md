---
idioma: "es"
titulo: "Evaluación de Políticas de Desempleo Regional (NUTS2)"
fecha: 2026-03-01
resumen: "Pipeline analítico en Python para evaluar dinámicas de desempleo en Madrid, Cataluña y C. Valenciana usando Machine Learning e Inferencia Causal."
stack: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"]
repo: "https://github.com/alejandrofdez10/Evaluacion-Politicas-Desempleo-NUTS2"
destacado: true
---

## Descripción

Pipeline analítico desarrollado en Python (Google Colab) para evaluar la dinámica del desempleo en las regiones NUTS2 de **Madrid, Cataluña y la Comunidad Valenciana**.

## Qué hace

- Ingestión y limpieza de datos regionales de desempleo
- Análisis exploratorio (EDA) con visualizaciones por región y período
- Modelo predictivo con **Random Forest** para estimar tasas futuras
- Evaluación causal con **Diferencias en Diferencias (DiD)** para medir el impacto de políticas de subsidio simuladas

## Stack técnico

| Herramienta | Uso |
|---|---|
| Python / Pandas | Limpieza y transformación de datos |
| Scikit-learn | Modelado Random Forest |
| Matplotlib / Seaborn | Visualización |
| DiD (econometría) | Inferencia causal |

## Contexto

Proyecto académico con fines educativos. Los datos y la política de subsidio de formación son construcciones ilustrativas para demostrar métodos econométricos sobre datos regionales reales de desempleo.
