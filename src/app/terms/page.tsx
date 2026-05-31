export default function TermsPage() {
  return (
    <div className="fade-in">

      <div className="max-w-3xl mx-auto px-6">

        <div className="py-16 border-b border-zinc-100 mb-14">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">Legal</span>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mt-3 mb-2">Terms &amp; Conditions</h1>
          <p className="text-sm text-zinc-400 mb-4">Last updated: May 2026</p>
          <p className="text-zinc-500 leading-relaxed text-sm">
            Please read these terms carefully before using the North platform. By continuing to use our services, you agree to be bound by the conditions set out below.
          </p>
        </div>

        <div className="py-16">

          <section className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mb-3">1. Acceptance of Terms</h2>
            <p className="text-zinc-500 leading-relaxed text-sm mb-3">
              By accessing or using the North platform, you agree to be bound by these terms. If you do not agree, please do not use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mb-3">2. Our Services</h2>
            <p className="text-zinc-500 leading-relaxed text-sm mb-3">
              North provides a managed rental platform connecting property owners and tenants in North Bangalore. We act as a property management intermediary and do not hold title to any listed properties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mb-3">3. For Property Owners</h2>
            <p className="text-zinc-500 leading-relaxed text-sm mb-3">
              If you list a property on our platform, the following conditions apply:
            </p>
            <ul className="list-disc list-inside text-zinc-500 text-sm leading-relaxed space-y-1.5">
              <li>By listing a property, you confirm that you are the legal owner or authorised representative</li>
              <li>You agree to provide accurate property information</li>
              <li>North reserves the right to decline or remove listings that do not meet our quality standards</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mb-3">4. For Tenants</h2>
            <p className="text-zinc-500 leading-relaxed text-sm mb-3">
              All tenants are subject to our screening process. Submitting an inquiry does not guarantee tenancy. Rental agreements are entered into directly between the owner and tenant, facilitated by North.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mb-3">5. Fees &amp; Payments</h2>
            <p className="text-zinc-500 leading-relaxed text-sm mb-3">
              North charges zero brokerage to tenants. Owner management fees are agreed separately and outlined in individual owner agreements. All rent payments are processed through North's managed disbursement system.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mb-3">6. Liability</h2>
            <p className="text-zinc-500 leading-relaxed text-sm mb-3">
              North is not liable for any disputes arising between owners and tenants beyond our mediation capacity. We make reasonable efforts to verify listings and tenant credentials but cannot guarantee the accuracy of all third-party information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mb-3">7. Intellectual Property</h2>
            <p className="text-zinc-500 leading-relaxed text-sm mb-3">
              All content on the North platform — including branding, copy, and design — is the property of North and may not be reproduced without written permission.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mb-3">8. Governing Law</h2>
            <p className="text-zinc-500 leading-relaxed text-sm mb-3">
              These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mb-3">9. Contact</h2>
            <p className="text-zinc-500 leading-relaxed text-sm mb-3">
              For questions about these terms, contact us at{" "}
              <a href="mailto:hello@north.in" className="text-zinc-900 underline underline-offset-2">hello@north.in</a>.
            </p>
          </section>

        </div>
      </div>

    </div>
  );
}
