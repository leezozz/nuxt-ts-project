<template>
  <div>
    测试页-people
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '测试页-people'
})
console.log('测试页-people')

const route = useRoute()
console.log('测试页-people-route', route)
</script>

<style scoped lang="scss">

</style>
