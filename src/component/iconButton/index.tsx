// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from 'react'
import {
  PlasmicIconButton,
  DefaultIconButtonProps,
} from '../plasmic/flip_card/PlasmicIconButton'
import { PlumeButtonProps, PlumeButtonRef, useButton } from '@plasmicapp/plume'

interface IconButtonProps extends PlumeButtonProps {}

function IconButton_(props: IconButtonProps, ref: PlumeButtonRef) {
  // Call the Plume hook
  const { plumeProps } = useButton(
    // Pass in the generated Plasmic* class
    PlasmicIconButton,
    // Pass in the component props
    props,
    {
      isDisabledVariant: ['isDisabled', 'isDisabled'],
      showStartIconVariant: ['withIcons', 'start'],
      showEndIconVariant: ['withIcons', 'end'],

      startIconSlot: 'startIcon',
      endIconSlot: 'endIcon',
      contentSlot: 'content',

      root: 'root',
    },
    ref,
  )
  return <PlasmicIconButton {...plumeProps} />
}

const IconButton = React.forwardRef(IconButton_)

export default IconButton
