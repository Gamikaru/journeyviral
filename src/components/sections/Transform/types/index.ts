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
