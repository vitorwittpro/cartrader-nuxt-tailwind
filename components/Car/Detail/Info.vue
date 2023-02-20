<script setup>
const props = defineProps({
  image: String,
  name: String,
  seats: Number,
  miles: String,
  price: String,
});
</script>

<template>
  <div class="mt-12 flex flex-col border-b">
    <NuxtImg class="w-full" :src="image" alt="car image" />
    <div class="mt-12 pb-5">
      <h1 class="font-bold text-4xl">{{ name }}</h1>
      <div class="flex justify-between">
        <p>{{ seats }} seats | {{ miles }} miles</p>
        <h1 class="font-bold text-3xl text-gray-500">${{ price }}</h1>
      </div>
    </div>
  </div>
</template>
