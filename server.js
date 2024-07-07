import app from "./app.js";

app.get("/", (req, res) => {
  res.send("<h1>Working Fine</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${process.env.PORT}`);
});
