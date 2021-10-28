import express, { response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 8000;
const data = { rainbows: "waterfall" };

const logger = (request, response, next) => {
  console.log(`Got Request: ${JSON.stringify(request.url)}`);
  next();
};
app.use(logger);

app.get("/", logger, (request, response) => {
  console.log("Hello World");
  response.send("Hello World");
});

app.get("/api/data", (request, response) => {
  response.send(data);
});

app.listen(PORT, () => {
  console.log(`Starting Server on http://localhost:${PORT}`);
});
