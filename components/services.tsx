@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* BlackSentinel Brand Colors */
  --cyber-cyan: #00C6D6;
  --steel-gray: #C9D1D9;
  --deep-navy: #081C3B;
  --black-obsidian: #0A0A0A;
  
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 3.9%;
  --primary: 187 100% 42%; /* Cyber Cyan en HSL */
  --primary-foreground: 0 0% 98%;
  --secondary: 0 0% 96.1%;
  --secondary-foreground: 0 0% 9%;
  --muted: 0 0% 96.1%;
  --muted-foreground: 0 0% 45.1%;
  --accent: 0 0% 96.1%;
  --accent-foreground: 0 0% 9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 89.8%;
  --input: 0 0% 89.8%;
  --ring: 187 100% 42%; /* Cyber Cyan */
  --radius: 0.5rem;
  --chart-1: 12 76% 61%;
  --chart-2: 173 58% 39%;
  --chart-3: 197 37% 24%;
  --chart-4: 43 74% 66%;
  --chart-5: 27 87% 67%;
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --card: 0 0% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 0 0% 3.9%;
  --popover-foreground: 0 0% 98%;
  --primary: 187 100% 42%; /* Cyber Cyan */
  --primary-foreground: 0 0% 9%;
  --secondary: 0 0% 14.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 0 0% 14.9%;
  --muted-foreground: 0 0% 63.9%;
  --accent: 0 0% 14.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 14.9%;
  --input: 0 0% 14.9%;
  --ring: 187 100% 42%; /* Cyber Cyan */
  --chart-1: 220 70% 50%;
  --chart-2: 160 60% 45%;
  --chart-3: 30 80% 55%;
  --chart-4: 280 65% 60%;
  --chart-5: 340 75% 55%;
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
  
  html {
    scroll-behavior: smooth;
  }
}

/* ========================================
   ANIMACIONES PERSONALIZADAS
   ======================================== */

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

@keyframes scan {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}

@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

/* Clases de animación */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 4s ease-in-out infinite;
}

.animate-scan {
  animation: scan 3s ease-in-out infinite;
}

.animate-gradient {
  animation: gradient 3s ease infinite;
}

.animate-shimmer {
  animation: shimmer 2s linear infinite;
}

/* Delays para animaciones secuenciales */
.animation-delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
}

.animation-delay-400 {
  animation-delay: 0.4s;
  opacity: 0;
}

.animation-delay-600 {
  animation-delay: 0.6s;
  opacity: 0;
}

.animation-delay-800 {
  animation-delay: 0.8s;
  opacity: 0;
}

/* ========================================
   EFECTOS ESPECIALES CON CYBER CYAN
   ======================================== */

/* Grid de fondo */
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(0, 198, 214, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 214, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Glassmorphism */
.glass {
  background: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 198, 214, 0.1);
}

/* Glow effects */
.glow-cyan {
  box-shadow: 0 0 20px rgba(0, 198, 214, 0.4);
}

.glow-cyan-intense {
  box-shadow: 0 0 40px rgba(0, 198, 214, 0.6);
}

/* Hover effects */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 50px rgba(0, 198, 214, 0.2);
}

/* Custom scrollbar con Cyber Cyan */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0a0a0a;
}

::-webkit-scrollbar-thumb {
  background: #00C6D6;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #00E5F8;
}

/* ========================================
   RESPONSIVE
   ======================================== */

@media (max-width: 768px) {
  .animate-fade-in-up {
    animation-duration: 0.5s;
  }
  
  .animation-delay-200,
  .animation-delay-400,
  .animation-delay-600,
  .animation-delay-800 {
    animation-delay: 0s;
  }
}
