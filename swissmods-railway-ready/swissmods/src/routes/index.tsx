import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import bannerFivem from "@/assets/banner-fivem.jpg";
import bannerGta from "@/assets/banner-gta.jpg";
import bannerCs2 from "@/assets/banner-cs2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swiss — FiveM Menu & GTA Modded Accounts" },
      { name: "description", content: "Swiss: FiveM menu keys from £4 and GTA Online account mods for £7. Order through Discord." },
      { property: "og:title", content: "Swiss — FiveM Menu & GTA Modded Accounts" },
      { property: "og:description", content: "FiveM menu keys from £4 and GTA account mods for £7." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ORDER_LINK = "https://discord.gg/DRHD9saBK7";

const plans = [
  { id: "day", label: "24 Hours", price: 4, note: "Try it out" },
  { id: "week", label: "7 Days", price: 15, note: "Most picked" },
  { id: "life", label: "Lifetime", price: 35, note: "Best value" },
];

const cs2Plans = [
  { id: "day", label: "1 Day", price: "3.50" },
  { id: "week", label: "1 Week", price: "10" },
  { id: "month", label: "1 Month", price: "25" },
  { id: "life", label: "Lifetime", price: "30" },
];

const ticker = ["FiveM Menu", "From £4", "GTA Account Mods", "£7 Flat", "CS2 Menu", "From £3.50", "Order on Discord", "UK Based", "Fast Turnaround"];

const steps = [
  ["Choose", "Pick the menu plan or the account mod below."],
  ["Message", "Join the Discord and open a ticket with what you want."],
  ["Pay", "Sort payment directly with us in the ticket."],
  ["Play", "Get your key, or log back in to a fully modded account."],
];

const faqs = [
  ["How quick is it?", "Menu keys are usually sent as soon as payment's confirmed. Account mods depend on the queue — we'll give you a time in your ticket."],
  ["Do I have to give my account details?", "For the account mod, yes — we need to log in to do the work. Change your password afterwards."],
  ["What if the menu stops working after an update?", "Message us in Discord. We post status updates there after every game patch."],
  ["Is there any risk?", "Yes. Using menus or modded accounts breaks Rockstar's and FiveM's rules and can get accounts banned. Play smart."],
];

function Index() {
  const [plan, setPlan] = useState("week");
  const selected = plans.find((p) => p.id === plan)!;
  const [cs2, setCs2] = useState("month");
  const cs2Sel = cs2Plans.find((p) => p.id === cs2)!;

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-30 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center bg-primary font-display text-lg font-black text-foreground">+</span>
            <span className="font-display text-xl font-black tracking-[0.2em]">SWISS</span>
          </a>
          <nav className="hidden gap-8 font-display text-xs uppercase tracking-widest text-muted-foreground md:flex">
            <a href="#products" className="hover:text-foreground">Products</a>
            <a href="#how" className="hover:text-foreground">How it works</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </nav>
          <a href={ORDER_LINK} target="_blank" rel="noreferrer" className="border border-primary px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-primary transition hover:bg-primary hover:text-foreground">
            Discord
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-end pb-20 pt-32">
        <img src={hero} alt="Neon city at night" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 hero-fade" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <p className="mb-6 font-display text-xs uppercase tracking-[0.4em] text-primary">— Est. 2026 / UK</p>
          <h1 className="font-display text-6xl font-black uppercase leading-[0.9] md:text-[9rem]">
            Swiss<br /><span className="outline-text">Mods</span>
          </h1>
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-xl text-muted-foreground">
              FiveM menu keys and GTA account mods. No fluff, fair prices, real people on Discord.
            </p>
            <div className="flex gap-3">
              <a href="#products" className="bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-foreground transition hover:opacity-90">
                See prices
              </a>
              <a href={ORDER_LINK} target="_blank" rel="noreferrer" className="border px-8 py-4 font-display text-sm font-bold uppercase tracking-widest transition hover:border-foreground">
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden border-y bg-primary py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-sm font-bold uppercase tracking-widest text-foreground">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-10">{t}<span>+</span></span>
          ))}
        </div>
      </div>

      {/* Products */}
      <section id="products" className="relative grid-lines">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-14 flex items-end justify-between">
            <h2 className="font-display text-5xl font-black uppercase md:text-7xl">The<br />Goods</h2>
            <span className="font-display text-sm text-muted-foreground">03 products</span>
          </div>

          <div className="grid gap-px border bg-border md:grid-cols-5">
            {/* FiveM */}
            <div className="bg-card p-8 md:col-span-3 md:p-12">
              <img src={bannerFivem} alt="Swiss FiveM Cheat" width={1536} height={864} loading="lazy" className="-mx-8 -mt-8 mb-8 w-[calc(100%+4rem)] max-w-none md:-mx-12 md:-mt-12 md:mb-10 md:w-[calc(100%+6rem)]" />
              <div className="flex items-center justify-between">
                <span className="font-display text-xs uppercase tracking-widest text-primary">01 / Menu</span>
                <span className="text-sm text-muted-foreground">{selected.note}</span>
              </div>
              <h3 className="mt-4 font-display text-4xl font-black uppercase">FiveM Menu</h3>
              <p className="mt-3 max-w-md text-lg text-muted-foreground">A key for our FiveM menu. Choose how long you want access for.</p>

              <div className="mt-10 grid grid-cols-3 border">
                {plans.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => setPlan(p.id)}
                    className={`p-5 text-left transition ${i > 0 ? "border-l" : ""} ${plan === p.id ? "bg-primary text-foreground" : "hover:bg-muted"}`}
                  >
                    <div className="font-display text-[10px] uppercase tracking-widest opacity-70">{p.label}</div>
                    <div className="mt-2 font-display text-3xl font-black">£{p.price}</div>
                  </button>
                ))}
              </div>

              <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-lg">
                {["ESP", "Aimbot + Silent Aim", "Visuals", "Weapon spawner"].map((f) => (
                  <li key={f} className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-primary" />{f}</li>
                ))}
              </ul>

              <a href={ORDER_LINK} target="_blank" rel="noreferrer" className="mt-10 flex items-center justify-between bg-foreground px-6 py-5 font-display font-bold uppercase tracking-widest text-background transition hover:bg-primary hover:text-foreground">
                <span>Get {selected.label}</span><span>£{selected.price} →</span>
              </a>
            </div>

            {/* GTA */}
            <div className="flex flex-col bg-card p-8 md:col-span-2 md:p-12">
              <img src={bannerGta} alt="Swiss GTA Modded Account" width={1536} height={864} loading="lazy" className="-mx-8 -mt-8 mb-8 w-[calc(100%+4rem)] max-w-none md:-mx-12 md:-mt-12 md:mb-10 md:w-[calc(100%+6rem)]" />
              <span className="font-display text-xs uppercase tracking-widest text-secondary">02 / Service</span>
              <h3 className="mt-4 font-display text-4xl font-black uppercase">GTA Account Mod</h3>
              <p className="mt-3 text-lg text-muted-foreground">We log in and mod your own account. You get it back loaded.</p>
              <div className="mt-10 font-display text-8xl font-black">£7</div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">One-off · per account</p>
              <ul className="mt-10 space-y-3 text-lg">
                {["Cash drop", "Rank boost", "Unlocks", "Your own account kept"].map((f) => (
                  <li key={f} className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-secondary" />{f}</li>
                ))}
              </ul>
              <a href={ORDER_LINK} target="_blank" rel="noreferrer" className="mt-auto flex items-center justify-between border border-secondary px-6 py-5 pt-5 font-display font-bold uppercase tracking-widest text-secondary transition hover:bg-secondary hover:text-secondary-foreground md:mt-10">
                <span>Order</span><span>£7 →</span>
              </a>
            </div>
            {/* CS2 */}
            <div className="grid bg-card md:col-span-5 md:grid-cols-2">
              <img src={bannerCs2} alt="Swiss CS2 Menu" width={1536} height={864} loading="lazy" className="h-full w-full object-cover" />
              <div className="p-8 md:p-12">
                <span className="font-display text-xs uppercase tracking-widest text-accent">03 / Menu</span>
                <h3 className="mt-4 font-display text-4xl font-black uppercase">CS2 Menu</h3>
                <p className="mt-3 text-lg text-muted-foreground">Our Counter-Strike 2 menu. Pick your access length.</p>
                <div className="mt-8 grid grid-cols-2 border sm:grid-cols-4">
                  {cs2Plans.map((p, i) => (
                    <button key={p.id} onClick={() => setCs2(p.id)} className={`p-4 text-left transition ${i > 0 ? "sm:border-l" : ""} ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t sm:border-t-0" : ""} ${cs2 === p.id ? "bg-accent text-accent-foreground" : "hover:bg-muted"}`}>
                      <div className="font-display text-[10px] uppercase tracking-widest opacity-70">{p.label}</div>
                      <div className="mt-2 font-display text-2xl font-black">£{p.price}</div>
                    </button>
                  ))}
                </div>
                <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-lg">
                  {["Aimbot", "Silent Aim", "ESP", "Radar", "Skin changer", "Bhop", "And more"].map((f) => (
                    <li key={f} className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-accent" />{f}</li>
                  ))}
                </ul>
                <a href={ORDER_LINK} target="_blank" rel="noreferrer" className="mt-8 flex items-center justify-between bg-accent px-6 py-5 font-display font-bold uppercase tracking-widest text-accent-foreground transition hover:opacity-90">
                  <span>Get {cs2Sel.label}</span><span>£{cs2Sel.price} →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <h2 className="mb-14 font-display text-5xl font-black uppercase md:text-7xl">How it<br /><span className="text-primary">works</span></h2>
          <div className="grid gap-px border bg-border md:grid-cols-4">
            {steps.map(([t, d], i) => (
              <div key={t} className="group bg-background p-8 transition hover:bg-card">
                <div className="font-display text-6xl font-black outline-text transition group-hover:text-primary">0{i + 1}</div>
                <div className="mt-6 font-display text-xl font-bold uppercase">{t}</div>
                <p className="mt-2 text-lg text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-3">
          <h2 className="font-display text-5xl font-black uppercase">FAQ</h2>
          <div className="md:col-span-2">
            {faqs.map(([q, a]) => (
              <details key={q} className="group border-b py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-bold">
                  {q}<span className="text-2xl text-primary transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-lg text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display text-4xl font-black uppercase text-foreground md:text-6xl">Ready?<br />Hit the Discord.</h2>
          <a href={ORDER_LINK} target="_blank" rel="noreferrer" className="bg-background px-10 py-5 font-display font-bold uppercase tracking-widest text-foreground transition hover:scale-105">
            Join now →
          </a>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:justify-between">
          <span className="font-display font-black tracking-[0.2em] text-foreground">SWISS</span>
          <span>Not affiliated with Rockstar Games or Cfx.re.</span>
          <span>© {new Date().getFullYear()} Swiss</span>
        </div>
      </footer>
    </div>
  );
}
