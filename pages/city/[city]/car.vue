<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();

useHead({
  title: `${
    route.params.make ? toTitleCase(route.params.make) : "cars"
  } in ${toTitleCase(route.params.city)}`,
});

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div>
    <div class="mt-32 flex">
      <NuxtErrorBoundary>
        <CarSideBar />
        <NuxtPage />
        <template #error="{ error }">
          <div class="flex flex-col text-center mx-auto mt-40">
            <h1 class="font-bold text-5xl text-red-600 mb-5">
              Sorry, something went wrong!
            </h1>
            <code class="text-2xl mb-10">{{ error }}</code>
            <button
              class="w-[300px] mx-auto bg-sky-500 text-white py-5 rounded-full"
              @click="error.value = null"
            >
              Go Back
            </button>
          </div>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>
