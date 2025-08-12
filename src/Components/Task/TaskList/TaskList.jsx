
import TaskHeader from "../TaskContent/TaskHeader/TaskHeader";
import TaskInfo from "../TaskContent/TaskInfo/TaskInfo";
import TaskProgress from "../TaskContent/TaskProgress/TaskProgress";


export default function TaskList({ }) {


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



    return (
        <>

            <div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {tasks.map(task => (
                        <div
                            key={task.id}
                            className="min-h-[250px] bg-[#181824] border border-[#252538] rounded-xl p-5 hover:border-[#8b5cf6] transition-all duration-300 hover:shadow-[0_0_20px_-10px_rgba(139,92,246,0.5)] flex flex-col"
                        >
                            {/* Contenido de la tarjeta */}
                            <div className="flex-1 flex flex-col">
                                {/* Header de la tarjeta */}
                                <TaskHeader task={task} />
                                {/* Barra de progreso */}
                                <TaskProgress task={task} />
                                {/* Meta información */}
                                <TaskInfo task={task} />

                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </>
    );

}





