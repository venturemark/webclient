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
import AddEditTimeline from "../../addedittimeline/index"; // plasmic-import: 2FtsgZCi1Kx/component
import EmptyState from "../../emptystate/index"; // plasmic-import: jggPyChG2Zg/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicMain.module.css"; // plasmic-import: 0c6QSqHYCk/css

export type PlasmicMain__VariantMembers = {
  variantType: "isVenture" | "isTimeline" | "isEmpty";
  isActive: "feed" | "settings" | "members" | "isNewVenture";
  isOwner: "isOwner";
  isPublic: "isPublic";
};

export type PlasmicMain__VariantsArgs = {
  variantType?: SingleChoiceArg<"isVenture" | "isTimeline" | "isEmpty">;
  isActive?: SingleChoiceArg<"feed" | "settings" | "members" | "isNewVenture">;
  isOwner?: SingleBooleanChoiceArg<"isOwner">;
  isPublic?: SingleBooleanChoiceArg<"isPublic">;
};

type VariantPropType = keyof PlasmicMain__VariantsArgs;
export const PlasmicMain__VariantProps = new Array<VariantPropType>(
  "variantType",
  "isActive",
  "isOwner",
  "isPublic"
);

export type PlasmicMain__ArgsType = {};
type ArgPropType = keyof PlasmicMain__ArgsType;
export const PlasmicMain__ArgProps = new Array<ArgPropType>();

export type PlasmicMain__OverridesType = {
  container?: p.Flex<"div">;
  mainHeader?: p.Flex<typeof MainHeader>;
  feedUpdate?: p.Flex<typeof FeedUpdate>;
  addEditMembers?: p.Flex<typeof AddEditMembers>;
  addEditVenture?: p.Flex<typeof AddEditVenture>;
  addEditTimeline?: p.Flex<typeof AddEditTimeline>;
  emptyState?: p.Flex<typeof EmptyState>;
};

export interface DefaultMainProps {
  variantType?: SingleChoiceArg<"isVenture" | "isTimeline" | "isEmpty">;
  isActive?: SingleChoiceArg<"feed" | "settings" | "members" | "isNewVenture">;
  isOwner?: SingleBooleanChoiceArg<"isOwner">;
  isPublic?: SingleBooleanChoiceArg<"isPublic">;
  className?: string;
}

