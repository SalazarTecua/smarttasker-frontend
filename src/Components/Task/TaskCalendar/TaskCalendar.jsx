import { useState } from 'react';
import {
    ChevronLeft, ChevronRight, Circle, CheckCircle2,
    AlertTriangle, Clock, Plus, MoreVertical, X,
    CalendarDays
} from 'lucide-react';

export default function TaskCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    // Datos de ejemplo de tareas
    const tasks = [
        { id: 1, title: "Integrar Kafka", dueDate: "2025-07-05", status: "pending", priority: "high" },
        { id: 2, title: "Diseñar UI", dueDate: "2025-07-04", status: "completed", priority: "medium" },
        { id: 3, title: "Configurar PostgreSQL", dueDate: "2025-07-03", status: "pending", priority: "critical" },
        { id: 4, title: "Implementar autenticación", dueDate: "2025-07-02", status: "pending", priority: "high" },
        { id: 5, title: "Testear módulos", dueDate: "2025-07-01", status: "pending", priority: "medium" },
    ];

    // Generar matriz de días del mes
    const daysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        const days = [];
        const startDay = firstDay.getDay();

        // Días del mes anterior
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for (let i = startDay - 1; i >= 0; i--) {
            days.push({ day: prevMonthLastDay - i, isCurrentMonth: false });
        }

        // Días del mes actual
        for (let i = 1; i <= lastDay.getDate(); i++) {
            days.push({ day: i, isCurrentMonth: true });
        }

        // Días del próximo mes
        const totalCells = Math.ceil(days.length / 7) * 7;
        for (let i = lastDay.getDate() + 1; days.length < totalCells; i++) {
            days.push({ day: i - lastDay.getDate(), isCurrentMonth: false });
        }

        return days;
    };

    const days = daysInMonth(currentDate);
    const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

    const changeMonth = (increment) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1));
    };

    const getTasksForDate = (dayObj) => {
        if (!dayObj.isCurrentMonth) return [];

        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(dayObj.day).padStart(2, '0')}`;
        return tasks.filter(task => task.dueDate === dateStr && task.status === "pending");
    };

    const getPriorityIcon = (priority) => {
        switch (priority) {
            case 'critical': return <AlertTriangle className="w-3 h-3 text-red-500" />;
            case 'high': return <Circle className="w-3 h-3 text-orange-500" />;
            default: return <Circle className="w-3 h-3 text-blue-500" />;
        }
    };

    return (
           <div className="w-full h-full col-span-full"> 
            {/* Header del calendario */}


            <div className="p-4 border-b border-[#252538] flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                        <CalendarDays className="w-5 h-5 text-purple-400" />
                        Calendario de Tareas
                    </h2>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => changeMonth(-1)}
                            className="p-1.5 rounded-lg hover:bg-[#252538] text-[#a1a1aa] hover:text-white"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <span className="text-white font-medium px-3 py-1 rounded-lg bg-[#252538]">
                            {monthName}
                        </span>
                        <button
                            onClick={() => changeMonth(1)}
                            className="p-1.5 rounded-lg hover:bg-[#252538] text-[#a1a1aa] hover:text-white"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
               
            </div>

            {/* Contenedor principal del calendario */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Días de la semana */}
                <div className="grid grid-cols-7 bg-[#252538] text-[#a1a1aa] text-sm font-medium">
                    {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
                        <div key={day} className="p-3 text-center">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Cuadrícula del calendario - Usamos flex-1 y overflow-auto para el scroll */}
                <div className="grid grid-cols-7 flex-1 overflow-auto">
                    {days.map((dayObj, index) => {
                        const dateTasks = getTasksForDate(dayObj);
                        const isToday = dayObj.isCurrentMonth &&
                            dayObj.day === new Date().getDate() &&
                            currentDate.getMonth() === new Date().getMonth();

                        return (
                            <div
                                key={index}
                                className={`min-h-[120px] border border-[#252538] p-2 ${dayObj.isCurrentMonth ? 'bg-[#181824]' : 'bg-[#12121a] text-[#555563]'
                                    } ${isToday ? 'ring-1 ring-[#8b5cf6]' : ''}`}
                                onClick={() => dayObj.isCurrentMonth && setSelectedDate(dayObj.day)}
                            >
                                <div className={`text-right p-1 font-medium ${dayObj.isCurrentMonth ? 'text-white' : 'text-[#555563]'
                                    } ${isToday ? 'text-[#8b5cf6]' : ''}`}>
                                    {dayObj.day}
                                </div>

                                {/* Tareas para este día */}
                                <div className="space-y-1 mt-1 overflow-y-auto max-h-[100px]">
                                    {dateTasks.slice(0, 3).map(task => (
                                        <div
                                            key={task.id}
                                            className="text-xs p-1.5 rounded bg-[#252538] text-white flex items-start gap-1"
                                        >
                                            {getPriorityIcon(task.priority)}
                                            <span className="truncate">{task.title}</span>
                                        </div>
                                    ))}
                                    {dateTasks.length > 3 && (
                                        <div className="text-xs text-[#a1a1aa] pl-1">
                                            +{dateTasks.length - 3} más...
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Panel de tareas seleccionadas */}
            {selectedDate && (
                <div className="border-t border-[#252538] p-4 bg-[#252538]">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-white font-medium">
                            Tareas para el {selectedDate} de {currentDate.toLocaleString('default', { month: 'long' })}
                        </h3>
                        <button
                            onClick={() => setSelectedDate(null)}
                            className="text-[#a1a1aa] hover:text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="space-y-2">
                        {getTasksForDate({ day: selectedDate, isCurrentMonth: true }).length > 0 ? (
                            getTasksForDate({ day: selectedDate, isCurrentMonth: true }).map(task => (
                                <div key={task.id} className="p-3 bg-[#181824] rounded-lg border border-[#3b3b4d]">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-start gap-2">
                                            {task.status === "completed" ? (
                                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                                            ) : (
                                                <Clock className="w-4 h-4 text-yellow-500 mt-0.5" />
                                            )}
                                            <div>
                                                <h4 className="font-medium text-white">{task.title}</h4>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${task.priority === 'critical' ? 'bg-red-500' :
                                                            task.priority === 'high' ? 'bg-orange-500' : 'bg-blue-500'
                                                        } text-white`}>
                                                        {task.priority === 'critical' ? 'Crítica' : task.priority === 'high' ? 'Alta' : 'Media'}
                                                    </span>
                                                    <span className="text-xs text-[#a1a1aa] flex items-center">
                                                        <CalendarDays className="w-3 h-3 mr-1" />
                                                        {task.dueDate}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="text-[#a1a1aa] hover:text-white">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-4 text-[#a1a1aa]">
                                No hay tareas pendientes para este día
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}