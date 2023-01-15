<script>
export default {
  data() {
    return {
      titleClass: 'title',
    }
  }
}
</script>

<template>
  <router-view/>
    <h1 :class="titleClass='title'"> Blu </h1>
    <p>Blublublu ceci est texte</p>
</template>

<style>
.title {
  color: rgb(110, 196, 224);
}
body {
  background-color: peachpuff;
}
</style>

<script setup>
import { RouterView } from "vue-router"
</script>