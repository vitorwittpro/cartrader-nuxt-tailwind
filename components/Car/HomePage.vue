<script setup>
const focus = ref(false);
</script>

<template>
  <div
    class="relative w-100 h-screen bg-no-repeat bg-cover bg-bottom bg-[url('https://www.supercars.net/blog/wp-content/uploads/2020/09/wallpaperflare.com_wallpaper-1-1.jpg')]"
  >
    <div class="z-10 w-full h-full absolute flex justify-center items-center">
      <div class="text-center">
        <h1 class="text-8xl font-serif text-white mb-20">Find your drive</h1>
        <CarSearchBar />
      </div>
    </div>
    <div class="z-1 w-full h-full absolute" :class="focus ? 'blur' : ''"></div>
  </div>
</template>

<style>
.blur {
  backdrop-filter: blur(2px);
  transition: 1000ms;
}

.container:before {
  content: "";
  position: absolute;
  background: inherit;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
  filter: blur(10px);
  margin: -20px;
}
</style>
