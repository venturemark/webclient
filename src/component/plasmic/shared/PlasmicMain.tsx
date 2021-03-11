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
import Button from "../../button/index"; // plasmic-import: JU1t0P9pFY/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicMain.module.css"; // plasmic-import: 0c6QSqHYCk/css

import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon
import IconRightIcon from "./icons/PlasmicIcon__IconRight"; // plasmic-import: v822ZhrBq/icon

export type PlasmicMain__VariantMembers = {
  variantType: "isVenture" | "isTimeline" | "isEmpty";
  isActive: "feed" | "settings" | "members";
};

export type PlasmicMain__VariantsArgs = {
  variantType?: SingleChoiceArg<"isVenture" | "isTimeline" | "isEmpty">;
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
  feedUpdate?: p.Flex<typeof FeedUpdate>;
  addEditMembers?: p.Flex<typeof AddEditMembers>;
  addEditVenture?: p.Flex<typeof AddEditVenture>;
  addEditTimeline?: p.Flex<typeof AddEditTimeline>;
  viewCreateVenture?: p.Flex<typeof Button>;
  text2?: p.Flex<"div">;
  viewJoinVenture?: p.Flex<typeof Button>;
  text22?: p.Flex<"div">;
};

export interface DefaultMainProps {
  variantType?: SingleChoiceArg<"isVenture" | "isTimeline" | "isEmpty">;
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
              : ("feed" as const)
          }
          timelineDescription={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__dUFvj
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
        hasVariant(variants, "isActive", "members")
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
            [sty.feedUpdate__variantType_isEmpty]: hasVariant(
              variants,
              "variantType",
              "isEmpty"
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
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__fdWyB
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
            [sty.addEditTimeline__variantType_isTimeline_isActive_settings]:
              hasVariant(variants, "variantType", "isTimeline") &&
              hasVariant(variants, "isActive", "settings"),
          })}
        />
      ) : null}
      {(hasVariant(variants, "variantType", "isEmpty") ? true : false) ? (
        <p.Stack
          as={"div"}
          hasGap={
            hasVariant(variants, "variantType", "isEmpty") ||
            (hasVariant(variants, "variantType", "isEmpty") &&
              hasVariant(globalVariants, "screen", "mobile"))
              ? true
              : false
          }
          className={classNames(defaultcss.all, sty.box__ypqMk, {
            [sty.box__variantType_isEmpty__ypqMknF9Ly]: hasVariant(
              variants,
              "variantType",
              "isEmpty"
            ),
          })}
        >
          {(hasVariant(variants, "variantType", "isEmpty") ? true : false) ? (
            <p.Stack
              as={"div"}
              hasGap={
                hasVariant(variants, "variantType", "isEmpty") ? true : false
              }
              className={classNames(defaultcss.all, sty.box__cT8DP, {
                [sty.box__variantType_isEmpty__cT8DPnF9Ly]: hasVariant(
                  variants,
                  "variantType",
                  "isEmpty"
                ),
              })}
            >
              {(
                hasVariant(variants, "variantType", "isEmpty") ? true : false
              ) ? (
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__z2Sa,
                    {
                      [sty.box__variantType_isEmpty__z2SaNF9Ly]: hasVariant(
                        variants,
                        "variantType",
                        "isEmpty"
                      ),
                    }
                  )}
                >
                  {hasVariant(variants, "variantType", "isEmpty")
                    ? "Begin with a"
                    : "Enter some text"}
                </div>
              ) : null}
              {(
                hasVariant(variants, "variantType", "isEmpty") ? true : false
              ) ? (
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box___4U2J8,
                    {
                      [sty.box__variantType_isEmpty___4U2J8NF9Ly]: hasVariant(
                        variants,
                        "variantType",
                        "isEmpty"
                      ),
                    }
                  )}
                >
                  {hasVariant(variants, "variantType", "isEmpty")
                    ? "Venture"
                    : "Enter some text"}
                </div>
              ) : null}
              {(
                hasVariant(variants, "variantType", "isEmpty") ? true : false
              ) ? (
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box___384Ex,
                    {
                      [sty.box__variantType_isEmpty___384ExnF9Ly]: hasVariant(
                        variants,
                        "variantType",
                        "isEmpty"
                      ),
                    }
                  )}
                >
                  {hasVariant(variants, "variantType", "isEmpty")
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac nisl nec elit sagittis aliquet ac imperdiet justo. Pellentesque blandit imperdiet elit vel convallis. "
                    : "Enter some text"}
                </div>
              ) : null}
            </p.Stack>
          ) : null}
          {(hasVariant(variants, "variantType", "isEmpty") ? true : false) ? (
            <p.Stack
              as={"div"}
              hasGap={
                hasVariant(variants, "variantType", "isEmpty") ||
                (hasVariant(variants, "variantType", "isEmpty") &&
                  hasVariant(globalVariants, "screen", "mobile"))
                  ? true
                  : false
              }
              className={classNames(defaultcss.all, sty.box__aIwV, {
                [sty.box__variantType_isEmpty__aIwVNF9Ly]: hasVariant(
                  variants,
                  "variantType",
                  "isEmpty"
                ),
              })}
            >
              {(
                hasVariant(variants, "variantType", "isEmpty") ? true : false
              ) ? (
                <p.Stack
                  as={"div"}
                  hasGap={
                    hasVariant(variants, "variantType", "isEmpty") &&
                    hasVariant(globalVariants, "screen", "mobile")
                      ? true
                      : false
                  }
                  className={classNames(defaultcss.all, sty.box__kg0J8, {
                    [sty.box__variantType_isEmpty__kg0J8NF9Ly]: hasVariant(
                      variants,
                      "variantType",
                      "isEmpty"
                    ),
                  })}
                >
                  {(
                    hasVariant(variants, "variantType", "isEmpty")
                      ? true
                      : false
                  ) ? (
                    <p.Stack
                      as={"div"}
                      hasGap={
                        hasVariant(variants, "variantType", "isEmpty")
                          ? true
                          : false
                      }
                      className={classNames(defaultcss.all, sty.box__pcipa, {
                        [sty.box__variantType_isEmpty__pcipanF9Ly]: hasVariant(
                          variants,
                          "variantType",
                          "isEmpty"
                        ),
                      })}
                    >
                      {(
                        hasVariant(variants, "variantType", "isEmpty")
                          ? true
                          : false
                      ) ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__oPQp,
                            {
                              [sty.box__variantType_isEmpty__oPQpNF9Ly]: hasVariant(
                                variants,
                                "variantType",
                                "isEmpty"
                              ),
                            }
                          )}
                        >
                          {hasVariant(variants, "variantType", "isEmpty")
                            ? "Create a new venture"
                            : "Create a new venture\nGet your company or organization on Venturemark."}
                        </div>
                      ) : null}
                      {(
                        hasVariant(variants, "variantType", "isEmpty")
                          ? true
                          : false
                      ) ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__vhCnW,
                            {
                              [sty.box__variantType_isEmpty__vhCnWnF9Ly]: hasVariant(
                                variants,
                                "variantType",
                                "isEmpty"
                              ),
                            }
                          )}
                        >
                          {hasVariant(variants, "variantType", "isEmpty")
                            ? "Get your company or organization on Venturemark."
                            : "Enter some text"}
                        </div>
                      ) : null}
                    </p.Stack>
                  ) : null}
                  {(
                    hasVariant(variants, "variantType", "isEmpty")
                      ? true
                      : false
                  ) ? (
                    <Button
                      data-plasmic-name={"viewCreateVenture"}
                      data-plasmic-override={overrides.viewCreateVenture}
                      buttonFeatures={
                        hasVariant(variants, "variantType", "isEmpty") &&
                        hasVariant(globalVariants, "screen", "mobile")
                          ? []
                          : hasVariant(variants, "variantType", "isEmpty")
                          ? ["nonFullWidth"]
                          : undefined
                      }
                      buttonStyle={
                        hasVariant(variants, "variantType", "isEmpty")
                          ? ("primaryPurple" as const)
                          : undefined
                      }
                      className={classNames(
                        "__wab_instance",
                        sty.viewCreateVenture,
                        {
                          [sty.viewCreateVenture__variantType_isEmpty]: hasVariant(
                            variants,
                            "variantType",
                            "isEmpty"
                          ),
                        }
                      )}
                      text2={
                        <div
                          data-plasmic-name={"text2"}
                          data-plasmic-override={overrides.text2}
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text2,
                            {
                              [sty.text2__variantType_isEmpty]: hasVariant(
                                variants,
                                "variantType",
                                "isEmpty"
                              ),
                            }
                          )}
                        >
                          {hasVariant(variants, "variantType", "isEmpty")
                            ? "Create"
                            : "Button"}
                        </div>
                      }
                    />
                  ) : null}
                </p.Stack>
              ) : null}
              {(
                hasVariant(variants, "variantType", "isEmpty") ? true : false
              ) ? (
                <p.Stack
                  as={"div"}
                  hasGap={
                    hasVariant(variants, "variantType", "isEmpty") &&
                    hasVariant(globalVariants, "screen", "mobile")
                      ? true
                      : false
                  }
                  className={classNames(defaultcss.all, sty.box___46HUm, {
                    [sty.box__variantType_isEmpty___46HUmnF9Ly]: hasVariant(
                      variants,
                      "variantType",
                      "isEmpty"
                    ),
                  })}
                >
                  {(
                    hasVariant(variants, "variantType", "isEmpty")
                      ? true
                      : false
                  ) ? (
                    <p.Stack
                      as={"div"}
                      hasGap={
                        hasVariant(variants, "variantType", "isEmpty")
                          ? true
                          : false
                      }
                      className={classNames(defaultcss.all, sty.box___9FZdV, {
                        [sty.box__variantType_isEmpty___9FZdVnF9Ly]: hasVariant(
                          variants,
                          "variantType",
                          "isEmpty"
                        ),
                      })}
                    >
                      {(
                        hasVariant(variants, "variantType", "isEmpty")
                          ? true
                          : false
                      ) ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__v6Tp5,
                            {
                              [sty.box__variantType_isEmpty__v6Tp5NF9Ly]: hasVariant(
                                variants,
                                "variantType",
                                "isEmpty"
                              ),
                            }
                          )}
                        >
                          {hasVariant(variants, "variantType", "isEmpty")
                            ? "Create a new venture"
                            : "Join an existing venture"}
                        </div>
                      ) : null}
                      {(
                        hasVariant(variants, "variantType", "isEmpty")
                          ? true
                          : false
                      ) ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__koSyq,
                            {
                              [sty.box__variantType_isEmpty__koSyqnF9Ly]: hasVariant(
                                variants,
                                "variantType",
                                "isEmpty"
                              ),
                            }
                          )}
                        >
                          {hasVariant(variants, "variantType", "isEmpty")
                            ? "Get your company or organization on Venturemark."
                            : "Join or sign into an existing organization"}
                        </div>
                      ) : null}
                    </p.Stack>
                  ) : null}
                  {(
                    hasVariant(variants, "variantType", "isEmpty")
                      ? true
                      : false
                  ) ? (
                    <Button
                      data-plasmic-name={"viewJoinVenture"}
                      data-plasmic-override={overrides.viewJoinVenture}
                      buttonFeatures={
                        hasVariant(variants, "variantType", "isEmpty") &&
                        hasVariant(globalVariants, "screen", "mobile")
                          ? []
                          : hasVariant(variants, "variantType", "isEmpty")
                          ? ["nonFullWidth"]
                          : undefined
                      }
                      buttonStyle={
                        hasVariant(variants, "variantType", "isEmpty")
                          ? ("primaryPurple" as const)
                          : undefined
                      }
                      className={classNames(
                        "__wab_instance",
                        sty.viewJoinVenture,
                        {
                          [sty.viewJoinVenture__variantType_isEmpty]: hasVariant(
                            variants,
                            "variantType",
                            "isEmpty"
                          ),
                        }
                      )}
                      text2={
                        <div
                          data-plasmic-name={"text22"}
                          data-plasmic-override={overrides.text22}
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text22,
                            {
                              [sty.text22__variantType_isEmpty]: hasVariant(
                                variants,
                                "variantType",
                                "isEmpty"
                              ),
                            }
                          )}
                        >
                          {hasVariant(variants, "variantType", "isEmpty")
                            ? "Join"
                            : "Button"}
                        </div>
                      }
                    />
                  ) : null}
                </p.Stack>
              ) : null}
            </p.Stack>
          ) : null}
        </p.Stack>
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
    "viewCreateVenture",
    "text2",
    "viewJoinVenture",
    "text22",
  ],
  mainHeader: ["mainHeader"],
  feedUpdate: ["feedUpdate"],
  addEditMembers: ["addEditMembers"],
  addEditVenture: ["addEditVenture"],
  addEditTimeline: ["addEditTimeline"],
  viewCreateVenture: ["viewCreateVenture", "text2"],
  text2: ["text2"],
  viewJoinVenture: ["viewJoinVenture", "text22"],
  text22: ["text22"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  container: "div";
  mainHeader: typeof MainHeader;
  feedUpdate: typeof FeedUpdate;
  addEditMembers: typeof AddEditMembers;
  addEditVenture: typeof AddEditVenture;
  addEditTimeline: typeof AddEditTimeline;
  viewCreateVenture: typeof Button;
  text2: "div";
  viewJoinVenture: typeof Button;
  text22: "div";
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
    feedUpdate: makeNodeComponent("feedUpdate"),
    addEditMembers: makeNodeComponent("addEditMembers"),
    addEditVenture: makeNodeComponent("addEditVenture"),
    addEditTimeline: makeNodeComponent("addEditTimeline"),
    viewCreateVenture: makeNodeComponent("viewCreateVenture"),
    text2: makeNodeComponent("text2"),
    viewJoinVenture: makeNodeComponent("viewJoinVenture"),
    text22: makeNodeComponent("text22"),

    // Metadata about props expected for PlasmicMain
    internalVariantProps: PlasmicMain__VariantProps,
    internalArgProps: PlasmicMain__ArgProps,
  }
);

export default PlasmicMain;
/* prettier-ignore-end */
