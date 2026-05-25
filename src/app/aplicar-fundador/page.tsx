"use client";

"use client";

import { useState } from "react";
import Link from "next/link";
import { API_URL } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Send } from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";

export default function ApplyFounderPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { format } = useCurrency();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      await fetch(`${API_URL}/founder`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Error al enviar la aplicacion");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
        <div className="qx-card-dark p-12 text-center max-w-md">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-headline font-bold mb-4">¡Aplicación Recibida!</h1>
          <p className="text-[#94a3b8] mb-8">
            Revisaremos tu aplicación en las próximas 24 horas y te contactaremos por email.
          </p>
          <Link href="/">
            <button className="qx-btn-lime">Volver al inicio</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="flex items-center gap-4 mb-10">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-xl text-[#94a3b8] hover:text-white hover:bg-[#1e293b]">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-headline font-bold">Aplicar como Fundador</h1>
            <p className="text-[#94a3b8] text-sm">20 cupos limitados • {format(300)} • 3 meses incluidos</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="qx-card-dark p-10 space-y-6">
          <div className="space-y-2">
            <Label className="text-xs font-semibold uppercase tracking-wide text-[#94a3b8]">Nombre del Taller</Label>
            <Input name="name" required className="h-12 rounded-xl border-[#334155] bg-[#0f172a] text-white placeholder:text-[#475569] focus:ring-[#bf3480] focus:border-[#bf3480]" placeholder="Ej: Bordados Garcia" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase tracking-wide text-[#94a3b8]">Ciudad</Label>
              <Input name="city" className="h-12 rounded-xl border-[#334155] bg-[#0f172a] text-white placeholder:text-[#475569] focus:ring-[#bf3480] focus:border-[#bf3480]" placeholder="Montevideo" />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase tracking-wide text-[#94a3b8]">País</Label>
              <Input name="country" className="h-12 rounded-xl border-[#334155] bg-[#0f172a] text-white placeholder:text-[#475569] focus:ring-[#bf3480] focus:border-[#bf3480]" placeholder="Uruguay" />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-semibold uppercase tracking-wide text-[#94a3b8]">¿Tenés dominio propio?</Label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-[#cbd5e1]">
                <input type="radio" name="hasDomain" value="true" className="accent-[#bf3480]" />
                <span>Sí</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-[#cbd5e1]">
                <input type="radio" name="hasDomain" value="false" defaultChecked className="accent-[#bf3480]" />
                <span>No</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-semibold uppercase tracking-wide text-[#94a3b8]">Dominio (si tenés)</Label>
            <Input name="domainName" className="h-12 rounded-xl border-[#334155] bg-[#0f172a] text-white placeholder:text-[#475569] focus:ring-[#bf3480] focus:border-[#bf3480]" placeholder="bordadosgarcia.com" />
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-semibold uppercase tracking-wide text-[#94a3b8]">Modalidad preferida</Label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-[#cbd5e1]">
                <input type="radio" name="modality" value="email" defaultChecked className="accent-[#bf3480]" />
                <span>Solo Email</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-[#cbd5e1]">
                <input type="radio" name="modality" value="crm" className="accent-[#bf3480]" />
                <span>CRM Kanban</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-semibold uppercase tracking-wide text-[#94a3b8]">Links a redes sociales</Label>
            <Input name="socialLinks" className="h-12 rounded-xl border-[#334155] bg-[#0f172a] text-white placeholder:text-[#475569] focus:ring-[#bf3480] focus:border-[#bf3480]" placeholder="Instagram, Facebook..." />
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-semibold uppercase tracking-wide text-[#94a3b8]">Mensaje (opcional)</Label>
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-xl border border-[#334155] bg-[#0f172a] text-white p-4 resize-none placeholder:text-[#475569] focus:outline-none focus:border-[#bf3480]"
              placeholder="Contanos sobre tu taller..."
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-14 rounded-xl text-lg font-bold bg-[#d4f542] hover:bg-[#e0ff70] text-[#0f172a] disabled:opacity-50"
          >
            <Send className="w-5 h-5 mr-2" />
            {loading ? "Enviando..." : "Enviar Aplicación"}
          </Button>
        </form>
      </div>
    </div>
  );
}
