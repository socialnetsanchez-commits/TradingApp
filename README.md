# Trade Control Room

App web premium para disciplina de trading en XAUUSD. Funciona como centro de control emocional, plan de trading, registro, objetivos, bloqueo psicológico, estadísticas, diario y notificaciones del navegador.

## Stack

- React + TypeScript con Vite
- TailwindCSS
- Framer Motion
- Recharts
- LocalStorage
- Web Notifications API

## Instalación

```bash
npm install
npm run dev
```

Abrir la URL local mostrada por Vite. Los datos se guardan localmente en el navegador.

## Build de producción

```bash
npm run build
npm run preview
```

## Funciones principales

- Dashboard con estado Controlado/Riesgo/Peligro, score de disciplina y métricas del día.
- Plan predefinido para XAUUSD con reglas, sesiones permitidas, setups y condiciones obligatorias.
- Checklist pre-trade obligatorio con alerta fuerte si una respuesta es negativa.
- Registro de operaciones con fecha automática, riesgo, resultado, emoción, motivo, captura/enlace y notas.
- Control emocional con temporizador de pausa y ejercicio visual de respiración.
- Modal STOP TRADING ante sobreoperación, dos pérdidas seguidas, pérdida diaria límite, emoción peligrosa o operación fuera del plan.
- Objetivos diarios, semanales y mensuales con progreso visual.
- Estadísticas con gráficos de PnL, emociones, setups y ranking de errores.
- Diario de trading con resumen automático básico.
- Panel de notificaciones configurables.
- Exportación JSON y reseteo con confirmación.
