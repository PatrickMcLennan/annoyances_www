import { LibClass } from "../types/classes.types";

export const DateInfo: LibClass = {
  name: `DateInfo`,
  isStatic: false,
  description: `A class useful for comparing, generating or manipulating Dates`,
  methods: [
    {
      name: `getTomorrow`,
      description: `Returns tomorrows Date`,
      example: `An example goes here`,
      returnType: `Date`,
    },
  ],
};
