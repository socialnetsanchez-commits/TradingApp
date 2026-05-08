import type { Goal } from '../types';

export const maxTradesPerDay = 3;
export const maxRiskPerTrade = 1;
export const maxDailyLoss = -2.5;

export const setups = ['Ruptura y retesteo', 'Liquidity sweep + confirmación', 'Continuación de tendencia', 'Rechazo en zona clave', 'Pullback a estructura'];
export const sessions = ['Londres', 'Nueva York'];
export const dangerousEmotions = ['Frustrado', 'Eufórico', 'Impulsivo', 'Con ganas de recuperar'];

export const planRules = [
  'Máximo 3 operaciones al día',
  'Riesgo máximo por operación: 1% de la cuenta',
  'Pérdida máxima diaria: 2.5% de la cuenta',
  'Si pierdo 2 operaciones seguidas, debo parar el día',
  'No operar durante noticias de alto impacto',
  'No operar si estoy cansado, frustrado, eufórico o con ansiedad',
  'No entrar por FOMO',
  'No mover el stop loss en contra',
  'No aumentar lotaje después de una pérdida',
  'No recuperar pérdidas con operaciones impulsivas',
  'Solo operar setups claros',
];

export const preTradeConditions = [
  'Tengo una zona clara',
  'Tengo confirmación',
  'Tengo stop loss definido',
  'Tengo take profit definido',
  'El ratio riesgo/beneficio es mínimo 1:2',
  'No estoy operando por emoción',
  'La operación cumple mi plan',
];

export const quotes = [
  'No necesito operar. Necesito esperar mi oportunidad.',
  'Una operación perdida no define mi día.',
  'El mercado siempre dará otra oportunidad.',
  'Mi capital es mi herramienta de trabajo.',
  'No persigo el precio.',
  'No recupero pérdidas. Ejecuto mi plan.',
  'La disciplina paga más que la impulsividad.',
  'Mi trabajo no es ganar cada trade. Mi trabajo es ejecutar bien mi plan.',
];

export const initialGoals: Goal[] = [
  { id: 'd1', period: 'Diario', title: 'Cumplir el plan al 100%', progress: 0 },
  { id: 'd2', period: 'Diario', title: 'No más de 3 trades', progress: 0 },
  { id: 'd3', period: 'Diario', title: 'No mover stop loss', progress: 0 },
  { id: 'd4', period: 'Diario', title: 'No operar por emoción', progress: 0 },
  { id: 'd5', period: 'Diario', title: 'Registrar todas las operaciones', progress: 0 },
  { id: 'w1', period: 'Semanal', title: 'Mínimo 4 días siguiendo el plan', progress: 0 },
  { id: 'w2', period: 'Semanal', title: 'Revisar diario de trading', progress: 0 },
  { id: 'w3', period: 'Semanal', title: 'Identificar errores repetidos', progress: 0 },
  { id: 'w4', period: 'Semanal', title: 'Mantener riesgo constante', progress: 0 },
  { id: 'm1', period: 'Mensual', title: 'Mejorar disciplina', progress: 0 },
  { id: 'm2', period: 'Mensual', title: 'Reducir operaciones impulsivas', progress: 0 },
  { id: 'm3', period: 'Mensual', title: 'Mantener drawdown controlado', progress: 0 },
  { id: 'm4', period: 'Mensual', title: 'Aumentar calidad de setups', progress: 0 },
];
