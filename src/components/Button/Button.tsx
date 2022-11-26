import { cloneElement, ElementType, isValidElement } from 'react'
import StyledButton from './StyledButton'
import { variants, ButtonProps } from './types'

const Button = <E extends ElementType = 'button'>(props: ButtonProps<E>): JSX.Element => {
  const { startIcon, endIcon, external, className, isLoading, disabled, children, ...rest } = props
  const isDisabled = isLoading || disabled
  const classNames = className ? [className] : []

  if (isLoading) {
    classNames.push('iamm-button--loading')
  }

  if (isDisabled && !isLoading) {
    classNames.push('iamm-button--disabled')
  }

  return (
    <StyledButton $isLoading={isLoading} className={classNames.join(' ')} disabled={isDisabled} {...rest}>
      <>
        {isValidElement(startIcon) &&
          cloneElement(startIcon, {
            mr: '0.5rem',
          })}
        {children}
      </>
    </StyledButton>
  )
}

Button.defaultProps = {
  isLoading: false,
  external: false,
  disabled: false,
  variant: variants.PRIMARY,
}

export default Button
