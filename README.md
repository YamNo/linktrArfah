# Arfah Link

Halaman link-in-bio pribadi Arfah Putra S, dibangun dengan Next.js dan Tailwind CSS.

## Struktur

- [src/lib/data.ts](src/lib/data.ts) — data profil dan daftar link. Setiap item punya `label`, `description`, `icon`, dan `href`. Item dengan `options` (contoh: "Jual Bot") dirender sebagai tombol yang bisa expand menampilkan beberapa sub-link.
- [src/components/LinkButton.tsx](src/components/LinkButton.tsx) — komponen tombol link, mendukung link biasa dan link dengan sub-opsi.
- [src/components/BrandIcons.tsx](src/components/BrandIcons.tsx) — ikon brand custom (GitHub, Instagram) yang tidak tersedia di lucide-react.
- [src/components/ThemeToggle.tsx](src/components/ThemeToggle.tsx) — toggle tema terang/gelap.
- [src/app/page.tsx](src/app/page.tsx) — halaman utama, merender profil dan daftar link.

## Menambah atau mengubah link

Edit array `LINKS` di [src/lib/data.ts](src/lib/data.ts):

```ts
{
  label: "Nama Link",
  description: "Deskripsi singkat",
  href: "https://contoh.com",
  icon: SomeIcon,
}
```

Untuk link dengan beberapa opsi tujuan (seperti tombol "Jual Bot"), gunakan `options` sebagai pengganti `href`:

```ts
{
  label: "Jual Bot",
  description: "Order bot Discord custom untuk server-mu",
  icon: Bot,
  options: [
    { label: "Order Manual", href: "https://fahps.my.id/produk" },
    { label: "Order Instan", href: "https://lynk.id/fahps/48knvwzn18e1" },
  ],
}
```

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Build produksi

```bash
npm run build
npm run start
```
