import Link from "next/link";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Resources: ["Documentation", "Blog", "Tutorials", "Community"],
  Company: ["About", "Careers", "Contact", "Press"],
  Legal: ["Privacy", "Terms", "Security", "GDPR"],
};

export function Footer() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-border" aria-hidden="true" />

        <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="group font-heading text-2xl italic text-foreground transition-colors duration-300 hover:text-accent"
            >
              Scholr
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The AI-powered academic assistant that transforms your documents
              into a smarter, interactive study system.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {category}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="group/link relative text-sm text-foreground/70 transition-colors duration-300 hover:text-accent"
                    >
                      <span className="relative">
                        {link}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover/link:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 h-px bg-border" aria-hidden="true" />
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-[12px] text-muted-foreground">
            2026 Scholr. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "GitHub", "Discord"].map((social) => (
              <Link
                key={social}
                href="#"
                className="group/social relative text-[12px] uppercase tracking-[0.12em] text-muted-foreground transition-colors duration-300 hover:text-accent"
              >
                {social}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover/social:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
