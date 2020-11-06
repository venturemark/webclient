/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mSMs7FqGjFMPgGjdzmbmrV
// Component: AqRIboOsVO
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
import "./PlasmicMetricGraph.css"; // plasmic-import: AqRIboOsVO/css

export type PlasmicMetricGraph__VariantMembers = {
  userView: "read";
};

export type PlasmicMetricGraph__VariantsArgs = {
  userView?: SingleChoiceArg<"read">;
};

type VariantPropType = keyof PlasmicMetricGraph__VariantsArgs;
export const PlasmicMetricGraph__VariantProps = new Array<VariantPropType>(
  "userView"
);

export type PlasmicMetricGraph__ArgsType = {};
type ArgPropType = keyof PlasmicMetricGraph__ArgsType;
export const PlasmicMetricGraph__ArgProps = new Array<ArgPropType>();

export type PlasmicMetricGraph__OverridesType = {
  root?: Flex<"img">;
};

export interface DefaultMetricGraphProps {
  userView?: SingleChoiceArg<"read">;
  className?: string;
}

function PlasmicMetricGraph__RenderFunc(props: {
  variants: PlasmicMetricGraph__VariantsArgs;
  args: PlasmicMetricGraph__ArgsType;
  overrides: PlasmicMetricGraph__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <img
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      alt={""}
      className={classNames({
        "MetricGraph__root--read__RVg-hxv8D7": hasVariant(
          variants,
          "userView",
          "read"
        ),

        "MetricGraph__root__RVg-h": true,
        "plasmic-default__all": true,
        "plasmic-default__img": true,
        root_reset_mSMs7FqGjFMPgGjdzmbmrV: true
      })}
      role={"img"}
      src={
        "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTMgMzUiPgogIDxwYXRoIGQ9Ik0xIDM0LjVMMTE2IDI1czg2LTI0IDk2LjUtMjQiIHN0cm9rZT0idXJsKCNyYW9BbEVqMFZNLWEpIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0iYmV2ZWwiLz4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icmFvQWxFajBWTS1hIiB4MT0iMjEyLjUiIHkxPSIxNiIgeDI9IjIuNSIgeTI9IjE2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMjlEN0YiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDI5RDdGIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgo8L3N2Zz4K" as const
      }
    ></img>
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
  root: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMetricGraph__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMetricGraph__VariantsArgs;
    args?: PlasmicMetricGraph__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & // Specify variants directly as props
  Omit<PlasmicMetricGraph__VariantsArgs, ReservedPropsType> &
    // Specify args directly as props
    Omit<PlasmicMetricGraph__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicMetricGraph__ArgProps,
      internalVariantPropNames: PlasmicMetricGraph__VariantProps
    });

    return PlasmicMetricGraph__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMetricGraph";
  } else {
    func.displayName = `PlasmicMetricGraph.${nodeName}`;
  }
  return func;
}

export const PlasmicMetricGraph = Object.assign(
  // Top-level PlasmicMetricGraph renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Helper for creating a Renderer
    createRenderer: () => new PlasmicMetricGraph__Renderer({}, {}),

    // Metadata about props expected for PlasmicMetricGraph
    internalVariantProps: PlasmicMetricGraph__VariantProps,
    internalArgProps: PlasmicMetricGraph__ArgProps
  }
);

type ForNodeRenderer<NodeName extends NodeNameType> = NodeRenderer<
  PlasmicMetricGraph__VariantsArgs,
  PlasmicMetricGraph__ArgsType,
  NodeOverridesType<NodeName>
>;

class PlasmicMetricGraph__Renderer extends Renderer<
  PlasmicMetricGraph__VariantsArgs,
  PlasmicMetricGraph__ArgsType,
  PlasmicMetricGraph__OverridesType,
  "root"
> {
  constructor(
    variants: PlasmicMetricGraph__VariantsArgs,
    args: PlasmicMetricGraph__ArgsType
  ) {
    super(variants, args, PlasmicMetricGraph__RenderFunc, "root");
  }

  protected create(
    variants: PlasmicMetricGraph__VariantsArgs,
    args: PlasmicMetricGraph__ArgsType
  ) {
    return new PlasmicMetricGraph__Renderer(variants, args);
  }

  getInternalVariantProps(): VariantPropType[] {
    return PlasmicMetricGraph__VariantProps;
  }

  getInternalArgProps(): ArgPropType[] {
    return PlasmicMetricGraph__ArgProps;
  }

  forNode(name: "root"): ForNodeRenderer<"root">;
  forNode(name: NodeNameType) {
    return super.forNode(name);
  }
}

export default PlasmicMetricGraph;
/* prettier-ignore-end */
