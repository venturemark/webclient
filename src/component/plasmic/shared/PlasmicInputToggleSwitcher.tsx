// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: 0MPePZ7ty1
// plasmic-unformatted
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
import ButtonToggleSwitcher from "../../ButtonToggleSwitcher"; // plasmic-import: l1Qe8RjaNW/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicInputToggleSwitcher.module.css"; // plasmic-import: 0MPePZ7ty1/css

export type PlasmicInputToggleSwitcher__VariantMembers = {};

export type PlasmicInputToggleSwitcher__VariantsArgs = {};
type VariantPropType = keyof PlasmicInputToggleSwitcher__VariantsArgs;
export const PlasmicInputToggleSwitcher__VariantProps = new Array<VariantPropType>();

export type PlasmicInputToggleSwitcher__ArgsType = {
  inputTitle?: React.ReactNode;
};

type ArgPropType = keyof PlasmicInputToggleSwitcher__ArgsType;
export const PlasmicInputToggleSwitcher__ArgProps = new Array<ArgPropType>(
  "inputTitle"
);

export type PlasmicInputToggleSwitcher__OverridesType = {
  root?: p.Flex<"div">;
  figmaPaste?: p.Flex<"div">;
  buttonToggleSwitcher?: p.Flex<typeof ButtonToggleSwitcher>;
};

export interface DefaultInputToggleSwitcherProps {
  inputTitle?: React.ReactNode;
  className?: string;
}

function PlasmicInputToggleSwitcher__RenderFunc(props: {
  variants: PlasmicInputToggleSwitcher__VariantsArgs;
  args: PlasmicInputToggleSwitcher__ArgsType;
  overrides: PlasmicInputToggleSwitcher__OverridesType;
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
      <div
        data-plasmic-name={"figmaPaste"}
        data-plasmic-override={overrides.figmaPaste}
        className={classNames(defaultcss.all, sty.figmaPaste)}
      >
        <p.PlasmicSlot
          defaultContents={"Allow members to create timelines"}
          value={args.inputTitle}
          className={classNames(sty.slotInputTitle)}
        />

        <ButtonToggleSwitcher
          data-plasmic-name={"buttonToggleSwitcher"}
          data-plasmic-override={overrides.buttonToggleSwitcher}
          className={classNames("__wab_instance", sty.buttonToggleSwitcher)}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "figmaPaste", "buttonToggleSwitcher"],
  figmaPaste: ["figmaPaste", "buttonToggleSwitcher"],
  buttonToggleSwitcher: ["buttonToggleSwitcher"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  figmaPaste: "div";
  buttonToggleSwitcher: typeof ButtonToggleSwitcher;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInputToggleSwitcher__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicInputToggleSwitcher__VariantsArgs;
  args?: PlasmicInputToggleSwitcher__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicInputToggleSwitcher__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicInputToggleSwitcher__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicInputToggleSwitcher__ArgProps,
      internalVariantPropNames: PlasmicInputToggleSwitcher__VariantProps,
    });

    return PlasmicInputToggleSwitcher__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputToggleSwitcher";
  } else {
    func.displayName = `PlasmicInputToggleSwitcher.${nodeName}`;
  }
  return func;
}

export const PlasmicInputToggleSwitcher = Object.assign(
  // Top-level PlasmicInputToggleSwitcher renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    figmaPaste: makeNodeComponent("figmaPaste"),
    buttonToggleSwitcher: makeNodeComponent("buttonToggleSwitcher"),

    // Metadata about props expected for PlasmicInputToggleSwitcher
    internalVariantProps: PlasmicInputToggleSwitcher__VariantProps,
    internalArgProps: PlasmicInputToggleSwitcher__ArgProps,
  }
);

export default PlasmicInputToggleSwitcher;
/* prettier-ignore-end */
