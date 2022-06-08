<template>
  <div class="wrap p-grid">
    <div class="friends-list-container p-col-3 p-text-left">
      <h4 class="friends-list-title">好友列表(3)</h4>
      <div class="person-wrap p-grid p-py-3">
        <div class="p-d-flex p-jc-center p-ai-center">
          <Avatar
            class="img-wrap"
            image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
            size="xlarge"
            shape="circle"
          />
        </div>

        <div class="p-col-9">
          <div class="name p-text-bold p-mt-0 p-mb-2">保羅</div>
          <div class="introduction">大家好，我是保羅~</div>
        </div>
      </div>
    </div>

    <div class="p-col-9 p-p-0">
      <div class="banner p-grid p-m-0">
        <div
          class="Cherri-Chat-container p-grid p-col-10 p-m-0 p-jc-center p-ai-center"
        >
          <div
            class="Cherri-Chat text-white p-col-9 p-text-bold p-text-left p-pl-3"
          >
            Cherri Chat
          </div>
          <div class="p-col-3 p-d-flex p-jc-around p-ai-center">
            <div class="chinese p-text-bold">中文</div>
            <div class="english text-white">English</div>
          </div>
        </div>
        <div class="p-col-2 p-grid p-m-0 p-jc-center p-ai-center">
          <div class="p-grid p-m-0 p-col-12 p-jc-center p-ai-center">
            <div>
              <Avatar
                class="img-wrap"
                image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                size="large"
                shape="circle"
              />
            </div>

            <span class="Jessica text-white p-col-7 p-text-bold">潔西卡</span>
          </div>
        </div>
      </div>

      <router-view />
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
.wrap {
  max-width: 1300px;
  margin: 0 auto;
}

.friends-list-container {
  height: 700px;
  box-shadow: 3px 0px 3px #e9e9e9;
}

.banner {
  background: #4a90e2;
}

.text-white {
  color: #ffffff;
}

.friends-list-title {
  color: #4a4a4a;
}

.name {
  color: #000000;
  font-size: 24px;
}

.introduction {
  color: #9b9b9b;
}

.person-wrap {
  border-top: 1px solid #a7f1e0;
  border-bottom: 1px solid #a7f1e0;
}

.img-wrap {
  border: 1px solid #a7f1e0;
}

.chinese {
  background: #ffffff;
  color: #4a90e2;
  border: 1px solid #ffffff;
  font-size: 14px;
  width: 65px;
  height: 25px;
  border-radius: 15px;
  line-height: 25px;
}

.english {
  border: 1px solid #ffffff;
  font-size: 14px;
  width: 95px;
  height: 25px;
  border-radius: 15px;
  line-height: 25px;
}

.Cherri-Chat-container {
  border-right: 1px solid #a4c7f0;
}

.Cherri-Chat {
  font-size: 24px;
}

.Jessica {
  font-size: 17px;
}
</style>
