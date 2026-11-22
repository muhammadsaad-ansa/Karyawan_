import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Karyawan AI — Affiliate Growth Workspace', description: 'Pusat operasi AI untuk riset produk, kurasi konten, affiliate, dan CRM.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="id"><body>{children}</body></html>; }
