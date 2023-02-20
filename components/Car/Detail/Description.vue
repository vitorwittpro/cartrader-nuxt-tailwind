<script setup>
const props = defineProps({
  description: String,
});
</script>
<template>
  <div class="w-full border-t p-5">
    <p>{{ description }}</p>
  </div>
</template>
