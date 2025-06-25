import { 
  PieChart, 
  Folder, 
  Users, 
  Bell, 
  Menu, 
  Cpu
} from 'lucide-react';

import UserMenu from './UserMenu/UserMenu';

export default function Header() {
    return (
        <header className="w-full bg-[#0d0d15] border-b border-[#252538] relative overflow-visible z-50">
            {/* Efectos de luz futuristas */}
            <div className="absolute inset-0 overflow-hidden opacity-60 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6d28d9] to-transparent"></div>
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ec4899] to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo/Título */}
                    <div className="flex items-center space-x-3 group cursor-pointer">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] flex items-center justify-center shadow-[0_0_15px_-3px_rgba(139,92,246,0.4)] transition-transform duration-300 group-hover:rotate-12">
                            <Cpu className="w-5 h-5 text-white" />
                        </div>
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-2xl md:text-3xl font-bold tracking-tighter">
                            SMART<span className="text-white">TASK</span>
                        </h1>
                    </div>

                    {/* Menú de navegación */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {[{icon: PieChart, label: 'Dashboard'}, {icon: Folder, label: 'Proyectos'}, {icon: Users, label: 'Equipo'}].map(({icon: Icon, label}) => (
                            <div key={label} className="flex items-center space-x-2 px-3 py-2 rounded-lg text-[#a1a1aa] hover:text-white hover:bg-[#252538]/50 transition-colors duration-300 group">
                                <Icon className="w-5 h-5" />
                                <span>{label}</span>
                                <div className="w-4 h-1 rounded-full bg-transparent group-hover:bg-[#8b5cf6] transition-all"></div>
                            </div>
                        ))}
                    </nav>

                    {/* Botones de acción */}
                    <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-lg bg-[#181824] hover:bg-[#252538] transition-colors duration-300 relative cursor-pointer">
                            <Bell className="w-5 h-5 text-[#a1a1aa]" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-[#ec4899] rounded-full animate-pulse"></span>
                        </div>

                        {/* Menú usuario */}
                        <UserMenu/>
                        

                        {/* Menú móvil */}
                        <div className="md:hidden p-2 rounded-lg bg-[#181824] hover:bg-[#252538] transition-colors duration-300 cursor-pointer">
                            <Menu className="w-5 h-5 text-[#a1a1aa]" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
