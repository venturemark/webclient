/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react'
import { classNames } from '@plasmicapp/react-web'

export type IconClockIconProps = React.ComponentProps<'svg'> & {
  title?: string
}

export function IconClockIcon(props: IconClockIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 24 24'}
      height={'1em'}
      width={'1em'}
      style={{
        fill: 'currentcolor',

        ...(style || {}),
      }}
      className={classNames('plasmic-default__svg', className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24a.71.71 0 00-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  )
}

export default IconClockIcon
/* prettier-ignore-end */
