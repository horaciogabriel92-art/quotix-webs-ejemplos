// Configuración global de la landing
export const WHATSAPP_NUMBER = "59898133523";

export const WHATSAPP_MESSAGE =
  "Hola, vi Quotix y quiero agendar una demo para mi taller.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
