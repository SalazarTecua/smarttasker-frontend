import { useEffect } from "react";
import { useContentFilter } from "../Content/ContentFilter/ContentFilterContext";


export default function Dashboard() {

    const { setFilterContent } = useContentFilter();
    const data = [
        { id: 1, title: "Tarea pendiente", description: "Revisar reportes del cliente", status: "Pendiente" },
        { id: 2, title: "Corrección de errores", description: "Solucionar bug en módulo de login", status: "En progreso" },
        { id: 3, title: "Deploy", description: "Subir la nueva versión a producción", status: "Completado" },
    ];


    
  useEffect(() => {
    setFilterContent(
      <>
        <h2 className="text-xl font-semibold text-white">Panel Principal</h2>
        <div className="flex space-x-3">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-[#a1a1aa]">Filtros:</span>
            <select className="bg-[#252538] border border-[#3b3b4d] text-white text-sm rounded-lg px-3 py-1 focus:outline-none focus:ring-1 focus:ring-[#8b5cf6]">
              <option>Todos</option>
              <option>Prioridad</option>
              <option>Recientes</option>
            </select>
          </div>
          <button className="bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-white px-4 py-1 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity shadow-[0_0_15px_-3px_rgba(139,92,246,0.5)]">
            + Nueva Tarea
          </button>
        </div>
      </>
    );

    return () => setFilterContent(null);
  }, [setFilterContent]);


    return (
        <>

            {data.map((item) => (
                <div
                    key={item.id}
                    className="bg-[#1f1f2e] border border-[#303040] rounded-lg p-4 text-white shadow-md hover:shadow-lg transition duration-200"
                >
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                    <span
                        className={`mt-2 inline-block px-2 py-1 rounded text-xs font-medium ${
                            item.status === "Pendiente"
                                ? "bg-yellow-500 text-black"
                                : item.status === "En progreso"
                                ? "bg-blue-500"
                                : "bg-green-500"
                        }`}
                    >
                        {item.status}
                    </span>
                </div>
            ))}
        </>
    );
}

