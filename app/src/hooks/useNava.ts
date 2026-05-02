'use client';

import { useNavaContext } from '@/components/nava/NavaProvider';

/**
 * Hook to access Nava guidance system.
 * Now consumes global state from NavaProvider.
 */
export function useNava() {
  return useNavaContext();
}
