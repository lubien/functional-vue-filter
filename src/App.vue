<template>
  <div id="app">
    <h2>FilterableTodos (normal Vue component)</h2>
    <FilterableTodos :todos="todos" :filter="filter"/>

    <h2>FilterableTodosFunctional (functional Vue component with render function)</h2>
    <FilterableTodosFunctional :todos="todos" :filter="filter"/>

    <h2>FilterableTodosFunctionalTemplate (functional Vue component with template)</h2>
    <FilterableTodosFunctionalTemplate :todos="todos" :filter="filter"/>
  </div>
</template>

<script>
import FilterableTodos from "./components/FilterableTodos";
import FilterableTodosFunctional from "./components/FilterableTodosFunctional";
import FilterableTodosFunctionalTemplate from "./components/FilterableTodosFunctionalTemplate";

export default {
  name: "App",
  components: {
    FilterableTodos,
    FilterableTodosFunctional,
    FilterableTodosFunctionalTemplate
  },
  data: () => ({
    filter: "active",
    todos: [
      { title: "Active", active: true },
      { title: "Inactive", active: false },
      { title: "Inactive", active: false },
      { title: "Active", active: true }
    ]
  })
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
