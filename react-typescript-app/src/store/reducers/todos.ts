import { Todo } from "../actions";
import { actions, Action } from "../../enums";

//action, Action icindekilerden birisine sahip olmali
export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case actions.fetchTodos:
      return action.payload;
    case actions.deleteTodo:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};
