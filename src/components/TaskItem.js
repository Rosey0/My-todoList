function TaskItem ({
    task,
    completeTask,
    categoryColor,
    toggleEditCategory,
    toggleEditMode,
    handleEditValue,
    cancelEdit,
    deleteTask
}) {
    return (
        <div className="flex justify-between p-2 mt-2 bg-white rounded-md shadow-md min-h-[64px] w-full gap-3 dark:bg-zinc-800 text-black dark:text-white transition">
            {!task.isEditing && (
                <div className='flex items-center gap-4'>
                    <input
                        className='ml-1 scale-150 accent-blue-500 cursor-pointer dark:accent-blue-300'
                        type='checkbox'
                        checked={task.completed}
                        onChange={() => completeTask(task.id)}
                    />
                    <span className={`w-24 h-8 flex items-center justify-center text-sm font-medium ${categoryColor[task.category]}`}> 
                        {task.category} 
                    </span>
                </div>
            )}

            {task.isEditing ?
                <div className="w-full flex justify-center">
                    <div className='flex items-center'>
                        <select
                            className="w-28 h-8 text-center rounded border dark:bg-zinc-700 dark:border-zinc-500 dark:text-white"
                            style={{ textAlignLast: "center" }}
                            type="text"
                            value={task.category}
                            onChange={e=> toggleEditCategory(task.id, e.target.value)}
                            onKeyDown={e=> {if(e.key==="Enter") toggleEditMode(task.id)}}
                        >
                            <option value=""> Select Category </option>
                            <option value="Work"> Work </option>
                            <option value="Study"> Study </option>
                            <option value="Personal"> Personal </option>
                        </select>
                        <input
                            className='text-center w-60 h-8 py-1 rounded border border-gray-300 dark:bg-zinc-700 dark:border-zinc-500 dark:text-white'
                            type='text'
                            value={task.editValue}
                            onChange={e=> handleEditValue(task.id, e.target.value)}
                            onKeyDown={e=> {if(e.key==="Enter") toggleEditMode(task.id)}}
                        />
                        <button className='bg-blue-500 text-white px-3 py-1 rounded text-sm scale-55 ml-2' onClick={() => cancelEdit(task.id)}> Cancel </button>
                        <button className='bg-blue-500 text-white px-3 py-1 rounded text-sm scale-55 ml-2' onClick={()=> toggleEditMode(task.id)}> Save </button>
                    </div>
                </div>
            : 
                <div className='text-sm scale-55 ml-2 w-full flex justify-between items-center'>
                    <div className='w-full flex justify-center'>
                        <span className={`text-lg ${task.completed ? "line-through text-gray-400" : ""}`}>
                            {task.taskName}
                        </span>
                    </div>
                    <div className="flex justify-end">
                        {!task.completed &&(
                            <button className='mr-2 bg-blue-500 text-white px-3 py-1 rounded' onClick={()=> toggleEditMode(task.id)}> Edit </button>
                        )}
                        <button className="scale-55 bg-blue-500 text-white px-3 py-1 rounded" onClick={()=> deleteTask(task.id)}> X </button>
                    </div>
                </div>
            }
        </div>
    );
}

export default TaskItem;