// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: LRwT0lHdps
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
import IconButton from "../../iconbutton/index"; // plasmic-import: UIpuE7M1YY/component
import IconButtonMember from "../../iconbuttonmember/index"; // plasmic-import: ZhI9zuyxBT/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicMainHeader.module.css"; // plasmic-import: LRwT0lHdps/css

import IconExternalLinkIcon from "./icons/PlasmicIcon__IconExternalLink"; // plasmic-import: BDHiWdSyk/icon
import IconFeedIcon from "./icons/PlasmicIcon__IconFeed"; // plasmic-import: gkIqWTG_m/icon
import InfosvgIcon from "./icons/PlasmicIcon__Infosvg"; // plasmic-import: goVw5oohlB/icon

export type PlasmicMainHeader__VariantMembers = {
  headerStyles: "timelineHeader" | "ventureHeader" | "createNewVenture";
  isActive: "feed" | "members" | "settings" | "unnamedVariant";
  showVentureDescription: "showVentureDescription";
  isOnboarding: "isOnboarding";
  isPublic: "isPublic";
};

export type PlasmicMainHeader__VariantsArgs = {
  headerStyles?: SingleChoiceArg<
    "timelineHeader" | "ventureHeader" | "createNewVenture"
  >;
  isActive?: SingleChoiceArg<
    "feed" | "members" | "settings" | "unnamedVariant"
  >;
  showVentureDescription?: SingleBooleanChoiceArg<"showVentureDescription">;
  isOnboarding?: SingleBooleanChoiceArg<"isOnboarding">;
  isPublic?: SingleBooleanChoiceArg<"isPublic">;
};

type VariantPropType = keyof PlasmicMainHeader__VariantsArgs;
export const PlasmicMainHeader__VariantProps = new Array<VariantPropType>(
  "headerStyles",
  "isActive",
  "showVentureDescription",
  "isOnboarding",
  "isPublic"
);

export type PlasmicMainHeader__ArgsType = {
  timelineDescription?: React.ReactNode;
  timelineName?: React.ReactNode;
  ventureName?: React.ReactNode;
  ventureDescription?: React.ReactNode;
};

type ArgPropType = keyof PlasmicMainHeader__ArgsType;
export const PlasmicMainHeader__ArgProps = new Array<ArgPropType>(
  "timelineDescription",
  "timelineName",
  "ventureName",
  "ventureDescription"
);

export type PlasmicMainHeader__OverridesType = {
  container?: p.Flex<"div">;
  iconContainer?: p.Flex<"div">;
  viewHome?: p.Flex<typeof IconButton>;
  viewMembers?: p.Flex<typeof IconButtonMember>;
  viewSettings?: p.Flex<typeof IconButton>;
};

export interface DefaultMainHeaderProps {
  timelineDescription?: React.ReactNode;
  timelineName?: React.ReactNode;
  ventureName?: React.ReactNode;
  ventureDescription?: React.ReactNode;
  headerStyles?: SingleChoiceArg<
    "timelineHeader" | "ventureHeader" | "createNewVenture"
  >;
  isActive?: SingleChoiceArg<
    "feed" | "members" | "settings" | "unnamedVariant"
  >;
  showVentureDescription?: SingleBooleanChoiceArg<"showVentureDescription">;
  isOnboarding?: SingleBooleanChoiceArg<"isOnboarding">;
  isPublic?: SingleBooleanChoiceArg<"isPublic">;
  className?: string;
}

