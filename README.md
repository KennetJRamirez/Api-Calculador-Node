# API Calculadora en Node.js

Este proyecto es una API REST sencilla para realizar operaciones básicas de una calculadora: suma, resta, multiplicación y división, desarrollada con Node.js y Express.

## Endpoints

- `GET /`  
  Retorna un mensaje de bienvenida.

- `POST /sumar`  
  Suma dos números.  
  **Request body:** `{ "a": número, "b": número }`  
  **Response:** `{ "resultado": número }`

- `POST /restar`  
  Resta dos números.  
  **Request body:** `{ "a": número, "b": número }`  
  **Response:** `{ "resultado": número }`

- `POST /multiplicar`  
  Multiplica dos números.  
  **Request body:** `{ "a": número, "b": número }`  
  **Response:** `{ "resultado": número }`

- `POST /dividir`  
  Divide dos números.  
  **Request body:** `{ "a": número, "b": número }`  
  **Response:** `{ "resultado": número }`  
  **Nota:** No se permite división entre 0, devuelve error 400.

## Instalación

1. Clonar el repositorio  
2. Instalar dependencias con:  
```bash
npm install
```
## Ejecución
Puedes usar el script para desarrollo con recarga automática:
```bash
npm run dev2 index.js
```
