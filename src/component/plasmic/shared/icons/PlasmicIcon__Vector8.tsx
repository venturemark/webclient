// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector8IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector8Icon(props: Vector8IconProps) {
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
          'M1.944 3.578C.856 3.578 0 2.878 0 1.788 0 .7.856 0 1.944 0c1.09 0 1.867.7 1.867 1.789s-.778 1.789-1.867 1.789zm0-2.722c-.466 0-.777.388-.777.855 0 .545.31.856.777.856s.778-.39.778-.856c0-.467-.31-.855-.778-.855z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector8Icon;
/* prettier-ignore-end */
