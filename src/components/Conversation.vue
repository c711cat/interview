<template>
  <div class="conversation-wrap p-d-flex p-jc-between">
    <div class="second-banner p-grid p-m-0 p-p-2">
      <div class="p-grid p-col-10 p-m-0 p-jc-start p-ai-center">
        <Avatar
          class="img-wrap"
          image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
          size="large"
          shape="circle"
        />

        <div class="Paul p-col-2 p-text-bold p-text-left">保羅</div>
      </div>
      <div class="p-grid p-col-2 p-m-0 p-jc-end p-ai-center">
        <img
          class="icon-style p-mr-2"
          src="@/img/ic_search.png"
          alt="search_icon"
        />

        <img class="icon-style" src="@/img/ic_note.png" alt="note_icon" />
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

export default {
  data() {
    return {};
  },
  components: { Avatar },
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

.enter-messages-container {
  border-top: 1px solid #a7f1e0;
  height: 80px;
  color: #9b9b9b;
}
</style>
