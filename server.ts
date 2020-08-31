import express, { Response } from "express";
import path from "path";
import { classes } from "./src/data";
import { LibClass, ClassRequest } from "./src/types/classes.types";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json());

app.set("view engine", "pug");
app.set(`views`, path.join(__dirname, `views`));
app.use(express.static(path.join("public")));

app.get(`/`, (req, res) => res.render(`pages/index`, { title: `Home | annoyances` }));

app.get(`/aboutMe`, (req, res) => res.render(`pages/aboutMe`, { title: `About the Author | annoyances` }));

app.get(`/class/:className`, (req: ClassRequest, res: Response): void => {
  const queriedClass: LibClass = classes[req.params.className];
  console.log(queriedClass);
  if (!queriedClass) return res.render(`pages/404`, { queriedClass: req.className });
  else return res.render(`pages/classes`, { title: `${queriedClass.name} | annoyances`, queriedClass });
});

app.listen(4000, () => console.log(`Server is running on 4000`));
