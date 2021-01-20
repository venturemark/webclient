// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: _i6uD1XPzdbux6R
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
import sty from "./PlasmicMetric.module.css"; // plasmic-import: _i6uD1XPzdbux6R/css

export type PlasmicMetric__VariantMembers = {};
export type PlasmicMetric__VariantsArgs = {};
type VariantPropType = keyof PlasmicMetric__VariantsArgs;
export const PlasmicMetric__VariantProps = new Array<VariantPropType>();

export type PlasmicMetric__ArgsType = {
  name?: React.ReactNode;
};

type ArgPropType = keyof PlasmicMetric__ArgsType;
export const PlasmicMetric__ArgProps = new Array<ArgPropType>("name");

export type PlasmicMetric__OverridesType = {
  metricItem?: p.Flex<"div">;
  graphContainer?: p.Flex<"img">;
};

export interface DefaultMetricProps {
  name?: React.ReactNode;
  className?: string;
}

function PlasmicMetric__RenderFunc(props: {
  variants: PlasmicMetric__VariantsArgs;
  args: PlasmicMetric__ArgsType;
  overrides: PlasmicMetric__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"metricItem"}
      data-plasmic-override={overrides.metricItem}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.root_reset,
        sty.metricItem
      )}
    >
      <div className={classNames(defaultcss.all, sty.box__xyvDg)}>
        <p.PlasmicSlot
          defaultContents={"Revenue"}
          value={args.name}
          className={classNames(sty.slotName)}
        />
      </div>

      <div className={classNames(defaultcss.all, sty.box___0LbRl)}>
        <img
          data-plasmic-name={"graphContainer"}
          data-plasmic-override={overrides.graphContainer}
          alt={""}
          className={classNames(defaultcss.img, sty.graphContainer)}
          role={"img"}
          src={
            "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTQgNDciPgogIDxwYXRoIGQ9Ik0zNC41IDkuNUMyNCA5LjUgMSAxNyAxIDE3djI5LjVoMTg0di0zN2MtMTYuNSAwLTE5IDE5LTMwLjUgMTlTMTM1IDMgMTI0LjUgM3MtMTkuNSAxNS0zMCAxNS0yMC41IDctMzAgN0M1NCAyNSA0NSA5LjUgMzQuNSA5LjV6IiBmaWxsPSJ1cmwoI09RbVRQelZ0TWEpIiBmaWxsLW9wYWNpdHk9Ii4xNSIvPgogIDxwYXRoIGQ9Ik0xIDE3czIzLTcuNSAzMy41LTcuNVM1NCAyNSA2NC41IDI1YzkuNSAwIDE5LjUtNyAzMC03czE5LjUtMTUgMzAtMTUgMTguNSAyNS41IDMwIDI1LjUgMTQtMTkgMzAuNS0xOSIgc3Ryb2tlPSIjMDI5RDdGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0iYmV2ZWwiLz4KICA8Y2lyY2xlIGN4PSIxODQuNSIgY3k9IjkuNSIgcj0iOS41IiBmaWxsPSIjMDI5RDdGIiBmaWxsLW9wYWNpdHk9Ii4yIi8+CiAgPGNpcmNsZSBjeD0iMTg0LjUiIGN5PSI5LjUiIHI9IjQuNSIgZmlsbD0iI2ZmZiIvPgogIDxjaXJjbGUgY3g9IjE4NC41IiBjeT0iOS41IiByPSIyLjUiIGZpbGw9IiMwMjlEN0YiLz4KICA8Y2lyY2xlIGN4PSI2NC41IiBjeT0iMjUiIHI9IjIiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAyOUQ3RiIvPgogIDxjaXJjbGUgY3g9Ijk0LjUiIGN5PSIxOCIgcj0iMiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMDI5RDdGIi8+CiAgPGNpcmNsZSBjeD0iMTI0LjUiIGN5PSIzIiByPSIyIiBmaWxsPSIjZmZmIiBzdHJva2U9IiMwMjlEN0YiLz4KICA8Y2lyY2xlIGN4PSIxNTQuNSIgY3k9IjI4IiByPSIyIiBmaWxsPSIjZmZmIiBzdHJva2U9IiMwMjlEN0YiLz4KICA8Y2lyY2xlIGN4PSIzNC41IiBjeT0iOS41IiByPSIyIiBmaWxsPSIjZmZmIiBzdHJva2U9IiMwMjlEN0YiLz4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iT1FtVFB6VnRNYSIgeDE9IjkzIiB5MT0iOS41IiB4Mj0iOTMiIHkyPSI0NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDI5RDdGIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M0QzRDNCIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KPC9zdmc+Cg==" as const
          }
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  metricItem: ["metricItem", "graphContainer"],
  graphContainer: ["graphContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  metricItem: "div";
  graphContainer: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMetric__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMetric__VariantsArgs;
    args?: PlasmicMetric__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMetric__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMetric__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicMetric__ArgProps,
      internalVariantPropNames: PlasmicMetric__VariantProps,
    });

    return PlasmicMetric__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "metricItem") {
    func.displayName = "PlasmicMetric";
  } else {
    func.displayName = `PlasmicMetric.${nodeName}`;
  }
  return func;
}

export const PlasmicMetric = Object.assign(
  // Top-level PlasmicMetric renders the root element
  makeNodeComponent("metricItem"),
  {
    // Helper components rendering sub-elements
    graphContainer: makeNodeComponent("graphContainer"),

    // Metadata about props expected for PlasmicMetric
    internalVariantProps: PlasmicMetric__VariantProps,
    internalArgProps: PlasmicMetric__ArgProps,
  }
);

export default PlasmicMetric;
/* prettier-ignore-end */
