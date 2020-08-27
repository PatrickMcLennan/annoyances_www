import { springIn } from "./_animations";
import "../scss/aboutMe.scss";

const ABOUT_ME: HTMLElement = document.querySelector(`.about-me`);

if (ABOUT_ME) {
  const card: HTMLDivElement = ABOUT_ME.querySelector(`.card`);
  springIn(card);
  console.log(`hwllo dadasdsdasdasdsadagaindfdsf`);
}