function PlasmicMain__RenderFunc(props: {
  variants: PlasmicMain__VariantsArgs;
  args: PlasmicMain__ArgsType;
  overrides: PlasmicMain__OverridesType;
  dataFetches?: PlasmicMain__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

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
          [sty.container__isActive_feed]: hasVariant(
            variants,
            "isActive",
            "feed"
          ),
          [sty.container__isActive_isNewVenture]: hasVariant(
            variants,
            "isActive",
            "isNewVenture"
          ),
          [sty.container__isActive_isNewVenture_variantType_isVenture]:
            hasVariant(variants, "isActive", "isNewVenture") &&
            hasVariant(variants, "variantType", "isVenture"),
          [sty.container__isActive_settings]: hasVariant(
            variants,
            "isActive",
            "settings"
          ),
          [sty.container__isPublic]: hasVariant(
            variants,
            "isPublic",
            "isPublic"
          ),
          [sty.container__variantType_isEmpty]: hasVariant(
            variants,
            "variantType",
            "isEmpty"
          ),
          [sty.container__variantType_isTimeline]: hasVariant(
            variants,
            "variantType",
            "isTimeline"
          ),
          [sty.container__variantType_isTimeline_isActive_settings]:
            hasVariant(variants, "variantType", "isTimeline") &&
            hasVariant(variants, "isActive", "settings"),
          [sty.container__variantType_isVenture]: hasVariant(
            variants,
            "variantType",
            "isVenture"
          ),
        }
      )}
    >
      {(hasVariant(variants, "variantType", "isEmpty") ? false : true) ? (
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
            [sty.mainHeader__isPublic]: hasVariant(
              variants,
              "isPublic",
              "isPublic"
            ),
            [sty.mainHeader__isPublic_variantType_isVenture]:
              hasVariant(variants, "isPublic", "isPublic") &&
              hasVariant(variants, "variantType", "isVenture"),
            [sty.mainHeader__variantType_isEmpty]: hasVariant(
              variants,
              "variantType",
              "isEmpty"
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
              : ("unnamedVariant" as const)
          }
          isPublic={
            hasVariant(variants, "isPublic", "isPublic")
              ? ("isPublic" as const)
              : undefined
          }
          timelineDescription={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text__dUFvj
              )}
            >
              {hasVariant(globalVariants, "screen", "tablet")
                ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec volutpat magna."
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nDonec nec volutpat magna."}
            </div>
          }
          timelineName={"Wins"}
          ventureName={"Adbloom"}
        />
      ) : null}
      {(
        hasVariant(variants, "isActive", "isNewVenture") &&
        hasVariant(variants, "variantType", "isVenture")
          ? false
          : hasVariant(variants, "isActive", "members")
          ? false
          : hasVariant(variants, "isActive", "settings")
          ? false
          : hasVariant(variants, "variantType", "isEmpty")
          ? false
          : true
      ) ? (
        <FeedUpdate
          data-plasmic-name={"feedUpdate"}
          data-plasmic-override={overrides.feedUpdate}
          className={classNames("__wab_instance", sty.feedUpdate, {
            [sty.feedUpdate__isActive_feed]: hasVariant(
              variants,
              "isActive",
              "feed"
            ),
            [sty.feedUpdate__isActive_isNewVenture_variantType_isVenture]:
              hasVariant(variants, "isActive", "isNewVenture") &&
              hasVariant(variants, "variantType", "isVenture"),
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
            [sty.feedUpdate__isOwner]: hasVariant(
              variants,
              "isOwner",
              "isOwner"
            ),
            [sty.feedUpdate__isPublic]: hasVariant(
              variants,
              "isPublic",
              "isPublic"
            ),
            [sty.feedUpdate__isPublic_variantType_isVenture]:
              hasVariant(variants, "isPublic", "isPublic") &&
              hasVariant(variants, "variantType", "isVenture"),
            [sty.feedUpdate__variantType_isEmpty]: hasVariant(
              variants,
              "variantType",
              "isEmpty"
            ),
            [sty.feedUpdate__variantType_isVenture]: hasVariant(
              variants,
              "variantType",
              "isVenture"
            ),
          })}
          isOwner={
            hasVariant(variants, "isOwner", "isOwner")
              ? ("isOwner" as const)
              : undefined
          }
          isPublic={
            hasVariant(variants, "isPublic", "isPublic")
              ? ("isPublic" as const)
              : undefined
          }
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
            [sty.addEditMembers__isActive_members_isOwner]:
              hasVariant(variants, "isActive", "members") &&
              hasVariant(variants, "isOwner", "isOwner"),
            [sty.addEditMembers__isActive_members_isOwner_variantType_isTimeline]:
              hasVariant(variants, "isActive", "members") &&
              hasVariant(variants, "isOwner", "isOwner") &&
              hasVariant(variants, "variantType", "isTimeline"),
            [sty.addEditMembers__isActive_members_variantType_isTimeline]:
              hasVariant(variants, "isActive", "members") &&
              hasVariant(variants, "variantType", "isTimeline"),
            [sty.addEditMembers__isActive_settings]: hasVariant(
              variants,
              "isActive",
              "settings"
            ),
            [sty.addEditMembers__isOwner]: hasVariant(
              variants,
              "isOwner",
              "isOwner"
            ),
            [sty.addEditMembers__variantType_isTimeline]: hasVariant(
              variants,
              "variantType",
              "isTimeline"
            ),
            [sty.addEditMembers__variantType_isVenture]: hasVariant(
              variants,
              "variantType",
              "isVenture"
            ),
            [sty.addEditMembers__variantType_isVenture_isActive_members]:
              hasVariant(variants, "variantType", "isVenture") &&
              hasVariant(variants, "isActive", "members"),
            [sty.addEditMembers__variantType_isVenture_isActive_members_isOwner]:
              hasVariant(variants, "variantType", "isVenture") &&
              hasVariant(variants, "isActive", "members") &&
              hasVariant(variants, "isOwner", "isOwner"),
          })}
          isOwner={
            hasVariant(variants, "isActive", "members") &&
            hasVariant(variants, "isOwner", "isOwner") &&
            hasVariant(variants, "variantType", "isTimeline")
              ? ("isOwner" as const)
              : hasVariant(variants, "isActive", "members") &&
                hasVariant(variants, "isOwner", "isOwner")
              ? ("isOwner" as const)
              : undefined
          }
        />
      ) : null}
      {(
        hasVariant(variants, "variantType", "isTimeline") &&
        hasVariant(variants, "isActive", "settings")
          ? false
          : hasVariant(variants, "isActive", "settings")
          ? true
          : hasVariant(variants, "variantType", "isEmpty")
          ? false
          : hasVariant(variants, "variantType", "isTimeline")
          ? false
          : false
      ) ? (
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
            [sty.addEditVenture__isOwner]: hasVariant(
              variants,
              "isOwner",
              "isOwner"
            ),
            [sty.addEditVenture__variantType_isEmpty]: hasVariant(
              variants,
              "variantType",
              "isEmpty"
            ),
            [sty.addEditVenture__variantType_isTimeline]: hasVariant(
              variants,
              "variantType",
              "isTimeline"
            ),
            [sty.addEditVenture__variantType_isTimeline_isActive_settings]:
              hasVariant(variants, "variantType", "isTimeline") &&
              hasVariant(variants, "isActive", "settings"),
          })}
          isOwner={
            hasVariant(variants, "isOwner", "isOwner")
              ? ("isOwner" as const)
              : undefined
          }
          variantState={"isEdit" as const}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text__fdWyB
            )}
          >
            {"Create a New Venture"}
          </div>
        </AddEditVenture>
      ) : null}
      {(
        hasVariant(variants, "variantType", "isTimeline") &&
        hasVariant(variants, "isActive", "settings")
          ? true
          : false
      ) ? (
        <AddEditTimeline
          data-plasmic-name={"addEditTimeline"}
          data-plasmic-override={overrides.addEditTimeline}
          className={classNames("__wab_instance", sty.addEditTimeline, {
            [sty.addEditTimeline__isActive_members]: hasVariant(
              variants,
              "isActive",
              "members"
            ),
            [sty.addEditTimeline__isActive_members_isOwner]:
              hasVariant(variants, "isActive", "members") &&
              hasVariant(variants, "isOwner", "isOwner"),
            [sty.addEditTimeline__isActive_members_isOwner_variantType_isTimeline]:
              hasVariant(variants, "isActive", "members") &&
              hasVariant(variants, "isOwner", "isOwner") &&
              hasVariant(variants, "variantType", "isTimeline"),
            [sty.addEditTimeline__isOwner]: hasVariant(
              variants,
              "isOwner",
              "isOwner"
            ),
            [sty.addEditTimeline__isOwner_isActive_settings]:
              hasVariant(variants, "isOwner", "isOwner") &&
              hasVariant(variants, "isActive", "settings"),
            [sty.addEditTimeline__variantType_isTimeline]: hasVariant(
              variants,
              "variantType",
              "isTimeline"
            ),
            [sty.addEditTimeline__variantType_isTimeline_isActive_settings]:
              hasVariant(variants, "variantType", "isTimeline") &&
              hasVariant(variants, "isActive", "settings"),
            [sty.addEditTimeline__variantType_isTimeline_isActive_settings_isOwner]:
              hasVariant(variants, "variantType", "isTimeline") &&
              hasVariant(variants, "isActive", "settings") &&
              hasVariant(variants, "isOwner", "isOwner"),
            [sty.addEditTimeline__variantType_isTimeline_isOwner]:
              hasVariant(variants, "variantType", "isTimeline") &&
              hasVariant(variants, "isOwner", "isOwner"),
          })}
          isOwner={
            hasVariant(variants, "variantType", "isTimeline") &&
            hasVariant(variants, "isActive", "settings") &&
            hasVariant(variants, "isOwner", "isOwner")
              ? ("isOwner" as const)
              : undefined
          }
          variantState={
            hasVariant(variants, "variantType", "isTimeline") &&
            hasVariant(variants, "isActive", "settings")
              ? ("isEdit" as const)
              : undefined
          }
        />
      ) : null}
      {(
        hasVariant(variants, "isActive", "members") &&
        hasVariant(variants, "variantType", "isEmpty")
          ? false
          : hasVariant(variants, "isActive", "isNewVenture") &&
            hasVariant(variants, "variantType", "isVenture")
          ? true
          : hasVariant(variants, "variantType", "isEmpty") &&
            hasVariant(variants, "isActive", "settings")
          ? false
          : hasVariant(variants, "variantType", "isEmpty") &&
            hasVariant(variants, "isOwner", "isOwner")
          ? true
          : false
      ) ? (
        <EmptyState
          data-plasmic-name={"emptyState"}
          data-plasmic-override={overrides.emptyState}
          className={classNames("__wab_instance", sty.emptyState, {
            [sty.emptyState__isActive_isNewVenture]: hasVariant(
              variants,
              "isActive",
              "isNewVenture"
            ),
            [sty.emptyState__isActive_isNewVenture_variantType_isVenture]:
              hasVariant(variants, "isActive", "isNewVenture") &&
              hasVariant(variants, "variantType", "isVenture"),
            [sty.emptyState__isActive_members_variantType_isEmpty]:
              hasVariant(variants, "isActive", "members") &&
              hasVariant(variants, "variantType", "isEmpty"),
            [sty.emptyState__isOwner]: hasVariant(
              variants,
              "isOwner",
              "isOwner"
            ),
            [sty.emptyState__variantType_isEmpty]: hasVariant(
              variants,
              "variantType",
              "isEmpty"
            ),
            [sty.emptyState__variantType_isEmpty_isActive_feed]:
              hasVariant(variants, "variantType", "isEmpty") &&
              hasVariant(variants, "isActive", "feed"),
            [sty.emptyState__variantType_isEmpty_isActive_settings]:
              hasVariant(variants, "variantType", "isEmpty") &&
              hasVariant(variants, "isActive", "settings"),
            [sty.emptyState__variantType_isEmpty_isOwner]:
              hasVariant(variants, "variantType", "isEmpty") &&
              hasVariant(variants, "isOwner", "isOwner"),
            [sty.emptyState__variantType_isTimeline]: hasVariant(
              variants,
              "variantType",
              "isTimeline"
            ),
            [sty.emptyState__variantType_isTimeline_isActive_settings]:
              hasVariant(variants, "variantType", "isTimeline") &&
              hasVariant(variants, "isActive", "settings"),
            [sty.emptyState__variantType_isVenture]: hasVariant(
              variants,
              "variantType",
              "isVenture"
            ),
          })}
          isActive={
            hasVariant(variants, "isActive", "members") &&
            hasVariant(variants, "variantType", "isEmpty")
              ? ("members" as const)
              : hasVariant(variants, "isActive", "isNewVenture") &&
                hasVariant(variants, "variantType", "isVenture")
              ? ("isNew" as const)
              : hasVariant(variants, "variantType", "isEmpty") &&
                hasVariant(variants, "isActive", "settings")
              ? ("settings" as const)
              : hasVariant(variants, "variantType", "isTimeline") &&
                hasVariant(variants, "isActive", "settings")
              ? ("settings" as const)
              : hasVariant(variants, "isActive", "isNewVenture")
              ? ("isNew" as const)
              : undefined
          }
          variantType={
            hasVariant(variants, "isActive", "members") &&
            hasVariant(variants, "variantType", "isEmpty")
              ? ("isEmpty" as const)
              : hasVariant(variants, "isActive", "isNewVenture") &&
                hasVariant(variants, "variantType", "isVenture")
              ? ("isEmpty" as const)
              : hasVariant(variants, "variantType", "isEmpty") &&
                hasVariant(variants, "isActive", "settings")
              ? ("isEmpty" as const)
              : hasVariant(variants, "variantType", "isEmpty") &&
                hasVariant(variants, "isActive", "feed")
              ? ("isEmpty" as const)
              : hasVariant(variants, "variantType", "isEmpty") &&
                hasVariant(globalVariants, "screen", "mobile")
              ? ("isEmpty" as const)
              : hasVariant(variants, "variantType", "isEmpty")
              ? ("isEmpty" as const)
              : hasVariant(variants, "variantType", "isVenture")
              ? ("isVenture" as const)
              : undefined
          }
        />
      ) : null}
      {(hasVariant(variants, "variantType", "isEmpty") ? true : false) ? (
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.text__k8I5L,
            {
              [sty.text__isActive_settings__k8I5LOMvQw]: hasVariant(
                variants,
                "isActive",
                "settings"
              ),
              [sty.text__isOwner__k8I5LSozJa]: hasVariant(
                variants,
                "isOwner",
                "isOwner"
              ),
              [sty.text__variantType_isEmpty__k8I5LnF9Ly]: hasVariant(
                variants,
                "variantType",
                "isEmpty"
              ),
              [sty.text__variantType_isEmpty_isOwner__k8I5LnF9LySozJa]:
                hasVariant(variants, "variantType", "isEmpty") &&
                hasVariant(variants, "isOwner", "isOwner"),
              [sty.text__variantType_isEmpty_isOwner_isPublic__k8I5LnF9LySozJaUqOqN]:
                hasVariant(variants, "variantType", "isEmpty") &&
                hasVariant(variants, "isOwner", "isOwner") &&
                hasVariant(variants, "isPublic", "isPublic"),
            }
          )}
        >
          {hasVariant(variants, "variantType", "isEmpty")
            ? "This venture has no timelines yet"
            : "Enter some text"}
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  container: [
    "container",
    "mainHeader",
    "feedUpdate",
    "addEditMembers",
    "addEditVenture",
    "addEditTimeline",
    "emptyState",
  ],
  mainHeader: ["mainHeader"],
  feedUpdate: ["feedUpdate"],
  addEditMembers: ["addEditMembers"],
  addEditVenture: ["addEditVenture"],
  addEditTimeline: ["addEditTimeline"],
  emptyState: ["emptyState"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  container: "div";
  mainHeader: typeof MainHeader;
  feedUpdate: typeof FeedUpdate;
  addEditMembers: typeof AddEditMembers;
  addEditVenture: typeof AddEditVenture;
  addEditTimeline: typeof AddEditTimeline;
  emptyState: typeof EmptyState;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMain__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMain__VariantsArgs;
    args?: PlasmicMain__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicMain__Fetches;
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

    const { dataFetches } = props;

    return PlasmicMain__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
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
    feedUpdate: makeNodeComponent("feedUpdate"),
    addEditMembers: makeNodeComponent("addEditMembers"),
    addEditVenture: makeNodeComponent("addEditVenture"),
    addEditTimeline: makeNodeComponent("addEditTimeline"),
    emptyState: makeNodeComponent("emptyState"),

    // Metadata about props expected for PlasmicMain
    internalVariantProps: PlasmicMain__VariantProps,
    internalArgProps: PlasmicMain__ArgProps,
  }
);

export default PlasmicMain;
/* prettier-ignore-end */
