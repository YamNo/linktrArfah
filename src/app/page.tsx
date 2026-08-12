import Image from "next/image";
import { PROFILE, LINKS } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";
import LinkButton from "@/components/LinkButton";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center px-6 py-16">
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md">
        <div className="flex flex-col items-center text-center">
          <div className="animate-float-y overflow-hidden rounded-full ring-2 ring-accent/40">
            <Image
              src={PROFILE.avatar}
              alt={PROFILE.name}
              width={96}
              height={96}
              className="h-24 w-24 object-cover"
              priority
            />
          </div>
          <h1 className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground">
            {PROFILE.name}
          </h1>
          <p className="mt-1 text-sm font-medium text-accent">{PROFILE.role}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            {PROFILE.bio}
          </p>
        </div>

        <div className="mt-9 flex flex-col gap-3">
          {LINKS.map((link) => {
            const { icon: Icon, ...linkData } = link;
            return (
              <LinkButton key={link.label} link={linkData} icon={<Icon size={19} />} />
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-muted">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
      </div>
    </main>
  );
}
