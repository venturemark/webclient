// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: LRwT0lHdps
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
import sty from "./PlasmicMainHeader.module.css"; // plasmic-import: LRwT0lHdps/css

export type PlasmicMainHeader__VariantMembers = {};
export type PlasmicMainHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicMainHeader__VariantsArgs;
export const PlasmicMainHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicMainHeader__ArgsType = {};
type ArgPropType = keyof PlasmicMainHeader__ArgsType;
export const PlasmicMainHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicMainHeader__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultMainHeaderProps {
  className?: string;
}

function PlasmicMainHeader__RenderFunc(props: {
  variants: PlasmicMainHeader__VariantsArgs;
  args: PlasmicMainHeader__ArgsType;
  overrides: PlasmicMainHeader__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box___3Xg51)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__qmNq8
          )}
        >
          {"Wins"}
        </div>

        <div className={classNames(defaultcss.all, sty.box__rlXLs)} />

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__ewHZ
          )}
        >
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec volutpat magna."
          }
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMainHeader__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMainHeader__VariantsArgs;
    args?: PlasmicMainHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMainHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMainHeader__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicMainHeader__ArgProps,
      internalVariantPropNames: PlasmicMainHeader__VariantProps,
    });

    return PlasmicMainHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMainHeader";
  } else {
    func.displayName = `PlasmicMainHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicMainHeader = Object.assign(
  // Top-level PlasmicMainHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicMainHeader
    internalVariantProps: PlasmicMainHeader__VariantProps,
    internalArgProps: PlasmicMainHeader__ArgProps,
  }
);

export default PlasmicMainHeader;
/* prettier-ignore-end */