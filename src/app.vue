<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useSeoMeta({
  titleTemplate: (titleChunk) => {
    console.log('titleChunk', titleChunk)
    return titleChunk ? `${titleChunk}` : `Nuxt-Ts`;
  }
})
</script>

<style scoped lang="scss">

</style>
