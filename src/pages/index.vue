<template>
  <div class="index-container">
    首页
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '首页'
})

console.log('首页')
</script>

<style scoped lang="scss">
.index-container {
  padding: 10px;
  background-color: #ccd6d9;
}
</style>
