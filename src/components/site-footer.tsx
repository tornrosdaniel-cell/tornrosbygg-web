import Link from "next/link";

const footerGroups = [
  {
    title: "Webbplats",
    links: [
      { label: "Tjänster", href: "/tjanster" },
      { label: "Projekt", href: "/projekt" },
      { label: "Byggtips", href: "/byggtips" },
      { label: "Om oss", href: "/om-oss" },
    ],
  },
  {
    title: "För kunder",
    links: [
      { label: "För fastighetsägare", href: "/fastighetsagare" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-ink)] text-[var(--color-surface)]">
      <div className="container grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-2xl font-bold">
            Törnros Bygg
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-stone-300">
            Byggföretag i Solna och Stockholmsområdet för renovering,
            tillbyggnad och entreprenad.
          </p>
        </div>

        {footerGroups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-stone-300">
              {group.title}
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-stone-100 hover:text-white"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="container border-t border-white/15 py-8">
        <div className="grid gap-8 text-sm text-stone-300 md:grid-cols-[1fr_auto] md:items-end">
          <address className="not-italic leading-7">
            <a href="mailto:hej@tornrosbygg.se">hej@tornrosbygg.se</a>
            <br />
            <a href="tel:+46735224488">0735-224488</a>
            <br />
            Sjövägen 14
            <br />
            169 55 Solna
          </address>
          <p>© {year} Törnros Bygg</p>
        </div>
      </div>
    </footer>
  );
}
