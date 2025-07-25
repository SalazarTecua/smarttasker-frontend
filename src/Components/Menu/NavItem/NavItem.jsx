import { ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function NavItem({ icon, title, badge, color = "text-[#d0d0e7]", url }) {
    return (
        <NavLink
            to={`${url}`}
            className={({ isActive }) => 
                `group flex items-center justify-between gap-3 ${color} hover:text-white hover:bg-[#2a2a4a] px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive ? 'bg-[#2a2a4a] text-white' : ''
                }`
            }
        >
            {({ isActive }) => (
                <>
                    <div className="flex items-center gap-3">
                        <div className={`p-2 ${
                            isActive ? 'bg-gradient-to-br from-[#f72585] to-[#7209b7]' : 'bg-[#2a2a4a]'
                        } rounded-lg group-hover:bg-gradient-to-br from-[#f72585] to-[#7209b7] transition-all`}>
                            {icon}
                        </div>
                        <span className="font-medium">{title}</span>
                    </div>

                    {badge && (
                        <div className="px-2 py-1 bg-[#7209b7]/20 rounded-md text-xs text-[#f72585]">
                            {badge}
                        </div>
                    )}
                    <ChevronRight className="w-4 h-4 text-[#a5a5c7] group-hover:text-white transition-all" />
                </>
            )}
        </NavLink>
    );
}