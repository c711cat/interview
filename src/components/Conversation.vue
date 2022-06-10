<template>
  <div class="conversation-wrap p-d-flex p-jc-between">
    <div class="second-banner p-grid p-m-0 p-py-1 p-px-2">
      <div class="p-grid p-col-10 p-m-0 p-jc-start p-ai-center">
        <Avatar
          class="img-wrap"
          image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
          size="large"
          shape="circle"
        />

        <div class="Paul p-col-2 p-text-bold p-text-left">
          {{ friend.name }}
        </div>
      </div>
      <div class="p-grid p-col-2 p-m-0 p-jc-end p-ai-center">
        <img
          @click.prevent="openAndCloseSearchInput"
          class="icon-style p-mr-2"
          src="@/img/ic_search.png"
          alt="search_icon"
          :class="{ 'icon-active-style': isInput }"
        />

        <img
          @click.prevent="openAndCloseDialog"
          class="icon-style"
          src="@/img/ic_note.png"
          alt="note_icon"
          :class="{ 'icon-active-style': isOpenDialog }"
        />
      </div>
    </div>

    <div
      v-if="isInput"
      class="search-container p-grid p-m-0 p-jc-between p-ai-center p-pl-1"
    >
      <input
        @change="searcher(searchText)"
        v-model="searchText"
        class="input-body p-col-9 p-text-left p-text-bold p-pl-3"
        type="text"
      />

      <div class="p-col-3 p-d-flex p-jc-end p-ai-center p-pr-3">
        <span v-if="match.length >= 1" class="search-result-text p-mr-4">
          {{ match.length }}則相符訊息
        </span>
        <img
          @click.prevent="cleanSearchInput"
          class="close-icon"
          src="@/img/ic_close1.png"
          alt="close_icon"
        />
      </div>
    </div>

    <div class="conversation-content p-text-right p-d-flex p-pb-4">
      <div v-if="isOpenDialog" class="memo-container">
        <Memo :memoList="friendMemos"></Memo>
      </div>
      <div
        v-for="(item, index) in conversationContents"
        :key="item + index"
        class="text-container p-py-2 p-px-4 p-mr-3"
      >
        <mark v-if="searchText === item && match.length >= 1">{{ item }}</mark>
        <div v-else>{{ item }}</div>
      </div>
    </div>

    <div class="enter-messages-container p-grid p-m-0 p-jc-around">
      <div class="p-col-11 p-d-flex p-jc-start p-ai-center">輸入訊息...</div>
      <div class="p-d-flex p-jc-center p-ai-center">
        <img
          class="icon-style p-col-1"
          src="@/img/ic_sent.png"
          alt="sent_icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "primevue/avatar";
import Memo from "@/components/Memo.vue";
import axios from "axios";

export default {
  data() {
    return {
      conversationContents: [],
      friend: [],
      isInput: false,
      isOpenDialog: false,
      searchText: "",
      match: [],
      friendMemos: {},
    };
  },
  components: { Avatar, Memo },
  inject: ["emitter"],
  methods: {
    openAndCloseSearchInput() {
      this.isInput = !this.isInput;
      this.isOpenDialog = false;
      this.cleanSearchInput();
    },
    cleanSearchInput() {
      this.searchText = "";
      this.match = [];
    },
    openAndCloseDialog() {
      this.getTheFriendMemos();
      this.isOpenDialog = !this.isOpenDialog;
      this.isInput = false;
    },
    searcher(text) {
      this.match = [];
      this.conversationContents.filter((item) => {
        if (item === text) {
          this.match.push(item);
        }
      });
    },
    getTheFriendMemos() {
      const api = `/memos/${this.$route.params.friendId}`;
      axios.get(api).then((res) => {
        this.friendMemos = res.data.memo.contents;
      });
    },
  },

  created() {
    this.emitter.on("conversationContents", (data) => {
      this.conversationContents = data;
    });
    this.emitter.on("friendName", (data) => {
      this.friend = data;
    });
  },
};
</script>

<style lang="scss" scoped>
.conversation-wrap {
  height: 620px;
  flex-direction: column;
}

.second-banner {
  box-shadow: 0px 3px 3px #e9e9e9;
}

.memo-container {
  position: absolute;
  top: 4px;
  right: 8px;
}

.Paul {
  font-size: 20px;
}

.img-wrap {
  border: 1px solid #a7f1e0;
}

.icon-style {
  width: 40px;
  padding: 3px;
}

.icon-style:hover {
  background: #f4f4f4;
  border-radius: 100%;
  border: 1px solid #d7d7d7;
  cursor: pointer;
}

.icon-active-style {
  background: #f4f4f4;
  border-radius: 100%;
  border: 1px solid #d7d7d7;
}

.conversation-content {
  height: 450px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 1;
  position: relative;
}

.text-container {
  color: #ffffff;
  background: #4a90e2;
  border-radius: 24px;
  margin-bottom: 4px;
}

.enter-messages-container {
  border-top: 1px solid #a7f1e0;
  height: 80px;
  color: #9b9b9b;
}

.search-container {
  border-bottom: 1px solid #a7f1e0;
  height: 70px;
}

.search-result-text {
  color: #9b9b9b;
}

.close-icon {
  width: 30px;
}

.input-body {
  font-size: 16px;
  border: none;
  outline: medium;
}

.close-icon:hover {
  cursor: pointer;
}
</style>
