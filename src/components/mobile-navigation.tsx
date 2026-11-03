"use client";

import Link from "next/link";
import { useRef } from "react";

export function MobileNavigation({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  const menu = useRef<HTMLDetailsElement>(null);

  return (
    <details
      ref={menu}
      className="relative xl:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menu.current?.open) {
          menu.current.open = false;
          menu.current.querySelector("summary")?.focus();
        }
      }}
    >
      <summary className="button button-secondary min-w-24">Meny</summary>
      <nav
        aria-label="Mobil navigering"
        className="absolute right-0 top-[calc(100%+0.75rem)] flex w-[min(19rem,calc(100vw-2rem))] flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[0_16px_50px_rgba(27,26,23,0.14)]"
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a") && menu.current) {
            menu.current.open = false;
          }
        }}
      >
        {items.map((item) => (
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
    </details>
  );
}
