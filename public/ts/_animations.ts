import gsap from "gsap/all";

export function springIn<T extends HTMLElement>(element: T) {
  return gsap.to(element, { scale: 1, duration: 0.1 });
}
