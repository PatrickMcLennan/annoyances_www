import express from "express";
import path from "path";
const app = express();

app.set("view engine", "pug");
app.set(`views`, path.join(__dirname, `views`));
app.use(express.static(path.join(__dirname, "public")));

app.get(`/`, (req, res) => {
  res.render(`pages/index`, { title: `Home | annoyance Docs` });
});

app.get(`/aboutMe`, (req, res) => {
  res.render(`pages/aboutMe`, { title: `About the Author | annoyance Docs` });
});

app.listen(4000, () => console.log(`Server is running on 4000`));
