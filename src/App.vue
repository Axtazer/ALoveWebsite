<template>
    <div class="p-4">
        <li><router-link :to="{ name: 'Home'}">Home</router-link></li>
        <li><router-link :to="{ name: 'Fun' }">Fun</router-link></li>
        <router-view />
    </div>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router"
</script>
