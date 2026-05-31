
export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-20 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-8 gap-12 mb-16">
        <div className="md:col-span-4">
          <a href="#" className="text-2xl font-extrabold tracking-tight text-zinc-900">
            NORTH<span className="text-zinc-900 font-normal">.</span>
          </a>
          <p className="text-zinc-500 mt-4 max-w-xs leading-relaxed">
            Premium managed rentals in North Bangalore.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="w-8 h-8 rounded-full bg-zinc-50 hover:bg-zinc-100 text-zinc-600 flex items-center justify-center transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-zinc-50 hover:bg-zinc-100 text-zinc-600 flex items-center justify-center transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-zinc-50 hover:bg-zinc-100 text-zinc-600 flex items-center justify-center transition-colors">
              <span className="sr-only">WhatsApp</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="md:col-span-4 flex gap-12">
          <div>
            <h4 className="text-xs font-bold text-zinc-900 tracking-wider uppercase mb-4">Company</h4>
            <ul className="space-y-3 text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-zinc-900 tracking-wider uppercase mb-4">Services</h4>
            <ul className="space-y-3 text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Tenant Screening</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Maintenance</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Renovation</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Furnishing</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
        <span>© 2026 North. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <a href="/privacy" className="hover:text-zinc-600 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-zinc-600 transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
