// src/server.js
import { createServer, Model } from "miragejs";

export function makeServer() {
  let server = createServer({
    models: {
      friend: Model,
    },

    routes() {
      this.get("/friends", () => {
        return [
          { name: "保羅", introduction: "大家好，我是保羅~" },
          { name: "傑克", introduction: "大家好，我是傑克~" },
          { name: "傑森", introduction: "大家好，我是傑森~" },
        ];
      });
    },
  });

  return server;
}
