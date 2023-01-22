<template>
  <div class="home">
    <section class="hero">
      <div class="hero-text container">
        <h4>A Love Website for U because</h4>
        <hr />
        <h2>
          I Love YOU <br /><span class="redheart">&#x3C;3</span>
        </h2>
        <hr />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');
.hero {
  background-image: url("../assets/hero-bg.png");
  background-attachment: fixed;
  position: relative;
  height: 100vh;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgb(255, 255, 255);
    h4 {
      font-family: 'Rock Salt', cursive;
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }
    h2 {
      font-size: 20px;
      color: rgb(156, 79, 219);
      @media(min-width: 550px) {
        font-size: 65px;
      }
    }
    .redheart {
        color: rgb(204, 60, 149);
        font-family: 'Rock Salt', cursive;
        font-size: 60px;
      }
    hr:nth-child(2) {
      max-width: 510px;
      margin-bottom: 16px;
    }
    hr:nth-child(4) {
      height: 4px;
      background-color: rgb(156, 79, 219);
      border: none;
      max-width: 100px;
      margin-top: 16px;
    }
  }
}
</style>