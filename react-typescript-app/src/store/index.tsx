import { combineReducers } from "redux";
import { todosReducer } from "./reducers/todos";
import { Todo } from "./actions";

export interface StoreState {
  todos: Todo[];
}

//Yani asagida diyoruz ki Typescript todosReducer in daima Todo[] si return ediyor ve bundan emin oluyoruz.
export const reducers = combineReducers<StoreState>({
  todos: todosReducer
});
