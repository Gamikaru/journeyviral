import { LucideIcon } from 'lucide-react';

export interface AnimationProps {
  isVisible: boolean;
  shouldAnimate: boolean;
  isLowPerf?: boolean;
}

export interface Message {
  id: number;
  text: string;
  type: 'setup' | 'problem' | 'bridge' | 'final';
  delay: number;
}

export interface ChatBubbleProps extends AnimationProps {
  text: string;
  type: 'setup' | 'problem' | 'bridge';
  onAnimationComplete?: () => void;
}

export interface FloatingTextProps extends AnimationProps {
  text: string;
}

export interface TypingIndicatorProps extends AnimationProps {}

export interface TransformSectionProps {
  className?: string;
  'aria-label'?: string;
}

export const ANIMATION_CONSTANTS = {
  STAGGER_DELAY: 0.15,
  CHILDREN_DELAY: 0.1,
  TRANSITION_DURATION: 0.6,
  EASING: [0.22, 1, 0.36, 1] as const
} as const;
