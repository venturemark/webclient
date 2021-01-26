// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector4IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 3 4'}
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
          'M2.256 1.089c-.078 0-.234-.078-.467-.078s-.467.156-.545.233c-.077.078-.155.312-.155.7V3.5H0V.078h1.089v.466C1.322.156 1.556 0 1.944 0c.234 0 .312.078.312.078v1.01z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
