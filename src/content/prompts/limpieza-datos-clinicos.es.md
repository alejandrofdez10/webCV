---
idioma: "es"
titulo: "Pipeline de Limpieza de Datos Clínicos"
categoria: "Data Engineering"
descripcion: "Crea un pipeline robusto para detectar y corregir valores biológicamente imposibles en datasets médicos, usando operaciones vectorizadas de Pandas sin bucles for."
tags: ["Pandas", "Python", "Salud", "Limpieza", "Vectorización"]
---

## Prompt

```
Asume el rol de un Ingeniero de Datos especializado en el sector salud. Te proporcionaré un fragmento de código y una muestra de un DataFrame. Tu tarea es crear un pipeline de limpieza de datos robusto y eficiente.

Requisitos:

1. Audita el dataset en busca de valores biológicamente imposibles según criterios clínicos estándar (ej. edades negativas, presiones arteriales irreales, IMC fuera de rango humano).
2. Escribe una función en Python usando Pandas que filtre o corrija estas anomalías.
3. Evita el uso de bucles for; prioriza operaciones vectorizadas de Pandas para maximizar la eficiencia.
4. Documenta cada transformación con comentarios claros explicando el criterio clínico aplicado.
```

## Por qué funciona

Ideal para aplicar **reglas de negocio estrictas** o validaciones de dominio específico. La instrucción de evitar bucles `for` fuerza al modelo a generar código eficiente y apto para producción.

Directamente inspirado en el trabajo del proyecto [Heart Disease Prediction Pipeline](/es/proyectos/heart-disease-prediction), donde los outliers clínicos representaban pacientes críticos reales, no errores de datos.
