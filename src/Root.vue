<template>
  <div>
    <router-view v-slot="{ Component, route }">
    <transition name="slide">
      <component :is="Component" :key="route" />
    </transition>
  </router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>