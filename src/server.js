// src/server.js
import { createServer, Model } from "miragejs";

export function makeServer() {
  let server = createServer({
    models: {
      friend: Model,
      message: Model,
      memo: Model,
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
      server.create("message", {
        friendId: "1",
        content: [
          "保羅",
          "你好，我是潔西卡",
          "我喜歡吃的食物有",
          "各種巧克力口味的甜點",
        ],
      });

      server.create("message", {
        friendId: "2",
        content: ["傑克", "你好，我是潔西卡", "我喜歡做的運動為", "游泳,跑步"],
      });

      server.create("message", {
        friendId: "3",
        content: ["傑森", "你好，我是潔西卡", "我喜歡的動物為", "貓,狗"],
      });

      server.create("memo", {
        contents: [
          { date: "2019/07/01 13:45", text: "Paul-1" },
          { date: "2019/07/02 13:45", text: "Paul-2" },
        ],
      });
      server.create("memo", {
        contents: [
          { date: "2019/07/01 13:45", text: "Jack-1" },
          { date: "2019/07/02 13:45", text: "Jack-2" },
        ],
      });
      server.create("memo", {
        contents: [
          { date: "2019/07/01 13:45", text: "Jason-1" },
          { date: "2019/07/02 13:45", text: "Jason-2" },
        ],
      });
    },

    routes() {
      this.get("/memos/:id", (schema, request) => {
        let the_memo = [];
        schema.memos.all().filter((item) => {
          if (item.id === request.params.id) {
            the_memo = item;
          }
        });
        return the_memo;
      });

      this.get("/messages/:friendId", (schema, request) => {
        let id = request.params.friendId;
        let all_msgs = schema.messages.all();
        let the_msg = [];
        all_msgs.filter((item) => {
          if (item.friendId === id) {
            the_msg = item;
          }
        });
        return the_msg;
      });

      this.get("/memos", (schema) => {
        return schema.memos.all();
      });

      this.get("/friends", (schema) => {
        return schema.friends.all();
      });
    },
  });

  return server;
}
