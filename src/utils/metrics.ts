import type { DisciplineScore, EmotionalState, Goal, JournalEntry, RiskStatus, Trade } from '../types';
import { dangerousEmotions, maxDailyLoss, maxTradesPerDay } from '../data/tradingPlan';

export const todayKey = () => new Date().toISOString().slice(0, 10);
export const id = () => crypto.randomUUID();
export const formatMoney = (n: number) => new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' }).format(n);

export function tradesToday(trades: Trade[]) {
  const today = todayKey();
  return trades.filter((trade) => trade.date.startsWith(today));
}

export function consecutiveLosses(trades: Trade[]) {
  let count = 0;
  for (const trade of [...trades].sort((a, b) => b.date.localeCompare(a.date))) {
    if (trade.result !== 'Loss') break;
    count += 1;
  }
  return count;
}

export function calculateMetrics(trades: Trade[], goals: Goal[], journals: JournalEntry[], emotionalState: EmotionalState) {
  const todayTrades = tradesToday(trades);
  const pnlToday = todayTrades.reduce((sum, trade) => sum + trade.pnlPercent, 0);
  const pnlMoneyToday = todayTrades.reduce((sum, trade) => sum + trade.pnlMoney, 0);
  const wins = trades.filter((trade) => trade.result === 'Win');
  const losses = trades.filter((trade) => trade.result === 'Loss');
  const totalProfit = wins.reduce((sum, trade) => sum + Math.max(0, trade.pnlMoney), 0);
  const totalLoss = Math.abs(losses.reduce((sum, trade) => sum + Math.min(0, trade.pnlMoney), 0));
  const planCompliance = trades.length ? Math.round((trades.filter((trade) => trade.followedPlan).length / trades.length) * 100) : 100;
  const dailyGoals = goals.filter((goal) => goal.period === 'Diario');
  const goalProgress = Math.round(dailyGoals.reduce((sum, goal) => sum + goal.progress, 0) / Math.max(1, dailyGoals.length));
  const lossStreak = consecutiveLosses(todayTrades);
  const dangerousEmotion = dangerousEmotions.includes(emotionalState.mood);
  const riskReasons = [
    todayTrades.length >= maxTradesPerDay ? 'Máximo de operaciones alcanzado' : '',
    lossStreak >= 2 ? 'Dos pérdidas consecutivas' : '',
    pnlToday <= maxDailyLoss ? 'Límite de pérdida diaria alcanzado' : '',
    dangerousEmotion ? 'Estado emocional peligroso' : '',
    todayTrades.some((trade) => !trade.followedPlan) ? 'Operación fuera del plan' : '',
    todayTrades.some((trade) => trade.riskPercent > 1) ? 'Riesgo superior al 1%' : '',
  ].filter(Boolean);
  const status: RiskStatus = riskReasons.length >= 2 || pnlToday <= maxDailyLoss || lossStreak >= 2 ? 'Peligro' : riskReasons.length ? 'Riesgo' : 'Controlado';
  const discipline = calculateDiscipline(trades, goals, journals, emotionalState, riskReasons);

  return { todayTrades, pnlToday, pnlMoneyToday, wins, losses, winrate: trades.length ? Math.round((wins.length / trades.length) * 100) : 0, profitFactor: totalLoss ? Number((totalProfit / totalLoss).toFixed(2)) : totalProfit ? 99 : 0, totalPnl: trades.reduce((sum, trade) => sum + trade.pnlMoney, 0), planCompliance, goalProgress, lossStreak, riskReasons, status, discipline };
}

export function calculateDiscipline(trades: Trade[], goals: Goal[], journals: JournalEntry[], emotionalState: EmotionalState, riskReasons: string[]): DisciplineScore {
  let value = 85;
  const todayTrades = tradesToday(trades);
  value -= todayTrades.filter((trade) => !trade.followedPlan).length * 15;
  value -= Math.max(0, todayTrades.length - maxTradesPerDay) * 12;
  value -= todayTrades.filter((trade) => trade.riskPercent > 1).length * 10;
  value -= dangerousEmotions.includes(emotionalState.mood) ? 12 : 0;
  value += goals.filter((goal) => goal.period === 'Diario' && goal.progress === 100).length * 3;
  value += journals.some((journal) => journal.date.startsWith(todayKey())) ? 8 : 0;
  return { value: Math.max(0, Math.min(100, Math.round(value))), reasons: riskReasons };
}

export function chartByDay(trades: Trade[]) {
  const map = new Map<string, number>();
  trades.forEach((trade) => map.set(trade.date.slice(0, 10), (map.get(trade.date.slice(0, 10)) ?? 0) + trade.pnlMoney));
  return [...map.entries()].map(([date, pnl]) => ({ date, pnl }));
}

export function countBy<T extends string>(items: T[]) {
  return items.reduce<Record<string, number>>((acc, item) => ({ ...acc, [item]: (acc[item] ?? 0) + 1 }), {});
}
