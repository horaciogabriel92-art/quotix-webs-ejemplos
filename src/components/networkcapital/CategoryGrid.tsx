"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { getCategories } from "@/lib/categories";

export default function CategoryGrid() {
  const categories = getCategories();

  return (
    <section id="productos" className="py-20 bg-[#0B1628]">
      <div className="container mx-auto px-6">
        {/* Header */}
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
            ELEGÍ <span className="text-[#F2B411]">TU PRENDA</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explorá nuestro catálogo. Todos los productos están
            pensados para estampar con serigrafía y DTF.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={`/networkcapital/${category.slug}`}
                className="group block bg-[#131d2b] rounded-2xl overflow-hidden border border-[#007DB8]/10 hover:border-[#F2B411]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,125,184,0.15)]"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1628]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-3 py-1 bg-[#F2B411] text-black text-xs font-bold rounded-full uppercase">
                      {category.count} productos
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#F2B411] transition-colors">
                    {category.name}
                  </h3>
                  <div className="flex items-center gap-1 text-[#007DB8] text-sm font-medium">
                    Ver productos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
