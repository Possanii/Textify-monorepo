import { HelloWorldUseCase } from "../../application/useCases/helloWorld";

export function makeHelloWorldUseCase() {
  return new HelloWorldUseCase();
}
