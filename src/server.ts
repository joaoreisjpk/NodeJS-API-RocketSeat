import express from 'express';
import { router } from './routes';
import { createConnection } from 'typeorm';
import "./database";

const app = express();

createConnection();

app.get("/", (req, res) => {
  return res.send("Hello world!")
});

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("Server is running!"));
