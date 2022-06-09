<template>
  <div class="dialog-wrap p-jc-start p-ai-center">
    <div class="inner-wrap p-m-4 p-px-4">
      <div class="enter-msg-container p-pb-3">
        <Textarea
          class="textarea-body p-pl-3 p-mb-1"
          v-model="value"
          :autoResize="true"
          rows="5"
          cols="10"
          placeholder="輸入訊息..."
        />
        <button class="btn-body p-py-2" type="button">新增</button>
      </div>
      <div
        v-for="(item, index) in memoList"
        :key="item + index"
        class="msgs-container p-text-left p-p-3 p-mt-3"
      >
        <img
          class="delete-msg-icon"
          src="@/img/ic_close2.png"
          alt="close_icon"
        />
        <div class="date-and-time p-mb-2">{{ item.date }}</div>
        <div class="p-text-bold">{{ item.message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Textarea from "primevue/textarea";

export default {
  data() {
    return {
      value: "",
      memoList: [
        { date: "2019/07/01 13:45", message: "備忘訊息1" },
        { date: "2019/07/01 13:45", message: "備忘訊息2" },
      ],
    };
  },
  components: { Textarea },
};
</script>

<style lang="scss" scoped>
.dialog-wrap {
  width: 500px;
  height: 400px;
  background: #ffffff;
  filter: drop-shadow(0 0 5px #ccc);
  border-radius: 5px;
  position: relative;
  z-index: 9;
  display: flex;
  flex-direction: column;
}

.dialog-wrap:after {
  content: "";
  width: 0px;
  height: 0px;
  border-width: 20px;
  border-style: solid;
  position: absolute;
  right: 10px;
  top: -40px;
  border-color: transparent;
  border-bottom-color: #ffffff;
}

.inner-wrap {
  overflow-y: auto;
  width: 100%;
}

.enter-msg-container {
  border-bottom: 1px solid #a7f1e0;
}

.textarea-body {
  width: 100%;
}

.btn-body {
  width: 100%;
  background: #4a90e2;
  border: 1px solid #4a90e2;
  color: #ffffff;
  font-size: 16px;
}

.btn-body:hover {
  cursor: pointer;
}

.msgs-container {
  border: 1px solid #a7f1e0;
  height: 100px;
  position: relative;
}

.delete-msg-icon {
  position: absolute;
  right: 12px;
  top: 12px;
}

.delete-msg-icon:hover {
  cursor: pointer;
}

.date-and-time {
  color: #4a90e2;
  width: 100%;
}
</style>
