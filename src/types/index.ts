export type TradeResult = 'Win' | 'Loss' | 'Break Even';
export type Direction = 'Buy' | 'Sell';
export type Emotion = 'Calmado' | 'Ansioso' | 'Frustrado' | 'Eufórico' | 'Cansado' | 'Impulsivo' | 'Con miedo' | 'Con ganas de recuperar';
export type RiskStatus = 'Controlado' | 'Riesgo' | 'Peligro';

export interface Trade {
  id: string;
  date: string;
  asset: string;
  direction: Direction;
  setup: string;
  entry: number;
  stopLoss: number;
  takeProfit: number;
  riskPercent: number;
  result: TradeResult;
  pnlMoney: number;
  pnlPercent: number;
  emotionBefore: Emotion;
  entryReason: string;
  followedPlan: boolean;
  screenshot?: string;
  notes: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  didWell: string;
  didWrong: string;
  improve: string;
  felt: string;
  learned: string;
  rating: number;
}

export interface EmotionalState {
  mood: Emotion;
  timestamp: string;
  pauseUntil?: string;
}

export interface TradingSession {
  id: string;
  start: string;
  end?: string;
  active: boolean;
}

export interface Goal {
  id: string;
  period: 'Diario' | 'Semanal' | 'Mensual';
  title: string;
  progress: number;
}

export interface NotificationSettings {
  enabled: boolean;
  sessionReminderMinutes: number;
  dailyReminderTime: string;
}

export interface DisciplineScore {
  value: number;
  reasons: string[];
}

export interface ChecklistState {
  stable: boolean;
  inPlan: boolean;
  clearEntry: boolean;
  stopLoss: boolean;
  takeProfit: boolean;
  correctRisk: boolean;
  ratio: boolean;
  noRecovery: boolean;
  noBoredom: boolean;
  noFomo: boolean;
}