function PlasmicMainHeader__RenderFunc(props: {
  variants: PlasmicMainHeader__VariantsArgs;
  args: PlasmicMainHeader__ArgsType;
  overrides: PlasmicMainHeader__OverridesType;
  dataFetches?: PlasmicMainHeader__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  });

  return (
    true ? (
      <div
        data-plasmic-name={"container"}
        data-plasmic-override={overrides.container}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          defaultcss.all,
          projectcss.root_reset,
          sty.container,
          {
            [sty.container__headerStyles_createNewVenture]: hasVariant(
              variants,
              "headerStyles",
              "createNewVenture"
            ),
            [sty.container__headerStyles_timelineHeader]: hasVariant(
              variants,
              "headerStyles",
              "timelineHeader"
            ),
            [sty.container__headerStyles_ventureHeader]: hasVariant(
              variants,
              "headerStyles",
              "ventureHeader"
            ),
            [sty.container__isActive_feed]: hasVariant(
              variants,
              "isActive",
              "feed"
            ),
          }
        )}
      >
        {(
          hasVariant(variants, "headerStyles", "createNewVenture")
            ? false
            : true
        ) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box___3Xg51, {
              [sty.box__headerStyles_createNewVenture___3Xg51K3Tru]: hasVariant(
                variants,
                "headerStyles",
                "createNewVenture"
              ),
              [sty.box__headerStyles_timelineHeader___3Xg51Rxxpi]: hasVariant(
                variants,
                "headerStyles",
                "timelineHeader"
              ),
              [sty.box__headerStyles_ventureHeader___3Xg51NMQ9]: hasVariant(
                variants,
                "headerStyles",
                "ventureHeader"
              ),
            })}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__sDNfz, {
                [sty.box__headerStyles_createNewVenture__sDNfzk3Tru]:
                  hasVariant(variants, "headerStyles", "createNewVenture"),
                [sty.box__headerStyles_ventureHeader__sDNfzNMQ9]: hasVariant(
                  variants,
                  "headerStyles",
                  "ventureHeader"
                ),
              })}
            >
              {(
                hasVariant(variants, "headerStyles", "ventureHeader")
                  ? false
                  : true
              ) ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box__yHtqj, {
                    [sty.box__headerStyles_createNewVenture__yHtqJk3Tru]:
                      hasVariant(variants, "headerStyles", "createNewVenture"),
                    [sty.box__headerStyles_timelineHeader__yHtqjRxxpi]:
                      hasVariant(variants, "headerStyles", "timelineHeader"),
                    [sty.box__headerStyles_ventureHeader__yHtqjnMQ9]:
                      hasVariant(variants, "headerStyles", "ventureHeader"),
                  })}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: "Wins",
                    value: args.timelineName,
                    className: classNames(sty.slotTimelineName, {
                      [sty.slotTimelineName__headerStyles_timelineHeader]:
                        hasVariant(variants, "headerStyles", "timelineHeader"),
                      [sty.slotTimelineName__headerStyles_ventureHeader]:
                        hasVariant(variants, "headerStyles", "ventureHeader"),
                    }),
                  })}
                </p.Stack>
              ) : null}
              {(
                hasVariant(variants, "headerStyles", "ventureHeader")
                  ? true
                  : hasVariant(variants, "headerStyles", "timelineHeader")
                  ? true
                  : false
              ) ? (
                <p.Stack
                  as={"div"}
                  hasGap={
                    hasVariant(variants, "headerStyles", "timelineHeader")
                      ? true
                      : false
                  }
                  className={classNames(defaultcss.all, sty.box___6YZlv, {
                    [sty.box__headerStyles_timelineHeader___6YZlvRxxpi]:
                      hasVariant(variants, "headerStyles", "timelineHeader"),
                    [sty.box__headerStyles_ventureHeader___6YZlvnMQ9]:
                      hasVariant(variants, "headerStyles", "ventureHeader"),
                  })}
                >
                  {(
                    hasVariant(variants, "headerStyles", "timelineHeader")
                      ? true
                      : false
                  ) ? (
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__y7S0J,
                        {
                          [sty.box__headerStyles_timelineHeader__y7S0JRxxpi]:
                            hasVariant(
                              variants,
                              "headerStyles",
                              "timelineHeader"
                            ),
                          [sty.box__headerStyles_ventureHeader__y7S0JNMQ9]:
                            hasVariant(
                              variants,
                              "headerStyles",
                              "ventureHeader"
                            ),
                        }
                      )}
                    >
                      {hasVariant(variants, "headerStyles", "timelineHeader")
                        ? "@"
                        : "Enter some text"}
                    </div>
                  ) : null}
                  {(
                    hasVariant(variants, "headerStyles", "timelineHeader")
                      ? true
                      : true
                  )
                    ? p.renderPlasmicSlot({
                        defaultContents: (
                          <React.Fragment>
                            <div
                              className={classNames(
                                defaultcss.all,
                                defaultcss.__wab_text,
                                sty.box__oBTp
                              )}
                            >
                              {"Adbloom"}
                            </div>

                            {false ? (
                              <IconButton
                                className={classNames(
                                  "__wab_instance",
                                  sty.iconButton__buruf
                                )}
                                iconSize={"large" as const}
                              >
                                <IconExternalLinkIcon
                                  className={classNames(
                                    defaultcss.all,
                                    sty.svg__vIuG
                                  )}
                                  role={"img"}
                                />
                              </IconButton>
                            ) : null}
                          </React.Fragment>
                        ),
                        value: args.ventureName,
                        className: classNames(sty.slotVentureName, {
                          [sty.slotVentureName__headerStyles_timelineHeader]:
                            hasVariant(
                              variants,
                              "headerStyles",
                              "timelineHeader"
                            ),
                        }),
                      })
                    : null}
                </p.Stack>
              ) : null}
              {(
                hasVariant(
                  variants,
                  "showVentureDescription",
                  "showVentureDescription"
                ) && hasVariant(variants, "headerStyles", "ventureHeader")
                  ? false
                  : hasVariant(
                      variants,
                      "showVentureDescription",
                      "showVentureDescription"
                    )
                  ? true
                  : hasVariant(variants, "headerStyles", "ventureHeader")
                  ? false
                  : hasVariant(variants, "headerStyles", "timelineHeader")
                  ? false
                  : hasVariant(globalVariants, "screen", "mobile")
                  ? false
                  : false
              ) ? (
                <div
                  className={classNames(defaultcss.all, sty.box__fohK2, {
                    [sty.box__headerStyles_timelineHeader__fohK2Rxxpi]:
                      hasVariant(variants, "headerStyles", "timelineHeader"),
                    [sty.box__headerStyles_ventureHeader__fohK2NMQ9]:
                      hasVariant(variants, "headerStyles", "ventureHeader"),
                    [sty.box__showVentureDescription__fohK2CtI95]: hasVariant(
                      variants,
                      "showVentureDescription",
                      "showVentureDescription"
                    ),
                    [sty.box__showVentureDescription_headerStyles_ventureHeader__fohK2CtI95NMQ9]:
                      hasVariant(
                        variants,
                        "showVentureDescription",
                        "showVentureDescription"
                      ) &&
                      hasVariant(variants, "headerStyles", "ventureHeader"),
                  })}
                >
                  {p.renderPlasmicSlot({
                    defaultContents:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    value: args.timelineDescription,
                    className: classNames(sty.slotTimelineDescription, {
                      [sty.slotTimelineDescription__headerStyles_timelineHeader]:
                        hasVariant(variants, "headerStyles", "timelineHeader"),
                      [sty.slotTimelineDescription__headerStyles_timelineHeader_showVentureDescription]:
                        hasVariant(
                          variants,
                          "headerStyles",
                          "timelineHeader"
                        ) &&
                        hasVariant(
                          variants,
                          "showVentureDescription",
                          "showVentureDescription"
                        ),
                      [sty.slotTimelineDescription__headerStyles_ventureHeader]:
                        hasVariant(variants, "headerStyles", "ventureHeader"),
                      [sty.slotTimelineDescription__showVentureDescription]:
                        hasVariant(
                          variants,
                          "showVentureDescription",
                          "showVentureDescription"
                        ),
                      [sty.slotTimelineDescription__showVentureDescription_headerStyles_ventureHeader]:
                        hasVariant(
                          variants,
                          "showVentureDescription",
                          "showVentureDescription"
                        ) &&
                        hasVariant(variants, "headerStyles", "ventureHeader"),
                    }),
                  })}
                </div>
              ) : null}
              {(
                hasVariant(variants, "headerStyles", "timelineHeader") &&
                hasVariant(
                  variants,
                  "showVentureDescription",
                  "showVentureDescription"
                )
                  ? false
                  : hasVariant(
                      variants,
                      "showVentureDescription",
                      "showVentureDescription"
                    )
                  ? true
                  : hasVariant(variants, "headerStyles", "createNewVenture")
                  ? false
                  : hasVariant(variants, "headerStyles", "ventureHeader")
                  ? false
                  : hasVariant(variants, "headerStyles", "timelineHeader")
                  ? false
                  : hasVariant(globalVariants, "screen", "mobile")
                  ? false
                  : true
              ) ? (
                <div
                  className={classNames(defaultcss.all, sty.box__gg4AP, {
                    [sty.box__headerStyles_createNewVenture__gg4APk3Tru]:
                      hasVariant(variants, "headerStyles", "createNewVenture"),
                    [sty.box__headerStyles_timelineHeader__gg4APRxxpi]:
                      hasVariant(variants, "headerStyles", "timelineHeader"),
                    [sty.box__headerStyles_timelineHeader_showVentureDescription__gg4APRxxpiCtI95]:
                      hasVariant(variants, "headerStyles", "timelineHeader") &&
                      hasVariant(
                        variants,
                        "showVentureDescription",
                        "showVentureDescription"
                      ),
                    [sty.box__headerStyles_ventureHeader__gg4APnMQ9]:
                      hasVariant(variants, "headerStyles", "ventureHeader"),
                    [sty.box__showVentureDescription__gg4APctI95]: hasVariant(
                      variants,
                      "showVentureDescription",
                      "showVentureDescription"
                    ),
                  })}
                >
                  {p.renderPlasmicSlot({
                    defaultContents:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec volutpat magna.",
                    value: args.ventureDescription,
                    className: classNames(sty.slotVentureDescription, {
                      [sty.slotVentureDescription__headerStyles_timelineHeader]:
                        hasVariant(variants, "headerStyles", "timelineHeader"),
                      [sty.slotVentureDescription__headerStyles_ventureHeader]:
                        hasVariant(variants, "headerStyles", "ventureHeader"),
                      [sty.slotVentureDescription__showVentureDescription]:
                        hasVariant(
                          variants,
                          "showVentureDescription",
                          "showVentureDescription"
                        ),
                    }),
                  })}
                </div>
              ) : null}
            </p.Stack>

            {(
              hasVariant(variants, "isOnboarding", "isOnboarding")
                ? false
                : hasVariant(variants, "headerStyles", "createNewVenture")
                ? false
                : true
            ) ? (
              <p.Stack
                as={"div"}
                data-plasmic-name={"iconContainer"}
                data-plasmic-override={overrides.iconContainer}
                hasGap={true}
                className={classNames(defaultcss.all, sty.iconContainer, {
                  [sty.iconContainer__headerStyles_createNewVenture]:
                    hasVariant(variants, "headerStyles", "createNewVenture"),
                  [sty.iconContainer__isActive_feed]: hasVariant(
                    variants,
                    "isActive",
                    "feed"
                  ),
                  [sty.iconContainer__isOnboarding]: hasVariant(
                    variants,
                    "isOnboarding",
                    "isOnboarding"
                  ),
                })}
              >
                <IconButton
                  data-plasmic-name={"viewHome"}
                  data-plasmic-override={overrides.viewHome}
                  iconSize={"large" as const}
                  isActive={
                    hasVariant(variants, "isActive", "feed")
                      ? ("isActive" as const)
                      : undefined
                  }
                >
                  <IconFeedIcon
                    className={classNames(defaultcss.all, sty.svg__eTdlE, {
                      [sty.svg__headerStyles_ventureHeader__eTdlEnMQ9]:
                        hasVariant(variants, "headerStyles", "ventureHeader"),
                      [sty.svg__isActive_feed__eTdlEfnkZp]: hasVariant(
                        variants,
                        "isActive",
                        "feed"
                      ),
                    })}
                    role={"img"}
                  />
                </IconButton>

                {(
                  hasVariant(variants, "isPublic", "isPublic") ? false : true
                ) ? (
                  <IconButtonMember
                    data-plasmic-name={"viewMembers"}
                    data-plasmic-override={overrides.viewMembers}
                    className={classNames("__wab_instance", sty.viewMembers, {
                      [sty.viewMembers__headerStyles_ventureHeader]: hasVariant(
                        variants,
                        "headerStyles",
                        "ventureHeader"
                      ),
                      [sty.viewMembers__isActive_feed]: hasVariant(
                        variants,
                        "isActive",
                        "feed"
                      ),
                      [sty.viewMembers__isActive_members]: hasVariant(
                        variants,
                        "isActive",
                        "members"
                      ),
                      [sty.viewMembers__isPublic]: hasVariant(
                        variants,
                        "isPublic",
                        "isPublic"
                      ),
                    })}
                    isActive={
                      hasVariant(variants, "isActive", "members")
                        ? ("isActive" as const)
                        : undefined
                    }
                    memberCount={"+"}
                  />
                ) : null}

                <IconButton
                  data-plasmic-name={"viewSettings"}
                  data-plasmic-override={overrides.viewSettings}
                  className={classNames("__wab_instance", sty.viewSettings, {
                    [sty.viewSettings__headerStyles_ventureHeader]: hasVariant(
                      variants,
                      "headerStyles",
                      "ventureHeader"
                    ),
                    [sty.viewSettings__isActive_settings]: hasVariant(
                      variants,
                      "isActive",
                      "settings"
                    ),
                  })}
                  iconSize={"large" as const}
                  isActive={
                    hasVariant(variants, "isActive", "settings")
                      ? ("isActive" as const)
                      : undefined
                  }
                >
                  <InfosvgIcon
                    className={classNames(defaultcss.all, sty.svg__isMis)}
                    role={"img"}
                  />
                </IconButton>
              </p.Stack>
            ) : null}
          </p.Stack>
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  container: [
    "container",
    "iconContainer",
    "viewHome",
    "viewMembers",
    "viewSettings",
  ],
  iconContainer: ["iconContainer", "viewHome", "viewMembers", "viewSettings"],
  viewHome: ["viewHome"],
  viewMembers: ["viewMembers"],
  viewSettings: ["viewSettings"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  container: "div";
  iconContainer: "div";
  viewHome: typeof IconButton;
  viewMembers: typeof IconButtonMember;
  viewSettings: typeof IconButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMainHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMainHeader__VariantsArgs;
    args?: PlasmicMainHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicMainHeader__Fetches;
  } & Omit<PlasmicMainHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMainHeader__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicMainHeader__ArgProps,
      internalVariantPropNames: PlasmicMainHeader__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicMainHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "container") {
    func.displayName = "PlasmicMainHeader";
  } else {
    func.displayName = `PlasmicMainHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicMainHeader = Object.assign(
  // Top-level PlasmicMainHeader renders the root element
  makeNodeComponent("container"),
  {
    // Helper components rendering sub-elements
    iconContainer: makeNodeComponent("iconContainer"),
    viewHome: makeNodeComponent("viewHome"),
    viewMembers: makeNodeComponent("viewMembers"),
    viewSettings: makeNodeComponent("viewSettings"),

    // Metadata about props expected for PlasmicMainHeader
    internalVariantProps: PlasmicMainHeader__VariantProps,
    internalArgProps: PlasmicMainHeader__ArgProps,
  }
);

export default PlasmicMainHeader;
/* prettier-ignore-end */
