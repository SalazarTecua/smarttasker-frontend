import { 
  User, 
  ChevronDown,
  Settings,
  LogOut
} from 'lucide-react';


export default function UserMenu({ }) {

    return (
        <div className="relative group">
            <div className="flex items-center space-x-1 p-2 rounded-lg hover:bg-[#252538] transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                </div>
                <ChevronDown className="w-4 h-4 text-[#a1a1aa] transition-transform group-hover:rotate-180" />
            </div>

            {/* Dropdown corregido */}
            <div className="absolute right-0 mt-2 w-48 bg-[#181824] rounded-lg shadow-xl py-1 z-50 border border-[#252538] divide-y divide-[#252538] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="px-4 py-3">
                    <p className="text-sm text-white">Usuario Ejemplo</p>
                    <p className="text-xs text-[#a1a1aa]">usuario@ejemplo.com</p>
                </div>
                <div className="py-1">
                    <div className="flex items-center px-4 py-2 text-sm text-[#a1a1aa] hover:text-white hover:bg-[#252538] cursor-pointer">
                        <User className="w-4 h-4 mr-2" />
                        Mi perfil
                    </div>
                    <div className="flex items-center px-4 py-2 text-sm text-[#a1a1aa] hover:text-white hover:bg-[#252538] cursor-pointer">
                        <Settings className="w-4 h-4 mr-2" />
                        Configuración
                    </div>
                </div>
                <div className="py-1">
                    <div className="flex items-center px-4 py-2 text-sm text-[#ec4899] hover:bg-[#252538] cursor-pointer">
                        <LogOut className="w-4 h-4 mr-2" />
                        Cerrar sesión
                    </div>
                </div>
            </div>
        </div>
    )
}