export default function filterTodos(todos, filter) {
  if (filter === undefined) {
    return todos;
  }

  return todos.filter(todo =>
    filter === "active" ? todo.active : !todo.active
  );
}
