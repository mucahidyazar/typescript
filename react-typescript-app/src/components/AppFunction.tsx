import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../store/actions";
import { StoreState } from "../store";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

const App: FunctionComponent<AppProps> = () => {
  useEffect(() => {
    fetchTodos();
  }, []);

  fetchTodos();

  return <div>AppTSX</div>;
};

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { fetchTodos })(App);
