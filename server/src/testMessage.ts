import { HelloWorldMessage } from "@ts-react-express-starter/common/src/interfaces";

export const getTestMessage = (): Promise<HelloWorldMessage> =>
  new Promise((resolve, reject) => {
    // Reply with a generic message with a synthetic loading time
    setTimeout(() => {
      const message: HelloWorldMessage = { message: "Hello from Express!" };
      resolve(message);
    }, 1000);
  });
