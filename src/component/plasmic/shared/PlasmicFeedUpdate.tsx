// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: Fs8bTUrvZrvfhCr
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
import ActionBar from "../../actionbar/index"; // plasmic-import: eUnRsS9UXR/component
import ContentPost from "../../contentpost/index"; // plasmic-import: A1UjtYt6k0/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicFeedUpdate.module.css"; // plasmic-import: Fs8bTUrvZrvfhCr/css

import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon
import IconCloseIcon from "./icons/PlasmicIcon__IconClose"; // plasmic-import: v016HsKmfL/icon

export type PlasmicFeedUpdate__VariantMembers = {};

export type PlasmicFeedUpdate__VariantsArgs = {};
type VariantPropType = keyof PlasmicFeedUpdate__VariantsArgs;
export const PlasmicFeedUpdate__VariantProps = new Array<VariantPropType>();

export type PlasmicFeedUpdate__ArgsType = {};
type ArgPropType = keyof PlasmicFeedUpdate__ArgsType;
export const PlasmicFeedUpdate__ArgProps = new Array<ArgPropType>();

export type PlasmicFeedUpdate__OverridesType = {
  root?: p.Flex<"div">;
  actionBar?: p.Flex<typeof ActionBar>;
  feedContainer?: p.Flex<"div">;
  contentPost?: p.Flex<typeof ContentPost>;
  span?: p.Flex<"span">;
  date?: p.Flex<"span">;
};

export interface DefaultFeedUpdateProps {
  className?: string;
}

function PlasmicFeedUpdate__RenderFunc(props: {
  variants: PlasmicFeedUpdate__VariantsArgs;
  args: PlasmicFeedUpdate__ArgsType;
  overrides: PlasmicFeedUpdate__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <ActionBar
        data-plasmic-name={"actionBar"}
        data-plasmic-override={overrides.actionBar}
        className={classNames("__wab_instance", sty.actionBar)}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"feedContainer"}
        data-plasmic-override={overrides.feedContainer}
        hasGap={true}
        className={classNames(defaultcss.all, sty.feedContainer)}
      >
        <ContentPost
          data-plasmic-name={"contentPost"}
          data-plasmic-override={overrides.contentPost}
          className={classNames("__wab_instance", sty.contentPost)}
          date={
            <React.Fragment>
              <span
                data-plasmic-name={"span"}
                data-plasmic-override={overrides.span}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.span
                )}
              >
                {"•"}
              </span>

              <span
                data-plasmic-name={"date"}
                data-plasmic-override={overrides.date}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.date
                )}
              >
                {"3h ago"}
              </span>
            </React.Fragment>
          }
        />
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "actionBar", "feedContainer", "contentPost", "span", "date"],
  actionBar: ["actionBar"],
  feedContainer: ["feedContainer", "contentPost", "span", "date"],
  contentPost: ["contentPost", "span", "date"],
  span: ["span"],
  date: ["date"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  actionBar: typeof ActionBar;
  feedContainer: "div";
  contentPost: typeof ContentPost;
  span: "span";
  date: "span";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFeedUpdate__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicFeedUpdate__VariantsArgs;
  args?: PlasmicFeedUpdate__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicFeedUpdate__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicFeedUpdate__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicFeedUpdate__ArgProps,
      internalVariantPropNames: PlasmicFeedUpdate__VariantProps,
    });

    return PlasmicFeedUpdate__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeedUpdate";
  } else {
    func.displayName = `PlasmicFeedUpdate.${nodeName}`;
  }
  return func;
}

export const PlasmicFeedUpdate = Object.assign(
  // Top-level PlasmicFeedUpdate renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    actionBar: makeNodeComponent("actionBar"),
    feedContainer: makeNodeComponent("feedContainer"),
    contentPost: makeNodeComponent("contentPost"),
    span: makeNodeComponent("span"),
    date: makeNodeComponent("date"),

    // Metadata about props expected for PlasmicFeedUpdate
    internalVariantProps: PlasmicFeedUpdate__VariantProps,
    internalArgProps: PlasmicFeedUpdate__ArgProps,
  }
);

export default PlasmicFeedUpdate;
/* prettier-ignore-end */
