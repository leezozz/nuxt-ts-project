<template>
  <div>
    测试页
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '测试页'
})


definePageMeta({
  middleware: [
    defineNuxtRouteMiddleware((to, from) => {
      console.log('匿名路由中间件', to, from)
    })
  ]
})


const testStore = useTestStore()
// 测试pinia
const { data: testData, error } = await useAsyncData(() => testStore.getMockApiData('xxx'))
console.log('data-testData', testData.value)

</script>

<style scoped lang="scss">

</style>
