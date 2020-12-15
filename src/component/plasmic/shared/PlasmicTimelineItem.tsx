// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: KDElHbQmfd
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
  Stack,
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicTimelineItem.module.css"; // plasmic-import: KDElHbQmfd/css

export type PlasmicTimelineItem__VariantMembers = {
  isCurrent: "isCurrent";
};

export type PlasmicTimelineItem__VariantsArgs = {
  isCurrent?: SingleBooleanChoiceArg<"isCurrent">;
};

type VariantPropType = keyof PlasmicTimelineItem__VariantsArgs;
export const PlasmicTimelineItem__VariantProps = new Array<VariantPropType>(
  "isCurrent"
);

export type PlasmicTimelineItem__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTimelineItem__ArgsType;
export const PlasmicTimelineItem__ArgProps = new Array<ArgPropType>("children");

export type PlasmicTimelineItem__OverridesType = {
  root?: Flex<"div">;
  itemContainer?: Flex<"div">;
};

export interface DefaultTimelineItemProps {
  children?: React.ReactNode;
  isCurrent?: SingleBooleanChoiceArg<"isCurrent">;
  className?: string;
}

function PlasmicTimelineItem__RenderFunc(props: {
  variants: PlasmicTimelineItem__VariantsArgs;
  args: PlasmicTimelineItem__ArgsType;
  overrides: PlasmicTimelineItem__OverridesType;
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
        [projectcss.root_reset]: true,
        [sty.root]: true,
        [sty.root__isCurrent_isCurrent]: hasVariant(
          variants,
          "isCurrent",
          "isCurrent"
        ),
      })}
    >
      <Stack
        as={"div"}
        data-plasmic-name={"itemContainer"}
        data-plasmic-override={overrides.itemContainer}
        hasGap={true}
        className={classNames({
          [defaultcss.all]: true,
          [sty.itemContainer]: true,
          [sty.itemContainer__isCurrent_isCurrent]: hasVariant(
            variants,
            "isCurrent",
            "isCurrent"
          ),
        })}
      >
        {(hasVariant(variants, "isCurrent", "isCurrent") ? true : false) ? (
          <div
            className={classNames({
              [defaultcss.all]: true,
              [sty.box__isCurrent_isCurrent__v0Fwk0Mgpk]: hasVariant(
                variants,
                "isCurrent",
                "isCurrent"
              ),

              [sty.box__v0Fwk]: true,
            })}
          />
        ) : null}

        <div
          className={classNames({
            [defaultcss.all]: true,
            [sty.box__isCurrent_isCurrent__zwdJs0Mgpk]: hasVariant(
              variants,
              "isCurrent",
              "isCurrent"
            ),

            [sty.box__zwdJs]: true,
          })}
        >
          <PlasmicSlot
            defaultContents={"Feature Development"}
            value={args.children}
            className={classNames({
              [sty.slotChildren]: true,
              [sty.slotChildren__isCurrent_isCurrent]: hasVariant(
                variants,
                "isCurrent",
                "isCurrent"
              ),
            })}
          />
        </div>
      </Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "itemContainer"],
  itemContainer: ["itemContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  itemContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTimelineItem__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTimelineItem__VariantsArgs;
    args?: PlasmicTimelineItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTimelineItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTimelineItem__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTimelineItem__ArgProps,
      internalVariantPropNames: PlasmicTimelineItem__VariantProps,
    });

    return PlasmicTimelineItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTimelineItem";
  } else {
    func.displayName = `PlasmicTimelineItem.${nodeName}`;
  }
  return func;
}

export const PlasmicTimelineItem = Object.assign(
  // Top-level PlasmicTimelineItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    itemContainer: makeNodeComponent("itemContainer"),

    // Metadata about props expected for PlasmicTimelineItem
    internalVariantProps: PlasmicTimelineItem__VariantProps,
    internalArgProps: PlasmicTimelineItem__ArgProps,
  }
);

export default PlasmicTimelineItem;
/* prettier-ignore-end */
