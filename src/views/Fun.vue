<script>
var id = 0

export default {
  name: "Fun",
  components: {},
  data() {
    return {
      titleClass: 'title',
      msgClass: 'msg',
      msg: '',
      magnifique: true,
      newTodo: '',
      todos: [
        { id: id++, text: 'Kiss You' },
        { id: id++, text: 'Fuck You' },
        { id: id++, text: 'Love You' }
      ]
    }
  },
  methods: {
    toggle() {
      this.magnifique = !this.magnifique
    },
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo })
      this.newTodo = ''
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    }
  },
};
</script>

<template>
  <br />
  <br />
  <br />
 <h1 :class="titleClass" style="font-family: 'Bungee Shade'">Je t'aime</h1>
 (THIS PEOPLE) photo changé pour anonymat<br />
 <img src="https://img.freepik.com/vecteurs-premium/profil-silhouette-homme-avatar-masculin-icone-anonyme-visage-censure_434359-85.jpg" style="max-width:30%">
 <br /> 
 <input v-model="msg" placeholder="Ton message">
  <br /><br />
  <span>Ton message: <br />{{ msg }}</span>
 <h2>
  Toggle button :
  </h2>
  <button @click="toggle">I'm the TOGGLE BUTTON</button>
  <h1 v-if="magnifique">Tavu ce MAGNIFIQUE TEXTE WAAAAAA! ✨</h1>
  <h1 v-else>Oh non tu l'as fais partir :(</h1>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>    
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=BioRhyme&family=Black+Ops+One&display=swap');
body {
    position: relative;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.521);
    color: white;
}
* {
  font-family: 'BioRhyme', serif;
  font-size: 18px;
}
.title {
  color: paleturquoise;
}
</style>