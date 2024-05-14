import { z } from "zod";

const schema = z.object({
  OPENAI_KEY: z.string().min(1),
});

export const env = schema.parse(process.env);
