"use client";
import Link from "next/link";

const links = [
  { href: "#services", label: "Services" },
  { href: "#case",     label: "Example" },
  { href: "#about",    label: "About" },
  { href: "#contact",  label: "Contact" }
];

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur bg-dark/60 border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <a href="#" className="font-heading text-lg font-bold text-light">
          <img src="/logoSite.png" alt="SiteDrill Logo" className="h-8 w-auto" />
        </a>
        <ul className="flex gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-gray-300 hover:text-accent transition-all"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
