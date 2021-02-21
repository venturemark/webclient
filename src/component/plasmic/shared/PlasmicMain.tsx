// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: 0c6QSqHYCk
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
import MainHeader from "../../mainheader/index"; // plasmic-import: LRwT0lHdps/component
import FeedUpdate from "../../feedupdate/index"; // plasmic-import: Fs8bTUrvZrvfhCr/component
import AddEditMembers from "../../addeditmembers/index"; // plasmic-import: 3NTlJO7oDpw/component
import AddEditVenture from "../../addeditventure/index"; // plasmic-import: xICnD3GwL-L/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicMain.module.css"; // plasmic-import: 0c6QSqHYCk/css

export type PlasmicMain__VariantMembers = {
  variantType: "isVenture" | "isTimeline";
  isActive: "feed" | "settings" | "members";
};

export type PlasmicMain__VariantsArgs = {
  variantType?: SingleChoiceArg<"isVenture" | "isTimeline">;
  isActive?: SingleChoiceArg<"feed" | "settings" | "members">;
};

type VariantPropType = keyof PlasmicMain__VariantsArgs;
export const PlasmicMain__VariantProps = new Array<VariantPropType>(
  "variantType",
  "isActive"
);

export type PlasmicMain__ArgsType = {};
type ArgPropType = keyof PlasmicMain__ArgsType;
export const PlasmicMain__ArgProps = new Array<ArgPropType>();

export type PlasmicMain__OverridesType = {
  container?: p.Flex<"div">;
  mainHeader?: p.Flex<typeof MainHeader>;
  box?: p.Flex<"div">;
  feedUpdate?: p.Flex<typeof FeedUpdate>;
  addEditMembers?: p.Flex<typeof AddEditMembers>;
  addEditVenture?: p.Flex<typeof AddEditVenture>;
};

export interface DefaultMainProps {
  variantType?: SingleChoiceArg<"isVenture" | "isTimeline">;
  isActive?: SingleChoiceArg<"feed" | "settings" | "members">;
  className?: string;
}

function PlasmicMain__RenderFunc(props: {
  variants: PlasmicMain__VariantsArgs;
  args: PlasmicMain__ArgsType;
  overrides: PlasmicMain__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"container"}
      data-plasmic-override={overrides.container}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.root_reset,
        sty.container,
        {
          [sty.container__isActive_settings]: hasVariant(
            variants,
            "isActive",
            "settings"
          ),

          [sty.container__variantType_isTimeline]: hasVariant(
            variants,
            "variantType",
            "isTimeline"
          ),
        }
      )}
    >
      <MainHeader
        data-plasmic-name={"mainHeader"}
        data-plasmic-override={overrides.mainHeader}
        className={classNames("__wab_instance", sty.mainHeader, {
          [sty.mainHeader__isActive_feed]: hasVariant(
            variants,
            "isActive",
            "feed"
          ),

          [sty.mainHeader__isActive_settings]: hasVariant(
            variants,
            "isActive",
            "settings"
          ),

          [sty.mainHeader__variantType_isTimeline]: hasVariant(
            variants,
            "variantType",
            "isTimeline"
          ),
        })}
        headerStyles={
          hasVariant(variants, "variantType", "isTimeline")
            ? ("timelineHeader" as const)
            : ("ventureHeader" as const)
        }
        isActive={
          hasVariant(variants, "isActive", "settings")
            ? ("settings" as const)
            : hasVariant(variants, "isActive", "feed")
            ? ("feed" as const)
            : ("feed" as const)
        }
        timelineDescription={
          <div
            data-plasmic-name={"box"}
            data-plasmic-override={overrides.box}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box
            )}
          >
            {hasVariant(globalVariants, "screen", "tablet")
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec volutpat magna."
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nDonec nec volutpat magna."}
          </div>
        }
        timelineName={"Wins"}
        venturename={"Adbloom"}
      />

      {(
        hasVariant(variants, "isActive", "members")
          ? false
          : hasVariant(variants, "isActive", "settings")
          ? false
          : true
      ) ? (
        <FeedUpdate
          data-plasmic-name={"feedUpdate"}
          data-plasmic-override={overrides.feedUpdate}
          className={classNames("__wab_instance", sty.feedUpdate, {
            [sty.feedUpdate__isActive_members]: hasVariant(
              variants,
              "isActive",
              "members"
            ),

            [sty.feedUpdate__isActive_settings]: hasVariant(
              variants,
              "isActive",
              "settings"
            ),
          })}
        />
      ) : null}
      {(hasVariant(variants, "isActive", "members") ? true : false) ? (
        <AddEditMembers
          data-plasmic-name={"addEditMembers"}
          data-plasmic-override={overrides.addEditMembers}
          className={classNames("__wab_instance", sty.addEditMembers, {
            [sty.addEditMembers__isActive_members]: hasVariant(
              variants,
              "isActive",
              "members"
            ),
          })}
        />
      ) : null}
      {(hasVariant(variants, "isActive", "settings") ? true : false) ? (
        <AddEditVenture
          data-plasmic-name={"addEditVenture"}
          data-plasmic-override={overrides.addEditVenture}
          className={classNames("__wab_instance", sty.addEditVenture, {
            [sty.addEditVenture__isActive_feed]: hasVariant(
              variants,
              "isActive",
              "feed"
            ),

            [sty.addEditVenture__isActive_settings]: hasVariant(
              variants,
              "isActive",
              "settings"
            ),
          })}
        />
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  container: [
    "container",
    "mainHeader",
    "box",
    "feedUpdate",
    "addEditMembers",
    "addEditVenture",
  ],

  mainHeader: ["mainHeader", "box"],
  box: ["box"],
  feedUpdate: ["feedUpdate"],
  addEditMembers: ["addEditMembers"],
  addEditVenture: ["addEditVenture"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  container: "div";
  mainHeader: typeof MainHeader;
  box: "div";
  feedUpdate: typeof FeedUpdate;
  addEditMembers: typeof AddEditMembers;
  addEditVenture: typeof AddEditVenture;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMain__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicMain__VariantsArgs;
  args?: PlasmicMain__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicMain__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicMain__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicMain__ArgProps,
      internalVariantPropNames: PlasmicMain__VariantProps,
    });

    return PlasmicMain__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "container") {
    func.displayName = "PlasmicMain";
  } else {
    func.displayName = `PlasmicMain.${nodeName}`;
  }
  return func;
}

export const PlasmicMain = Object.assign(
  // Top-level PlasmicMain renders the root element
  makeNodeComponent("container"),
  {
    // Helper components rendering sub-elements
    mainHeader: makeNodeComponent("mainHeader"),
    box: makeNodeComponent("box"),
    feedUpdate: makeNodeComponent("feedUpdate"),
    addEditMembers: makeNodeComponent("addEditMembers"),
    addEditVenture: makeNodeComponent("addEditVenture"),

    // Metadata about props expected for PlasmicMain
    internalVariantProps: PlasmicMain__VariantProps,
    internalArgProps: PlasmicMain__ArgProps,
  }
);

export default PlasmicMain;
/* prettier-ignore-end */
