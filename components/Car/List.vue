<script setup>
import { useFavoriteStore } from "~~/stores/favorite.vue";

const { cars } = useCars();

const useFavStore = useFavoriteStore();
</script>

<template>
  <div>
    <CarCard
      v-for="car in cars"
      :key="car.id"
      :car="car"
      @favorite="useFavStore.handleFavorited(car.id)"
      :favorited="car.id in useFavStore.localStore"
    />
  </div>
</template>
