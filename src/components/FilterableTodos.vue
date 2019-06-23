<template>
  <ul>
    <li v-for="(todo, i) in filteredTodos" :key="i">{{ todo.title }}</li>
  </ul>
</template>

<script>
import filterTodos from "../filter-todos";

export default {
  name: "FilterableTodos",
  props: {
    todos: Array,
    filter: String
  },
  computed: {
    filteredTodos() {
      return filterTodos(this.todos, this.filter);
    }
  }
};
</script>