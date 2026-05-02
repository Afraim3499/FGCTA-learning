'use client';

import React from 'react';
import { useNava } from '@/hooks/useNava';
import { NavaMessageCard } from './NavaMessageCard';
import { NavaGuidanceMarker } from './NavaGuidanceMarker';
import { AnimatePresence } from 'framer-motion';

export const NavaGuide: React.FC = () => {
  const { activeMessage, dismissMessage, muteNava, isMounted } = useNava();

  if (!isMounted || !activeMessage) return null;

  return (
    <>
      <AnimatePresence>
        {activeMessage && (
          <NavaMessageCard
            message={activeMessage}
            onDismiss={dismissMessage}
            onMute={muteNava}
          />
        )}
      </AnimatePresence>

      {activeMessage.targetSelector && activeMessage.markerType && (
        <NavaGuidanceMarker
          targetSelector={activeMessage.targetSelector}
          type={activeMessage.markerType}
          isVisible={!!activeMessage}
        />
      )}
    </>
  );
};
