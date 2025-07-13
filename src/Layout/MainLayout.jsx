import { useContentFilter } from "../Components/Content/ContentFilter/ContentFilterContext";
import ContentFilter from "../Components/Content/ContentFilter/ContentFilter";
import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";

export default function MainLayout({ children  }) {

     const { filterContent } = useContentFilter();
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
                      
                        {/* <ContentFilter/> */}
                         <ContentFilter>{filterContent}</ContentFilter>
                      
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
