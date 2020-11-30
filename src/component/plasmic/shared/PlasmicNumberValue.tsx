// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: dBYbutxr7h
import * as React from "react";
import {
  hasVariant,
  classNames,
  Flex,
  wrapWithClassName,
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
  deriveRenderOpts,
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicNumberValue.module.css"; // plasmic-import: dBYbutxr7h/css

export type PlasmicNumberValue__VariantMembers = {
  state: "text" | "graph";
};

export type PlasmicNumberValue__VariantsArgs = {
  state?: SingleChoiceArg<"text" | "graph">;
};

type VariantPropType = keyof PlasmicNumberValue__VariantsArgs;
export const PlasmicNumberValue__VariantProps = new Array<VariantPropType>(
  "state"
);

export type PlasmicNumberValue__ArgsType = {
  numberValue?: React.ReactNode;
};

type ArgPropType = keyof PlasmicNumberValue__ArgsType;
export const PlasmicNumberValue__ArgProps = new Array<ArgPropType>(
  "numberValue"
);

export type PlasmicNumberValue__OverridesType = {
  root?: Flex<"div">;
};

export interface DefaultNumberValueProps {
  numberValue?: React.ReactNode;
  state?: SingleChoiceArg<"text" | "graph">;
  className?: string;
}

function PlasmicNumberValue__RenderFunc(props: {
  variants: PlasmicNumberValue__VariantsArgs;
  args: PlasmicNumberValue__ArgsType;
  overrides: PlasmicNumberValue__OverridesType;
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
        [defaultcss.all]: true,
        [projectcss.root_reset_mTVXT6w3HHjZ4d74q3gB76]: true,
        [sty.root]: true,
        [sty.root__state_text]: hasVariant(variants, "state", "text"),
      })}
    >
      <PlasmicSlot
        defaultContents={"35"}
        value={args.numberValue}
        className={classNames({
          [sty.slotNumberValue]: true,
          [sty.slotNumberValue__state_text]: hasVariant(
            variants,
            "state",
            "text"
          ),
        })}
      />
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
  PlasmicNumberValue__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNumberValue__VariantsArgs;
    args?: PlasmicNumberValue__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNumberValue__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNumberValue__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNumberValue__ArgProps,
      internalVariantPropNames: PlasmicNumberValue__VariantProps,
    });

    return PlasmicNumberValue__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNumberValue";
  } else {
    func.displayName = `PlasmicNumberValue.${nodeName}`;
  }
  return func;
}

export const PlasmicNumberValue = Object.assign(
  // Top-level PlasmicNumberValue renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicNumberValue
    internalVariantProps: PlasmicNumberValue__VariantProps,
    internalArgProps: PlasmicNumberValue__ArgProps,
  }
);

export default PlasmicNumberValue;
/* prettier-ignore-end */
