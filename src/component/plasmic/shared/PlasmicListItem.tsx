// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: q8aEgDsN8_
import * as React from "react";

import * as p from "@plasmicapp/react-web";
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
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicListItem.module.css"; // plasmic-import: q8aEgDsN8_/css

export type PlasmicListItem__VariantMembers = {};

export type PlasmicListItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicListItem__VariantsArgs;
export const PlasmicListItem__VariantProps = new Array<VariantPropType>();

export type PlasmicListItem__ArgsType = {
  rename?: React.ReactNode;
};

type ArgPropType = keyof PlasmicListItem__ArgsType;
export const PlasmicListItem__ArgProps = new Array<ArgPropType>("rename");

export type PlasmicListItem__OverridesType = {
  root?: p.Flex<"li">;
  link?: p.Flex<"a">;
};

export interface DefaultListItemProps {
  rename?: React.ReactNode;
  className?: string;
}

function PlasmicListItem__RenderFunc(props: {
  variants: PlasmicListItem__VariantsArgs;
  args: PlasmicListItem__ArgsType;
  overrides: PlasmicListItem__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <li
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.li, projectcss.root_reset, sty.root)}
    >
      <a
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(defaultcss.all, sty.link)}
      >
        <p.PlasmicSlot
          defaultContents={"Edit"}
          value={args.rename}
          className={classNames(sty.slotRename)}
        />
      </a>
    </li>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "li";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicListItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicListItem__VariantsArgs;
  args?: PlasmicListItem__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicListItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicListItem__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicListItem__ArgProps,
      internalVariantPropNames: PlasmicListItem__VariantProps,
    });

    return PlasmicListItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicListItem";
  } else {
    func.displayName = `PlasmicListItem.${nodeName}`;
  }
  return func;
}

export const PlasmicListItem = Object.assign(
  // Top-level PlasmicListItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicListItem
    internalVariantProps: PlasmicListItem__VariantProps,
    internalArgProps: PlasmicListItem__ArgProps,
  }
);

export default PlasmicListItem;
/* prettier-ignore-end */
