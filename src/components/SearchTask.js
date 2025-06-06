function SearchTask ({
    searchCategory,
    setSearchCategory,
    setSearchStatus,
}) {
    return (
        <div className='mt-6 flex justify-center gap-2'>
            <div>
                <select
                    className="w-24 h-8 text-center w-34 px-2 py-1 rounded border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-black dark:text-white"
                    style={{ textAlignLast: "center" }}
                    type="text"
                    value={searchCategory}
                    onChange={e => setSearchCategory(e.target.value)}
                >
                    <option value="All"> All </option>
                    <option value="Work"> Work </option>
                    <option value="Study"> Study </option>
                    <option value="Personal"> Personal </option>
                </select>
            </div>
            <div>
                <button
                    className='bg-blue-700/80 text-white px-3 py-1 rounded'
                    onClick={() => setSearchStatus(false)}
                >
                    ❌ To Do 
                </button>
            </div>
            <div>
                <button 
                    className='bg-blue-700/80 text-white px-3 py-1 rounded'
                    onClick={() => setSearchStatus(true)}
                > 
                    ✅ Complete 
                </button>
            </div>
            <div>
                <button
                    className='bg-blue-700/80 text-white px-3 py-1 rounded'
                    onClick={() => setSearchStatus(null)}
                >
                    📋 All Tasks
                </button>
            </div>
        </div>
    );
}

export default SearchTask;