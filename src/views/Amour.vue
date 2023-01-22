<template>
    <div class="amour">
        <h1 class="amour-text">
            Amour ICI
        </h1>
    </div>
</template>

<script>
    export default {
        name: "Amour",
        components: {},
    }
</script>

<style>
.amour {
    z-index: -1;
    background-image: url(https://cdn.discordapp.com/attachments/1037078939908182066/1038555117416357978/Screenshot_2022-05-30-17-38-56-496.jpg);
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
}
.amour-text {
    color: red;
}
</style>