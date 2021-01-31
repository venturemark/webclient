// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: cZqz_iAjea
import * as React from 'react';

import * as p from '@plasmicapp/react-web';
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from '@plasmicapp/react-web';
import ReplyInput from '../../ReplyInput'; // plasmic-import: PE9pgtdNju/component
import ReplyContent from '../../ReplyContent'; // plasmic-import: q3VnCwfx25w/component

import '@plasmicapp/react-web/lib/plasmic.css';
import defaultcss from '../plasmic__default_style.module.css'; // plasmic-import: global/defaultcss
import projectcss from './plasmic_shared.module.css'; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from './PlasmicReply.module.css'; // plasmic-import: cZqz_iAjea/css

export type PlasmicReply__VariantMembers = {};
export type PlasmicReply__VariantsArgs = {};
type VariantPropType = keyof PlasmicReply__VariantsArgs;
export const PlasmicReply__VariantProps = new Array<VariantPropType>();

export type PlasmicReply__ArgsType = {};
type ArgPropType = keyof PlasmicReply__ArgsType;
export const PlasmicReply__ArgProps = new Array<ArgPropType>();

export type PlasmicReply__OverridesType = {
  root?: p.Flex<'div'>;
  replyInput?: p.Flex<typeof ReplyInput>;
  replyContent?: p.Flex<typeof ReplyContent>;
};

export interface DefaultReplyProps {
  className?: string;
}

function PlasmicReply__RenderFunc(props: {
  variants: PlasmicReply__VariantsArgs;
  args: PlasmicReply__ArgsType;
  overrides: PlasmicReply__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={'root'}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.root_reset,
        sty.root,
      )}
    >
      <ReplyInput
        data-plasmic-name={'replyInput'}
        data-plasmic-override={overrides.replyInput}
        className={classNames('__wab_instance', sty.replyInput)}
      />

      <ReplyContent
        data-plasmic-name={'replyContent'}
        data-plasmic-override={overrides.replyContent}
        className={classNames('__wab_instance', sty.replyContent)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ['root', 'replyInput', 'replyContent'],
  replyInput: ['replyInput'],
  replyContent: ['replyContent'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: 'div';
  replyInput: typeof ReplyInput;
  replyContent: typeof ReplyContent;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReply__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicReply__VariantsArgs;
    args?: PlasmicReply__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicReply__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicReply__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      | ReservedPropsType
      | VariantPropType
      | ArgPropType
      | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(
  nodeName: NodeName,
) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>,
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicReply__ArgProps,
      internalVariantPropNames: PlasmicReply__VariantProps,
    });

    return PlasmicReply__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicReply';
  } else {
    func.displayName = `PlasmicReply.${nodeName}`;
  }
  return func;
}

export const PlasmicReply = Object.assign(
  // Top-level PlasmicReply renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    replyInput: makeNodeComponent('replyInput'),
    replyContent: makeNodeComponent('replyContent'),

    // Metadata about props expected for PlasmicReply
    internalVariantProps: PlasmicReply__VariantProps,
    internalArgProps: PlasmicReply__ArgProps,
  },
);

export default PlasmicReply;
/* prettier-ignore-end */
