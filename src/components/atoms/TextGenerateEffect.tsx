'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { TextGenerateEffectProps } from '~/shared/types';

export const TextGenerateEffect = ({ words, className }: TextGenerateEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delayDeletion, setDelayDeletion] = useState(false);

  useEffect(() => {
    let timeoutId: number;

    if (isDeleting) {
      if (delayDeletion) {
        timeoutId = window.setTimeout(() => {
          setDelayDeletion(false);
          setDisplayText((text) => text.slice(0, -1));
          if (displayText.length === 1) {
            setIsDeleting(false);
            setCurrentWordIndex((index) => (index + 1) % words.length);
          }
        }, 1000);
      } else {
        timeoutId = window.setTimeout(() => {
          setDisplayText((text) => text.slice(0, -1));
          if (displayText.length === 1) {
            setIsDeleting(false);
            setCurrentWordIndex((index) => (index + 1) % words.length);
          }
        }, 75);
      }
    } else {
      timeoutId = window.setTimeout(() => {
        setDisplayText(words[currentWordIndex].slice(0, displayText.length + 1));
        if (displayText.length === words[currentWordIndex].length - 1) {
          setIsDeleting(true);
          setDelayDeletion(true);
        }
      }, 100);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [displayText, currentWordIndex, isDeleting, words, delayDeletion]);

  return (
    <div className={className}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {/* Caret */}
        {displayText}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1,
          }}
          className="inline-block w-2"
        >
          <div aria-label="Text Caret">|</div>
        </motion.span>
      </motion.div>
    </div>
  );
};
