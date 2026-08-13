import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Returns false during SSR and the first client render, true after
 * hydration. Lets motion primitives render fully-visible static markup on
 * the server / without JS, then enhance with animation once hydrated —
 * without a setState-in-effect (React 19 lint-clean).
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
