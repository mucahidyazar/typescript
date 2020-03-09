import { fetchTodosAction, deleteTodoAction } from "../store/actions/todos";

export enum actions {
  fetchTodos,
  deleteTodo
}

export type Action = fetchTodosAction | deleteTodoAction;
