import { env } from "../application/config/env";
import "../application/utils/mongooseClient";
import app from "./config";
import "./routes";

app.listen(env.API_PORT, () =>
  console.log("🔥 Server listening on port " + env.API_PORT)
);
