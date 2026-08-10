import type { ComponentPropsWithoutRef } from 'react'
import './Button.css'

export type ButtonVariant = 'pill' | 'accent' | 'solid' | 'rect'

const variantClass: Record<ButtonVariant, string> = {
  pill: 'btn-pill',
  accent: 'btn-accent',
  solid: 'btn-solid',
  rect: 'btn-rect',
}

type Common = {
  variant: ButtonVariant
  /** На мобильном растянуть во всю ширину */
  fullOnMobile?: boolean
  /** Инверсия для тёмных секций */
  onDark?: boolean
}

type LinkProps = Common & { as: 'a' } & ComponentPropsWithoutRef<'a'>
type NativeProps = Common & { as?: 'button' } & ComponentPropsWithoutRef<'button'>

function classes(
  { variant, fullOnMobile, onDark }: Common,
  className?: string,
): string {
  return [
    'btn',
    variantClass[variant],
    fullOnMobile ? 'btn--full-mobile' : '',
    onDark ? 'btn--on-dark' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')
}

export function Button(props: LinkProps | NativeProps) {
  if (props.as === 'a') {
    const { as: _as, variant, fullOnMobile, onDark, className, ...rest } = props
    void _as
    return <a className={classes({ variant, fullOnMobile, onDark }, className)} {...rest} />
  }

  const { as: _as, variant, fullOnMobile, onDark, className, type, ...rest } = props
  void _as
  return (
    <button
      type={type ?? 'button'}
      className={classes({ variant, fullOnMobile, onDark }, className)}
      {...rest}
    />
  )
}
