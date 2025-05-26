"use client";

import { motion } from "framer-motion";
import { Home, Code2, Briefcase, Mail } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

const navItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#projects", label: "Projects", icon: Code2 },
  { href: "#skills", label: "Skills", icon: Briefcase },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <TooltipProvider delayDuration={100}>
      <div className="flex items-center gap-4 px-6 py-3 bg-zinc-900/90 backdrop-blur-sm rounded-full border border-zinc-800 top-4 left-1/2 transform -translate-x-1/2 z-50">
      {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className="p-2 rounded-full transition-colors hover:bg-zinc-800"
                  >
                    {/* Wrapping the icon in a motion.div to add a scale effect on hover */}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>
    </motion.nav>
  );
}
