/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react'
import { classNames } from '@plasmicapp/react-web'

export type IconTextIconProps = React.ComponentProps<'svg'> & {
  title?: string
}

export function IconTextIcon(props: IconTextIconProps) {
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
          'M20.41 8.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.42zM7 7h7v2H7V7zm10 10H7v-2h10v2zm0-4H7v-2h10v2z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  )
}

export default IconTextIcon
/* prettier-ignore-end */
