"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Check,
  ShieldCheck,
  Truck,
  Award,
  Palette,
  Tag,
  ArrowRight,
  ChevronDown,
  Ruler,
  Shirt,
  Layers,
  Sparkles,
  Info,
} from "lucide-react";
import { PRODUCTS, BRAND, type Product } from "@/lib/networkcapital-data";
import DragMockupDemo from "./DragMockupDemo";

function PriceTable({
  tiers,
  active,
}: {
  tiers: { qty: number; label: string; price: number }[];
  active: boolean;
}) {
  return (
    <motion.div
      className="w-full"
      initial={false}
      animate={{ opacity: active ? 1 : 0.5 }}
    >
      <div className="grid grid-cols-3 gap-2">
        {tiers.map((tier) => (
          <div
            key={tier.label}
            className={`text-center p-3 rounded-xl border transition-colors ${
              active
                ? "bg-[#F2B411]/10 border-[#F2B411]/30"
                : "bg-white/5 border-white/10"
            }`}
          >
            <p className="text-white/50 text-[10px] uppercase tracking-wider">
              {tier.label} uds
            </p>
            <p
              className={`text-xl font-black ${
                active ? "text-[#F2B411]" : "text-white/70"
              }`}
            >
              ${tier.price.toLocaleString("es-UY")}
            </p>
            <p className="text-white/30 text-[10px]">c/u</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function SizeTable({ table }: { table: { size: string; largo?: number; ancho?: number; manga?: number }[] }) {
  if (!table || table.length === 0) return null;
  const hasManga = table.some((r) => r.manga);
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10">
      <div className={`grid ${hasManga ? "grid-cols-4" : "grid-cols-3"} bg-white/5 text-[10px] uppercase tracking-wider text-white/40 font-bold`}>
        <div className="p-2 text-center">Talle</div>
        <div className="p-2 text-center">Largo (cm)</div>
        <div className="p-2 text-center">Ancho (cm)</div>
        {hasManga && <div className="p-2 text-center">Manga (cm)</div>}
      </div>
      {table.map((row, i) => (
        <div
          key={row.size}
          className={`grid ${hasManga ? "grid-cols-4" : "grid-cols-3"} text-sm ${
            i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
          }`}
        >
          <div className="p-2 text-center text-[#F2B411] font-bold">{row.size}</div>
          <div className="p-2 text-center text-white/70">{row.largo ?? "—"}</div>
          <div className="p-2 text-center text-white/70">{row.ancho ?? "—"}</div>
          {hasManga && (
            <div className="p-2 text-center text-white/70">{row.manga ?? "—"}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ProductGrid({
  products = PRODUCTS,
  showHeader = true,
}: {
  products?: Product[];
  showHeader?: boolean;
}) {
  const [selected, setSelected] = useState<Product | null>(null);
  const [withPrint, setWithPrint] = useState(true);
  const [showSizes, setShowSizes] = useState(false);
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");

  return (
    <section id="productos" className="py-20 bg-[#0B1628]">
      <div className="container mx-auto px-6">
        {/* Header */}
        {showHeader && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-4 py-1 bg-[#F2B411]/10 text-[#F2B411] text-sm font-bold rounded-full mb-4 uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Catálogo por mayor
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              NUESTROS <span className="text-[#F2B411]">PRODUCTOS</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Calidad premium para tu marca. Todos nuestros productos están
              pensados para estampado, bordado y personalización.
            </p>
          </motion.div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.button
              key={product.id}
              onClick={() => {
                setSelected(product);
                setActiveImage(product.image);
                setWithPrint(true);
                setShowSizes(false);
                setActiveColor(null);
              }}
              className="group text-left bg-[#131d2b] rounded-2xl overflow-hidden border border-[#007DB8]/10 hover:border-[#F2B411]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,125,184,0.15)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <motion.div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="relative w-20 h-20">
                    <Image
                      src="/networkcapital/logo.png"
                      alt=""
                      fill
                      className="object-contain opacity-70"
                    />
                  </div>
                </motion.div>
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-[#F2B411] text-[#007DB8] text-xs font-bold rounded-full uppercase">
                    {product.category}
                  </span>
                </div>
                {product.weight && product.weight !== "—" && (
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold rounded-lg uppercase">
                      {product.weight}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#F2B411] transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <p className="text-[#F2B411] font-extrabold text-xl">
                    Desde ${product.priceFrom.toLocaleString("es-UY")}
                  </p>
                  <p className="text-white/30 text-xs line-through">
                    c/estampado
                  </p>
                </div>
                <p className="text-white/40 text-sm mt-1">
                  Mínimo {product.minQty} unidades
                </p>
                <div className="mt-4 flex items-center gap-1 text-[#007DB8] text-sm font-medium">
                  Ver detalles <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-[#0B1628]/90 backdrop-blur-sm"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Card */}
            <motion.div
              className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#131d2b] rounded-3xl border border-[#007DB8]/15 shadow-2xl"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Close */}
              <motion.button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.5)] transition-shadow"
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{ scale: 0.85 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
              >
                <X className="w-5 h-5 text-[#E91E8C]" strokeWidth={3} />
              </motion.button>

              <div className="grid md:grid-cols-2">
                {/* Left column: image + mockup demo */}
                <div className="flex flex-col">
                  {/* Product image */}
                  <div className="relative aspect-square bg-white">
                    <Image
                      src={activeImage || selected.image}
                      alt={selected.name}
                      fill
                      className="object-cover"
                    />
                    {selected.weight && selected.weight !== "—" && (
                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-lg">
                        <p className="text-[#F2B411] text-xs font-black uppercase">
                          {selected.weight}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Drag mockup demo */}
                  <div className="p-4 bg-[#0B1628]">
                    <DragMockupDemo productImage={selected.image} />
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 md:p-8 flex flex-col">
                  <motion.span
                    className="inline-block self-start px-3 py-1 bg-[#F2B411]/10 text-[#F2B411] text-xs font-bold rounded-full uppercase mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selected.category}
                  </motion.span>

                  <motion.h3
                    className="text-2xl md:text-3xl font-extrabold text-white mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    {selected.name}
                  </motion.h3>

                  <motion.p
                    className="text-white/40 text-sm mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selected.composition} · {selected.weight}
                  </motion.p>

                  {/* Toggle: Con estampado / Sin estampar */}
                  <motion.div
                    className="flex bg-white/5 rounded-xl p-1 mb-4 border border-white/10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <button
                      onClick={() => setWithPrint(true)}
                      className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
                        withPrint
                          ? "bg-[#F2B411] text-[#007DB8]"
                          : "text-white/50 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Palette className="w-4 h-4" />
                        Con estampado
                      </span>
                    </button>
                    <button
                      onClick={() => setWithPrint(false)}
                      className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
                        !withPrint
                          ? "bg-white/15 text-white"
                          : "text-white/50 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Shirt className="w-4 h-4" />
                        Sin estampar
                      </span>
                    </button>
                  </motion.div>

                  {/* Price table */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-white/50 text-[10px] uppercase tracking-wider mb-2">
                      {withPrint ? "Precios con estampado incluido" : "Precios lisos sin estampar"}
                    </p>
                    <PriceTable
                      tiers={
                        withPrint
                          ? selected.priceWithPrint
                          : selected.priceWithoutPrint
                      }
                      active={true}
                    />
                  </motion.div>

                  {/* XXL surcharge note */}
                  <motion.div
                    className="flex items-start gap-2 mb-4 p-3 bg-[#E91E8C]/10 border border-[#E91E8C]/20 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                  >
                    <Info className="w-4 h-4 text-[#E91E8C] shrink-0 mt-0.5" />
                    <p className="text-white/60 text-xs">
                      Talles <strong className="text-white">XXL y XXXL</strong> tienen un adicional de{" "}
                      <strong className="text-[#F2B411]">${BRAND.xxlSurcharge}</strong> por unidad.
                    </p>
                  </motion.div>

                  <div className="h-px bg-white/10 mb-4" />

                  {/* Description */}
                  <motion.p
                    className="text-white/80 leading-relaxed mb-4 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {selected.description}
                  </motion.p>

                  {/* Details row */}
                  {selected.details && selected.details.length > 0 && (
                    <motion.div
                      className="grid grid-cols-1 gap-2 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.52 }}
                    >
                      {selected.details.map((detail, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg"
                        >
                          <Layers className="w-4 h-4 text-[#007DB8] shrink-0" />
                          <span className="text-white/60 text-xs">{detail}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {selected.features.map((feat, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.55 + i * 0.06 }}
                      >
                        <Check className="w-4 h-4 text-[#F2B411] shrink-0" />
                        <span className="text-white/70 text-sm">{feat}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Colors */}
                  <div className="mb-4">
                    <p className="text-white/50 text-[10px] uppercase tracking-wider mb-2">
                      Colores disponibles ({selected.colors.length})
                    </p>
                    {selected.colorImages ? (
                      <div className="flex flex-wrap gap-3">
                        {selected.colors.map((color, i) => {
                          const img = selected.colorImages![color];
                          const isActive = activeColor === color;
                          return (
                            <motion.button
                              key={color}
                              onClick={() => {
                                if (isActive) {
                                  setActiveColor(null);
                                  setActiveImage(selected.image);
                                } else {
                                  setActiveColor(color);
                                  if (img) setActiveImage(img);
                                }
                              }}
                              className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                                isActive
                                  ? "border-[#F2B411] ring-2 ring-[#F2B411]/30"
                                  : "border-white/10 hover:border-white/30"
                              }`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + i * 0.03 }}
                              whileTap={{ scale: 0.9 }}
                              title={color}
                            >
                              {img ? (
                                <Image
                                  src={img}
                                  alt={color}
                                  fill
                                  className="object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-white/5 flex items-center justify-center">
                                  <span className="text-white/50 text-[10px]">{color[0]}</span>
                                </div>
                              )}
                            </motion.button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {selected.colors.map((color, i) => (
                          <motion.button
                            key={color}
                            onClick={() => setActiveColor(activeColor === color ? null : color)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                              activeColor === color
                                ? "bg-[#F2B411] text-[#007DB8] border-[#F2B411]"
                                : "bg-white/5 text-white/70 border-white/10 hover:border-white/30"
                            }`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.03 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {color}
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Size table accordion */}
                  {selected.sizeTable.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={() => setShowSizes(!showSizes)}
                        className="flex items-center justify-between w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/[0.07] transition-colors"
                      >
                        <span className="flex items-center gap-2 text-white/70 text-sm font-medium">
                          <Ruler className="w-4 h-4 text-[#007DB8]" />
                          Tabla de talles
                        </span>
                        <motion.div
                          animate={{ rotate: showSizes ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4 text-white/40" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {showSizes && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-3">
                              <SizeTable table={selected.sizeTable} />
                              <p className="text-white/30 text-[10px] mt-2 text-center">
                                Las medidas pueden variar ± 1-2 cm
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Stamp ideas */}
                  {selected.stampIdeas && selected.stampIdeas.length > 0 && (
                    <motion.div
                      className="mb-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <p className="text-white/50 text-[10px] uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#F2B411]" />
                        Ideas de estampas
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selected.stampIdeas.map((idea, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-[#0B1628]/10 border border-[#007DB8]/20 rounded-lg text-[#007DB8] text-xs font-medium"
                          >
                            {idea}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Trust Badges */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {[
                      { icon: ShieldCheck, label: "Hecho en Uruguay" },
                      { icon: Truck, label: "Envío a todo el país" },
                      { icon: Award, label: "Calidad premium" },
                      { icon: Palette, label: "Personalizable" },
                    ].map((badge, i) => (
                      <motion.div
                        key={badge.label}
                        className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.75 + i * 0.06 }}
                      >
                        <badge.icon className="w-4 h-4 text-[#007DB8]" />
                        <span className="text-white/60 text-xs">{badge.label}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Production note */}
                  <motion.div
                    className="mb-5 p-3 bg-[#0B1628]/10 border border-[#007DB8]/20 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Info className="w-3.5 h-3.5 text-[#007DB8]" />
                      <p className="text-white text-xs font-bold uppercase tracking-wider">
                        Info del pedido
                      </p>
                    </div>
                    <ul className="text-white/50 text-xs space-y-1 ml-5 list-disc">
                      <li>Mínimo {BRAND.minOrder} unidades por diseño</li>
                      <li>Podés combinar hasta 2 diseños cada 10 prendas</li>
                      <li>Tiempo de producción: {BRAND.productionDays} días hábiles</li>
                      <li>Seña del {BRAND.depositPercent}% para comenzar</li>
                    </ul>
                  </motion.div>

                  {/* CTA */}
                  <motion.div
                    className="mt-auto space-y-3"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85 }}
                  >
                    <motion.a
                      href={`${BRAND.ctaUrl}/?producto=${selected.id}`}
                      className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#F2B411] text-[#007DB8] font-extrabold text-lg rounded-xl hover:bg-[#FFD700] transition-all shadow-[0_0_20px_rgba(242,180,17,0.2)]"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Tag className="w-5 h-5" />
                      HACÉ TU COTIZACIÓN AQUÍ
                    </motion.a>
                    <a
                      href={`${BRAND.ctaUrl}/?producto=${selected.id}`}
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 transition-all"
                    >
                      Ver en cotizador
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
