<template>
    <div class="gallery-page">
      <div class="image-container" v-for="(image, index) in images" :key="index" v-bind:style="{ 'animation-delay': (index / 10) + 's' }" @mouseover="imgHover = true" @mouseleave="imgHover = false">
        <img :src="image.url" :alt="image.alt" />
        <div class="image-overlay" v-if="imgHover">
          <p>{{ image.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Gallery",
    components: {},
    data() {
      return {
        images: [
          {
            url: 'https://picsum.photos/200',
            alt: 'Image 1',
            description: 'This is the first image'
          },
          {
            url: 'https://picsum.photos/200',
            alt: 'Image 2',
            description: 'This is the second image'
          },
          {
            url: 'https://picsum.photos/200',
            alt: 'Image 3',
          }
        ]
      }
    },
  };
</script>