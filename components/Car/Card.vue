<script setup>
const handleClick = () => {
  navigateTo("/car/honda-1");
};
</script>

<template>
  <div
    class="w-full border rounded-lg p-3 flex items-center cursor-pointer shadow hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.3)] ease-in duration-300"
    @click="handleClick"
  >
    <div class="w-[400px] mr-3">
      <img
        class="w-[300px] rounded-md"
        src="https://i0.statig.com.br/bancodeimagens/cc/1r/uv/cc1ruvthehzlep7i6lhlhltop.jpg"
        alt="car image"
      />
    </div>
    <div class="flex flex-col justify-between text-right">
      <div class="flex flex-col text-left mb-5 max-w-[300px]">
        <h1 class="font-bold">Honda Civic - 2019</h1>
        <p class="text-xs text-gray-600">
          Nam tincidunt, erat a condimentum luctus, leo ligula congue sapien, ac
          ultricies lorem ante a arcu. Nunc egestas nulla lacus, eu finibus est
          euismod non. Etiam eget eleifend sem. Pellentesque suscipit non erat
          ac tempus.
        </p>
      </div>
      <h2 class="font-bold">$ 20.000</h2>
    </div>
  </div>
</template>
