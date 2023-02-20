<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<template>
  <div class="w-full h-screen flex flex-col justify-center items-center gap-5">
    <h1 class="font-bold text-8xl text-red-600">{{ error.statusCode }}</h1>
    <p class="font-bold text-2xl">{{ error.message }}</p>
    <button
      class="bg-sky-500 text-white py-5 px-20 rounded-full"
      @click="handleError"
    >
      Go Back
    </button>
  </div>
</template>
