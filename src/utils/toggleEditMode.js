export default function toggleEditMode (
    id,
    setTodoList
) {
    setTodoList(prevList=> prevList.map(task=> {
        if (task.id !== id) return task;

        if (task.editValue.trim() === ""){
          alert("Enter the content");
          return task;
        }

        if (task.category === "") {
          alert("Select the category");
          return task;
        }

        if (task.isEditing) return {
          ...task,
          taskName: task.editValue,
          isEditing: false,
        }; else return {
          ...task,
          editValue: task.taskName,
          isEditing: true
        };
    }));
}