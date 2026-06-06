---
idioma: "en"
titulo: "Exhaustive EDA for Senior Data Scientist"
categoria: "Data Science"
descripcion: "Guides the AI to perform a complete Exploratory Data Analysis in Python: statistical summary, data quality, anomaly detection, and ready-to-run code."
tags: ["EDA", "Python", "Pandas", "Seaborn", "Plotly", "Outliers"]
---

## Prompt

```
Act as a Senior Data Scientist. I will provide you with a dataset in comma-delimited CSV format [or attach the file]. Your goal is to design and execute a thorough Exploratory Data Analysis (EDA) in Python.

Please structure it in the following steps:

1. Statistical summary: Provide descriptive statistics for numerical and categorical variables.
2. Data quality: Identify null values, duplicates, and incorrect data types, suggesting how to impute them.
3. Anomaly detection: Identify outliers in key columns and hypothesise whether they are measurement errors or natural variations.
4. Code: Provide ready-to-run Python code (using Pandas and Seaborn/Plotly).

Present your business conclusions in a clear, structured way before the code.
```

## Why it works

This prompt is designed to make the AI **think analytically** about the dataset's structure and anomalies before generating any code.

The key is forcing business conclusions *before* the code, preventing the model from getting lost in technical details without first contextualising the analysis.
