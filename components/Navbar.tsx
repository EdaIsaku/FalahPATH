import Link from "next/link";
import Image from "next/image";
import { navLinks, UserRole } from "@/config/NavLinks";
import AuthButtons from "./AuthButtons";

type NavbarProps = {
  role?: UserRole; //default: guest
};

export default function Navbar({ role = "admin" }: NavbarProps) {
  const links = navLinks[role];
  return (
    <nav className="border-none fixed top-0 left-0 w-full border bg-white shadow-xl/3 shadow-#2f57ef z-10">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group overflow-hidden">
          <Image
            src="/logo.png"
            alt="logo FALAH PATH"
            width={250}
            height={250}
            className="w-16 h-16 object-contain"
          />
          {/* SVG me emrin që shfaqet në hover */}
          <svg
            className="absolute left-[195px] top-1/2 -translate-y-1/2 opacity-0 translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out w-36 h-12"
            viewBox="0 0 300 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2f57ef" />
                <stop offset="100%" stopColor="#b966e7" />
              </linearGradient>
            </defs>
            <text
              x="0"
              y="50%"
              dominantBaseline="middle"
              fill="url(#grad1)"
              className="text-5xl font-black"
            >
              FALAH PATH
            </text>
          </svg>
        </Link>
        {/* Navlinks */}
        <div className="flex items-center gap-10">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-black text-lg group"
            >
              {item.label}
              {/* Efekti i vijës sipër */}
              <span
                className="absolute left-0 top-0 w-full h-px scale-x-0 origin-left transition-transform duration-300
                group-hover:scale-x-100"
                style={{
                  background: "linear-gradient(to right, #2f57ef, #b966e7)",
                }}
              ></span>
              {/* Efekti i vijës poshtë */}
              <span
                className="absolute left-0 bottom-0 w-full h-px scale-x-0 origin-right transition-transform duration-300
        group-hover:scale-x-100"
                style={{
                  background: "linear-gradient(to right, #2f57ef, #b966e7)",
                }}
              ></span>
            </Link>
          ))}
        </div>
        <AuthButtons role="guest" />
      </div>
    </nav>
  );
}
