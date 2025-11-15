import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Mail,
  Sparkles,
  TimerReset,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Daily runway",
    description: "OrbitDesk builds a calm schedule for your deep work, breaks, and admin in under 60 seconds.",
    icon: TimerReset,
  },
  {
    title: "Shared rhythms",
    description: "Invite clients or teammates to contribute priorities without derailing your own plan.",
    icon: Users,
  },
  {
    title: "Ready-made recaps",
    description: "Automatic summaries show what moved forward and what needs a nudge tomorrow.",
    icon: ClipboardList,
  },
];

const routines = [
  {
    name: "Focus sprints",
    detail: "Select a 90-minute template, stack three, and OrbitDesk inserts restorative pauses.",
  },
  {
    name: "Client care",
    detail: "Auto-generate touchpoints for each account so nothing quietly ages out.",
  },
  {
    name: "Studio admin",
    detail: "Batch finance reviews, filings, and inbox sessions into a single weekly ritual.",
  },
];

const testimonials = [
  {
    quote:
      "OrbitDesk replaced the pile of sticky notes on my monitor. My studio finally runs on intent instead of panic.",
    author: "Camila Reyes, Interior Designer",
  },
  {
    quote:
      "I ship more product experiments because I see my commitments laid out with breathing room. It feels human.",
    author: "Zach Li, Founder",
  },
];

const faqs = [
  {
    question: "What makes OrbitDesk different?",
    answer:
      "It blends a personal agenda with light client collaboration. You keep control of your week while letting others submit priorities inline.",
  },
  {
    question: "Do I need another app?",
    answer:
      "No. OrbitDesk runs in the browser and syncs via email digests. Use the mobile view for quick edits on the go.",
  },
  {
    question: "Can I export everything?",
    answer: "Yes, plans export to CSV or Notion with a single click.",
  },
];

const plans = [
  {
    name: "Solo",
    price: "$14",
    cadence: "per month",
    includes: ["Personal planning board", "Email recaps", "Calm focus timers"],
  },
  {
    name: "Studio",
    price: "$36",
    cadence: "per month",
    includes: ["Everything in Solo", "Client collaboration", "Priority intake forms"],
    featured: true,
  },
  {
    name: "Partner",
    price: "Let's talk",
    cadence: "annual", 
    includes: ["Workflow audit", "Dedicated success lead", "Custom exports"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05060b] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#030712] p-10 shadow-[0_10px_80px_rgba(15,23,42,0.45)]">
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
            <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-1">
              <Sparkles size={16} /> New: Shared rhythms
            </span>
            <span className="text-white/40">OrbitDesk</span>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <h1 className="font-heading text-5xl leading-tight text-white md:text-6xl">
                Plan a week that works like you do.
              </h1>
              <p className="text-lg text-white/70">
                OrbitDesk is a lightweight operations hub for solo founders, studios, and independents who juggle multiple clients.
                Build routines, share priorities, and keep your promises without burning out.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <a
                  href="#plans"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-slate-900 transition hover:bg-slate-100"
                >
                  See plans <ArrowRight size={18} />
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-white/80 transition hover:border-white/60"
                >
                  Watch a 3-min demo
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">Today at a glance</p>
              <div className="mt-4 space-y-3">
                {["Deep research", "Client handoff", "Admin sweep"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
                    <span>{item}</span>
                    <CheckCircle2 className="text-emerald-300" size={16} />
                  </div>
                ))}
                <div className="rounded-2xl border border-dashed border-white/20 px-4 py-3">
                  <p className="text-white/60">Add a breathing space</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between rounded-2xl bg-gradient-to-r from-cyan-400/30 to-indigo-400/30 px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">Energy</p>
                  <p className="text-xl font-semibold">73% steady</p>
                </div>
                <Sparkles />
              </div>
            </div>
          </div>
        </header>

        <section className="mt-24 grid gap-8 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white/80">
                <Icon />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{description}</p>
            </div>
          ))}
        </section>

        <section id="demo" className="mt-24 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="font-heading text-4xl text-white">Build rituals with guardrails.</h2>
            <p className="mt-4 text-white/70">
              OrbitDesk keeps your routines visible in one calm space. Pick a template, tweak the durations, and press start.
              The app nudges you when it is time to close a loop or take a breath.
            </p>
            <div className="mt-8 space-y-4">
              {routines.map((routine) => (
                <div key={routine.name} className="rounded-2xl border border-white/10 p-4">
                  <p className="text-sm text-white/50">Routine</p>
                  <h3 className="text-2xl font-semibold text-white">{routine.name}</h3>
                  <p className="mt-2 text-white/70">{routine.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#030712] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Weekly review</p>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-3xl font-semibold text-white">11 sessions complete</p>
                <p className="text-white/60">34 focused hours, 5 shared updates</p>
              </div>
              <div className="space-y-3 text-sm text-white/70">
                <p className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Clients touched</span>
                  <span className="text-white">4</span>
                </p>
                <p className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Promises kept</span>
                  <span className="text-white">12</span>
                </p>
                <p className="flex items-center justify-between pb-3">
                  <span>Next up</span>
                  <span className="text-white">Refine launch runway</span>
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
              <p className="text-white">Need help setting this up?</p>
              <p>We run free onboarding workshops every Thursday.</p>
            </div>
          </div>
        </section>

        <section className="mt-24 grid gap-8 md:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.author} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-lg text-white/80">“{item.quote}”</p>
              <p className="mt-4 text-sm text-white/50">{item.author}</p>
            </div>
          ))}
        </section>

        <section id="plans" className="mt-24">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Pricing</p>
            <h2 className="mt-3 font-heading text-4xl text-white">Pick the lane that fits.</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border border-white/10 p-8 ${
                  plan.featured ? "bg-gradient-to-b from-white/15 to-white/5" : "bg-white/5"
                }`}
              >
                <p className="text-sm text-white/60">{plan.name}</p>
                <p className="mt-4 text-4xl font-semibold text-white">{plan.price}</p>
                <p className="text-white/60">{plan.cadence}</p>
                <ul className="mt-6 space-y-2 text-sm text-white/70">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CalendarCheck size={16} className="text-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/60">
                  Start here
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">Stay in orbit</p>
              <h2 className="mt-4 font-heading text-4xl text-white">Get the Tuesday planning letter.</h2>
              <p className="mt-2 text-white/70">
                Short tips on running your studio with intent. Sent once a week.
              </p>
            </div>
            <form className="flex flex-col gap-4 text-sm text-slate-900">
              <div className="rounded-2xl bg-white/90 px-4 py-3">
                <label className="text-xs uppercase tracking-[0.2em] text-slate-500">Name</label>
                <input className="w-full border-none bg-transparent text-base text-slate-900 focus:outline-none" placeholder="Amina" />
              </div>
              <div className="rounded-2xl bg-white/90 px-4 py-3">
                <label className="text-xs uppercase tracking-[0.2em] text-slate-500">Email</label>
                <input className="w-full border-none bg-transparent text-base text-slate-900 focus:outline-none" placeholder="you@studio.com" />
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">
                Subscribe <Mail size={16} />
              </button>
            </form>
          </div>
        </section>

        <section className="mt-24 grid gap-6 md:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
              <p className="text-white">{faq.question}</p>
              <p className="mt-2">{faq.answer}</p>
            </div>
          ))}
        </section>

        <footer className="mt-24 flex flex-col gap-2 border-t border-white/5 py-8 text-sm text-white/50">
          <p>© {new Date().getFullYear()} OrbitDesk</p>
          <p>Designed for independents who want calm momentum.</p>
        </footer>
      </div>
    </div>
  );
}
