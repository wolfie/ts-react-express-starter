import { isProd } from "./util";

// TODO: inject endpoints from config
const API_BASE = isProd ? "/api" : "//localhost:8081";

export const getHelloWorld = (): Promise<{ message: string }> =>
  fetch(`${API_BASE}/`).then(response => response.json());
