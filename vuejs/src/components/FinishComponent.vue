<template>
  <div class='finish'>
    <div class='card'>
      <p class='todo-content'>
      {{todo.body}}
      </p>
      <button class='s-btn finish-btn' @click='onCheckoutClick()'>
        checkout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo-component',
  props: ['todo'],
  methods: {
    onCheckoutClick: function () {
      this.$emit('delete-todo', this.todo)
    }
  }
}
</script>
