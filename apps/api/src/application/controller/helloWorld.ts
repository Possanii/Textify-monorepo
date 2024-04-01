import { IController, IResponse } from "../interfaces/IController";
import { IRequest } from "../interfaces/IRequest";
import { HelloWorldUseCase } from "../useCases/helloWorld";

export class HelloWorldController implements IController {
  constructor(private readonly helloWorldUseCase: HelloWorldUseCase) {}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const response = await this.helloWorldUseCase.execute();

      return {
        statusCode: 200,
        body: {
          message: response,
        },
      };
    } catch (error) {
      throw error;
    }
  }
}
