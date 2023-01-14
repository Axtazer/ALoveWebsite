<script>
let id = 0

export default {
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
  }
}
</script>

<template>
 <h1 :class="titleClass" style="font-family: 'Bungee Shade'">Je t'aime</h1>
 (THIS PEOPLE)<br />
 <img src="https://cdn.discordapp.com/attachments/889957209537138819/1063793011290550302/photo_bgax_de_moi.jpg" height=400 width=600>
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
      <button @click="removeTodo(todo)"><span class="material-symbols-outlined"></span></button>
    </li>
  </ul>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=BioRhyme&family=Black+Ops+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0');
* {
  font-family: 'BioRhyme', serif;
  font-size: 18px;
}
.title {
  color: paleturquoise;
}
body {
    background-color: rgba(0, 0, 0, 0.521);
    color: white;
}
</style>