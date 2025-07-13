export default function TaskProgress({task}) {

    return (
        <div className="mb-4">
            <div className="flex justify-between text-xs text-[#a1a1aa] mb-1">
                <span>Progreso</span>
                <span>{task.progress}%</span>
            </div>
            <div className="w-full bg-[#252538] rounded-full h-2">
                <div
                    className={`h-full rounded-full ${task.progress > 70 ? 'bg-[#2ed573]' : task.progress > 40 ? 'bg-[#1e90ff]' : 'bg-[#ff6348]'}`}
                    style={{ width: `${task.progress}%` }}
                ></div>
            </div>
        </div>
    )
}