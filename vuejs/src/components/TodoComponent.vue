<template>
    <div class='card'>
      <p class='todo-content'>
      {{todo.body}}
      </p>
      <button class='s-btn finish-btn' @click='onFinishClick()'>
        finish
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo-component',
  props: ['todo'],
  methods: {
    onFinishClick: function () {
      this.todo.state = true
    }
  }
}
</script>
