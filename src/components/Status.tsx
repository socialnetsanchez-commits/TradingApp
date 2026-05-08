import { motion } from 'framer-motion';
import type { RiskStatus } from '../types';

const styles = { Controlado: 'from-emerald-400 to-lime-300 text-emerald-950', Riesgo: 'from-amber-300 to-orange-400 text-slate-950', Peligro: 'from-red-500 to-rose-400 text-white' };

export function StatusPill({ status }: { status: RiskStatus }) {
  return <span className={`inline-flex rounded-full bg-gradient-to-r px-4 py-2 text-sm font-black ${styles[status]}`}>{status}</span>;
}

export function DisciplineRing({ value }: { value: number }) {
  const circumference = 2 * Math.PI * 54;
  return <div className="relative grid place-items-center">
    <svg className="h-40 w-40 -rotate-90"><circle cx="80" cy="80" r="54" stroke="white" strokeOpacity="0.12" strokeWidth="14" fill="none"/><motion.circle cx="80" cy="80" r="54" stroke="url(#score)" strokeWidth="14" fill="none" strokeLinecap="round" strokeDasharray={circumference} initial={{ strokeDashoffset: circumference }} animate={{ strokeDashoffset: circumference - (value / 100) * circumference }}/><defs><linearGradient id="score"><stop stopColor="#34d399"/><stop offset="1" stopColor="#facc15"/></linearGradient></defs></svg>
    <div className="absolute text-center"><p className="text-4xl font-black">{value}</p><p className="text-xs uppercase tracking-widest text-slate-400">Disciplina</p></div>
  </div>;
}

export function ProgressBar({ value, tone = 'amber' }: { value: number; tone?: 'amber' | 'green' | 'red' }) {
  const color = tone === 'green' ? 'bg-emerald-400' : tone === 'red' ? 'bg-red-400' : 'bg-amber-300';
  return <div className="h-3 rounded-full bg-white/10"><motion.div className={`h-full rounded-full ${color}`} initial={{ width: 0 }} animate={{ width: `${Math.min(100, Math.max(0, value))}%` }}/></div>;
}
