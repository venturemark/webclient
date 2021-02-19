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
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicMainHeader.module.css"; // plasmic-import: LRwT0lHdps/css

import IconExternalLinkIcon from "./icons/PlasmicIcon__IconExternalLink"; // plasmic-import: BDHiWdSyk/icon
import IconFeedIcon from "./icons/PlasmicIcon__IconFeed"; // plasmic-import: gkIqWTG_m/icon
import IconSettings2Icon from "./icons/PlasmicIcon__IconSettings2"; // plasmic-import: sumyU8-X3n/icon

export type PlasmicMainHeader__VariantMembers = {
  headerStyles: "timelineHeader" | "ventureHeader";
  isActive: "feed" | "members" | "settings" | "unnamedVariant";
};

export type PlasmicMainHeader__VariantsArgs = {
  headerStyles?: SingleChoiceArg<"timelineHeader" | "ventureHeader">;
  isActive?: SingleChoiceArg<
    "feed" | "members" | "settings" | "unnamedVariant"
  >;
};

type VariantPropType = keyof PlasmicMainHeader__VariantsArgs;
export const PlasmicMainHeader__VariantProps = new Array<VariantPropType>(
  "headerStyles",
  "isActive"
);

export type PlasmicMainHeader__ArgsType = {
  timelineDescription?: React.ReactNode;
  timelineName?: React.ReactNode;
  venturename?: React.ReactNode;
};

type ArgPropType = keyof PlasmicMainHeader__ArgsType;
export const PlasmicMainHeader__ArgProps = new Array<ArgPropType>(
  "timelineDescription",
  "timelineName",
  "venturename"
);

export type PlasmicMainHeader__OverridesType = {
  container?: p.Flex<"div">;
  iconContainer?: p.Flex<"div">;
  iconButtonMember?: p.Flex<typeof IconButtonMember>;
};

export interface DefaultMainHeaderProps {
  timelineDescription?: React.ReactNode;
  timelineName?: React.ReactNode;
  venturename?: React.ReactNode;
  headerStyles?: SingleChoiceArg<"timelineHeader" | "ventureHeader">;
  isActive?: SingleChoiceArg<
    "feed" | "members" | "settings" | "unnamedVariant"
  >;

  className?: string;
}

