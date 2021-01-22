// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type RectangleIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function RectangleIcon(props: RectangleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 1440 76'}
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

      <g filter={'url(#nI75f_az9Ma)'}>
        <path
          fillRule={'evenodd'}
          clipRule={'evenodd'}
          d={'M0 0h1440v75H0V0z'}
          fill={'currentColor'}
        ></path>
      </g>

      <defs>
        <filter
          id={'nI75f_az9Ma'}
          x={'0'}
          y={'0'}
          width={'1440'}
          height={'76'}
          filterUnits={'userSpaceOnUse'}
          colorInterpolationFilters={'sRGB'}
        >
          <feFlood
            floodOpacity={'0'}
            result={'BackgroundImageFix'}
          ></feFlood>

          <feColorMatrix
            in={'SourceAlpha'}
            values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'}
          ></feColorMatrix>

          <feOffset dy={'1'}></feOffset>

          <feColorMatrix
            values={
              '0 0 0 0 0.882353 0 0 0 0 0.882353 0 0 0 0 0.882353 0 0 0 1 0'
            }
          ></feColorMatrix>

          <feBlend
            in2={'BackgroundImageFix'}
            result={'effect1_dropShadow'}
          ></feBlend>

          <feBlend
            in={'SourceGraphic'}
            in2={'effect1_dropShadow'}
            result={'shape'}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default RectangleIcon;
/* prettier-ignore-end */
