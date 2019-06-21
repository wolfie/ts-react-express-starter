import { isProd, HelloWorldMessage } from "@ts-react-express-starter/common";

// TODO: inject endpoints from config
const API_BASE = isProd ? "/api" : "//localhost:8081";
const get = (path: string) => window.fetch(API_BASE + path, { method: "GET" });

export const getHelloWorld = (): Promise<HelloWorldMessage> =>
  get("/").then(response => response.json());
