<script setup>
const route = useRoute();

useHead({
  title: `${
    route.params.make ? toTitleCase(route.params.make) : "cars"
  } in ${toTitleCase(route.params.city)}`,
});

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
</script>

<template>
  <div>
    <div
      class="mx-auto mt-4 max-w-7xl space-x-4 px-4 xs:px-8 sm:px-10 lg:scroll-px-16 pb-16 w-3/5"
    >
      <div class="mt-32 flex">
        <CarSideBar />
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
