<script setup>
const { cars } = useCars();

const favorite = useLocalStorage("favorite", {});

const handleFavorited = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>

<template>
  <div>
    <CarCard
      v-for="car in cars"
      :key="car.id"
      :car="car"
      @favorite="handleFavorited(car.id)"
      :favorited="car.id in favorite"
    />
  </div>
</template>
