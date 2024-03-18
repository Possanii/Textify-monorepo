import { env } from "./config/env";
import app from "./server";

app.listen(env.API_PORT, () =>
  console.log("🔥 Server listening on port " + env.API_PORT)
);
