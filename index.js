const express = require("express");
const app = express();
const port = 3000;

// Middleware para leer JSON
app.use(express.json());

// Ruta de bienvenida
app.get("/", (req, res) => {
	res.send("API de Calculadora en Node.js");
});

// Operación de suma
app.post("/sumar", (req, res) => {
	const { a, b } = req.body;
	res.json({ resultado: a + b });
});

// Operación de resta
app.post("/restar", (req, res) => {
	const { a, b } = req.body;
	res.json({ resultado: a - b });
});

// Operación de multiplicación
app.post("/multiplicar", (req, res) => {
	const { a, b } = req.body;
	res.json({ resultado: a * b });
});

// Operación de división
app.post("/dividir", (req, res) => {
	const { a, b } = req.body;
	if (b === 0) {
		return res.status(400).json({ error: "No se puede dividir entre 0" });
	}
	res.json({ resultado: a / b });
});

// Iniciar servidor
app.listen(port, () => {
	console.log(`Calculadora API corriendo en http://localhost:${port}`);
});
