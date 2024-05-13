import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();


  const addTodo = () => {
    const text = inputRef.current.value.trim();
    if (text) {
      setTodos([...todos, { text, completed: false }]); 
      inputRef.current.value = ""; 
    }
  };

 
  const toggleCompletion = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed }; 
      }
      return todo;
    });

    setTodos(updatedTodos); 
  };

 
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); 
    setTodos(updatedTodos); 
  };

  return (
    <section
      className="vh-100"
      style={{
        backgroundImage: 'url("/images/reg.png")', 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div
              className="card"
              style={{
                borderRadius: "15px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(3px)",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="card-body p-5">
                <h6 className="mb-3 text-white">ReguLoom</h6>
                <Form className="d-flex justify-content-center align-items-center mb-4">
                  <div className="form-outline flex-fill">
                    <Form.Control
                      ref={inputRef}
                      id="todo-input"
                      type="text"
                      className="form-control-lg"
                      placeholder="What is the task today?"
                    />
                  </div>
                  <Button
                    onClick={addTodo}
                    variant="info"
                    size="lg"
                    type="button"
                    className="ms-2 rounded-3"
                  >
                    +
                  </Button>
                </Form>
                <ul className="list-group mb-0">
                  {todos.map((todo, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center border-0"
                    >
                      <div className="d-flex align-items-center">
                        <input
                          type="checkbox"
                          checked={todo.completed}
                          onClick={() => toggleCompletion(index)}
                          className="form-check-input me-2"
                        />
                        <span
                          style={{
                            textDecoration: todo.completed ? "line-through" : "none",
                          }}
                        >
                          {todo.text}
                        </span>
                      </div>
                      <button
                        onClick={() => deleteTodo(index)}
                        aria-label="Delete item"
                        className="btn btn-link text-info"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
