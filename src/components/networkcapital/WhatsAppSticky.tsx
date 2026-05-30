"use client";

import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/networkcapital-data";

export default function WhatsAppSticky() {
  return (
    <a
      href={`https://wa.me/${BRAND.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 bg-[#25D366] text-white font-bold rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-105 hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] transition-all"
      aria-label="Chat por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="hidden sm:inline">Chat</span>
    </a>
  );
}
