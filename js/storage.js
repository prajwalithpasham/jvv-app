/* =========================================================
   storage.js
   Thin wrapper around window.localStorage for the JVV
   Chekumukhi prototype. All keys are namespaced under
   "jvv_" so this demo never collides with other sites and
   can be fully reset by the user at any time.

   IMPORTANT (per SRS 8.3 / NFR-09):
   LocalStorage is NOT secure authentication storage. Nothing
   written here should be treated as a real account, a secure
   password store, or an official examination record. It is
   purely a browser-local convenience for this prototype.
   ========================================================= */

const JVVStorage = (function () {
  const PREFIX = 'jvv_';
  const available = (() => {
    try {
      const testKey = PREFIX + '__test__';
      window.localStorage.setItem(testKey, '1');
      window.localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      console.warn('JVVStorage: localStorage unavailable, falling back to memory store.', e);
      return false;
    }
  })();

  // In-memory fallback so the site still works in locked-down browsers
  const memoryStore = {};

  function key(k) { return PREFIX + k; }

  function get(k, fallback = null) {
    try {
      if (!available) {
        return Object.prototype.hasOwnProperty.call(memoryStore, k) ? memoryStore[k] : fallback;
      }
      const raw = window.localStorage.getItem(key(k));
      if (raw === null || raw === undefined) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      console.warn('JVVStorage.get failed for', k, e);
      return fallback;
    }
  }

  function set(k, value) {
    try {
      if (!available) {
        memoryStore[k] = value;
        return true;
      }
      window.localStorage.setItem(key(k), JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn('JVVStorage.set failed for', k, e);
      return false;
    }
  }

  function remove(k) {
    try {
      if (!available) { delete memoryStore[k]; return; }
      window.localStorage.removeItem(key(k));
    } catch (e) {
      console.warn('JVVStorage.remove failed for', k, e);
    }
  }

  function clearAll() {
    try {
      if (!available) { Object.keys(memoryStore).forEach(k => delete memoryStore[k]); return; }
      Object.keys(window.localStorage)
        .filter(k => k.startsWith(PREFIX))
        .forEach(k => window.localStorage.removeItem(k));
    } catch (e) {
      console.warn('JVVStorage.clearAll failed', e);
    }
  }

  return { get, set, remove, clearAll, isAvailable: available };
})();

/* Canonical storage keys used across the prototype */
const JVV_KEYS = {
  STUDENTS: 'students',          // array of demo-registered students
  SESSION: 'session',            // { role: 'student'|'member', email, name }
  ATTEMPT: 'exam_attempt',       // in-progress or submitted exam attempt
  LANG_PREF: 'lang_pref',        // 'en' | 'te' | 'both'
  MEMBERS: 'demo_members'        // seeded demo member credentials
};
