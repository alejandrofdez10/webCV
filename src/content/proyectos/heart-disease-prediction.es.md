---
idioma: "es"
titulo: "Pipeline de Predicción de Enfermedades Cardiovasculares"
fecha: 2026-03-01
resumen: "Pipeline end-to-end de ciencia de datos para predecir riesgo cardiovascular sobre el dataset UCI: limpieza clínica, feature engineering y regresión logística."
stack: ["Python", "Pandas", "Scikit-learn", "Regresión Logística", "Jupyter Notebook"]
repo: "https://github.com/alejandrofdez10/heart-disease-prediction-pipeline"
destacado: true
---

## Descripción

Pipeline completo de ciencia de datos enfocado en la **limpieza, preprocesamiento, feature engineering y modelado** para predecir el riesgo de enfermedad cardiovascular. Desarrollado para la asignatura *Preparación y Limpieza de Datos* en la **Universidad de Navarra**.

## Sobre los datos

Dataset de enfermedades cardiovasculares del **UCI Machine Learning Repository**:

- **303 pacientes** con 14 características clínicas
- Variables: edad, presión arterial, colesterol, angina de pecho, etc.
- Target: clasificación binaria (0 = Sano, 1 = En riesgo)

## Metodología

### 1. Limpieza de datos
- Eliminación de columnas con varianza cero (`VarianceThreshold`) y filas duplicadas
- Imputación de valores fisiológicamente imposibles (presión arterial o colesterol = 0) usando la **mediana**, robusta frente a outliers clínicos

### 2. Tratamiento de outliers
Se decidió **mantener los valores atípicos** (ej. colesterol muy alto). En contexto clínico, estos outliers representan a los pacientes más críticos y son clave para una predicción médica correcta.

### 3. Modelado
Regresión Logística: en medicina, la **interpretabilidad es tan importante como la precisión**. Este modelo permite analizar el impacto de cada variable (ej. `major_vessels`, `chest_pain`) en el riesgo de enfermedad.

## Próximos pasos
- Modelos no lineales (Random Forest, Gradient Boosting)
- Selección avanzada de características
- Ajuste del umbral de decisión según coste clínico real de falsos negativos
