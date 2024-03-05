<template>
  <div>
    <component :is="VNodeLayout">
      <router-view />
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import LayoutDefault from './layouts/default.vue';
import LayoutAuth from './layouts/auth.vue';
const route = useRoute();
const currentRoute = computed(() => route.meta)
console.log(currentRoute.value)

interface ILayoutMap {
  [key: string]: any;
}
const layoutMap: ILayoutMap = {
  default: LayoutDefault,
  auth: LayoutAuth,
}

const VNodeLayout = computed(() => {
  return layoutMap[(currentRoute.value.layout as string) || 'default']
})
</script>

<style scoped>

</style>