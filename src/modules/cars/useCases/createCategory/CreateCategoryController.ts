import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}
  handle(req: Request, res: Response) {
    const { name, description } = req.body;

    try {
      this.createCategoryUseCase.execute({ name, description })
    } catch (err) {
      return res.status(400).send({ Message: 'Category already exists!' })
    }

    return res.status(201).send();
  }
}

export { CreateCategoryController }
