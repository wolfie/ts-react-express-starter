import * as path from "path";
import * as express from "express";
import * as cors from "cors";
import { isProd } from "@ts-react-express-starter/common/util";
import { getTestMessage } from "./testMessage";

console.log(`[Express: ${isProd ? "PRODUCTION" : "DEVELOPMENT"} MODE]`);

const app = express();

// TODO: all these should come from some config
const PORT = isProd ? 80 : 8081;
const PATH_PREFIX = isProd ? "/api" : "";
const REACT_SERVER = "http://localhost:8080";

/*
 * In production mode, all static files are in a folder, but in dev mode
 * React and Express live in separate servers and ports.
 */
if (isProd) {
  app.use(express.static(path.resolve(__dirname, "public")));
} else {
  app.use(cors({ origin: REACT_SERVER }));
}

app.get(`${PATH_PREFIX}/`, async (req, res) => {
  const obj = await getTestMessage();
  res.json(obj);
});

app.listen(PORT, () => {
  console.log(`opened in port ${PORT}`);
});
