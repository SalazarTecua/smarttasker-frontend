import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";

export default function MainLayout({ children }) {
    return (
        <div className="bg-[#0a0a12] w-full min-h-screen flex flex-col relative">
            {/* Fondo visual */}
            <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6d28d9] to-transparent"></div>
                <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ec4899] to-transparent"></div>
                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#8b5cf6] to-transparent"></div>
            </div>

            <Header />

            {/* Contenedor principal */}
            <div className="flex flex-1 relative z-10">
                <Menu />

                {/* Contenido */}
                <div className="flex-1 flex flex-col p-4 overflow-hidden">
                    <div className="bg-[#12121a] border border-[#252538] rounded-xl h-full overflow-hidden flex flex-col shadow-[0_0_30px_-15px_rgba(139,92,246,0.3)]">
                        <div className="bg-[#181824] border-b border-[#252538] p-4 flex justify-between items-center">
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
                        </div>

                        <div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
