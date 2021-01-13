import express, { Request, Response } from "express";
import cors from "cors";
import { Country, State } from "../country-migrate/models/index";
const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World!");
});

app.get("/country", async (req: Request, res: Response) => {
  const countries = await Country.find().select("countryCode name").exec();
  res.status(200).send(countries);
});

app.listen(8000, () => {
  console.log("Server Started at Port, 8000");
});
