"use client";
import { motion } from "framer-motion";
import { WHATSAPP } from "@/lib/utils";
export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
      initial={{ scale: 0 }} animate={{ scale: 1 }}
      transition={{ delay: 1.1, type: "spring", stiffness: 200, damping: 14 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] grid place-items-center shadow-lg shadow-black/20"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white">
        <path d="M16 3C9 3 3.4 8.6 3.4 15.6c0 2.4.7 4.6 1.8 6.5L3 29l7.1-2.1c1.8 1 3.9 1.5 6 1.5 7 0 12.6-5.6 12.6-12.6C28.6 8.6 23 3 16 3zm0 22.8c-1.9 0-3.6-.5-5.1-1.4l-.4-.2-4.2 1.2 1.2-4.1-.2-.4a10 10 0 01-1.6-5.3C5.6 9.7 10.3 5 16 5s10.4 4.7 10.4 10.6S21.7 25.8 16 25.8zm5.8-7.7c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2c-.2.3-.8 1-1 1.2s-.4.2-.7.1c-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3s0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5s0-.4 0-.6c-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5.1.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
      </svg>
    </motion.a>
  );
}
