'use client';

import React from 'react';
import { useNava } from '@/hooks/useNava';
import { NavaMessageCard } from './NavaMessageCard';
import { NavaGuidanceMarker } from './NavaGuidanceMarker';
import { NavaObjectiveStrip } from './NavaObjectiveStrip';
import { AnimatePresence } from 'framer-motion';

export function NavaGuide() {
  const { activeMessage, activeObjective, dismissMessage, isMounted } = useNava();

  if (!isMounted) return null;

  // Rule: High-attention messages suppress markers to focus on the modal
  const showMarkers = activeMessage && activeMessage.attentionLevel !== 'high';

  return (
    <>
      {/* Global Objective Strip */}
      {activeObjective && (
        <div className="fixed top-20 left-0 right-0 z-40 pointer-events-none">
          <NavaObjectiveStrip 
            active={true}
            title={activeObjective.label}
            ctaLabel={activeMessage?.ctaLabel}
            ctaHref={activeMessage?.ctaHref}
          />
        </div>
      )}

      {/* Main Interaction Card */}
      <AnimatePresence>
        {activeMessage && (
          <NavaMessageCard
            message={activeMessage}
            onDismiss={() => dismissMessage(activeMessage.id)}
          />
        )}
      </AnimatePresence>

      {/* Guidance Markers / Sparks */}
      {showMarkers && activeMessage.targetSelector && activeMessage.markerType && (
        <NavaGuidanceMarker
          targetSelector={activeMessage.targetSelector}
          markerType={activeMessage.markerType}
          sparkVariant={activeMessage.sparkVariant}
          label={activeMessage.ctaLabel}
        />
      )}
    </>
  );
}
