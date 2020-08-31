import * as classes from "./classes";

export const typeAheadData = Object.keys(classes).map((libClass) => ({
  name: libClass.name,
  href: libClass.url,
}));
