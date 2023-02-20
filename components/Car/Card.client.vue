<script setup>
import heartFilled from "@/assets/icons/heartFilled.png";
import heartOutline from "@/assets/icons/heartOutline.png";

const props = defineProps({
  car: Object,
  favorited: Boolean,
});

const emit = defineEmits("favorite");
</script>

<template>
  <div
    class="relative h-[200px] mb-2 w-full border rounded-lg p-3 pr-5 flex justify-between hover:translate-x-6 items-center shadow ease-in duration-100"
  >
    <div class="absolute right-4 top-4">
      <img
        class="w-5"
        :src="favorited ? heartFilled : heartOutline"
        @click="emit('favorite', car.id)"
      />
    </div>
    <div
      class="w-[300px] mr-5 cursor-pointer"
      @click="navigateTo(`/car/${car.name}-${car.id}`)"
    >
      <NuxtImg
        class="min-w-[250px] rounded-md"
        :src="car.url"
        alt="car image"
      />
    </div>
    <div class="w-full h-full flex flex-col justify-between text-right">
      <div class="flex flex-col text-left mb-5">
        <h1 class="font-bold text-xl mb-1">{{ car.name }}</h1>
        <p class="text-xs text-gray-600">
          {{ car.description }}
        </p>
      </div>
      <h2 class="font-bold text-2xl pr-3">$ {{ car.price }}</h2>
    </div>
  </div>
</template>
