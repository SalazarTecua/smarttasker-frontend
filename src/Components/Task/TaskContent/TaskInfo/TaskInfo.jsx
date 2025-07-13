import TaskButton from "../TaskButton/TaskButton"

export default function TaskInfo({ task }) {


    return (

        <div className="mt-auto space-y-2">

            <div className="flex items-center text-sm text-[#a1a1aa]">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {new Date(task.dueDate).toLocaleDateString()}
            </div>

            <div className="flex justify-between items-center">

                <span className="text-xs bg-[#252538] text-[#a1a1aa] px-2 py-1 rounded">
                    {task.category}
                </span>

                {/* Buttons*/}
                <div className="flex space-x-2">
                    {/* EDIT */}
                    <TaskButton
                        variant="edit"
                        IconButton="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                    {/* DELETE */}
                    <TaskButton
                        variant="delete"
                        IconButton="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                </div>
            </div>

        </div>
    )
}