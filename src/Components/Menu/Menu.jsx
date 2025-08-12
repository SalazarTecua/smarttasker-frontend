import { Home, CheckSquare, Calendar, LogOut, Settings, User, PieChart } from 'lucide-react';
import UserProfile from './UserProfile/UserProfile';
import NavItem from './NavItem/NavItem';
import { useState } from 'react';




export default function Menu() {

const [isActive, setActive] =  useState(true); 

const handleActive =() => {
    setActive(!isActive)
}

    return (
        <aside className="w-72 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] p-5 border-r border-[#2a2a4a] flex flex-col">
            {/* User Profile */}
           <UserProfile/>
            {/* Navigation */}
            <nav className="flex-1 space-y-2">

                <NavItem icon={<Home />} title="Dashboard" url="Dashboard"  active={isActive} />
                {/* <NavItem icon={<PieChart />} title="Analíticas" /> */}
                <NavItem icon={<CheckSquare />} title="Tareas" badge="15" url="Tareas" active={isActive} />
                <NavItem icon={<Calendar />} title="Calendario" url="Calendario" active={isActive}/>
                <NavItem icon={<Settings />} title="Configuración"  url="Ajustes" />
            </nav>

            {/* Footer */}
            <div className="mt-auto pt-4 border-t border-[#2a2a4a]">
                <NavItem icon={<LogOut />} title="Cerrar sesión" color="text-[#ff9e00]" />
            </div>
           
        </aside>
    );
};





