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
import Dropdown from "../../dropdown/index"; // plasmic-import: Umq3CDOCIR/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicSidebarItem.module.css"; // plasmic-import: KDElHbQmfd/css

import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon
import IconAccordianIcon from "./icons/PlasmicIcon__IconAccordian"; // plasmic-import: UPgEusYgX/icon
import IconHashIcon from "./icons/PlasmicIcon__IconHash"; // plasmic-import: AVLV6uMr56/icon
import VectorsvgIcon from "./icons/PlasmicIcon__Vectorsvg"; // plasmic-import: kQoy0KbdjL/icon
import IconDotMenuIcon from "./icons/PlasmicIcon__IconDotMenu"; // plasmic-import: Dz069s-rE/icon

export type PlasmicSidebarItem__VariantMembers = {
  itemType: "timeline" | "createTimeline" | "ventureCollapsed";
  isActive: "isActive";
  isUserOnClick: "isUserOnClick";
};

export type PlasmicSidebarItem__VariantsArgs = {
  itemType?: SingleChoiceArg<
    "timeline" | "createTimeline" | "ventureCollapsed"
  >;
  isActive?: SingleBooleanChoiceArg<"isActive">;
  isUserOnClick?: SingleBooleanChoiceArg<"isUserOnClick">;
};

type VariantPropType = keyof PlasmicSidebarItem__VariantsArgs;
export const PlasmicSidebarItem__VariantProps = new Array<VariantPropType>(
  "itemType",
  "isActive",
  "isUserOnClick"
);

