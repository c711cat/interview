// src/server.js
import { createServer, Model } from "miragejs";

export function makeServer() {
  let server = createServer({
    models: {
      friend: Model,
    },

    seeds(server) {
      server.create("friend", {
        id: "1",
        name: "保羅",
        introduction: "大家好，我是保羅~",
      });
      server.create("friend", {
        id: "2",
        name: "傑克",
        introduction: "大家好，我是傑克~",
      });
      server.create("friend", {
        id: "3",
        name: "傑森",
        introduction: "大家好，我是傑森~",
      });
    },

    routes() {
      this.get("/friends", (schema) => {
        return schema.friends.all();
      });
      this.get("/conversation/1", () => {
        return [
          "保羅",
          "你好，我是潔西卡",
          "我喜歡吃的食物有",
          "各種巧克力口味的甜點",
        ];
      });
      this.get("/conversation/2", () => {
        return ["傑克", "你好，我是潔西卡", "我喜歡做的運動為", "游泳,跑步"];
      });
      this.get("/conversation/3", () => {
        return ["傑森", "你好，我是潔西卡", "我喜歡的動物為", "貓,狗"];
      });
    },
  });

  return server;
}
