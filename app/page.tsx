import Hero      from "../components/Hero";
import Services  from "../components/Services";
import CaseStudy from "../components/CaseStudy";
import About     from "../components/About";
import Contact   from "../components/Contact";
import Footer    from "../components/Footer";
import NavBar    from "../components/NavBar";

export const metadata = {
  title:       "Websites That Don’t Suck | Youssef El Ramy",
  description: "Fast, clean websites for home‑service businesses."
};

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <Hero />
        <Services />
        <CaseStudy />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
