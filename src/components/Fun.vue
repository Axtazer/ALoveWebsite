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

<script setup>
import { RouterView } from "vue-router"
import '../scss/Fun.css'
</script>