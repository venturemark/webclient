// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector9IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector9Icon(props: Vector9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 4 4'}
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
          'M3.344 3.422H2.256v-.389c-.156.234-.545.467-1.012.467-.466 0-.777-.156-1.01-.389C.077 2.878 0 2.567 0 2.1V0h1.089v1.944c0 .39.078.7.544.7.39 0 .545-.31.545-.777V0h1.089v3.422h.077z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector9Icon;
/* prettier-ignore-end */
