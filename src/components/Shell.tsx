import { motion } from 'framer-motion';
import { BarChart3, Bell, BookOpen, Brain, ClipboardCheck, Crosshair, Download, Flag, LayoutDashboard, RotateCcw, ShieldAlert, Target } from 'lucide-react';
import type { ReactNode } from 'react';

const nav = [
  ['dashboard', 'Dashboard', LayoutDashboard], ['plan', 'Plan XAUUSD', ClipboardCheck], ['pretrade', 'Pre-trade', ShieldAlert], ['trades', 'Operaciones', Crosshair], ['emotions', 'Control emocional', Brain], ['goals', 'Objetivos', Target], ['stats', 'Estadísticas', BarChart3], ['journal', 'Diario', BookOpen], ['notifications', 'Notificaciones', Bell], ['danger', 'No operar ahora', Flag],
] as const;

interface Props { active: string; setActive: (section: string) => void; children: ReactNode; onExport: () => void; onReset: () => void; }

export function Shell({ active, setActive, children, onExport, onReset }: Props) {
  return <div className="min-h-screen overflow-hidden bg-[#050816] text-slate-100">
    <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_left,#2141ff33,transparent_35%),radial-gradient(circle_at_80%_20%,#d4af3730,transparent_28%),linear-gradient(135deg,#050816,#0a1025_45%,#10101a)]" />
    <aside className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-black/60 p-2 backdrop-blur-xl lg:inset-y-0 lg:left-0 lg:right-auto lg:w-72 lg:border-r lg:border-t-0 lg:p-5">
      <div className="mb-8 hidden lg:block">
        <p className="text-xs uppercase tracking-[0.5em] text-amber-300">XAUUSD</p>
        <h1 className="mt-2 text-3xl font-black">Trade Control Room</h1>
        <p className="mt-2 text-sm text-slate-400">Cockpit de disciplina, riesgo y regulación emocional.</p>
      </div>
      <nav className="grid grid-cols-5 gap-1 lg:grid-cols-1 lg:gap-2">
        {nav.map(([id, label, Icon]) => <button key={id} onClick={() => setActive(id)} className={`group flex items-center justify-center gap-3 rounded-2xl px-3 py-3 text-sm transition lg:justify-start ${active === id ? 'bg-amber-300 text-slate-950 shadow-lg shadow-amber-300/20' : 'text-slate-300 hover:bg-white/10'}`}>
          <Icon size={18} /><span className="hidden lg:inline">{label}</span>
        </button>)}
      </nav>
      <div className="mt-6 hidden gap-2 lg:flex">
        <button onClick={onExport} className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm hover:bg-white/10"><Download className="mx-auto mb-1" size={16}/>Exportar</button>
        <button onClick={onReset} className="flex-1 rounded-2xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200 hover:bg-red-500/20"><RotateCcw className="mx-auto mb-1" size={16}/>Reset</button>
      </div>
    </aside>
    <main className="relative z-10 pb-28 lg:ml-72 lg:pb-0">
      <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        {children}
      </motion.div>
    </main>
  </div>;
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl ${className}`}>{children}</div>;
}

export function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <header className="mb-6"><p className="text-xs font-bold uppercase tracking-[0.45em] text-amber-300">{eyebrow}</p><h2 className="mt-2 text-3xl font-black sm:text-5xl">{title}</h2><p className="mt-3 max-w-3xl text-slate-400">{description}</p></header>;
}
