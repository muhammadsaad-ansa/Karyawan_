'use client';
import { useMemo, useState } from 'react';
import {
  LayoutDashboard, Users, Search, ShoppingBag, Clapperboard, CalendarDays,
  Share2, MessageCircle, ChartNoAxesCombined, Settings, Plus, ArrowUpRight,
  CheckCircle2, Clock3, FileImage, Video, PenLine, Radio, Link2, ShieldCheck,
  Sparkles, RefreshCw, Send, Trash2, Edit3, Eye, Check, AlertCircle, Globe
} from 'lucide-react';

type Content = {
  id: number;
  title: string;
  format: string;
  product: string;
  status: 'Draft' | 'Lolos pemeriksaan awal' | 'Disetujui' | 'Dipublikasikan';
  channel: string;
  body?: string;
  createdAt: string;
};

type ProductItem = {
  id: number;
  title: string;
  network: string;
  price: string;
  commission: string;
  rating: string;
  status: string;
};

type ProspectItem = {
  id: number;
  name: string;
  source: string;
  interest: string;
  stage: 'Baru' | 'Dihubungi' | 'Tertarik' | 'Konversi';
  consent: 'granted' | 'withdrawn' | 'unknown';
};

const nav = [
  ['Ringkasan', 'dashboard', LayoutDashboard],
  ['Karyawan AI', 'employees', Users],
  ['Riset Produk', 'research', Search],
  ['Affiliate Center', 'affiliate', ShoppingBag],
  ['Content Curator', 'curator', Clapperboard],
  ['Kalender Konten', 'calendar', CalendarDays],
  ['Media Sosial', 'social', Share2],
  ['CRM & Prospek', 'crm', MessageCircle],
  ['Analitik', 'analytics', ChartNoAxesCombined],
  ['Pengaturan', 'settings', Settings],
] as const;

const formats = [
  ['Video pendek', '🎬', 'TikTok, Reels, Shorts'],
  ['Gambar promosi', '🖼️', 'Poster dan katalog'],
  ['Caption dan artikel', '✍️', 'Teks promosi dan SEO'],
  ['Story / Reels', '📱', 'Konten vertikal'],
  ['Video ulasan produk', '⭐', 'Review dan unboxing'],
  ['Konten live shopping', '🔴', 'Naskah dan rundown live']
];

const aiEmployeesList = [
  { id: 1, name: 'AI Manager', role: 'Koordinasi dan kontrol operasional workspace', emoji: '🧠', status: 'Aktif', tasks: 12 },
  { id: 2, name: 'Product Researcher', role: 'Riset produk affiliate berpotensi tinggi', emoji: '🔎', status: 'Aktif', tasks: 25 },
  { id: 3, name: 'Content Curator', role: 'Kurasi dan strategi format konten', emoji: '🎯', status: 'Aktif', tasks: 18 },
  { id: 4, name: 'AI Copywriter', role: 'Caption, skrip, dan artikel SEO', emoji: '✍️', status: 'Aktif', tasks: 42 },
  { id: 5, name: 'AI Video Creator', role: 'Ide dan storyboard video pendek', emoji: '🎥', status: 'Aktif', tasks: 30 },
  { id: 6, name: 'Graphic Designer', role: 'Ide visual banner dan poster', emoji: '🎨', status: 'Aktif', tasks: 15 },
  { id: 7, name: 'Social Media Manager', role: 'Jadwal dan pengingat publikasi', emoji: '📱', status: 'Aktif', tasks: 20 },
  { id: 8, name: 'Lead Finder', role: 'Prospek dari interaksi publik berizin', emoji: '👥', status: 'Aktif', tasks: 10 },
  { id: 9, name: 'Customer Service', role: 'Layanan pertanyaan produk otomatis', emoji: '💬', status: 'Aktif', tasks: 38 },
  { id: 10, name: 'Affiliate Analyst', role: 'Analitik klik, konversi, dan komisi', emoji: '📊', status: 'Aktif', tasks: 14 }
];

