"use client";
import ServiceCard from "./ServiceCard";
import { Wrench, MapPin, RefreshCcw } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 px-4">
      <h2 className="font-heading text-3xl md:text-4xl mb-12 text-center">
        What I Do
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        <ServiceCard
          title="Custom One‑Page Websites"
          description="Fast, focused, optimized for leads."
          icon={<Wrench />}
          delay={0.1}
        />
        <ServiceCard
          title="Local SEO Setup"
          description="Google Maps, reviews, visibility that matters."
          icon={<MapPin />}
          delay={0.2}
        />
        <ServiceCard
          title="Ongoing Support"
          description="Site updates, edits, backups handled."
          icon={<RefreshCcw />}
          delay={0.3}
        />
      </div>
    </section>
  );
}
