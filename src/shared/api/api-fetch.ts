import { CONFIG } from '../model/config';

export function apiFetch(url: string, options: RequestInit) {
  return fetch(`${CONFIG.API_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