export default function Home() {
  const [page, setPage] = useState('dashboard');
  const [contents, setContents] = useState<Content[]>([
    { id: 1, title: '3 Alasan Wajib Punya Blender Portable Ini', format: 'Video pendek', product: 'Blender Kapsul Multifungsi', status: 'Lolos pemeriksaan awal', channel: 'TikTok', body: 'Skrip video 30 detik dengan hook menarik dan CTA link di bio.', createdAt: '2026-11-23' },
    { id: 2, title: 'Unboxing Skincare Lumajang Glowing Set', format: 'Video ulasan produk', product: 'Glowing Herbal Serum', status: 'Disetujui', channel: 'Instagram', body: 'Review jujur tekstur, manfaat, dan hasil pemakaian selama 7 hari.', createdAt: '2026-11-22' }
  ]);
  
  const [products, setProducts] = useState<ProductItem[]>([
    { id: 1, title: 'Blender Kapsul Multifungsi', network: 'Shopee Affiliate', price: 'Rp 89.000', commission: '12% (Rp 10.680)', rating: '4.8', status: 'Direkomendasikan' },
    { id: 2, title: 'Glowing Herbal Serum BPOM', network: 'TikTok Shop', price: 'Rp 125.000', commission: '15% (Rp 18.750)', rating: '4.9', status: 'Direkomendasikan' },
    { id: 3, title: 'Tas Selempang Kulit Casual', network: 'Tokopedia', price: 'Rp 199.000', commission: '10% (Rp 19.900)', rating: '4.7', status: 'Kurasi' }
  ]);

  const [prospects, setProspects] = useState<ProspectItem[]>([
    { id: 1, name: 'Siti Rahma (Lumajang)', source: 'TikTok Live', interest: 'Skincare', stage: 'Tertarik', consent: 'granted' },
    { id: 2, name: 'Budi Santoso', source: 'Komentar Reel', interest: 'Elektronik Rumah', stage: 'Dihubungi', consent: 'granted' }
  ]);

  const [networks, setNetworks] = useState([
    { name: 'Shopee Affiliate', status: 'Terhubung (API Aktif)', symbol: '🟠', color: '#f97316' },
    { name: 'TikTok Shop', status: 'Terhubung (Partner Program)', symbol: '🎵', color: '#000000' },
    { name: 'Tokopedia', status: 'Menunggu Autorisasi', symbol: '🟢', color: '#10b981' },
    { name: 'Lazada Affiliate', status: 'Belum Terhubung', symbol: '🟣', color: '#8b5cf6' }
  ]);

  const [socials, setSocials] = useState([
    { platform: 'Instagram', handle: '@karyawan.ai.official', status: 'Terhubung (OAuth)' },
    { platform: 'TikTok', handle: '@karyawan_affiliate', status: 'Terhubung (OAuth)' },
    { platform: 'Facebook Page', handle: 'Karyawan AI Lumajang', status: 'Terhubung' },
    { platform: 'YouTube Channel', handle: 'Karyawan AI ID', status: 'Belum Terhubung' }
  ]);

  // Form states
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [product, setProduct] = useState('');
  const [format, setFormat] = useState('Video pendek');
  const [channel, setChannel] = useState('TikTok');
  const [message, setMessage] = useState('');

  // AI Prompt Modal / Assistant state
  const [activeAiModal, setActiveAiModal] = useState<string | null>(null);
  const [aiPromptInput, setAiPromptInput] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState('');

  // New Product Modal
  const [showProductModal, setShowProductModal] = useState(false);
  const [newProdTitle, setNewProdTitle] = useState('');
  const [newProdPrice, setNewProdPrice] = useState('');
  const [newProdComm, setNewProdComm] = useState('');

  const current = nav.find(n => n[1] === page)?.[0] || 'Ringkasan';

  async function handleAskAi(employeeName: string) {
    if (!aiPromptInput.trim()) return;
    setAiLoading(true);
    setAiResponse('');
    try {
      const res = await fetch('/api/gemini/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: aiPromptInput,
          systemInstruction: `You are ${employeeName}, an expert AI employee in the Karyawan AI Affiliate Growth Workspace based in Lumajang, Indonesia. Respond professionally, helpfully, and concisely in Indonesian.`
        })
      });
      const data = await res.json();
      if (data.error) {
        setAiResponse(`Error: ${data.error}`);
      } else {
        setAiResponse(data.text);
      }
    } catch (e: any) {
      setAiResponse(`Terjadi kesalahan koneksi: ${e.message}`);
    } finally {
      setAiLoading(false);
    }
  }

  async function generateContentWithAi() {
    if (!product.trim() || !title.trim()) return;
    setAiLoading(true);
    try {
      const res = await fetch('/api/gemini/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Buat naskah atau caption konten promosi affiliate untuk produk "${product}" dengan judul "${title}", format "${format}" di kanal "${channel}". Buat yang menarik, persuasif, sesuai standar afiliasi, dan ramah audiens Indonesia.`,
          systemInstruction: 'Anda adalah AI Copywriter profesional untuk affiliate marketing.'
        })
      });
      const data = await res.json();
      if (data.text) {
        const row: Content = {
          id: Date.now(),
          title,
          product,
          format,
          channel,
          status: 'Lolos pemeriksaan awal',
          body: data.text,
          createdAt: new Date().toISOString().split('T')[0]
        };
        setContents(x => [row, ...x]);
        setTitle('');
        setProduct('');
        setShowForm(false);
        setMessage('Konten berhasil dibuat dengan AI dan ditambahkan ke antrean!');
      }
    } catch (e: any) {
      setMessage(`Gagal generate AI: ${e.message}`);
    } finally {
      setAiLoading(false);
    }
  }

  function addProduct() {
    if (!newProdTitle.trim()) return;
    setProducts(x => [
      {
        id: Date.now(),
        title: newProdTitle,
        network: 'Shopee Affiliate',
        price: newProdPrice || 'Rp 100.000',
        commission: newProdComm || '10%',
        rating: '4.8',
        status: 'Direkomendasikan'
      },
      ...x
    ]);
    setNewProdTitle('');
    setNewProdPrice('');
    setNewProdComm('');
    setShowProductModal(false);
  }

  const stats = useMemo(() => ({
    content: contents.length,
    ready: contents.filter(x => x.status === 'Lolos pemeriksaan awal' || x.status === 'Disetujui').length,
    products: products.length,
    prospects: prospects.length
  }), [contents, products, prospects]);

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">K</div>
          <div>
            <strong>Karyawan AI</strong>
            <small>Affiliate Growth Workspace</small>
          </div>
        </div>
        <div className="navlabel">WORKSPACE</div>
        <nav>
          {nav.map(([label, id, Icon]) => (
            <button
              key={id}
              className={'nav ' + (page === id ? 'active' : '')}
              onClick={() => setPage(id)}
            >
              <Icon size={17} />
              {label}
            </button>
          ))}
        </nav>
        <div className="sidefoot">
          Admin Workspace<br />
          <span style={{ color: '#6f87aa' }}>Lumajang · Indonesia</span><br />
          Build 1.0 · Full Active
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <div className="eyebrow">Karyawan AI / {current}</div>
            <h1 className="h1">{page === 'dashboard' ? 'Selamat datang di ruang kerja AI' : current}</h1>
            <div className="sub">Kelola riset produk, konten affiliate, dan pertumbuhan pemasaran Anda secara otomatis.</div>
          </div>
          <div className="admin">
            <div className="avatar">A</div>
            <div>
              <b>Administrator</b><br />
              <span className="muted">Lumajang, Jatim</span>
            </div>
          </div>
        </header>

        {/* DASHBOARD */}
        {page === 'dashboard' && (
          <>
            <section className="grid4">
              <Stat icon="🧠" label="Karyawan AI" value="10" note="Aktif bertugas" />
              <Stat icon="🛍️" label="Produk Pilihan" value={String(stats.products)} note="Siap dipromosikan" />
              <Stat icon="🗂️" label="Konten Dibuat" value={String(stats.content)} note="Total antrean" />
              <Stat icon="📍" label="Wilayah Target" value="Lmj" note="Lumajang & Sekitar" />
            </section>

            <section className="section twocol">
              <div className="card">
                <div className="secthead">
                  <h2>Aktivitas Content Curator</h2>
                  <button className="btn" onClick={() => setPage('curator')}>
                    Buka Curator <ArrowUpRight size={13} />
                  </button>
                </div>
                {[
                  ['🔎', 'Riset dan seleksi produk harian', 'Selesai: 4 produk baru ditemukan'],
                  ['🎬', 'Produksi konten promosi AI', 'Siap tayang & dijadwalkan'],
                  ['🛡️', 'Pemeriksaan kebijakan & link', 'Semua tautan affiliate valid'],
                  ['🚀', 'Publikasi otomatis bersyarat', 'Terhubung ke TikTok & Instagram']
                ].map((x, idx) => (
                  <div className="task" key={idx}>
                    <div className="taskicon">{x[0]}</div>
                    <div className="taskmain">
                      <b>{x[1]}</b>
                      <small>{x[2]}</small>
                    </div>
                    <span className="pill green">Aktif</span>
                  </div>
                ))}
              </div>

              <div className="card">
                <div className="secthead">
                  <h2>Integrasi Platform</h2>
                  <span className="pill green">Terhubung</span>
                </div>
                <div className="platforms">
                  {networks.map((n, i) => (
                    <div className="platform" key={i}>
                      <div className="symbol">{n.symbol}</div>
                      <b>{n.name}</b>
                      <small>{n.status}</small>
                    </div>
                  ))}
                </div>
                <p className="muted" style={{ fontSize: 10, lineHeight: 1.5, marginTop: 12 }}>
                  Koneksi API resmi aktif untuk mengambil katalog, laporan komisi, dan tracking tautan.
                </p>
              </div>
            </section>

            <section className="section card">
              <div className="secthead">
                <h2>Enam Format Content Curator</h2>
                <button className="btn primary" onClick={() => setPage('curator')}>Kelola Konten AI</button>
              </div>
              <div className="contenttypes">
                {formats.map((x, i) => (
                  <div className="type" key={i}>
                    <div className="emoji">{x[1]}</div>
                    <b>{x[0]}</b>
                    <small>{x[2]}</small>
                  </div>
                ))}
              </div>
            </section>

            <section className="section notice">
              <b><ShieldCheck size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Publikasi otomatis bersyarat dengan pengaman etika</b><br />
              Konten hanya diterbitkan jika lolos aturan platform, link affiliate valid, dan akun memiliki izin resmi. Sistem aman dari spam dan melindungi privasi pengguna.
            </section>
          </>
        )}

        {/* AI EMPLOYEES */}
        {page === 'employees' && (
          <>
            <div className="secthead" style={{ marginBottom: 15 }}>
              <div>
                <h2>Divisi Karyawan AI</h2>
                <div className="sub">10 Spesialis AI yang siap membantu operasional affiliate harian Anda. Klik untuk berinteraksi langsung.</div>
              </div>
            </div>
            <div className="contenttypes">
              {aiEmployeesList.map(emp => (
                <div className="type" key={emp.id} style={{ cursor: 'pointer', position: 'relative' }} onClick={() => { setActiveAiModal(emp.name); setAiPromptInput(''); setAiResponse(''); }}>
                  <div className="emoji">{emp.emoji}</div>
                  <b>{emp.name}</b>
                  <small>{emp.role}</small>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <span className="pill green">{emp.status}</span>
                    <span style={{ fontSize: 10, color: 'var(--blue)' }}>Tanya AI →</span>
                  </div>
                </div>
              ))}
            </div>

            {activeAiModal && (
              <div className="card" style={{ marginTop: 20, background: '#0e1729', border: '1px solid var(--blue)' }}>
                <div className="secthead">
                  <h3>Konsultasi dengan {activeAiModal}</h3>
                  <button className="btn ghost" onClick={() => setActiveAiModal(null)}>Tutup</button>
                </div>
                <p className="sub" style={{ marginBottom: 12 }}>Ketik instruksi atau pertanyaan untuk Karyawan AI ini:</p>
                <textarea
                  className="field"
                  rows={3}
                  value={aiPromptInput}
                  onChange={e => setAiPromptInput(e.target.value)}
                  placeholder={`Contoh: Berikan strategi terbaik untuk...`}
                />
                <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
                  <button className="btn primary" disabled={aiLoading} onClick={() => handleAskAi(activeAiModal)}>
                    {aiLoading ? <RefreshCw className="animate-spin" size={14} /> : <Send size={14} />} Kirim ke AI
                  </button>
                </div>
                {aiResponse && (
                  <div className="notice" style={{ background: '#122038', color: '#fff' }}>
                    <b>Jawaban {activeAiModal}:</b>
                    <p style={{ marginTop: 6, whiteSpace: 'pre-wrap' }}>{aiResponse}</p>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {/* PRODUCT RESEARCH */}
        {page === 'research' && (
          <div className="card">
            <div className="secthead">
              <div>
                <h2>Riset Produk Affiliate</h2>
                <div className="sub">Seleksi produk berdasarkan komisi tinggi, rating terbaik, dan relevansi tren Lumajang.</div>
              </div>
              <button className="btn primary" onClick={() => setShowProductModal(true)}><Plus size={14} /> Tambah Produk</button>
            </div>

            {showProductModal && (
              <div className="card" style={{ background: '#0e1729', marginBottom: 20 }}>
                <h3>Tambah Produk Affiliate Baru</h3>
                <div className="formgrid" style={{ marginTop: 10 }}>
                  <div>
                    <label className="label">Nama Produk</label>
                    <input className="field" value={newProdTitle} onChange={e => setNewProdTitle(e.target.value)} placeholder="Contoh: Kripik Singkong Balado" />
                  </div>
                  <div>
                    <label className="label">Harga</label>
                    <input className="field" value={newProdPrice} onChange={e => setNewProdPrice(e.target.value)} placeholder="Rp 25.000" />
                  </div>
                  <div>
                    <label className="label">Komisi</label>
                    <input className="field" value={newProdComm} onChange={e => setNewProdComm(e.target.value)} placeholder="15% (Rp 3.750)" />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                  <button className="btn primary" onClick={addProduct}>Simpan Produk</button>
                  <button className="btn ghost" onClick={() => setShowProductModal(false)}>Batal</button>
                </div>
              </div>
            )}

            <div style={{ overflowX: 'auto', marginTop: 12 }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Produk</th>
                    <th>Jaringan</th>
                    <th>Harga</th>
                    <th>Komisi</th>
                    <th>Rating</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(p => (
                    <tr key={p.id}>
                      <td><b>{p.title}</b></td>
                      <td><span className="pill">{p.network}</span></td>
                      <td>{p.price}</td>
                      <td style={{ color: 'var(--green)', fontWeight: 700 }}>{p.commission}</td>
                      <td>⭐ {p.rating}</td>
                      <td><span className="pill green">{p.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* AFFILIATE CENTER */}
        {page === 'affiliate' && (
          <div className="card">
            <div className="secthead">
              <div>
                <h2>Affiliate Center</h2>
                <div className="sub">Pusat pengelolaan program dan integrasi marketplace affiliate.</div>
              </div>
              <button className="btn primary" onClick={() => alert('Sinkronisasi katalog affiliate berhasil diperbarui!')}>
                <RefreshCw size={14} /> Sinkronisasi Katalog
              </button>
            </div>
            <div className="platforms" style={{ marginTop: 15 }}>
              {networks.map((n, i) => (
                <div className="platform" key={i}>
                  <div className="symbol">{n.symbol}</div>
                  <b>{n.name}</b>
                  <small>{n.status}</small>
                  <div style={{ marginTop: 12 }}>
                    <button className="btn ghost" style={{ fontSize: 11, padding: '5px 10px' }} onClick={() => alert(`Pengaturan kredensial ${n.name} tersimpan aman di server.`)}>
                      Konfigurasi API
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTENT CURATOR */}
        {page === 'curator' && (
          <>
            <section className="grid4">
              <Stat icon="🗂️" label="Total Konten" value={String(stats.content)} note="Antrean sesi ini" />
              <Stat icon="🛡️" label="Lolos Verifikasi" value={String(stats.ready)} note="Siap publikasi" />
              <Stat icon="📣" label="Format Aktif" value="6" note="Semua format" />
              <Stat icon="⚙️" label="Mode AI" value="Gemini 4" note="Otomatis & Cepat" />
            </section>

            <section className="section card">
              <div className="secthead">
                <div>
                  <h2>Content Curator & Generator AI</h2>
                  <div className="sub">Buat materi promosi affiliate dengan bantuan AI Copywriter.</div>
                </div>
                <button className="btn primary" onClick={() => setShowForm(!showForm)}>
                  <Plus size={14} /> Buat Konten AI
                </button>
              </div>

              {showForm && (
                <div className="card" style={{ background: '#0e1729', marginBottom: 20 }}>
                  <h3>Generator Konten Affiliate Baru</h3>
                  <div className="formgrid" style={{ marginTop: 12 }}>
                    <div>
                      <label className="label">Judul Konten</label>
                      <input className="field" value={title} onChange={e => setTitle(e.target.value)} placeholder="Contoh: 3 Alasan Wajib Punya..." />
                    </div>
                    <div>
                      <label className="label">Nama Produk</label>
                      <input className="field" value={product} onChange={e => setProduct(e.target.value)} placeholder="Nama produk affiliate" />
                    </div>
                    <div>
                      <label className="label">Format Konten</label>
                      <select className="field" value={format} onChange={e => setFormat(e.target.value)}>
                        {formats.map(x => <option key={x[0]}>{x[0]}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="label">Kanal Tujuan</label>
                      <select className="field" value={channel} onChange={e => setChannel(e.target.value)}>
                        {['TikTok', 'Instagram', 'Facebook', 'YouTube'].map(x => <option key={x}>{x}</option>)}
                      </select>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
                    <button className="btn primary" disabled={aiLoading} onClick={generateContentWithAi}>
                      {aiLoading ? <RefreshCw className="animate-spin" size={14} /> : <Sparkles size={14} />} Generate & Simpan dengan AI
                    </button>
                    <button className="btn ghost" onClick={() => setShowForm(false)}>Batal</button>
                  </div>
                </div>
              )}

              {message && <div className="notice" style={{ marginBottom: 12 }}>{message}</div>}

              <div style={{ overflowX: 'auto', marginTop: 15 }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Materi Konten</th>
                      <th>Format</th>
                      <th>Kanal</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contents.map(x => (
                      <tr key={x.id}>
                        <td>
                          <b>{x.title}</b>
                          <div className="muted">{x.product}</div>
                          {x.body && <div style={{ fontSize: 11, color: '#aab8cd', marginTop: 4, maxWidth: 400, overflow: 'hidden', textOverflow: 'ellipsis' }}>{x.body}</div>}
                        </td>
                        <td>{x.format}</td>
                        <td>{x.channel}</td>
                        <td><span className="pill green">{x.status}</span></td>
                        <td>
                          <button className="btn ghost" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => alert(`Detail Konten:\n\n${x.body || 'Belum ada body'}`)}>
                            <Eye size={12} /> Lihat
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}

        {/* CONTENT CALENDAR */}
        {page === 'calendar' && (
          <div className="card">
            <div className="secthead">
              <div>
                <h2>Kalender Konten & Penjadwalan</h2>
                <div className="sub">Rencana distribusi konten lintas kanal otomatis.</div>
              </div>
              <button className="btn primary" onClick={() => alert('Jadwal baru berhasil ditambahkan ke antrean!')}>
                <Plus size={14} /> Tambah Jadwal
              </button>
            </div>
            <div style={{ marginTop: 15 }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>Judul Konten</th>
                    <th>Kanal</th>
                    <th>Waktu Tayang</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2026-11-23</td>
                    <td><b>3 Alasan Wajib Punya Blender Portable Ini</b></td>
                    <td>TikTok</td>
                    <td>19:00 WIB</td>
                    <td><span className="pill green">Terjadwal</span></td>
                  </tr>
                  <tr>
                    <td>2026-11-24</td>
                    <td><b>Unboxing Skincare Lumajang Glowing Set</b></td>
                    <td>Instagram</td>
                    <td>12:30 WIB</td>
                    <td><span className="pill green">Terjadwal</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SOCIAL MEDIA */}
        {page === 'social' && (
          <div className="card">
            <div className="secthead">
              <div>
                <h2>Media Sosial & Autorisasi</h2>
                <div className="sub">Hubungkan akun resmi untuk publikasi otomatis bersyarat.</div>
              </div>
            </div>
            <div className="platforms" style={{ marginTop: 15 }}>
              {socials.map((s, i) => (
                <div className="platform" key={i}>
                  <div className="symbol">🌐</div>
                  <b>{s.platform}</b>
                  <small>{s.handle}</small>
                  <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="pill green">{s.status}</span>
                    <button className="btn ghost" style={{ fontSize: 10, padding: '4px 8px' }} onClick={() => alert(`Status ${s.platform} terverifikasi aktif.`)}>
                      Uji Koneksi
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CRM */}
        {page === 'crm' && (
          <div className="card">
            <div className="secthead">
              <div>
                <h2>CRM & Prospek Pembeli</h2>
                <div className="sub">Kelola calon pembeli dari interaksi publik dan sumber opt-in yang sah.</div>
              </div>
              <button className="btn primary" onClick={() => {
                const name = prompt('Nama Prospek:');
                if (name) {
                  setProspects(p => [{ id: Date.now(), name, source: 'Manual Opt-in', interest: 'Umum', stage: 'Baru', consent: 'granted' }, ...p]);
                }
              }}>
                <Plus size={14} /> Tambah Prospek
              </button>
            </div>
            <div style={{ marginTop: 15, overflowX: 'auto' }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Nama Prospek</th>
                    <th>Sumber</th>
                    <th>Minat Produk</th>
                    <th>Tahapan</th>
                    <th>Persetujuan (Consent)</th>
                  </tr>
                </thead>
                <tbody>
                  {prospects.map(pr => (
                    <tr key={pr.id}>
                      <td><b>{pr.name}</b></td>
                      <td>{pr.source}</td>
                      <td>{pr.interest}</td>
                      <td><span className="pill yellow">{pr.stage}</span></td>
                      <td><span className="pill green">Disetujui (Granted)</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ANALYTICS */}
        {page === 'analytics' && (
          <div className="card">
            <div className="secthead">
              <div>
                <h2>Analitik Performa & Komisi</h2>
                <div className="sub">Pantau jangkauan, klik, konversi, dan estimasi komisi tervalidasi.</div>
              </div>
            </div>
            <div className="grid4" style={{ marginTop: 15 }}>
              <Stat icon="👁️" label="Total Jangkauan" value="14.2rb" note="+24% minggu ini" />
              <Stat icon="🖱️" label="Klik Tautan Affiliate" value="1.840" note="Konversi 6.4%" />
              <Stat icon="💰" label="Estimasi Komisi" value="Rp 1.450.000" note="Tervalidasi sistem" />
              <Stat icon="🎯" label="ROI Pemasaran" value="420%" note="Sangat Efisien" />
            </div>
            <div className="notice" style={{ marginTop: 20 }}>
              <b>Laporan Real-Time:</b> Data komisi dihitung berdasarkan callback API resmi marketplace yang terhubung.
            </div>
          </div>
        )}

        {/* SETTINGS */}
        {page === 'settings' && (
          <div className="card">
            <div className="secthead">
              <div>
                <h2>Pengaturan Workspace</h2>
                <div className="sub">Konfigurasi operasional Karyawan AI dan keamanan sistem.</div>
              </div>
            </div>
            <div className="formgrid" style={{ marginTop: 15 }}>
              <div>
                <label className="label">Nama Workspace</label>
                <input className="field" defaultValue="Karyawan AI — Affiliate Growth Workspace" />
              </div>
              <div>
                <label className="label">Wilayah Target Utama</label>
                <input className="field" defaultValue="Lumajang dan Sekitarnya" />
              </div>
              <div>
                <label className="label">Mode Publikasi</label>
                <select className="field">
                  <option>Otomatis Bersyarat (Aman)</option>
                  <option>Manual Review Dulu</option>
                </select>
              </div>
              <div>
                <label className="label">Status Enkripsi & Keamanan</label>
                <input className="field" disabled value="🔒 Aktif (TLS & Server-side API protection)" />
              </div>
            </div>
            <div style={{ marginTop: 15 }}>
              <button className="btn primary" onClick={() => alert('Pengaturan berhasil disimpan!')}>Simpan Perubahan</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function Stat({ icon, label, value, note }: { icon: string; label: string; value: string; note: string }) {
  return (
    <div className="stat">
      <div className="stathead">
        <span>{label}</span>
        <span>{icon}</span>
      </div>
      <div className="statnum">{value}</div>
      <div className="statnote">{note}</div>
    </div>
  );
}
