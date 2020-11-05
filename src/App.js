import React from "react";
// import { Container } from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
  Container,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Todos from "./Components/Todos";
import TodoForm from "./Components/TodoForm";

const App = () => {
  const [todos, setTodos] = React.useState([]);
  
  // React.useEffect(() => {});

  React.useEffect(() => {
    const localTodos = localStorage.getItem("todos");

    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async (todo) => {
    setTodos([...todos, todo]);
  };

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const markComplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container fluid>
      <h1>Todo with local storage</h1>
      <Todos todos={todos} markComplete={markComplete} />
      <TodoForm addTodos={addTodos} />
    </Container>
  );
};

export default App;
