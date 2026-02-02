@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* --- COLOR PALETTE (Dark Mode by Default) --- */
    
    /* Fondo base: #050505 (Deep Cyber Black) */
    --background: 0 0% 2%; 
    --foreground: 0 0% 98%;

    /* UI Elements */
    --card: 0 0% 4%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 4%;
    --popover-foreground: 0 0% 98%;

    /* BRAND COLOR: #39CFE3 (Cyber Cyan) */
    /* HSL: 183deg, 90%, 40% */
    --primary: 183 90% 40%;
    --primary-foreground: 0 0% 98%;

    --secondary: 240 4% 16%;
    --secondary-foreground: 0 0% 98%;

    --muted: 240 4% 16%;
    --muted-foreground: 240 5% 65%;

    --accent: 183 90% 40%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 63% 31%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 4% 16%;
    --input: 240 4% 16%;
    
    /* El anillo de foco usa el color primario */
    --ring: 183 90% 40%; 
    
    --radius: 0.75rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  
  html {
    scroll-behavior: smooth;
    /* Evita el rebote blanco en safari/mobile */
    background-color: #050505; 
  }

  body {
    @apply bg-background text-foreground antialiased;
    /* Mejora la renderización de fuentes */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* --- SCROLLBAR PERSONALIZADO --- */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #050505;
  }

  ::-webkit-scrollbar-thumb {
    background: #1f2937; /* zinc-800 */
    border-radius: 4px;
    transition: background 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #39CFE3; /* Brand Color */
  }

  /* --- SELECCIÓN DE TEXTO --- */
  ::selection {
    background-color: rgba(57, 207, 227, 0.2);
    color: #ffffff;
  }
}

/* ========================================
   UTILIDADES Y ANIMACIONES
   ======================================== */

@layer utilities {
  /* Ocultar scrollbar pero permitir scroll */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Textos con gradiente y brillo */
  .text-glow {
    text-shadow: 0 0 20px rgba(57, 207, 227, 0.5);
  }
}

/* --- KEYFRAMES --- */

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse-glow {
  0%, 100% { 
    opacity: 0.4; 
    transform: scale(1);
    box-shadow: 0 0 0 rgba(57, 207, 227, 0);
  }
  50% { 
    opacity: 0.8; 
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(57, 207, 227, 0.3);
  }
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- CLASES DE ANIMACIÓN PARA TAILWIND --- */
/* Estas clases machean con lo que usé en los componentes React */

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 4s ease-in-out infinite;
}

.animate-gradient {
  background-size: 200% auto;
  animation: gradient 4s linear infinite;
}

.animate-spin-slow {
  animation: spin-slow 12s linear infinite;
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

/* Retrasos de animación */
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-500 { animation-delay: 500ms; }
.delay-700 { animation-delay: 700ms; }
