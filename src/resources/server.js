import app from "./src/app.js";

const PORT = process.env.PORT || 3010;

app.listen(PORT, "0.0.0.0", () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`);
});
