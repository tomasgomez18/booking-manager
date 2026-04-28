export const PRICING_DATA = [
  {
    title: "Plan Free",
    price: "0",
    description: "Ideal para conocer la plataforma y empezar a organizar tu flujo.",
    features: ["14 días de prueba total", "Gestión de turnos básica", "Link de reserva único"],
    buttonText: "Probar Gratis",
    isFeatured: false,
    isFuture: false
  },
  {
    title: "Plan Pro",
    price: "25.000",
    description: "Todo lo que tu negocio necesita para escalar al siguiente nivel.",
    features: ["Turnos ilimitados", "Soporte 24/7 personalizado", "Sistema de referidos", "Panel de administración total"],
    buttonText: "Contratar Ahora",
    isFeatured: true, // Resalta visualmente
    isFuture: false
  },
  {
    title: "Enterprise",
    price: "---",
    description: "Nuevas funcionalidades impulsadas por IA y reportes avanzados.",
    features: ["IA para optimización", "Multi-sucursales", "API para desarrolladores"],
    buttonText: "Próximamente",
    isFeatured: false,
    isFuture: true // Estilo deshabilitado/misterioso
  }
];