<script setup>
const route = useRoute();

useHead({
  title: toTitleCase(route.params.name),
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
      class="mx-auto mt-4 max-w-7xl xs:px-8 sm:px-10 lg:scroll-px-16 pb-16 w-3/5 h-screen"
    >
      <CarDetailInfo />
      <CarDetailAttributes />
      <CarDetailDescription />
      <CarDetailContact />
    </div>
  </div>
</template>
