import "../scss/classes";

const ACCORDIONS_UL: HTMLUListElement = document.querySelector(`.accordions`);

if (ACCORDIONS_UL) {
  const accordions: Element[] = [...ACCORDIONS_UL.querySelectorAll(`.accordion`)];
  console.log(accordions);

  const addListener = (accordion: HTMLLIElement) => {
    const toggle: HTMLButtonElement = accordion.querySelector(`.button`);

    toggle.addEventListener(`click`, (e) => {
      console.log(e.target);
    });
  };

  accordions.forEach(addListener);
}