function PlasmicMainHeader__RenderFunc(props: {
  variants: PlasmicMainHeader__VariantsArgs;
  args: PlasmicMainHeader__ArgsType;
  overrides: PlasmicMainHeader__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  });

  return (
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
          [sty.container__headerStyles_timelineHeader]: hasVariant(
            variants,
            "headerStyles",
            "timelineHeader"
          ),

          [sty.container__isActive_feed]: hasVariant(
            variants,
            "isActive",
            "feed"
          ),
        }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box___3Xg51, {
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
          className={classNames(defaultcss.all, sty.box__sDNfz)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__yHtqj, {
              [sty.box__headerStyles_timelineHeader__yHtqjRxxpi]: hasVariant(
                variants,
                "headerStyles",
                "timelineHeader"
              ),
            })}
          >
            <p.PlasmicSlot
              defaultContents={"Wins"}
              value={args.timelineName}
              className={classNames(sty.slotTimelineName, {
                [sty.slotTimelineName__headerStyles_timelineHeader]: hasVariant(
                  variants,
                  "headerStyles",
                  "timelineHeader"
                ),
              })}
            />

            {(
              hasVariant(variants, "headerStyles", "timelineHeader")
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
                  [sty.box__headerStyles_timelineHeader___6YZlvRxxpi]: hasVariant(
                    variants,
                    "headerStyles",
                    "timelineHeader"
                  ),
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
                        [sty.box__headerStyles_timelineHeader__y7S0JRxxpi]: hasVariant(
                          variants,
                          "headerStyles",
                          "timelineHeader"
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
                    : false
                ) ? (
                  <p.PlasmicSlot
                    defaultContents={"Adbloom"}
                    value={args.venturename}
                    className={classNames(sty.slotVenturename, {
                      [sty.slotVenturename__headerStyles_timelineHeader]: hasVariant(
                        variants,
                        "headerStyles",
                        "timelineHeader"
                      ),
                    })}
                  />
                ) : null}
              </p.Stack>
            ) : null}
            {(
              hasVariant(variants, "headerStyles", "timelineHeader")
                ? false
                : true
            ) ? (
              <IconButton
                className={classNames(
                  "__wab_instance",
                  sty.iconButton___6HyIq,
                  {
                    [sty.iconButton__headerStyles_timelineHeader___6HyIqRxxpi]: hasVariant(
                      variants,
                      "headerStyles",
                      "timelineHeader"
                    ),
                  }
                )}
                iconSize={"large" as const}
              >
                <IconExternalLinkIcon
                  className={classNames(defaultcss.all, sty.svg__nqhCc)}
                  role={"img"}
                />
              </IconButton>
            ) : null}
          </p.Stack>

          {(
            hasVariant(variants, "headerStyles", "timelineHeader")
              ? false
              : hasVariant(globalVariants, "screen", "mobile")
              ? false
              : true
          ) ? (
            <div
              className={classNames(defaultcss.all, sty.box__fohK2, {
                [sty.box__headerStyles_timelineHeader__fohK2Rxxpi]: hasVariant(
                  variants,
                  "headerStyles",
                  "timelineHeader"
                ),

                [sty.box__headerStyles_ventureHeader__fohK2NMQ9]: hasVariant(
                  variants,
                  "headerStyles",
                  "ventureHeader"
                ),
              })}
            >
              <p.PlasmicSlot
                defaultContents={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec volutpat magna."
                }
                value={args.timelineDescription}
                className={classNames(sty.slotTimelineDescription, {
                  [sty.slotTimelineDescription__headerStyles_timelineHeader]: hasVariant(
                    variants,
                    "headerStyles",
                    "timelineHeader"
                  ),

                  [sty.slotTimelineDescription__headerStyles_ventureHeader]: hasVariant(
                    variants,
                    "headerStyles",
                    "ventureHeader"
                  ),
                })}
              />
            </div>
          ) : null}
        </p.Stack>

        <p.Stack
          as={"div"}
          data-plasmic-name={"iconContainer"}
          data-plasmic-override={overrides.iconContainer}
          hasGap={true}
          className={classNames(defaultcss.all, sty.iconContainer, {
            [sty.iconContainer__isActive_feed]: hasVariant(
              variants,
              "isActive",
              "feed"
            ),
          })}
        >
          <IconButton
            iconSize={"large" as const}
            isActive={
              hasVariant(variants, "isActive", "feed")
                ? ("isActive" as const)
                : undefined
            }
          >
            <IconFeedIcon
              className={classNames(defaultcss.all, sty.svg__eTdlE, {
                [sty.svg__isActive_feed__eTdlEfnkZp]: hasVariant(
                  variants,
                  "isActive",
                  "feed"
                ),
              })}
              role={"img"}
            />
          </IconButton>

          <IconButtonMember
            data-plasmic-name={"iconButtonMember"}
            data-plasmic-override={overrides.iconButtonMember}
            className={classNames("__wab_instance", sty.iconButtonMember, {
              [sty.iconButtonMember__isActive_feed]: hasVariant(
                variants,
                "isActive",
                "feed"
              ),

              [sty.iconButtonMember__isActive_members]: hasVariant(
                variants,
                "isActive",
                "members"
              ),
            })}
            isActive={
              hasVariant(variants, "isActive", "members")
                ? ("isActive" as const)
                : undefined
            }
            memberCount={"+"}
          />

          <IconButton
            className={classNames("__wab_instance", sty.iconButton__nVsD, {
              [sty.iconButton__isActive_settings__nVsDKxQfa]: hasVariant(
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
            <IconSettings2Icon
              className={classNames(defaultcss.all, sty.svg__isMis)}
              role={"img"}
            />
          </IconButton>
        </p.Stack>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  container: ["container", "iconContainer", "iconButtonMember"],
  iconContainer: ["iconContainer", "iconButtonMember"],
  iconButtonMember: ["iconButtonMember"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  container: "div";
  iconContainer: "div";
  iconButtonMember: typeof IconButtonMember;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMainHeader__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicMainHeader__VariantsArgs;
  args?: PlasmicMainHeader__ArgsType;
  overrides?: NodeOverridesType<T>;
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

    return PlasmicMainHeader__RenderFunc({
      variants,
      args,
      overrides,
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
    iconButtonMember: makeNodeComponent("iconButtonMember"),

    // Metadata about props expected for PlasmicMainHeader
    internalVariantProps: PlasmicMainHeader__VariantProps,
    internalArgProps: PlasmicMainHeader__ArgProps,
  }
);

export default PlasmicMainHeader;
/* prettier-ignore-end */
