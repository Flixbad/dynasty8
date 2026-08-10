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

const STORAGE_KEY = "dynasty8-recent";
const MAX = 8;

interface RecentContextValue {
  ids: string[];
  push: (id: string) => void;
}

const RecentContext = createContext<RecentContextValue | null>(null);

export function RecentProvider({ children }: { children: ReactNode }) {
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

  const push = useCallback((id: string) => {
    setIds((prev) => [id, ...prev.filter((x) => x !== id)].slice(0, MAX));
  }, []);

  const value = useMemo(() => ({ ids, push }), [ids, push]);

  return <RecentContext.Provider value={value}>{children}</RecentContext.Provider>;
}

export function useRecent() {
  const ctx = useContext(RecentContext);
  if (!ctx) throw new Error("useRecent must be used within RecentProvider");
  return ctx;
}
