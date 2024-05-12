import { env } from "@textify/env";
import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: env.OPENAI_KEY,
});
