<script>
import filterTodos from "../filter-todos";

export default {
  functional: true,

  name: "FilterableTodosFunctional",

  props: {
    todos: Array,
    filter: String
  },

  render(h, context) {
    const todos = filterTodos(context.props.todos, context.props.filter).map(
      (todo, i) => h("li", todo.title, { key: i })
    );
    return h("ul", todos);
  }
};
</script>