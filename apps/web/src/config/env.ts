"use server";

import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["development", "production"]),
  NEXT_PUBLIC_API_URL: z.string().min(3),
});

export const env = schema.parse(process.env);
