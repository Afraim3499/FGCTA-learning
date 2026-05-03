'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { NavaPose, NavaAttentionLevel } from '@/lib/nava/types';
import { cn } from '@/lib/utils';

interface NavaPoseImageProps {
  pose: NavaPose;
  attentionLevel: NavaAttentionLevel;
  className?: string;
  priority?: boolean;
  alt?: string;
  forceBustOnMobile?: boolean;
}

const POSE_IMAGES: Record<NavaPose, string> = {
  full_body: '/brand/nava/nava-fullbody.png',
  bust_neutral: '/brand/nava/nava-bust.png',
  pointing: '/brand/nava/nava-pointing.png',
  empathy: '/brand/nava/nava-empathy.png',
  celebration: '/brand/nava/nava-celebration.png',
  avatar: '/brand/nava/nava-avatar.png',
  thinking: '/brand/nava/nava-bust.png',
  point_side: '/brand/nava/nava-pointing.png',
};

export const NavaPoseImage: React.FC<NavaPoseImageProps> = ({
  pose,
  attentionLevel,
  className,
  priority = false,
  alt = "Nava",
  forceBustOnMobile = false,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isHighAttention = attentionLevel === 'high';
  
  // Mobile Asset Swap Logic
  const activePose = (forceBustOnMobile && pose === 'full_body') 
    ? 'bust_neutral' 
    : pose;

  const src = POSE_IMAGES[activePose] || POSE_IMAGES.bust_neutral;
  const isFullBody = activePose === 'full_body';

  // Renderer logic for Full Body
  if (isFullBody) {
    return (
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: shouldReduceMotion ? 'tween' : 'spring' }}
        className={cn(
          "flex justify-center items-end pointer-events-none",
          isHighAttention ? [
            "absolute z-20",
            "bottom-0 sm:-bottom-4",
            "w-full sm:w-[45%] sm:-left-12",
            "h-[400px] sm:h-[650px]",
            "hidden sm:flex" // Only show full body on desktop for high attention
          ] : "relative h-full w-full",
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={600}
          height={900}
          className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
          priority={priority}
        />
      </motion.div>
    );
  }

  // Renderer logic for Square Poses / Busts
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className={cn(
        "relative flex justify-center items-center overflow-hidden",
        isHighAttention ? "w-full h-full" : "w-full h-full",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className={cn(
          "h-full w-full object-contain",
          activePose === 'bust_neutral' && "scale-110 translate-y-4" // Visual polish for bust
        )}
        priority={priority}
      />
    </motion.div>
  );
};

