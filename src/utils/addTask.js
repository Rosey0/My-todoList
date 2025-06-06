export default function addTask(
    newTask,
    selectCategory,
    todoList,
    setTodoList,
    setNewTask,
    setSelectCategory
  ) {
    if (newTask.trim() === "") return;
    if (selectCategory === "") {
      alert("Select the category");
      return;
    }
  
    const task = {
      id: Date.now(),
      taskName: newTask,
      completed: false,
      isEditing: false,
      editValue: newTask,
      category: selectCategory,
    };
  
    setTodoList([...todoList, task]);
    setNewTask("");
    setSelectCategory("");
  }
  