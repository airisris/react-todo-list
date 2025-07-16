import TodoItem from "./item";

function TodoList(props) {
  const {todo} = props;
  return (
    <ul className="list-group">
      {todo.map((item) => {
          const {name, id, isCompleted} = item;
          // return <div>{name}</div>
          return <TodoItem key={id} name={name} isCompleted={isCompleted}/>;
        })}
    </ul>
  );
};

export default TodoList;