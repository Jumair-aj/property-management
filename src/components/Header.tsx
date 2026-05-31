import Link from "next/link";
import { ListPropertyButton } from "@/components/ListPropertyButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-zinc-900">
          NORTH<span className="text-zinc-900 font-normal">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <Link href="/homes" className="hover:text-zinc-900 transition-colors">Homes</Link>
          <Link href="/owners" className="hover:text-zinc-900 transition-colors">For Owners</Link>
          <Link href="/tenants" className="hover:text-zinc-900 transition-colors">For Tenants</Link>
          <Link href="/contact" className="hover:text-zinc-900 transition-colors">Contact</Link>
          <Link href="/about" className="hover:text-zinc-900 transition-colors">About Us</Link>
        </nav>

        <ListPropertyButton className="bg-zinc-950 text-white text-xs font-semibold px-5 py-3 hover:bg-zinc-800 transition-all active:scale-95 duration-150" />
      </div>
    </header>
  );
}

