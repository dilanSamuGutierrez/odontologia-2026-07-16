"use client";
import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
export default function MagneticButton({
  children, className = "", href, onClick, type
}: { children: ReactNode; className?: string; href?: string; onClick?: () => void; type?: "button" | "submit"; }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: (e.clientX - (rect.left + rect.width / 2)) * 0.3, y: (e.clientY - (rect.top + rect.height / 2)) * 0.3 });
  }
  const Comp: any = href ? "a" : "button";
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="inline-block"
    >
      <Comp href={href} onClick={onClick} type={type} className={className}>{children}</Comp>
    </motion.div>
  );
}
