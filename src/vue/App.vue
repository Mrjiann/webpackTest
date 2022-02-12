<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <Cpn/>
  </div>
</template>

<script>
// 导入局部子组件
import Cpn from "./Cpn.vue";

export default {
  name: "App",
  //   组成局部组件
  components: {
      Cpn
  },
  data() {
    return {
      message: "hello",
    };
  }
};
</script>

<style scoped>
    .title{
        font-size: 64px;
    }
</style>