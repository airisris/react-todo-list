import AddTodoForm from "./components/addform";
import TodoList from "./components/list";

function App() {
  return (
    <div
      className="card rounded shadow-sm"
      style={{maxWidth: "500px", margin: "60px auto"}}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>
        <TodoList />
        <div className="mt-4">
          <AddTodoForm />
        </div>
      </div>
    </div>
  );
};

export default App;
