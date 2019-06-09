import * as express from "express";

const app = express();
const PORT = 8081;

app.listen(PORT, () => {
  console.log(`opened in port ${PORT}`);
});
