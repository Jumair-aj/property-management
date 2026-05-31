export default function PrivacyPage() {
  return (
    <div className="fade-in">

      <div className="max-w-3xl mx-auto px-6">

        <div className="py-16 border-b border-zinc-100 mb-14">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">Legal</span>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mt-3 mb-2">Privacy Policy</h1>
          <p className="text-sm text-zinc-400 mb-4">Last updated: May 2026</p>
          <p className="text-zinc-500 leading-relaxed text-sm">
            We take your privacy seriously. This policy explains how North collects, uses, and protects your personal information.
          </p>
        </div>

        <div className="py-16">

          <section className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mb-3">1. Information We Collect</h2>
            <p className="text-zinc-500 leading-relaxed text-sm mb-3">
              We collect the following information when you interact with our platform:
            </p>
            <ul className="list-disc list-inside text-zinc-500 text-sm leading-relaxed space-y-1.5">
              <li>Name, phone number, and email address when you fill in our forms</li>
              <li>Property details submitted through listing forms</li>
              <li>Usage data such as pages visited and time spent on our platform</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mb-3">2. How We Use Your Information</h2>
            <p className="text-zinc-500 leading-relaxed text-sm mb-3">
              The information we collect is used strictly to operate and improve our services:
            </p>
            <ul className="list-disc list-inside text-zinc-500 text-sm leading-relaxed space-y-1.5">
              <li>To contact you regarding your inquiry or listing</li>
              <li>To match property owners with suitable tenants</li>
              <li>To improve our platform and services</li>
              <li>We do not sell your data to third parties</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mb-3">3. Data Storage &amp; Security</h2>
            <p className="text-zinc-500 leading-relaxed text-sm mb-3">
              We treat the security of your data as a core responsibility:
            </p>
            <ul className="list-disc list-inside text-zinc-500 text-sm leading-relaxed space-y-1.5">
              <li>Your data is stored securely on servers located in India</li>
              <li>We use industry-standard encryption to protect your information</li>
              <li>Access to your data is restricted to authorised North team members only</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mb-3">4. Cookies</h2>
            <p className="text-zinc-500 leading-relaxed text-sm mb-3">
              We use cookies to improve your browsing experience and understand how our platform is used. You can disable cookies in your browser settings, though some features may not work correctly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mb-3">5. Third-Party Services</h2>
            <p className="text-zinc-500 leading-relaxed text-sm mb-3">
              We may share limited data with trusted partners (such as background verification agencies for tenant screening) strictly for the purpose of delivering our services. We do not share your data with third parties for marketing purposes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mb-3">6. Your Rights</h2>
            <p className="text-zinc-500 leading-relaxed text-sm mb-3">
              You may request access to, correction of, or deletion of your personal data at any time by contacting us at{" "}
              <a href="mailto:hello@north.in" className="text-zinc-900 underline underline-offset-2">hello@north.in</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mb-3">7. Contact</h2>
            <p className="text-zinc-500 leading-relaxed text-sm mb-3">
              For any privacy-related questions, email us at{" "}
              <a href="mailto:hello@north.in" className="text-zinc-900 underline underline-offset-2">hello@north.in</a>{" "}
              or write to:
            </p>
            <p className="text-zinc-500 leading-relaxed text-sm">
              12 Church Street, Indiranagar, Bangalore 560008.
            </p>
          </section>

        </div>
      </div>

    </div>
  );
}
