import * as path from "path";
import * as express from "express";
import * as cors from "cors";
import { isProd } from "@ts-react-express-starter/common/util";
import { HelloWorldMessage } from "@ts-react-express-starter/common/interfaces";

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

app.get(`${PATH_PREFIX}/`, (req, res) => {
  // Reply with a generic message with a synthetic loading time
  setTimeout(() => {
    const message: HelloWorldMessage = { message: "Hello from Express!" };
    res.json(message);
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`opened in port ${PORT}`);
});
