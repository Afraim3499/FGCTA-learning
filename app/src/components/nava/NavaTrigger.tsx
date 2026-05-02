'use client';
import { useEffect } from 'react';
import { useNava } from '@/hooks/useNava';

interface NavaTriggerProps {
  messageId: string;
  triggerCondition?: boolean;
}

/**
 * Utility component to trigger a Nava message from a Server Component 
 * or any part of the tree by mounting this component.
 */
export function NavaTrigger({ messageId, triggerCondition = true }: NavaTriggerProps) {
  const { triggerMessage } = useNava();
  
  useEffect(() => {
    if (triggerCondition) {
      triggerMessage(messageId);
    }
  }, [messageId, triggerCondition, triggerMessage]);
  
  return null;
}
