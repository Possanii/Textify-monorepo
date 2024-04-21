import { Request, Response } from "express";
import { IController } from "../../application/interfaces/IController";

export function routeAdapter(controller: IController) {
  return async (request: Request, response: Response) => {
    const { statusCode, body } = await controller.handle({
      body: request.body,
      headers: request.headers as Record<string, string>,
      params: request.params,
      files: request.files,
      user: request.metadata?.user,
    });

    response.status(statusCode).json(body);
  };
}
