import { HelloWorldController } from "../../application/controller/helloWorld";
import { makeHelloWorldUseCase } from "../useCases/makeHelloWorldUseCase";

export function makeHelloWorldController() {
  const helloWorldUseCase = makeHelloWorldUseCase();

  return new HelloWorldController(helloWorldUseCase);
}