export type PlasmicSidebarItem__ArgsType = {
  name?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSidebarItem__ArgsType;
export const PlasmicSidebarItem__ArgProps = new Array<ArgPropType>("name");

export type PlasmicSidebarItem__OverridesType = {
  root?: p.Flex<"div">;
  itemContainer?: p.Flex<"div">;
  icon?: p.Flex<typeof IconButton>;
  textbox?: p.Flex<"input">;
  iconButton?: p.Flex<typeof IconButton>;
  dropdown?: p.Flex<typeof Dropdown>;
};

export interface DefaultSidebarItemProps {
  name?: React.ReactNode;
  itemType?: SingleChoiceArg<
    "timeline" | "createTimeline" | "ventureCollapsed"
  >;
  isActive?: SingleBooleanChoiceArg<"isActive">;
  isUserOnClick?: SingleBooleanChoiceArg<"isUserOnClick">;
  className?: string;
}

function PlasmicSidebarItem__RenderFunc(props: {
  variants: PlasmicSidebarItem__VariantsArgs;
  args: PlasmicSidebarItem__ArgsType;
  overrides: PlasmicSidebarItem__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover,
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__isActive]: hasVariant(variants, "isActive", "isActive"),
        [sty.root__isUserOnClick]: hasVariant(
          variants,
          "isUserOnClick",
          "isUserOnClick"
        ),
        [sty.root__isUserOnClick_itemType_timeline]:
          hasVariant(variants, "isUserOnClick", "isUserOnClick") &&
          hasVariant(variants, "itemType", "timeline"),
        [sty.root__itemType_createTimeline]: hasVariant(
          variants,
          "itemType",
          "createTimeline"
        ),
        [sty.root__itemType_timeline]: hasVariant(
          variants,
          "itemType",
          "timeline"
        ),
      })}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      {(
        hasVariant(variants, "itemType", "createTimeline") &&
        triggers.hover_root
          ? true
          : true
      ) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"itemContainer"}
          data-plasmic-override={overrides.itemContainer}
          hasGap={true}
          className={classNames(defaultcss.all, sty.itemContainer, {
            [sty.itemContainer__isActive]: hasVariant(
              variants,
              "isActive",
              "isActive"
            ),
            [sty.itemContainer__isActive_itemType_createTimeline]:
              hasVariant(variants, "isActive", "isActive") &&
              hasVariant(variants, "itemType", "createTimeline"),
            [sty.itemContainer__itemType_createTimeline]: hasVariant(
              variants,
              "itemType",
              "createTimeline"
            ),
            [sty.itemContainer__itemType_timeline]: hasVariant(
              variants,
              "itemType",
              "timeline"
            ),
            [sty.itemContainer__itemType_ventureCollapsed]: hasVariant(
              variants,
              "itemType",
              "ventureCollapsed"
            ),
          })}
        >
          {(
            hasVariant(variants, "itemType", "createTimeline") ? true : false
          ) ? (
            <div
              className={classNames(defaultcss.all, sty.box__lklH, {
                [sty.box__itemType_createTimeline__lklHOuGst]: hasVariant(
                  variants,
                  "itemType",
                  "createTimeline"
                ),
              })}
            >
              {(
                hasVariant(variants, "itemType", "createTimeline")
                  ? true
                  : false
              ) ? (
                <IconPlusIcon
                  className={classNames(defaultcss.all, sty.svg__w77Z, {
                    [sty.svg__itemType_createTimeline__w77ZOuGst]: hasVariant(
                      variants,
                      "itemType",
                      "createTimeline"
                    ),
                  })}
                  role={"img"}
                />
              ) : null}
            </div>
          ) : null}
          {(
            hasVariant(variants, "itemType", "createTimeline") ? false : true
          ) ? (
            <IconButton
              data-plasmic-name={"icon"}
              data-plasmic-override={overrides.icon}
              className={classNames("__wab_instance", sty.icon, {
                [sty.icon__isActive]: hasVariant(
                  variants,
                  "isActive",
                  "isActive"
                ),
                [sty.icon__isActive_itemType_createTimeline]:
                  hasVariant(variants, "isActive", "isActive") &&
                  hasVariant(variants, "itemType", "createTimeline"),
                [sty.icon__isUserOnClick]: hasVariant(
                  variants,
                  "isUserOnClick",
                  "isUserOnClick"
                ),
                [sty.icon__itemType_createTimeline]: hasVariant(
                  variants,
                  "itemType",
                  "createTimeline"
                ),
              })}
              greenBgHover={
                hasVariant(variants, "isActive", "isActive") &&
                triggers.hover_root
                  ? ("greenBgHover" as const)
                  : hasVariant(variants, "isActive", "isActive") &&
                    hasVariant(variants, "itemType", "createTimeline")
                  ? ("greenBgHover" as const)
                  : undefined
              }
            >
              <p.PlasmicIcon
                PlasmicIconType={
                  hasVariant(variants, "itemType", "ventureCollapsed")
                    ? VectorsvgIcon
                    : hasVariant(variants, "itemType", "createTimeline")
                    ? IconPlusIcon
                    : hasVariant(variants, "itemType", "timeline")
                    ? IconHashIcon
                    : IconAccordianIcon
                }
                className={classNames(defaultcss.all, sty.svg___6Fx5D, {
                  [sty.svg__isActive___6Fx5Dw0Xu8]: hasVariant(
                    variants,
                    "isActive",
                    "isActive"
                  ),
                  [sty.svg__itemType_createTimeline___6Fx5DOuGst]: hasVariant(
                    variants,
                    "itemType",
                    "createTimeline"
                  ),
                  [sty.svg__itemType_timeline___6Fx5DoN3Wv]: hasVariant(
                    variants,
                    "itemType",
                    "timeline"
                  ),
                  [sty.svg__itemType_ventureCollapsed___6Fx5D4PCv]: hasVariant(
                    variants,
                    "itemType",
                    "ventureCollapsed"
                  ),
                })}
                role={"img"}
              />
            </IconButton>
          ) : null}
          {(
            hasVariant(variants, "itemType", "createTimeline") &&
            triggers.hover_root
              ? true
              : hasVariant(variants, "itemType", "createTimeline")
              ? false
              : true
          ) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__zwdJs, {
                [sty.box__itemType_createTimeline__zwdJsOuGst]: hasVariant(
                  variants,
                  "itemType",
                  "createTimeline"
                ),
                [sty.box__itemType_timeline__zwdJSoN3Wv]: hasVariant(
                  variants,
                  "itemType",
                  "timeline"
                ),
              })}
            >
              <p.PlasmicSlot
                defaultContents={
                  <React.Fragment>
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__j6CkC
                      )}
                    >
                      {"Add Timeline"}
                    </div>

                    {false ? (
                      <input
                        data-plasmic-name={"textbox"}
                        data-plasmic-override={overrides.textbox}
                        className={classNames(defaultcss.input, sty.textbox)}
                        placeholder={"Enter name" as const}
                        size={1 as const}
                        type={"text" as const}
                        value={"" as const}
                      />
                    ) : null}
                  </React.Fragment>
                }
                value={args.name}
                className={classNames(sty.slotName, {
                  [sty.slotName__isActive]: hasVariant(
                    variants,
                    "isActive",
                    "isActive"
                  ),
                  [sty.slotName__itemType_createTimeline]: hasVariant(
                    variants,
                    "itemType",
                    "createTimeline"
                  ),
                  [sty.slotName__itemType_timeline]: hasVariant(
                    variants,
                    "itemType",
                    "timeline"
                  ),
                })}
              />
            </p.Stack>
          ) : null}
          {(
            hasVariant(variants, "itemType", "createTimeline") &&
            triggers.hover_root
              ? false
              : triggers.hover_root
              ? true
              : hasVariant(variants, "isUserOnClick", "isUserOnClick")
              ? true
              : hasVariant(variants, "itemType", "createTimeline")
              ? false
              : false
          ) ? (
            <IconButton
              data-plasmic-name={"iconButton"}
              data-plasmic-override={overrides.iconButton}
              className={classNames("__wab_instance", sty.iconButton, {
                [sty.iconButton__isActive]: hasVariant(
                  variants,
                  "isActive",
                  "isActive"
                ),
                [sty.iconButton__isActive_itemType_createTimeline]:
                  hasVariant(variants, "isActive", "isActive") &&
                  hasVariant(variants, "itemType", "createTimeline"),
                [sty.iconButton__isUserOnClick]: hasVariant(
                  variants,
                  "isUserOnClick",
                  "isUserOnClick"
                ),
                [sty.iconButton__itemType_createTimeline]: hasVariant(
                  variants,
                  "itemType",
                  "createTimeline"
                ),
              })}
              greenBgHover={
                hasVariant(variants, "isActive", "isActive") &&
                triggers.hover_root
                  ? ("greenBgHover" as const)
                  : hasVariant(variants, "isActive", "isActive") &&
                    hasVariant(variants, "itemType", "createTimeline")
                  ? ("greenBgHover" as const)
                  : undefined
              }
            >
              <IconDotMenuIcon
                className={classNames(defaultcss.all, sty.svg__zhtWc, {
                  [sty.svg__isActive__zhtWcw0Xu8]: hasVariant(
                    variants,
                    "isActive",
                    "isActive"
                  ),
                  [sty.svg__isActive_isUserOnClick__zhtWcw0Xu8XgVg8]:
                    hasVariant(variants, "isActive", "isActive") &&
                    hasVariant(variants, "isUserOnClick", "isUserOnClick"),
                  [sty.svg__isActive_itemType_createTimeline__zhtWcw0Xu8OuGst]:
                    hasVariant(variants, "isActive", "isActive") &&
                    hasVariant(variants, "itemType", "createTimeline"),
                  [sty.svg__isUserOnClick__zhtWcXgVg8]: hasVariant(
                    variants,
                    "isUserOnClick",
                    "isUserOnClick"
                  ),
                })}
                role={"img"}
              />
            </IconButton>
          ) : null}
          {(
            hasVariant(variants, "isUserOnClick", "isUserOnClick") &&
            triggers.hover_root
              ? true
              : hasVariant(variants, "isUserOnClick", "isUserOnClick")
              ? true
              : false
          ) ? (
            <Dropdown
              data-plasmic-name={"dropdown"}
              data-plasmic-override={overrides.dropdown}
              className={classNames("__wab_instance", sty.dropdown, {
                [sty.dropdown__isUserOnClick]: hasVariant(
                  variants,
                  "isUserOnClick",
                  "isUserOnClick"
                ),
                [sty.dropdown__isUserOnClick_itemType_timeline]:
                  hasVariant(variants, "isUserOnClick", "isUserOnClick") &&
                  hasVariant(variants, "itemType", "timeline"),
              })}
              rename2={
                hasVariant(variants, "isUserOnClick", "isUserOnClick") &&
                hasVariant(variants, "itemType", "timeline") &&
                triggers.hover_root
                  ? "Edit Timeline"
                  : hasVariant(variants, "itemType", "timeline")
                  ? "Edit Timeline"
                  : "Edit Venture"
              }
            />
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "itemContainer", "icon", "textbox", "iconButton", "dropdown"],
  itemContainer: ["itemContainer", "icon", "textbox", "iconButton", "dropdown"],
  icon: ["icon"],
  textbox: ["textbox"],
  iconButton: ["iconButton"],
  dropdown: ["dropdown"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  itemContainer: "div";
  icon: typeof IconButton;
  textbox: "input";
  iconButton: typeof IconButton;
  dropdown: typeof Dropdown;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSidebarItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicSidebarItem__VariantsArgs;
  args?: PlasmicSidebarItem__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicSidebarItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicSidebarItem__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSidebarItem__ArgProps,
      internalVariantPropNames: PlasmicSidebarItem__VariantProps,
    });

    return PlasmicSidebarItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSidebarItem";
  } else {
    func.displayName = `PlasmicSidebarItem.${nodeName}`;
  }
  return func;
}

export const PlasmicSidebarItem = Object.assign(
  // Top-level PlasmicSidebarItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    itemContainer: makeNodeComponent("itemContainer"),
    icon: makeNodeComponent("icon"),
    textbox: makeNodeComponent("textbox"),
    iconButton: makeNodeComponent("iconButton"),
    dropdown: makeNodeComponent("dropdown"),

    // Metadata about props expected for PlasmicSidebarItem
    internalVariantProps: PlasmicSidebarItem__VariantProps,
    internalArgProps: PlasmicSidebarItem__ArgProps,
  }
);

export default PlasmicSidebarItem;
/* prettier-ignore-end */
