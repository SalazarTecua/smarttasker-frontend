export default function Content() {
    const tasks = [
        {
            id: 1,
            title: "Diseñar interfaz de usuario",
            priority: "Alta",
            dueDate: "2023-12-15",
            progress: 75,
            category: "Diseño"
        },
        {
            id: 2,
            title: "Implementar autenticación",
            priority: "Crítica",
            dueDate: "2023-12-10",
            progress: 30,
            category: "Desarrollo"
        },
        {
            id: 3,
            title: "Revisar documentación API",
            priority: "Media",
            dueDate: "2023-12-20",
            progress: 10,
            category: "Documentación"
        },
        {
            id: 4,
            title: "Optimizar rendimiento",
            priority: "Alta",
            dueDate: "2023-12-18",
            progress: 45,
            category: "Optimización"
        },
        {
            id: 5,
            title: "Preparar presentación",
            priority: "Baja",
            dueDate: "2023-12-12",
            progress: 90,
            category: "Reunión"
        },
        {
            id: 6,
            title: "Testear módulo de pagos",
            priority: "Alta",
            dueDate: "2023-12-14",
            progress: 60,
            category: "QA"
        }
    ];

    const getPriorityColor = (priority) => {
        switch(priority) {
            case 'Crítica': return 'bg-[#ff4757]';
            case 'Alta': return 'bg-[#ff7b54]';
            case 'Media': return 'bg-[#2e86de]';
            default: return 'bg-[#576574]';
        }
    };

    return (
        <>
            {tasks.map(task => (
                <div 
                    key={task.id} 
                    className="min-h-[250px] bg-[#181824] border border-[#252538] rounded-xl p-5 hover:border-[#8b5cf6] transition-all duration-300 hover:shadow-[0_0_20px_-10px_rgba(139,92,246,0.5)] flex flex-col"
                >
                    {/* Contenido de la tarjeta */}
                    <div className="flex-1 flex flex-col">
                        {/* Header de la tarjeta */}
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-white font-medium text-lg truncate">{task.title}</h3>
                            <span className={`${getPriorityColor(task.priority)} text-white text-xs px-2 py-1 rounded-full`}>
                                {task.priority}
                            </span>
                        </div>
                        
                        {/* Barra de progreso */}
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
                        
                        {/* Meta información */}
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
                                
                                <div className="flex space-x-2">
                                    <button className="text-[#a1a1aa] hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                        </svg>
                                    </button>
                                    <button className="text-[#a1a1aa] hover:text-[#ff4757] transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}