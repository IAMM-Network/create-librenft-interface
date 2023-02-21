import { ElementType, ReactNode } from 'react'
import { LayoutProps, SpaceProps } from 'styled-system'
import type { PolymorphicComponentProps } from '../../util/polymorphic'

export const variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  CTA: 'cta',
  UNI: 'uni',
} as const

export type Variant = typeof variants[keyof typeof variants]

export interface BaseButtonProps extends LayoutProps, SpaceProps {
  as?: 'a' | 'button' | ElementType
  external?: boolean
  isLoading?: boolean
  variant?: Variant
  disabled?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
}

export type ButtonProps<P extends ElementType = 'button'> = PolymorphicComponentProps<P, BaseButtonProps>
