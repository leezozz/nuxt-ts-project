<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useSeoMeta({
  // titleChunk：useSeoMeta的title。
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk}` : 'Nuxt-Ts'
  }
})
</script>

<style scoped lang="scss">

</style>
