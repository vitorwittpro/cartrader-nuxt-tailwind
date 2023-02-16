<script setup>
const route = useRoute();

const handleLocationClick = () => {};
</script>

<template>
  <div class="shadow border w-80 z-30 mr-10 h-[190px] rounded-md">
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Location</h3>
      <h3 class="text-sky-500 capitalize">{{ route.params.city }}</h3>
      <!-- <div
        class="absolute z-50 bg-white border shadow left-48 top-8 p-3 -m-1 rounded-md"
      >
        <input
          class="mb-2 px-4 py-2 border rounded-full focus:outline-none"
          type="text"
          placeholder="City"
        />
        <button class="w-full rounded-full py-1 bg-sky-500 text-white">
          Apply
        </button>
      </div> -->
    </div>
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 class="text-sky-500 capitalize">Honda</h3>
    </div>
    <div class="p-5 flex justify-between relative cursor-pointer">
      <h3>Price</h3>
      <h3 class="text-sky-500 capitalize">Any</h3>
    </div>
  </div>
</template>
