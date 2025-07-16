function AddTodoForm(props) {
  const { todo, setToDo } = props;
  return (
    <form className="d-flex justify-content-between align-items-center">
      <input
        type="text"
        className="form-control"
        placeholder="Add new item..."
        id="todoname"
        required
      />
      <button
        className="btn btn-primary btn-sm rounded ms-2"
        onClick={(event) => {
          // disable the default button behaviour
          event.preventDefault();

          // check if the input field is empty or not
          if (todoname.value === "") {
            alert("Please fill in the task");
          } else {
            setToDo([
              ...todo,
              {
                id: Math.random(),
                name: todoname.value,
              },
            ]); // clone and add new items

            // clear the input
            todoname.value = "";
          }
        }}
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
