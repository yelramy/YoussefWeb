// @ts-nocheck
"use client";
import { motion } from "framer-motion";
import React from "react";

export default function ServiceCard({
  title,
  description,
  icon,
  delay = 0
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      className="bg-dark/70 backdrop-blur p-6 rounded-2xl border border-gray-700 hover:-translate-y-1 hover:shadow-lg transition"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      {icon && <div className="text-accent text-3xl mb-4">{icon}</div>}
      <h3 className="font-heading text-xl mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  );
}
