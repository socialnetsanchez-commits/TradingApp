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


## Deploy en Vercel

El proyecto ya incluye `vercel.json`, `.nvmrc` y scripts preparados para desplegarse como una app Vite estática.

### Opción recomendada: importar desde Git

1. Subir este repositorio a GitHub, GitLab o Bitbucket.
2. En Vercel, elegir **Add New Project** e importar el repositorio.
3. Vercel detectará el framework **Vite**. Si necesitas configurarlo manualmente, usa:
   - **Install Command:** `npm install`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. No se requieren variables de entorno: la app usa `LocalStorage` del navegador y Web Notifications API.
5. Hacer clic en **Deploy**.

### Opción CLI

```bash
npm install
npm run build
npx vercel --prod
```

La configuración de Vercel incluye una rewrite hacia `index.html` para que la app funcione como SPA y headers básicos de seguridad/cache para producción.

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
