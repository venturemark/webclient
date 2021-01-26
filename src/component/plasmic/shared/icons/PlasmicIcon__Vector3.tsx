// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector3IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 2 5'}
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
          'M.622 1.089C.233 1.089 0 .856 0 .544 0 .234.233 0 .622 0c.39 0 .622.233.622.544 0 .312-.31.545-.622.545zm.545 3.889H0V1.556h1.089v3.422h.078z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
