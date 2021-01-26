// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector11IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector11Icon(props: Vector11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 4 5'}
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
          'M3.889 4.822H2.8v-.466c-.233.31-.7.544-1.167.544C.623 4.9 0 4.122 0 3.111s.622-1.789 1.633-1.789c.623 0 1.011.311 1.09.467V0h1.166v4.822zM2.022 2.178c-.466 0-.778.389-.778.855 0 .467.312.856.778.856.467 0 .778-.389.778-.856 0-.466-.311-.855-.778-.855z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector11Icon;
/* prettier-ignore-end */
