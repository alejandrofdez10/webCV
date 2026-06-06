---
idioma: "en"
titulo: "Strict Code Review for Jupyter Notebooks"
categoria: "Data Science"
descripcion: "Performs a thorough code review of Jupyter notebooks: detects anti-patterns, applies PEP 8, and delivers refactored code with type hints and docstrings."
tags: ["Code Review", "Python", "PEP8", "Refactoring", "Jupyter", "Type Hints"]
---

## Prompt

```
Act as a Lead Data Scientist and Software Architect conducting a strict code review. Analyse the following code block extracted from a Jupyter notebook.

Evaluate and structure it as follows:

1. Anti-patterns and bottlenecks: Identify memory or runtime inefficiencies (e.g. iterating over DataFrames instead of using .apply() or vectorisation).
2. Best practices (PEP 8): Flag style issues, unclear variable names, or lack of modularity.
3. Refactored code: Rewrite the code applying all your suggestions. The new code must be modularised into functions, include Type Hints (type annotations) and explanatory Docstrings.
```

## Why it works

Useful for **raising code quality** to production standards. Forcing three separate steps (diagnose → critique → refactor) prevents the model from mixing comments with code, producing a more structured and actionable output.

The result takes experimental notebook code and turns it into documented production code.
