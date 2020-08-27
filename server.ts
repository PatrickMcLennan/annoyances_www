import express, { Request, Response } from "express";
import path from "path";
import { classes } from "./src/data";
import { LibClass, ClassRequest, ClassResponse } from "./src/types/classes.types";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json());

app.set("view engine", "pug");
app.set(`views`, path.join(__dirname, `views`));
app.use(express.static(path.join(__dirname, "public")));

app.get(`/`, (req, res) => {
  res.render(`pages/index`, { title: `Home | annoyance Docs` });
});

app.get(`/aboutMe`, (req, res) => {
  res.render(`pages/aboutMe`, { title: `About the Author | annoyance Docs` });
});

app.get(`/class/:className`, (req: ClassRequest, res: Response): void => {
  const queriedClass: LibClass = classes[req.className];
  //   res.status(queriedClass ? 200 : 404);
  console.log(req.className);

  if (!queriedClass) return res.render(`pages/404`, { queriedClass: req.className });
  else return res.render(`pages/classes`, { queriedClass });
});

app.listen(4000, () => console.log(`Server is running on 4000`));
