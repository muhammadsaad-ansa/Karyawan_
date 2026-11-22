# Karyawan AI — Starter Full-stack

Starter aplikasi Next.js untuk dashboard affiliate marketing dengan Content Curator, CRM, dan skema Supabase.

## Default rancangan
- Admin tunggal (fase awal)
- Publikasi otomatis hanya untuk tugas yang diizinkan dan konten yang lolos pemeriksaan
- Target Lumajang dan sekitarnya
- Shopee Affiliate, TikTok Shop Affiliate, Tokopedia, Lazada, serta jaringan lain sebagai target integrasi
- Enam format: video pendek, gambar promosi, caption/artikel, Story/Reels, video ulasan, live shopping

## Menjalankan lokal
1. Install Node.js 20 atau lebih baru.
2. Salin `.env.example` menjadi `.env.local` dan isi kredensial Supabase.
3. Jalankan `npm install` lalu `npm run dev`.
4. Buka `http://localhost:3000`.
5. Jalankan `supabase/schema.sql` pada SQL Editor project Supabase.

## Status implementasi
- Dashboard navigasi: tersedia.
- Antrean konten sesi browser: tersedia (belum persisten).
- Skema database Supabase: disediakan, perlu dijalankan dan diuji.
- Login, AI generation, scheduler, media upload, CRM persisten: belum diimplementasikan.
- OAuth dan publikasi ke platform: belum diimplementasikan; perlu app review, izin, dan kredensial resmi.
- Konversi dan komisi: harus direkonsiliasi dengan laporan resmi affiliate, bukan disimpulkan dari klik.

## Keamanan sebelum produksi
- Aktifkan autentikasi dan RLS; uji semua policy.
- Jangan pernah menaruh service role key atau token marketplace di browser.
- Simpan token terenkripsi di server/secret manager.
- Buat antrean publikasi dengan audit log, idempotency, rate limit, dan retry.
- Validasi hak cipta, klaim produk, disclosure affiliate, serta kebijakan setiap platform.
- Minta consent sebelum follow-up pribadi; sediakan opt-out.

## Integrasi berikutnya
Buat adapter server-side per platform. Setiap adapter harus mengikuti dokumentasi resmi, scope OAuth minimum, rate limit, dan hak akses akun. Tidak semua program affiliate membuka API untuk semua publisher.
