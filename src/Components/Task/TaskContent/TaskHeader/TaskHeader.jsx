export default function TaskHeader({task}) {


    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'Crítica': return 'bg-[#ff4757]';
            case 'Alta': return 'bg-[#ff7b54]';
            case 'Media': return 'bg-[#2e86de]';
            default: return 'bg-[#576574]';
        }
    };

    return (< >
        <div className="flex justify-between items-start mb-3">
            <h3 className="text-white font-medium text-lg truncate">{task.title}</h3>
            <span className={`${getPriorityColor(task.priority)} text-white text-xs px-2 py-1 rounded-full`}>
                {task.priority}
            </span>
        </div>
    </>)
}