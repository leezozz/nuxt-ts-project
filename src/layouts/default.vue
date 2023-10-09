<template>
  <div class="nuxt-default-layout">
    <div class="aside-container">
      侧边栏
    </div>
    <div class="content-area">
      内容区域
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.nuxt-default-layout {
  display: flex;
  height: 100vh;
  .aside-container {
    width: 200px;
    max-width: 200px;
    border: 1px solid red;
  }
  .content-area {
    flex: 1;
    border: 1px solid red;
  }
}
</style>
