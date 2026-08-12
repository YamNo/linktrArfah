import type { ComponentType } from "react";
import { Mail, MessageCircle, Globe, Coffee, Bot } from "lucide-react";
import { GithubIcon, InstagramIcon } from "@/components/BrandIcons";

type IconType = ComponentType<{ size?: number; className?: string }>;

export const PROFILE = {
  name: "Arfah Putra S",
  role: "Web Developer & Discord Bot Developer",
  avatar: "/profile.jpg",
  bio: "Bikin website seru & Discord bot. Semua link saya ada dibawa.",
};

export type LinkOption = {
  label: string;
  href: string;
};

export type LinkItem = {
  label: string;
  description: string;
  href?: string;
  icon: IconType;
  highlight?: boolean;
  options?: LinkOption[];
};

export const LINKS: LinkItem[] = [
  {
    label: "Portfolio",
    description: "Lihat karya & project lengkap",
    href: "https://fahps.my.id",
    icon: Globe,
    highlight: true,
  },
  {
    label: "Jual Bot",
    description: "Order bot Discord custom untuk server-mu",
    icon: Bot,
    highlight: true,
    options: [
      { label: "Order Manual", href: "https://fahps.my.id/produk" },
      { label: "Order Instan", href: "https://lynk.id/fahps/48knvwzn18e1" },
    ],
  },
  {
    label: "GitHub",
    description: "Kode & repository open source",
    href: "https://github.com/YamNo",
    icon: GithubIcon,
  },
  {
    label: "Instagram",
    description: "@arpa25_",
    href: "https://instagram.com/arpa25_",
    icon: InstagramIcon,
  },
  {
    label: "Discord",
    description: "Chat langsung di Discord",
    href: "https://discord.com/users/816943973486559304",
    icon: MessageCircle,
  },
  {
    label: "Email",
    description: "arfahputra25@gmail.com",
    href: "mailto:arfahputra25@gmail.com",
    icon: Mail,
  },
  {
    label: "Beli Kopi",
    description: "Dukung lewat donasi Sociabuzz",
    href: "https://sociabuzz.com/rapuyyye/donate",
    icon: Coffee,
  },
];
