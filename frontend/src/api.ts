import { isProd } from "@ts-react-express-starter/common/util";
import { HelloWorldMessage } from "@ts-react-express-starter/common/interfaces";

// TODO: inject endpoints from config
const API_BASE = isProd ? "/api" : "//localhost:8081";

export const getHelloWorld = (): Promise<HelloWorldMessage> =>
  fetch(`${API_BASE}/`).then(response => response.json());
