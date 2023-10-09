<template>
  <div>
    测试页-peopleId
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '测试页-peopleId'
})
console.log('测试页-peopleId')

const route = useRoute()
console.log('测试页-peopleId-route', route, route.params)
</script>

<style scoped lang="scss">

</style>
