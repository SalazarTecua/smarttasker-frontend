import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  // Configuración de burbujas
  const bubbles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 30 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] overflow-hidden relative">
      {/* Burbujas de fondo (3D effect) */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: `-${bubble.size}px`,
            opacity: [0, 0.3, 0],
            x: [0, Math.random() * 100 - 50]
          }}
          transition={{
            delay: bubble.delay,
            duration: bubble.duration,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute rounded-full bg-gradient-to-br from-[#4f46e5]/30 to-[#ff4d4d]/20 backdrop-blur-sm"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}%`,
            filter: `blur(${Math.random() * 5}px)`
          }}
        />
      ))}

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 text-white">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          {/* Icono de error con efecto de pulso */}
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              y: [0, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut"
            }}
            className="mb-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-28 w-28 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
            >
              <linearGradient id="errorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff4d4d" />
                <stop offset="100%" stopColor="#f9cb28" />
              </linearGradient>
              <path
                stroke="url(#errorGradient)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </motion.div>

          {/* Texto con efecto de máquina de escribir */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28]"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-3xl font-semibold mb-4"
          >
            ¡Ups! Página perdida en el espacio
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mb-8 text-[#c1c1c1] text-lg"
          >
            La página que buscas ha sido abducida o nunca existió.
          </motion.p>

          {/* Botón con efecto de flotación */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#4f46e5] to-[#3b82f6] shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium relative overflow-hidden"
            >
              <span className="relative z-10">Volver a la Tierra</span>
              {/* Efecto de brillo al pasar el mouse */}
              <motion.span
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Efecto de estrellas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${Math.random() * 5 + 2}px white`
            }}
          />
        ))}
      </div>
    </div>
  );
}