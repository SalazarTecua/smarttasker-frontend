import {User } from 'lucide-react';
export default function UserProfile({}) {

    return(
         <div className="flex items-center gap-4 mb-8 p-4 bg-[#2a2a4a]/50 rounded-xl">
                <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f72585] to-[#7209b7] flex items-center justify-center shadow-lg">
                        <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#4cc9f0] rounded-full border-2 border-[#1a1a2e] animate-pulse"></div>
                </div>
                <div>
                    <h3 className="text-white font-medium">Alex Johnson</h3>
                    <span className="text-xs text-[#a5a5c7]">Dev </span>
                </div>
            </div>
    );
}