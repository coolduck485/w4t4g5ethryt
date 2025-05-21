"use client";

import { motion } from "framer-motion";
import { MailIcon, SendIcon } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { ParticleBackground } from "./ParticleBackground";

const contactMethods = [
  {
    name: "Discord:",
    value: "biinary",
    icon: (
      <FontAwesomeIcon
        icon={faDiscord}
        className="w-12 h-12 text-white transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
      />
    ),
    link: "https://discord.com/users/1365122799659646976",
  },
  {
    name: "Email",
    value: "imakethingsandstuff@proton.me",
    icon: (
      <MailIcon className="w-12 h-12 text-white transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
    ),
    link: "mailto:imakethingsandstuff@proton.me",
  },
  {
    name: "Telegram:",
    value: "https://t.me/biiinary",
    icon: (
      <SendIcon className="w-12 h-12 text-white transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
    ),
    link: "https://t.me/biiinary",
  },
];

export function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-black">
      <ParticleBackground />

      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center font-heading text-foreground"
        >
          I'm available for freelance work, Get in touch.
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {contactMethods.map((method) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href={method.link} target="_blank" rel="noopener noreferrer">
                <div className="bg-black border border-zinc-800 rounded-lg p-8 flex flex-col items-center cursor-pointer group">
                  <div className="mb-4 p-3 inline-block rounded-full">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {method.name}
                  </h3>
                  <p className="text-muted-foreground text-center">{method.value}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
