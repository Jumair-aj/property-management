import React from "react";

export function Services() {
  return (
    <section className="bg-zinc-50 py-20 border-t border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mt-2">
            Everything managed. Perfectly simple.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 divide-zinc-200 divide-x divide-y lg:divide-y-0">
          {/* Service 1 */}
          <div className="p-6 md:p-8 lg:p-6 flex flex-col items-start bg-zinc-50 hover:bg-white transition-all duration-300">
            <div className="text-zinc-800 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 01-7.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-zinc-900 mb-2">Tenant Screening</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">We find and verify the right tenants.</p>
          </div>

          {/* Service 2 */}
          <div className="p-6 md:p-8 lg:p-6 flex flex-col items-start bg-zinc-50 hover:bg-white transition-all duration-300">
            <div className="text-zinc-800 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-zinc-900 mb-2">Move-in Management</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">Smooth onboarding and documentation.</p>
          </div>

          {/* Service 3 */}
          <div className="p-6 md:p-8 lg:p-6 flex flex-col items-start bg-zinc-50 hover:bg-white transition-all duration-300">
            <div className="text-zinc-800 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766l.002-.001a1.56 1.56 0 011.883 1.882l-.001.002c-.14.468-.382.89-.766 1.208l-3.03 2.496M11.42 15.17l-3.83-3.83m-1.56-1.56l2.194-2.194A3.75 3.75 0 002.26 2.26l2.194 2.194m1.56 1.56L9.84 9.84m0 0l-2.194 2.194A3.75 3.75 0 0013.74 16l-2.194-2.194" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-zinc-900 mb-2">Maintenance</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">Repairs, services and regular upkeep.</p>
          </div>

          {/* Service 4 */}
          <div className="p-6 md:p-8 lg:p-6 flex flex-col items-start bg-zinc-50 hover:bg-white transition-all duration-300">
            <div className="text-zinc-800 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.37-9.37a2.25 2.25 0 113.182 3.182l-9.37 9.37a4.5 4.5 0 01-2.25 1.246l-3.81 1.27 1.27-3.81a4.5 4.5 0 011.246-2.25z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-zinc-900 mb-2">Move-out & Renovation</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">Painting, cleaning and damage management.</p>
          </div>

          {/* Service 5 */}
          <div className="p-6 md:p-8 lg:p-6 flex flex-col items-start bg-zinc-50 hover:bg-white transition-all duration-300">
            <div className="text-zinc-800 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.5h8.25m-8.25 3h8.25M3 6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121.25 6.75v10.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 17.25V6.75z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-zinc-900 mb-2">Furnishing (Optional)</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">Quality furniture on flexible rental.</p>
          </div>

          {/* Service 6 */}
          <div className="p-6 md:p-8 lg:p-6 flex flex-col items-start bg-zinc-50 hover:bg-white transition-all duration-300">
            <div className="text-zinc-800 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-zinc-900 mb-2">Rent Collection</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">On-time rent and transparent reporting.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
