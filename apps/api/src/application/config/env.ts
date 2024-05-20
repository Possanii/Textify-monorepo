import z from "zod";

const schema = z.object({
  API_PORT: z.string().min(1),
  DATABASE_URL: z.string().min(1).url(),
  SECRET: z.string().min(1),
  STORAGE_ENDPOINT: z.string().min(3),
  STORAGE_PORT: z.string().transform((value) => Number(value)),
  STORAGE_REGION: z.string().optional(),
  STORAGE_BUCKET: z.string().min(3),
  STORAGE_PATH: z.string().optional(),
  STORAGE_ACCESS_KEY_ID: z.string().min(3),
  STORAGE_SECRET_ACCESS_KEY: z.string().min(3),
  ASSEMBLYAI_KEY: z.string().min(3),
});

export const env = schema.parse(process.env);
