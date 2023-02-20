<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();
const { cars } = useCars();

useHead({
  title: toTitleCase(route.params.name),
});

const car = computed(() => {
  return cars.find((c) => {
    console.log(c);
    return c.id === parseInt(route.params.id);
  });
});

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with ID: ${route.params.id} does not exist!`,
  });
}

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div v-if="car">
    <CarDetailInfo
      :image="car.url"
      :name="car.name"
      :seats="car.seats"
      :miles="car.miles"
      :price="car.price"
    />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>
