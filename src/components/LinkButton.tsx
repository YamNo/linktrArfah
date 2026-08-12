"use client";

import { useState, type ReactNode } from "react";
import type { LinkItem } from "@/lib/data";

type LinkButtonProps = {
  link: Omit<LinkItem, "icon">;
  icon: ReactNode;
};

export default function LinkButton({ link, icon }: LinkButtonProps) {
  const [open, setOpen] = useState(false);

  if (link.options) {
    return (
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className={`glass group flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 ${
            link.highlight ? "ring-1 ring-accent/30" : ""
          }`}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-hover text-accent transition-transform duration-300 group-hover:scale-105">
            {icon}
          </span>
          <span className="flex-1">
            <span className="block font-display text-sm font-semibold text-foreground">
              {link.label}
            </span>
            <span className="block text-xs text-muted">{link.description}</span>
          </span>
        </button>

        {open && (
          <div className="ml-2 flex flex-col gap-2 border-l border-accent/20 pl-4">
            {link.options.map((opt) => (
              <a
                key={opt.label}
                href={opt.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
              >
                {opt.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={link.href}
      target={link.href?.startsWith("http") ? "_blank" : undefined}
      rel={link.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`glass group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 ${
        link.highlight ? "ring-1 ring-accent/30" : ""
      }`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-hover text-accent transition-transform duration-300 group-hover:scale-105">
        {icon}
      </span>
      <span className="flex-1">
        <span className="block font-display text-sm font-semibold text-foreground">
          {link.label}
        </span>
        <span className="block text-xs text-muted">{link.description}</span>
      </span>
    </a>
  );
}
