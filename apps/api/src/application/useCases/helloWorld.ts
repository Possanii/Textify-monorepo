export class HelloWorldUseCase {
  async execute(): Promise<{ message: string }> {
    return {
      message: "Hello From Textify",
    };
  }
}
