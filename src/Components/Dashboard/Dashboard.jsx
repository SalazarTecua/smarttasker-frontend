export default function Dashboard() {
    const data = [
        { id: 1, title: "Tarea pendiente", description: "Revisar reportes del cliente", status: "Pendiente" },
        { id: 2, title: "Corrección de errores", description: "Solucionar bug en módulo de login", status: "En progreso" },
        { id: 3, title: "Deploy", description: "Subir la nueva versión a producción", status: "Completado" },
    ];

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
