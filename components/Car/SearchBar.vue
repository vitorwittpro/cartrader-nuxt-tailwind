<script setup>
const city = ref("");
const errorCity = ref(false);

const handleSearch = () => {
  if (!city.value) {
    return (errorCity.value = true);
  }
  navigateTo(`/city/${city.value}/car`);
};
</script>

<template>
  <div
    class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
    :class="errorCity ? 'border-2 border-red-500 shake' : ''"
  >
    <input
      class="w-full py-3 px-5 text-2xl rounded-l-full focus:outline-none"
      type="text"
      v-model="city"
      placeholder="Search by city..."
    />
    <button
      class="py-3 px-20 bg-sky-500 text-white"
      type="submit"
      @click="handleSearch"
    >
      Search
    </button>
  </div>
</template>

<style>
.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
