"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const MAX = 3;
const STORAGE_KEY = "dynasty8-compare";

interface CompareContextValue {
  ids: string[];
  toggle: (id: string) => { ok: boolean; message?: string };
  has: (id: string) => boolean;
  clear: () => void;
  remove: (id: string) => void;
}

const CompareContext = createContext<CompareContextValue | null>(null);

export function CompareProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setIds(JSON.parse(raw) as string[]);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }, [ids, ready]);

  const toggle = useCallback(
    (id: string) => {
      if (ids.includes(id)) {
        setIds((prev) => prev.filter((x) => x !== id));
        return { ok: true };
      }
      if (ids.length >= MAX) {
        return { ok: false, message: `Maximum ${MAX} biens à comparer` };
      }
      setIds((prev) => [...prev, id]);
      return { ok: true };
    },
    [ids],
  );

  const has = useCallback((id: string) => ids.includes(id), [ids]);
  const clear = useCallback(() => setIds([]), []);
  const remove = useCallback((id: string) => setIds((prev) => prev.filter((x) => x !== id)), []);

  const value = useMemo(
    () => ({ ids, toggle, has, clear, remove }),
    [ids, toggle, has, clear, remove],
  );

  return <CompareContext.Provider value={value}>{children}</CompareContext.Provider>;
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("useCompare must be used within CompareProvider");
  return ctx;
}
