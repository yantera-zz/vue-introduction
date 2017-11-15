<template>
	<div class='wrap'>
		<div class='header'>
			<h1 class='headline'>To do list</h1>
			<button id='add' class='btn add-todo-btn' @click='addTodo()'>
				Add ToDo
			</button>
			<br>
			<textarea v-model='comment' class='note-todo'></textarea>
		</div>
		<div class='contents'>
      <div class='todo'>
        <span>ToDo</span>
        <template v-for='todo in todos'>
          <todo-component :todo='todo' v-if='!todo.state'/>
        </template>
      </div>

      <div class='finish'>
        <span>Finished</span>
        <template v-for='todo in todos'>
          <finish-component :todo='todo' v-if='todo.state' v-on:delete-todo='deleteTodo(todo)'/>
        </template>
      </div>
		</div>
	</div>
</template>

<script>
import './App.css'
import TodoComponent from './components/TodoComponent.vue'
import FinishComponent from './components/FinishComponent.vue'
import Todo from './model/todo'

export default {
  name: 'app',
  data () {
    return {
      comment: '',
      todos: [
        new Todo('Sample Todo'),
        new Todo('Sample finished Todo', true)
      ]
    }
  },
  components: {
    TodoComponent,
    FinishComponent
  },
  methods: {
    deleteTodo: function (targetTodo) {
      this.todos.some((todo, idx) => {
        if (todo === targetTodo) this.todos.splice(idx, 1)
      })
    },

    addTodo: function () {
      if (this.comment.length === 0) return
      this.todos.push(new Todo(this.comment))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
