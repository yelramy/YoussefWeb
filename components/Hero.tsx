// @ts-nocheck
"use client";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center gap-6 px-4"
    >
      <motion.h1
        className="font-heading text-5xl md:text-7xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Websites That Don’t Suck.
      </motion.h1>

      <motion.p
        className="max-w-2xl text-lg md:text-xl text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I build fast, clean websites for small service businesses — fast.
      </motion.p>

      <motion.div
        className="text-accent text-md font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Typewriter
          words={["plumbers", "HVAC techs", "roofers", "electricians", "landscapers"]}
        />
      </motion.div>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Link
          href="#case"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent-orange to-accent text-dark font-semibold hover:opacity-90 transition"
        >
          See Example
        </Link>
        <Link
          href="#contact"
          className="px-6 py-3 rounded-xl border border-accent text-light font-semibold hover:bg-accent hover:text-dark transition"
        >
          Let’s Talk
        </Link>
      </motion.div>
    </section>
  );
}
