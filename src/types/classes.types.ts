import { Request, Response } from "express";

export type LibClass = {
  name: string;
  isStatic: boolean;
  description: string;
  methods: [
    {
      name: string;
      description: string;
      example: string;
      returnType: string;
    }
  ];
};

export interface ClassRequest extends Request {
  className: string;
}

export interface ClassResponse {
  queriedClass: LibClass;
}
