---
idioma: "es"
titulo: "Code Review estricto para notebooks de Jupyter"
categoria: "Data Science"
descripcion: "Realiza una revisión de código exhaustiva de notebooks de Jupyter: detecta antipatrones, aplica PEP 8 y entrega el código refactorizado con type hints y docstrings."
tags: ["Code Review", "Python", "PEP8", "Refactoring", "Jupyter", "Type Hints"]
---

## Prompt

```
Actúa como un Lead Data Scientist y Arquitecto de Software realizando una revisión de código (Code Review) estricta. Analiza el siguiente bloque de código extraído de un notebook de Jupyter.

Evalúalo y estructúralo de la siguiente manera:

1. Antipatrones y Cuellos de botella: Identifica ineficiencias de memoria o de tiempo de ejecución (ej. iteraciones sobre DataFrames en lugar de usar .apply() o vectorización).
2. Buenas Prácticas (PEP 8): Señala problemas de estilo, nombres de variables poco claros o falta de modularidad.
3. Código Refactorizado: Reescribe el código aplicando todas tus sugerencias. El nuevo código debe estar modularizado en funciones, contener Type Hints (anotaciones de tipo) y Docstrings explicativos.
```

## Por qué funciona

Útil para **elevar la calidad del código** y hacerlo apto para producción. Forzar los tres pasos por separado (diagnosticar → criticar → refactorizar) evita que el modelo mezcle comentarios con código y produce una salida más estructurada y accionable.

El resultado pasa de código de notebook experimental a código de producción documentado.
