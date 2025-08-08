// ===== Repo patch: lägg till dessa filer/ändringar i ditt projekt =====
// Fil: src/store.js
export const STORAGE_KEY = "arkitekt30:user";

export function getUser() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : { email: null, plan: "free", verifiedStudent: false, downloadsToday: 0, downloadsDate: null };
}

export function setUser(update) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(update));
}

export function resetDailyCounter(user) {
  const today = new Date().toISOString().slice(0, 10);
  if (user.downloadsDate !== today) {
    user.downloadsDate = today;
    user.downloadsToday = 0;
  }
  return user;
}

export const DAILY_FREE_LIMIT = 5;