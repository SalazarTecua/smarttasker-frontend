import TaskList from "./TaskList/TaskList";
import PageContainer from "../Content/ContentFilter/PageContainer";
import { useState } from "react";
// import Filter from "../Filter/Filter"

export default function Task({ }) {
    const [filter, setFilter] = useState(["Todos", "PocoS"]);
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        // Aquí puedes agregar lógica adicional de filtrado
    };
    const handleAddTask = () => {
        // Lógica para agregar nueva tarea
        console.log("Agregar nueva tarea");
    };
    return (
        <>
      
            <PageContainer
                showFilters={true}
                title="Mis Tareas"
                onFilterChange={handleFilterChange}
                onAddTask={handleAddTask}
            >
                <TaskList />
            </PageContainer>
        </>
    );
}
