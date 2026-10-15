import Link from "next/link";
import { MobileNavigation } from "@/components/mobile-navigation";

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
          className="whitespace-nowrap text-xl font-bold tracking-[0.01em] text-[var(--color-ink)]"
          aria-label="Törnros Bygg startsida"
        >
          Törnros Bygg
        </Link>

        <nav aria-label="Huvudnavigering" className="hidden items-center gap-7 text-sm font-semibold text-[var(--color-muted)] xl:flex">
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
          className="button button-primary hidden whitespace-nowrap xl:inline-flex"
        >
          Berätta om ditt projekt
        </Link>

        <MobileNavigation items={navigation} />
      </div>
    </header>
  );
}
