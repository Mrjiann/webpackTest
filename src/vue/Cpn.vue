<template>
  <div>
    <h2 class="title">{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      message: "我是Cpn组件",
    };
  },
};
</script>

<style scoped>
    .title{
        font-size: 100px;
    }
</style>