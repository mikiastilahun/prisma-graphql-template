// import express and init it

import express = require("express");
import { ApolloServer } from "apollo-server-express";
import api from "./api";

const app: express.Application = express();

const server = new ApolloServer(api);

server.applyMiddleware({ app, path: "/graphql" });

// app.get("/test", async (req: express.Request, res: express.Response) => {
//   const user = await prisma.createUser({ name: "abel" });
//   console.log(process.env.name);
//   res.json(user);
// });

app.listen(3000, () => {
  console.log("the server is running");
});
