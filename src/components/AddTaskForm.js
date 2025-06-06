function AddTaskForm ({
    newTask,
    setNewTask,
    selectCategory,
    setSelectCategory,
    addTask
}) {
    return (
        <div className="flex justify-center">
            <select
                className="text-center w-34 px-2 py-1 rounded border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-black dark:text-white"
                style={{ textAlignLast: "center" }}
                type="text"
                value={selectCategory}
                onChange={e=> setSelectCategory(e.target.value)}
                onKeyDown={e=> {if(e.key==="Enter") addTask()}}
            >
                <option value=""> Select Category </option>
                <option value="Work"> Work </option>
                <option value="Study"> Study </option>
                <option value="Personal"> Personal </option>
            </select>
            <input
                className="w-64 px-2 py-1 rounded border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-black dark:text-white"
                type='text'
                value={newTask}
                placeholder='Add your task'
                onChange={e=> setNewTask(e.target.value)}
                onKeyDown={e=> {if(e.key==="Enter") addTask()}}
            />
            <button className="cursor-pointer bg-blue-500 text-white px-3 py-1 rounded" onClick={addTask}> Add Task </button>
        </div>
        
    );
}

export default AddTaskForm;