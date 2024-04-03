import z from "zod";

const schema = z.object({
  API_PORT: z.string().min(1), 
  DATABASE_URL: z.string().min(1).url(),
  SECRET:z.string().min(1)
});



export const env = schema.parse(process.env);
