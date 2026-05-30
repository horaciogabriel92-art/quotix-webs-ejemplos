"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface Props {
  productImage: string;
}

export default function DragMockupDemo({ productImage }: Props) {
  return (
    <div className="relative w-full h-56 bg-[#0B1628] rounded-2xl overflow-hidden border border-[#007DB8]/10">
      {/* Background product image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src={productImage}
          alt="Producto"
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1628] via-[#0B1628]/60 to-transparent" />

      {/* Title */}
      <div className="absolute top-3 left-3 z-10">
        <p className="text-[10px] uppercase tracking-widest text-white font-bold">
          Probá cómo queda tu marca
        </p>
      </div>

      {/* Animation area */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* The product silhouette (center) */}
        <div className="relative w-24 h-28">
          <Image
            src={productImage}
            alt="Prenda"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 rounded-lg ring-2 ring-[#007DB8]/20" />
        </div>

        {/* Logo that gets dragged */}
        <motion.div
          className="absolute w-14 h-14"
          animate={{
            x: [-80, 0, 0, -80],
            y: [20, 0, 0, 20],
            scale: [0.8, 1, 1, 0.8],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.35, 0.8, 1],
          }}
        >
          <Image
            src="/networkcapital/logo.png"
            alt="Tu logo"
            fill
            className="object-contain drop-shadow-[0_0_12px_rgba(0,125,184,0.5)]"
          />
        </motion.div>

        {/* Finger cursor */}
        <motion.div
          className="absolute z-20"
          animate={{
            x: [-80, 8, 8, -80],
            y: [32, 12, 12, 32],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.35, 0.8, 1],
          }}
        >
          {/* Finger icon */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="drop-shadow-lg"
          >
            <path
              d="M8 2.5C8 1.67157 8.67157 1 9.5 1C10.3284 1 11 1.67157 11 2.5V9.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M11 5.5C11 4.67157 11.6716 4 12.5 4C13.3284 4 14 4.67157 14 5.5V10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M14 7.5C14 6.67157 14.6716 6 15.5 6C16.3284 6 17 6.67157 17 7.5V10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M17 10.5C17 9.67157 17.6716 9 18.5 9C19.3284 9 20 9.67157 20 10.5V15.5C20 19.0899 17.0899 22 13.5 22H12.5C9.14257 22 6.23303 19.5303 5.5537 16.3514L4.19867 10.1357C4.07574 9.56579 4.44449 9 5.02768 9C5.52582 9 5.95186 9.37342 6.06832 9.85929L7.5 15.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="20" cy="10.5" r="2" fill="#E91E8C" />
          </svg>
        </motion.div>

        {/* Drop target glow pulse */}
        <motion.div
          className="absolute w-20 h-20 rounded-full border-2 border-dashed border-[#F2B411]/40"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Sparkle when logo lands */}
        <motion.div
          className="absolute"
          animate={{
            opacity: [0, 0, 1, 0, 0],
            scale: [0.5, 0.5, 1.3, 0.5, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            times: [0, 0.32, 0.4, 0.55, 1],
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M20 0L22.5 17.5L40 20L22.5 22.5L20 40L17.5 22.5L0 20L17.5 17.5L20 0Z"
              fill="#F2B411"
            />
          </svg>
        </motion.div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-3 left-0 right-0 text-center z-10">
        <p className="text-[10px] text-white/40 uppercase tracking-widest">
          Arrastrá tu logo a la prenda
        </p>
      </div>
    </div>
  );
}
