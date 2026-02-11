"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone, Mail, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white z-[70] shadow-xl p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
              <Link href="/" onClick={onClose} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">
                  N
                </div>
                <span className="font-bold text-primary">NZUZU</span>
              </Link>
              <button onClick={onClose} className="text-primary">
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 mb-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "text-lg font-semibold transition-colors",
                    pathname === link.href ? "text-accent" : "text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t pt-8 space-y-4">
              <a
                href={`tel:${site.phone_tel}`}
                className="flex items-center gap-3 text-primary font-medium"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                {site.phone_local}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-primary font-medium"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                {site.email}
              </a>
              <a
                href={site.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-white w-full py-3 rounded-lg font-bold"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
