/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mSMs7FqGjFMPgGjdzmbmrV
// Component: CrXPeq_3J2
import * as React from "react";
import {
  hasVariant,
  classNames,
  Flex,
  wrapWithClassName,
  Renderer,
  NodeRenderer,
  createPlasmicElementProxy,
  makeFragment,
  PlasmicIcon,
  PlasmicSlot,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_venturemark.css"; // plasmic-import: mSMs7FqGjFMPgGjdzmbmrV/projectcss
import "./PlasmicUpdatesFilterButton.css"; // plasmic-import: CrXPeq_3J2/css

export type PlasmicUpdatesFilterButton__VariantMembers = {
  isSelected: "selected";
};

export type PlasmicUpdatesFilterButton__VariantsArgs = {
  isSelected?: SingleChoiceArg<"selected">;
};

type VariantPropType = keyof PlasmicUpdatesFilterButton__VariantsArgs;
export const PlasmicUpdatesFilterButton__VariantProps = new Array<
  VariantPropType
>("isSelected");

export type PlasmicUpdatesFilterButton__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicUpdatesFilterButton__ArgsType;
export const PlasmicUpdatesFilterButton__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicUpdatesFilterButton__OverridesType = {
  root?: Flex<"div">;
};

export interface DefaultUpdatesFilterButtonProps {
  children?: React.ReactNode;
  isSelected?: SingleChoiceArg<"selected">;
  className?: string;
}

function PlasmicUpdatesFilterButton__RenderFunc(props: {
  variants: PlasmicUpdatesFilterButton__VariantsArgs;
  args: PlasmicUpdatesFilterButton__ArgsType;
  overrides: PlasmicUpdatesFilterButton__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames({
        "UpdatesFilterButton__root--desktop__WE2t0U__2W": true,
        "UpdatesFilterButton__root--selected__WE2t0mzgl2": hasVariant(
          variants,
          "isSelected",
          "selected"
        ),

        UpdatesFilterButton__root__WE2t0: true,
        "plasmic-default__all": true,
        "plasmic-default__div": true,
        root_reset_mSMs7FqGjFMPgGjdzmbmrV: true
      })}
    >
      <PlasmicSlot
        defaultContents={"ALL"}
        value={args.children}
        className={classNames({
          "UpdatesFilterButton__slotChildren--desktop__jLh5pU__2W": true,
          "UpdatesFilterButton__slotChildren--selected__jLh5pmzgl2": hasVariant(
            variants,
            "isSelected",
            "selected"
          ),

          UpdatesFilterButton__slotChildren__jLh5p: true
        })}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
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
  PlasmicUpdatesFilterButton__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUpdatesFilterButton__VariantsArgs;
    args?: PlasmicUpdatesFilterButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & // Specify variants directly as props
  Omit<PlasmicUpdatesFilterButton__VariantsArgs, ReservedPropsType> &
    // Specify args directly as props
    Omit<PlasmicUpdatesFilterButton__ArgsType, ReservedPropsType> &
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
  type PropsType = NodeComponentProps<NodeName>;
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicUpdatesFilterButton__ArgProps,
      internalVariantPropNames: PlasmicUpdatesFilterButton__VariantProps
    });

    return PlasmicUpdatesFilterButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUpdatesFilterButton";
  } else {
    func.displayName = `PlasmicUpdatesFilterButton.${nodeName}`;
  }
  return func;
}

export const PlasmicUpdatesFilterButton = Object.assign(
  // Top-level PlasmicUpdatesFilterButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Helper for creating a Renderer
    createRenderer: () => new PlasmicUpdatesFilterButton__Renderer({}, {}),

    // Metadata about props expected for PlasmicUpdatesFilterButton
    internalVariantProps: PlasmicUpdatesFilterButton__VariantProps,
    internalArgProps: PlasmicUpdatesFilterButton__ArgProps
  }
);

type ForNodeRenderer<NodeName extends NodeNameType> = NodeRenderer<
  PlasmicUpdatesFilterButton__VariantsArgs,
  PlasmicUpdatesFilterButton__ArgsType,
  NodeOverridesType<NodeName>
>;

class PlasmicUpdatesFilterButton__Renderer extends Renderer<
  PlasmicUpdatesFilterButton__VariantsArgs,
  PlasmicUpdatesFilterButton__ArgsType,
  PlasmicUpdatesFilterButton__OverridesType,
  "root"
> {
  constructor(
    variants: PlasmicUpdatesFilterButton__VariantsArgs,
    args: PlasmicUpdatesFilterButton__ArgsType
  ) {
    super(variants, args, PlasmicUpdatesFilterButton__RenderFunc, "root");
  }

  protected create(
    variants: PlasmicUpdatesFilterButton__VariantsArgs,
    args: PlasmicUpdatesFilterButton__ArgsType
  ) {
    return new PlasmicUpdatesFilterButton__Renderer(variants, args);
  }

  getInternalVariantProps(): VariantPropType[] {
    return PlasmicUpdatesFilterButton__VariantProps;
  }

  getInternalArgProps(): ArgPropType[] {
    return PlasmicUpdatesFilterButton__ArgProps;
  }

  forNode(name: "root"): ForNodeRenderer<"root">;
  forNode(name: NodeNameType) {
    return super.forNode(name);
  }
}

export default PlasmicUpdatesFilterButton;
/* prettier-ignore-end */
