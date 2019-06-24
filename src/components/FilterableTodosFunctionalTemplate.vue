<template functional>
  <ul>
    <li v-for="(todo, i) in $options.filterTodos(props.todos, props.filter)" :key="i">{{ todo.title }}</li>
  </ul>
</template>

<script>
import filterTodos from '../filter-todos'

export default {
  name: 'FilterableTodosFunctionalTemplate',

  props: {
    todos: Array,
    filter: String
  },

  filterTodos
}
</script>
