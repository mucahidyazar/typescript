import axios from "axios";
import { Dispatch } from "redux";
import { actions } from "../../enums";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
export interface fetchTodosAction {
  type: actions.fetchTodos;
  payload: Todo[];
}
const url = "https://jsonplaceholder.typicode.com/todos";
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url); //Yani burada  interfacemizi buraya koyarak diyoruz ki response.data miz interface seklinde bir dizi olarak bize donsun diyoruz.

    //Bu sayede interfacede tanimladigimiz type'i actions.fetchTodos olan payload'i Todo[] arrayi olan bir islem icin calistiracagimizdan dispatchi 100% emin olacagiz.
    dispatch<fetchTodosAction>({
      type: actions.fetchTodos,
      payload: response.data
    });
  };
};

export interface deleteTodoAction {
  type: actions.deleteTodo;
  payload: number;
}
export const deleteTodo = (id: number): deleteTodoAction => {
  return {
    type: actions.deleteTodo,
    payload: id
  };
};
