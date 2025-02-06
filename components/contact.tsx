"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MailIcon, SendIcon } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const contactMethods = [
  {
    name: "Discord",
    value: "_dri",
    icon: <FontAwesomeIcon
            icon={faDiscord}
            className="w-12 h-12 text-white transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          />,
    link: "https://discord.com/users/339632248636571649",
  },
  {
    name: "Email",
    value: "imakethingsandstuff@proton.me",
    icon: <MailIcon className="w-12 h-12 text-white transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />,
    link: "mailto:imakethingsandstuff@proton.me",
  },
  {
    name: "Telegram",
    value: "https://t.me/idkdri",
    icon: <SendIcon className="w-12 h-12 text-white transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />,
    link: "https://t.me/idkdri",
  },
];

export function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-black">
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
                <Card className="cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="mb-4 p-3 inline-block rounded-full">
                      {method.icon}
                    </div>
                    <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                      {method.name}
                    </h3>
                    <p className="text-muted-foreground">{method.value}</p>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}