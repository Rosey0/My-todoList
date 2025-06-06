import './App.css'
import { useState, useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskItem from './components/TaskItem';
import SearchTask from './components/SearchTask';
import addTaskHandler from './utils/addTask';
import toggleEditMode from './utils/toggleEditMode';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

function App() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const stored = localStorage.getItem("todoList");
    return stored ? JSON.parse(stored) : [];
  });
  const [selectCategory, setSelectCategory] = useState("");
  const [searchCategory, setSearchCategory] = useState("All");
  const [searchStatus, setSearchStatus] = useState(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const categoryColor = {
    Work: "bg border-4 border-indigo-500/50 border-solid text-indigo-700 dark:border-indigo-300 dark:text-indigo-300",
    Study: "border-4 border-green-500/50 border-solid text-green-700 dark:border-green-300/70 dark:text-green-300",
    Personal: "border-4 border-yellow-500/50 border-solid text-yellow-700 dark:border-yellow-300/70 dark:text-yellow-300",
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter(task=> task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(todoList.map(task=> task.id === id ? {...task, completed: !task.completed} : task));  
  };

  const handleEditValue = (id, newValue) => {
    setTodoList(prevList=> prevList.map(task=> (
      task.id === id ? {...task, editValue: newValue} : task
    )));
  };

  const toggleEditCategory = (id, category) => {
    setTodoList(todoList.map(task=> 
      task.id === id ? {...task, category: category} : task
    ));
  };

  const cancelEdit = (id) => {
    setTodoList(prevList => prevList.map(task=> (
      task.id === id ? {...task, isEditing: false, editValue: task.taskName} : task
    )));
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleDrag = (order) => {
    if (!order.destination) return;
    
    const newList = Array.from(todoList);
    const [reorderedItem] = newList.splice(order.source.index, 1);
    newList.splice(order.destination.index, 0, reorderedItem);
    setTodoList(newList);
  };

  console.log(todoList);

  return (
    <div className="App max-w-2xl w-full mx-auto px-4 bg-white text-black dark:bg-zinc-900 dark:text-white min-h-screen transition-all duration-300">

      <div className='p-4 text-sm flex justify-end'>
        <button
          className='bg-gray-800 hover:bg-gray-900 text-white text-sm px-5 py-2 rounded-lg shadow-md transition dark:bg-slate-600'
          onClick={toggleDarkMode}
        > 
          {isDark ? "Dark Mode" : "LIght Mode"}
        </button>
      </div>
      
      <div className='flex justify-center m-2 mb-6 text-4xl font-extrabold'>
        <h1> TODO LIST </h1>
      </div>

      <div>
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
          addTask={() => 
            addTaskHandler (
              newTask,
              selectCategory,
              todoList,
              setTodoList,
              setNewTask,
              setSelectCategory
            )
          }
        />
      </div>

      <div className='mt-6 border b-4 border-slate-500'></div>

      <SearchTask
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
        setSearchStatus={setSearchStatus}
      />

      <DragDropContext onDragEnd={handleDrag}>
        <Droppable droppableId='todoList'>
          {(provided) => (
            <div className='w-full max-m-3xl mx-auto grid grid-cols-1 m-4 gap-4'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todoList
                .filter(task => {
                  // Category
                  if (searchCategory !== "All" && task.category !== searchCategory) return false;
                  // Button
                  if (searchStatus !== null && task.completed !== searchStatus) return false;
                  return true;
                })
                .sort((a,b) => a.completed === b.completed ? 0 : a.completed ? 1 : -1)
                .map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >                  
                        <TaskItem
                          task={task}
                          completeTask={completeTask}
                          categoryColor={categoryColor}
                          toggleEditCategory={toggleEditCategory}
                          toggleEditMode={(id) => toggleEditMode(id, setTodoList)}
                          handleEditValue={handleEditValue}
                          cancelEdit={cancelEdit}
                          deleteTask={deleteTask}
                        />
                      </div>
                    )}
                  </Draggable>  
                ))}
              {provided.placeholder}  
            </div>
          )}
        </Droppable>
      </DragDropContext>
      
    </div>
  );
}

export default App;