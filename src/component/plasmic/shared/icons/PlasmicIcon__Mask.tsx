// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type MaskIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function MaskIcon(props: MaskIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 95 85'}
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

      <g filter={'url(#zst6vz5nUa)'}>
        <path
          fillRule={'evenodd'}
          clipRule={'evenodd'}
          d={
            'M10 10a4 4 0 014-4h67a4 4 0 014 4v57a4 4 0 01-4 4H14a4 4 0 01-4-4V10z'
          }
          fill={'currentColor'}
        ></path>
      </g>

      <defs>
        <filter
          id={'zst6vz5nUa'}
          x={'0'}
          y={'0'}
          width={'95'}
          height={'85'}
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

          <feOffset dy={'4'}></feOffset>

          <feGaussianBlur stdDeviation={'5'}></feGaussianBlur>

          <feColorMatrix
            values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0'}
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

export default MaskIcon;
/* prettier-ignore-end */
