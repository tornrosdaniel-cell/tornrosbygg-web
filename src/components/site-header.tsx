import Link from "next/link";

const navigation = [
  { label: "Tjänster", href: "/tjanster" },
  { label: "Projekt", href: "/projekt" },
  { label: "För fastighetsägare", href: "/fastighetsagare" },
  { label: "Byggtips", href: "/byggtips" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[rgba(247,244,239,0.94)] backdrop-blur-sm">
      <div className="container flex min-h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-[0.01em] text-[var(--color-ink)]"
          aria-label="Törnros Bygg startsida"
        >
          Törnros Bygg
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-[var(--color-muted)] lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[var(--color-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/kontakt"
          className="button button-primary hidden whitespace-nowrap lg:inline-flex"
        >
          Berätta om ditt projekt
        </Link>

        <details className="relative lg:hidden">
          <summary className="button button-secondary min-w-24">Meny</summary>
          <div className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(19rem,calc(100vw-2rem))] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[0_16px_50px_rgba(27,26,23,0.14)]">
            <nav className="flex flex-col" aria-label="Mobil navigering">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-[var(--color-border)] px-3 py-3 text-base font-semibold last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/kontakt" className="button button-primary mt-3">
                Berätta om ditt projekt
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
