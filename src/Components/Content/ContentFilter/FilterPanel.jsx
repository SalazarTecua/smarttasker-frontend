// Components/FilterPanel/FilterPanel.jsx
export default function FilterPanel({ 
  title = "Panel Principal",
  onFilterChange = () => {},
  onAddTask = () => {}
}) {
  return (
    <div className="bg-[#181824] border-b border-[#252538] p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="flex space-x-3">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-[#a1a1aa]">Filtros:</span>
          <select 
            onChange={onFilterChange}
            className="bg-[#252538] border border-[#3b3b4d] text-white text-sm rounded-lg px-3 py-1 focus:outline-none focus:ring-1 focus:ring-[#8b5cf6]"
          >
            <option>Todos</option>
            <option>Prioridad</option>
            <option>Recientes</option>
          </select>
        </div>
        <button 
          onClick={onAddTask}
          className="bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-white px-4 py-1 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity shadow-[0_0_15px_-3px_rgba(139,92,246,0.5)]"
        >
          + Nueva Tarea
        </button>
      </div>
    </div>
  );
}