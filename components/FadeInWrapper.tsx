"use client"

import React, { ReactNode, forwardRef, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInWrapperProps {
  children?: ReactNode;
}

const FadeInWrapper = forwardRef<HTMLDivElement, FadeInWrapperProps>(({ children }, ref) => {
  const localRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const [inViewRef, inView] = useInView({ triggerOnce: true });

  // Merge the forwarded ref with the local ref
  const setRefs = (node: HTMLDivElement) => {
    localRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    }
    inViewRef(node);
  };

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={setRefs}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
});

FadeInWrapper.displayName = 'FadeInWrapper';

export default FadeInWrapper;
