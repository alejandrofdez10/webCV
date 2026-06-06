---
idioma: "es"
titulo: "EDA exhaustivo para Científico de Datos Senior"
categoria: "Data Science"
descripcion: "Guía a la IA a realizar un Análisis Exploratorio de Datos completo en Python: resumen estadístico, calidad de datos, detección de anomalías y código listo para ejecutar."
tags: ["EDA", "Python", "Pandas", "Seaborn", "Plotly", "Outliers"]
---

## Prompt

```
Actúa como un Científico de Datos Senior. Te proporcionaré un conjunto de datos en formato CSV delimitado por comas [o adjunta el archivo]. Tu objetivo es diseñar y ejecutar un Análisis Exploratorio de Datos (EDA) exhaustivo en Python.

Por favor, estructúralo en los siguientes pasos:

1. Resumen estadístico: Proporciona estadísticas descriptivas para variables numéricas y categóricas.
2. Calidad de datos: Identifica valores nulos, duplicados y tipos de datos incorrectos, sugiriendo cómo imputarlos.
3. Detección de anomalías: Identifica valores atípicos (outliers) en las columnas clave y plantea hipótesis sobre si son errores de medición o variaciones naturales.
4. Código: Proporciona el código en Python (usando Pandas y Seaborn/Plotly) listo para ejecutar.

Presenta tus conclusiones de negocio de forma clara y estructurada antes del código.
```

## Por qué funciona

Este prompt está diseñado para que la IA no se limite a ejecutar código, sino que **piense analíticamente** sobre la estructura y las anomalías del dataset antes de generar cualquier línea de código.

La clave es forzar las conclusiones de negocio *antes* del código, lo que evita que el modelo se pierda en detalles técnicos sin haber contextualizado el análisis.
