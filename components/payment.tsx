"use client"
import { motion } from "framer-motion"
import { Bitcoin, CreditCard, DollarSign } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export function PaymentMethods() {
  return (
    <div className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Payment Methods Available</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Crypto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-black border border-zinc-800 rounded-lg p-8 flex flex-col items-center cursor-pointer group"
          >
            <Bitcoin className="w-12 h-12 mb-6 text-white transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
            <h3 className="text-xl font-medium">Crypto (Preffered)</h3>
            <p className="text-zinc-500 mt-2 text-center">BTC, ETH and LTC</p>
          </motion.div>

          {/* Cashapp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-black border border-zinc-800 rounded-lg p-8 flex flex-col items-center cursor-pointer group"
          >
            <DollarSign className="w-12 h-12 mb-6 text-white transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
            <h3 className="text-xl font-medium">Cashapp (Unavailable) </h3>
            <p className="text-zinc-500 mt-2 text-center">Fast and secure payments</p>
          </motion.div>

          {/* Giftcards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-black border border-zinc-800 rounded-lg p-8 flex flex-col items-center cursor-pointer group"
          >
            <CreditCard className="w-12 h-12 mb-6 text-white transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
            <h3 className="text-xl font-medium">Amazon Giftcards</h3>
            <p className="text-zinc-500 mt-2 text-center">Others may be accepted</p>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
