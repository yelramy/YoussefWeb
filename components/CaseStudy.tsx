// @ts-nocheck
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CaseStudy() {
  return (
    <section id="case" className="py-24 px-4 bg-dark/80">
      <motion.h2
        className="font-heading text-3xl md:text-4xl mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Here’s One I Built
      </motion.h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="rounded-xl overflow-hidden border border-gray-700"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Precision Drains LLC website"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </motion.div>

        <motion.p
          className="text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I built a modern site for <strong>Precision Drains</strong> — a local
          plumbing company in Michigan. Mobile‑friendly, fast‑loading, and sharp
          as hell.
        </motion.p>
      </div>
    </section>
  );
}
