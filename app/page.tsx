import type { ReactNode } from "react";
import { ArrowUpRight, Droplets, Flame, Leaf, PenTool, Sparkles, Waves, Wind, Music2, Timer } from "lucide-react";

const rituals = [
  {
    title: "Dawn Ember",
    description: "Stacked breathwork, sunlight, and sound prompts to recalibrate your mornings in twelve intentional minutes.",
    detail: "Guided thermal cues, cinnamon-citrus diffusion, and an adaptive playlist that crescendos with your pulse.",
    icon: Flame,
  },
  {
    title: "Lunette Drift",
    description: "A midday decompression ritual anchored by stillness mapping and tactile journaling.",
    detail: "Micro-stretches pair with graphite prompts so you can reset without leaving your workspace.",
    icon: Leaf,
  },
  {
    title: "Nebula Closure",
    description: "Twilight screens-off choreography that melts your nervous system into sleep readiness.",
    detail: "Light tapering, chamomile steam, and whisper playlists dissolve cognitive residue.",
    icon: Sparkles,
  },
];

const palettes = [
  {
    name: "Lunar Brine",
    description: "For coastal apartments craving fluidity.",
    colors: ["#d0f4ff", "#7cc1ff", "#1a2b4b", "#0a101f"],
    texture: "mist-flecked glass",
  },
  {
    name: "Honey Ash",
    description: "Ground airy lofts with warm mineral gradients.",
    colors: ["#fff3d6", "#f8c37f", "#7a4e2d", "#1f150e"],
    texture: "charcoal linen",
  },
  {
    name: "Verdant Pulse",
    description: "Small studios that want botanical depth without clutter.",
    colors: ["#dfffe4", "#5de2a0", "#1d3b2a", "#0b1510"],
    texture: "moss microfiber",
  },
];

const flows = [
  {
    phase: "Week 1",
    title: "Listen",
    description: "We sample the sensory signatures of your space with sound and scent diagnostics.",
    icon: Droplets,
  },
  {
    phase: "Week 2",
    title: "Design",
    description: "Mood recipes, lighting choreography, and tactile pairings are mapped in a living deck.",
    icon: PenTool,
  },
  {
    phase: "Week 3",
    title: "Install",
    description: "We co-create rituals, playlists, and scent capsules that slot into your calendar.",
    icon: Waves,
  },
];

const soundscapes = [
  { title: "Quartz Bloom", length: "09:12", vibe: "focus drift" },
  { title: "Tide Transit", length: "12:44", vibe: "slow momentum" },
  { title: "Golden Static", length: "07:03", vibe: "night release" },
  { title: "Anise Signal", length: "05:57", vibe: "pre-ritual ignite" },
];

const navLinks = [
  { label: "Rituals", href: "#rituals" },
  { label: "Palettes", href: "#palettes" },
  { label: "Flow", href: "#flow" },
  { label: "Library", href: "#library" },
  { label: "Reserve", href: "#reserve" },
];

const Highlight = ({ children }: { children: ReactNode }) => (
  <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/80">
    {children}
  </span>
);

const GlassCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div
    className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_rgba(15,23,42,0.45)] backdrop-blur-xl ${className}`}
  >
    {children}
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#04040b] via-[#0b1726] to-[#04040b] text-slate-50">
      <header className="sticky top-0 z-20 border-b border-white/5 bg-[#04040b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-widest text-white/70">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500" /> Echolume Studio
          </div>
          <nav className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-white/50">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <Highlight>Bio-ritual interior practice</Highlight>
            <h1 className="font-heading text-5xl leading-tight text-white md:text-6xl">
              Architecture for your nervous system.
            </h1>
            <p className="text-lg text-white/70">
              Echolume creates experiential sanctuaries for people whose homes double as studios, offices, and places to heal. We choreograph light, scent, and sound so your rooms feel like instruments.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#reserve"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Reserve an immersion <ArrowUpRight size={18} />
              </a>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60">
                Download lookbook
              </button>
            </div>
          </div>

          <GlassCard className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-transparent" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">Signature ratio</p>
                <p className="mt-2 text-6xl font-semibold text-white">3.4</p>
                <p className="text-sm text-white/60">light : scent : sound</p>
              </div>
              <div className="space-y-3">
                {["Circadian mirroring", "Haptic journaling", "Sonic zoning"].map((item) => (
                  <div key={item} className="flex items-center justify-between text-sm text-white/70">
                    <span>{item}</span>
                    <span className="text-white/50">active</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/80">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">Status</p>
                  <p>Residency queue</p>
                </div>
                <p className="text-2xl font-semibold">06</p>
              </div>
            </div>
          </GlassCard>
        </section>

        <section id="rituals" className="space-y-10">
          <div className="flex items-center justify-between">
            <div>
              <Highlight>Somatic rituals</Highlight>
              <h2 className="mt-4 font-heading text-4xl text-white">Programs that anchor your days.</h2>
            </div>
            <p className="max-w-sm text-sm text-white/60">
              Each ritual is built from scent capsules, breathing prompts, and visual cues mapped to your schedule. Swipe through in the Echolume companion app or print on the tactile cards we mail you.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {rituals.map(({ title, description, detail, icon: Icon }) => (
              <GlassCard key={title}>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Icon size={18} />
                  <span>ritual</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-white/80">{description}</p>
                <p className="mt-4 text-sm text-white/60">{detail}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="palettes" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard className="space-y-5">
            <Highlight>Material palettes</Highlight>
            <h2 className="font-heading text-4xl text-white">Atmospheric recipes.</h2>
            <p className="text-white/70">
              We choreograph pigments, textiles, and lighting scripts that respond to your circadian rhythm. These kits are shippable worldwide with sourcing guidance and remote installation.
            </p>
            <div className="space-y-6">
              {palettes.map((palette) => (
                <div key={palette.name} className="rounded-2xl border border-white/10 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-white/40">Palette</p>
                      <p className="text-xl font-semibold text-white">{palette.name}</p>
                    </div>
                    <span className="text-xs text-white/50">{palette.texture}</span>
                  </div>
                  <p className="mt-3 text-sm text-white/70">{palette.description}</p>
                  <div className="mt-4 flex gap-3">
                    {palette.colors.map((color) => (
                      <span key={color} className="h-14 w-14 rounded-2xl border border-white/10" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
          <div className="grid gap-8 md:grid-cols-2">
            {flows.map(({ phase, title, description, icon: Icon }) => (
              <GlassCard key={phase} className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Icon size={18} />
                  <span>{phase}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="text-sm text-white/70">{description}</p>
              </GlassCard>
            ))}
            <GlassCard className="flex flex-col justify-between bg-gradient-to-br from-cyan-400/20 via-fuchsia-500/10 to-transparent">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Pacing</p>
                <h3 className="mt-2 text-4xl font-semibold text-white">21 days</h3>
                <p className="text-sm text-white/70">Average residency for a full-sensory overhaul.</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Timer size={18} />
                <p>Lifetime access to ritual refresh calls.</p>
              </div>
            </GlassCard>
          </div>
        </section>

        <section id="flow" className="space-y-8">
          <Highlight>Immersion flow</Highlight>
          <h2 className="font-heading text-4xl text-white">A studio-week built for calm momentum.</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {["Audit", "Prototype", "Embed"].map((label, index) => (
              <div key={label} className="relative p-6">
                <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5" />
                <div className="relative flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <span className="text-xl font-semibold text-white/80">0{index + 1}</span>
                    <span>{label}</span>
                  </div>
                  <p className="text-white/70">
                    {index === 0 && "We translate your routines into sensory data — light lux, scent density, and acoustic patterns."}
                    {index === 1 && "We sketch prototypes with VR light washes and curated playlists so you feel the room before it ships."}
                    {index === 2 && "We script daily cues, reminders, and supply drops to make sure the ritual holds weeks after install."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="library" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Highlight>Sound & scent library</Highlight>
            <h2 className="font-heading text-4xl text-white">Compositions to score your rituals.</h2>
            <p className="text-white/70">
              Every residency unlocks our evolving sonic archive paired with diffuser blends. Stream directly or have the oil pods mailed monthly.
            </p>
            <div className="space-y-4">
              {soundscapes.map((sound) => (
                <GlassCard key={sound.title} className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">{sound.title}</p>
                    <p className="text-sm text-white/60">{sound.vibe}</p>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Music2 size={18} />
                    <span>{sound.length}</span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
          <GlassCard className="flex flex-col gap-6 bg-white/5">
            <div className="flex items-center gap-3 text-sm text-white/60">
              <Wind size={18} />
              <span>Aeromatic capsules</span>
            </div>
            <h3 className="text-3xl font-semibold text-white">Custom diffuser blends arrive synced with your rituals.</h3>
            <p className="text-sm text-white/70">
              Capsules include provenance cards, pairing notes, and refill reminders triggered by the Echolume app. You choose between botanical, mineral, or spice-forward stacks.
            </p>
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900">
              Build my stack <ArrowUpRight size={18} />
            </button>
          </GlassCard>
        </section>

        <section id="reserve" className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Highlight>Residency waitlist</Highlight>
              <h2 className="mt-4 font-heading text-4xl">Reserve your Echolume immersion.</h2>
            </div>
            <p className="max-w-md text-sm text-white/70">
              We onboard six homes per quarter to keep the work intimate. Share a few lines about your space and we’ll send a sensory brief within 48 hours.
            </p>
          </div>
          <form className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm placeholder:text-white/40" placeholder="Name" />
            <input className="rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm placeholder:text-white/40" placeholder="City & timezone" />
            <input className="md:col-span-2 rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm placeholder:text-white/40" placeholder="Email" />
            <textarea
              className="md:col-span-2 min-h-[120px] rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm placeholder:text-white/40"
              placeholder="Tell us how you want your space to make you feel"
            />
            <button className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">
              Submit request <ArrowUpRight size={18} />
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[#03030a] py-10 text-center text-xs uppercase tracking-[0.3em] text-white/30">
        Echolume Studio — rituals for rooms that hold you.
      </footer>
    </div>
  );
}
