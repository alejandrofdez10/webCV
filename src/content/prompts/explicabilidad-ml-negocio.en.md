---
idioma: "en"
titulo: "ML Explainability for Board of Directors"
categoria: "MLOps"
descripcion: "Translates ML model coefficients into actionable business insights for a non-technical audience, with 3 concrete strategic recommendations."
tags: ["Explainability", "XAI", "Logistic Regression", "Business", "Communication"]
---

## Prompt

```
Act as an AI Consultant and Business Strategist. We have trained a Logistic Regression model to predict [insert problem, e.g. customer churn]. I will provide you with the variables and their associated coefficients from the model.

Your task: Translate the mathematical impact of these coefficients into actionable business insights for a board of directors with no technical background.

- Completely avoid technical jargon (do not use words like log-odds, p-value or collinearity).
- Use clear analogies and explain which factors carry the most weight in the prediction.
- Conclude with 3 strategic recommendations based on the behaviour of these variables.
```

## Why it works

Bridges the gap between the technical team and business stakeholders. By explicitly banning terms like *log-odds* or *p-value*, the model is forced to find **understandable analogies** rather than reformulating statistical concepts.

The result is an executive report, not a technical paper.
