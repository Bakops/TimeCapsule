<template>
  <div id="compteur">
    <h1>Bonjour {{ NameUser }}</h1>
    <h2>Compteur : {{ Compteur }}</h2>
    <button v-on:click="incremente">Incrémente</button>
    <button v-on:click="decremente">Décrémente</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const NameUser = "Baks";
const Compteur = ref(0);

const incremente = () => {
  Compteur.value++;
};

const decremente = () => {
  Compteur.value--;
};
</script>

<style>
h1 {
  color: cadetblue;
}
</style>
