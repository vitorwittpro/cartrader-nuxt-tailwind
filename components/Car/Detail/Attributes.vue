<script setup>
const props = defineProps({
  features: Array,
});
</script>

<template>
  <div class="w-full mt-5 mb-5">
    <ul class="">
      <li
        v-for="feature in features"
        :key="feature"
        class="flex items-center mb-1"
      >
        <NuxtImg
          class="w-[25px] h-[25px] mr-2"
          src="@/assets/icons/check.png"
        />
        {{ feature }}
      </li>
    </ul>
  </div>
</template>
