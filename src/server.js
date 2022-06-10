// src/server.js
import { createServer, Model } from "miragejs";

export function makeServer() {
  let server = createServer({
    models: {
      friend: Model,
      message: Model,
      memotest: Model,
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

      server.create("memotest", {
        friend_id: "1",
        date: "2019/07/01 13:45",
        text: "Paul-01",
      });
      server.create("memotest", {
        friend_id: "1",
        date: "2019/07/02 13:45",
        text: "Paul-02",
      });
      server.create("memotest", {
        friend_id: "2",
        date: "2019/07/01 13:45",
        text: "Jack-01",
      });
      server.create("memotest", {
        friend_id: "2",
        date: "2019/07/02 13:45",
        text: "Jack-02",
      });
      server.create("memotest", {
        friend_id: "3",
        date: "2019/07/01 13:45",
        text: "Jason-01",
      });
      server.create("memotest", {
        friend_id: "3",
        date: "2019/07/02 13:45",
        text: "Jason-02",
      });
    },

    routes() {
      this.get("/memotests/:friendId", (schema, request) => {
        let the_list = [];
        schema.memotests.all().filter((item) => {
          if (item.friend_id === request.params.friendId) {
            the_list.push(item);
          }
        });
        return the_list;
      });

      this.post("/addMemo", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.memotests.create(attrs);
      });

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
