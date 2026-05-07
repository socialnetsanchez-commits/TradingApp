import { useCallback, useEffect, useRef } from 'react';
import type { NotificationSettings } from '../types';

export function useNotifications(settings: NotificationSettings, sessionActive: boolean) {
  const lastDaily = useRef('');

  const requestPermission = useCallback(async () => {
    if (!('Notification' in window)) return 'unsupported';
    const permission = await Notification.requestPermission();
    return permission;
  }, []);

  const notify = useCallback((title: string, body: string) => {
    if (!settings.enabled || !('Notification' in window) || Notification.permission !== 'granted') return;
    new Notification(title, { body, icon: '/favicon.svg' });
  }, [settings.enabled]);

  useEffect(() => {
    if (!settings.enabled || !sessionActive || settings.sessionReminderMinutes <= 0) return;
    const interval = window.setInterval(() => {
      notify('Trade Control Room', 'Haz una pausa y revisa tu estado emocional.');
    }, settings.sessionReminderMinutes * 60_000);
    return () => window.clearInterval(interval);
  }, [notify, sessionActive, settings.enabled, settings.sessionReminderMinutes]);

  useEffect(() => {
    if (!settings.enabled) return;
    const interval = window.setInterval(() => {
      const now = new Date();
      const key = now.toISOString().slice(0, 10);
      const time = now.toTimeString().slice(0, 5);
      if (time === settings.dailyReminderTime && lastDaily.current !== key) {
        lastDaily.current = key;
        notify('Revisa tu plan', 'Revisa tu plan antes de operar.');
      }
    }, 30_000);
    return () => window.clearInterval(interval);
  }, [notify, settings.dailyReminderTime, settings.enabled]);

  return { requestPermission, notify };
}
