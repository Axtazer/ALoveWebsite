<template>
    <div class="love-container">
      <h1 class="love-text">Je t'aime</h1>
      <button class="change-btn" @click="changeText">Changer le texte</button>
      <h2 class="sub-text">{{subText}}</h2>
    </div>
  </template>  
  
  <script>
  export default {
    name: "chatgpt",
    components: {},
    data() {
      return {
        isText1: true,
      }
    },
    methods: {
      changeText() {
        this.isText1 = !this.isText1;
      }
    },
    computed: {
      subText() {
        return this.isText1 ? "Tu m'aimes beaucoup ok." : "Mais moi je t'aime plus (+)"
      }
    }
  };
  </script>
    
  <style>
  .love-container {
    background-image: url("https://images.pexels.com/photos/776636/pexels-photo-776636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
    z-index: 1;
  }
  
  .love-text {
    color: white;
    font-size: 50px;
    text-shadow: 2px 2px 4px #000000;
  }
  
  .sub-text {
    color: white;
    font-size: 25px;
    text-shadow: 2px 2px 4px #000000;
    margin-top: 20px;
  }
  
  .change-btn {
    background-color: red;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
  }
  
  .change-btn:hover {
    background-color: pink;
  }
</style>