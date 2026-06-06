---
idioma: "en"
titulo: "Clinical Data Cleaning Pipeline"
categoria: "Data Engineering"
descripcion: "Creates a robust pipeline to detect and correct biologically impossible values in medical datasets using vectorised Pandas operations without for loops."
tags: ["Pandas", "Python", "Healthcare", "Cleaning", "Vectorisation"]
---

## Prompt

```
Assume the role of a Data Engineer specialising in the healthcare sector. I will provide you with a code snippet and a sample DataFrame. Your task is to create a robust and efficient data cleaning pipeline.

Requirements:

1. Audit the dataset for biologically impossible values according to standard clinical criteria (e.g. negative ages, unrealistic blood pressure values, BMI outside the human range).
2. Write a Python function using Pandas that filters or corrects these anomalies.
3. Avoid for loops; prioritise vectorised Pandas operations to maximise efficiency.
4. Document each transformation with clear comments explaining the clinical criterion applied.
```

## Why it works

Ideal for applying **strict business rules** or domain-specific validations. The instruction to avoid `for` loops forces the model to generate efficient, production-ready code.

Directly inspired by the [Heart Disease Prediction Pipeline](/en/proyectos/heart-disease-prediction) project, where clinical outliers represented real critical patients, not data errors.
