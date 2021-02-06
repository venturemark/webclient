// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: FZWTu4L61t
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
import SidebarItem from "../../sidebaritem/index"; // plasmic-import: KDElHbQmfd/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicSidebar.module.css"; // plasmic-import: FZWTu4L61t/css

import IconHomeIcon from "./icons/PlasmicIcon__IconHome"; // plasmic-import: Z_5uLzTckE/icon
import IconHashIcon from "./icons/PlasmicIcon__IconHash"; // plasmic-import: AVLV6uMr56/icon

export type PlasmicSidebar__VariantMembers = {
  hasInput: "hasInput";
};

export type PlasmicSidebar__VariantsArgs = {
  hasInput?: SingleBooleanChoiceArg<"hasInput">;
};

type VariantPropType = keyof PlasmicSidebar__VariantsArgs;
export const PlasmicSidebar__VariantProps = new Array<VariantPropType>(
  "hasInput"
);

export type PlasmicSidebar__ArgsType = {};
type ArgPropType = keyof PlasmicSidebar__ArgsType;
export const PlasmicSidebar__ArgProps = new Array<ArgPropType>();

export type PlasmicSidebar__OverridesType = {
  root?: p.Flex<"div">;
  topSidebar?: p.Flex<"div">;
  scrollContainer?: p.Flex<"div">;
  homeSidebarItem?: p.Flex<typeof SidebarItem>;
  organizationName?: p.Flex<typeof SidebarItem>;
  addTimeline?: p.Flex<typeof SidebarItem>;
  timelinesContainer?: p.Flex<"div">;
};

export interface DefaultSidebarProps {
  hasInput?: SingleBooleanChoiceArg<"hasInput">;
  className?: string;
}

function PlasmicSidebar__RenderFunc(props: {
  variants: PlasmicSidebar__VariantsArgs;
  args: PlasmicSidebar__ArgsType;
  overrides: PlasmicSidebar__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__hasInput]: hasVariant(variants, "hasInput", "hasInput"),
      })}
    >
      <div
        data-plasmic-name={"topSidebar"}
        data-plasmic-override={overrides.topSidebar}
        className={classNames(defaultcss.all, sty.topSidebar, {
          [sty.topSidebar__hasInput]: hasVariant(
            variants,
            "hasInput",
            "hasInput"
          ),
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"scrollContainer"}
          data-plasmic-override={overrides.scrollContainer}
          hasGap={true}
          className={classNames(defaultcss.all, sty.scrollContainer, {
            [sty.scrollContainer__hasInput]: hasVariant(
              variants,
              "hasInput",
              "hasInput"
            ),
          })}
        >
          <SidebarItem
            data-plasmic-name={"homeSidebarItem"}
            data-plasmic-override={overrides.homeSidebarItem}
            className={classNames("__wab_instance", sty.homeSidebarItem, {
              [sty.homeSidebarItem__hasInput]: hasVariant(
                variants,
                "hasInput",
                "hasInput"
              ),
            })}
            isCurrent={"isCurrent" as const}
            name={
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box___5ZqBm
                )}
              >
                {"Home"}
              </div>
            }
          >
            <IconHomeIcon
              className={classNames(defaultcss.all, sty.svg__bkdhJ)}
              role={"img"}
            />
          </SidebarItem>

          <SidebarItem
            data-plasmic-name={"organizationName"}
            data-plasmic-override={overrides.organizationName}
            className={classNames("__wab_instance", sty.organizationName, {
              [sty.organizationName__hasInput]: hasVariant(
                variants,
                "hasInput",
                "hasInput"
              ),
            })}
            isOrganization={"isOrganization" as const}
            name={
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__ynJp1
                )}
              >
                {"Baron Fig"}
              </div>
            }
          >
            <IconHashIcon
              className={classNames(defaultcss.all, sty.svg__xNo8O)}
              role={"img"}
            />
          </SidebarItem>

          {(hasVariant(variants, "hasInput", "hasInput") ? true : false) ? (
            <SidebarItem
              data-plasmic-name={"addTimeline"}
              data-plasmic-override={overrides.addTimeline}
              className={classNames("__wab_instance", sty.addTimeline, {
                [sty.addTimeline__hasInput]: hasVariant(
                  variants,
                  "hasInput",
                  "hasInput"
                ),
              })}
              isInput={"isInput" as const}
              name={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__pMluL
                  )}
                >
                  {"Wins"}
                </div>
              }
            >
              <IconHashIcon
                className={classNames(defaultcss.all, sty.svg__rRxnv)}
                role={"img"}
              />
            </SidebarItem>
          ) : null}

          <div
            data-plasmic-name={"timelinesContainer"}
            data-plasmic-override={overrides.timelinesContainer}
            className={classNames(defaultcss.all, sty.timelinesContainer, {
              [sty.timelinesContainer__hasInput]: hasVariant(
                variants,
                "hasInput",
                "hasInput"
              ),
            })}
          >
            <SidebarItem
              className={classNames("__wab_instance", sty.sidebarItem__yyOcY, {
                [sty.sidebarItem__hasInput__yyOcYj2HLz]: hasVariant(
                  variants,
                  "hasInput",
                  "hasInput"
                ),
              })}
              name={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__vTmiz
                  )}
                >
                  {"Wins"}
                </div>
              }
            >
              <IconHashIcon
                className={classNames(defaultcss.all, sty.svg__uZxxn)}
                role={"img"}
              />
            </SidebarItem>

            <SidebarItem
              className={classNames("__wab_instance", sty.sidebarItem__na520, {
                [sty.sidebarItem__hasInput__na520J2HLz]: hasVariant(
                  variants,
                  "hasInput",
                  "hasInput"
                ),
              })}
              hasUpdate={"hasUpdate" as const}
              name={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__ox4IL
                  )}
                >
                  {"Metrics"}
                </div>
              }
            >
              <IconHashIcon
                className={classNames(defaultcss.all, sty.svg__gm7Z6)}
                role={"img"}
              />
            </SidebarItem>
          </div>
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "topSidebar",
    "scrollContainer",
    "homeSidebarItem",
    "organizationName",
    "addTimeline",
    "timelinesContainer",
  ],
  topSidebar: [
    "topSidebar",
    "scrollContainer",
    "homeSidebarItem",
    "organizationName",
    "addTimeline",
    "timelinesContainer",
  ],
  scrollContainer: [
    "scrollContainer",
    "homeSidebarItem",
    "organizationName",
    "addTimeline",
    "timelinesContainer",
  ],
  homeSidebarItem: ["homeSidebarItem"],
  organizationName: ["organizationName"],
  addTimeline: ["addTimeline"],
  timelinesContainer: ["timelinesContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  topSidebar: "div";
  scrollContainer: "div";
  homeSidebarItem: typeof SidebarItem;
  organizationName: typeof SidebarItem;
  addTimeline: typeof SidebarItem;
  timelinesContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSidebar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicSidebar__VariantsArgs;
  args?: PlasmicSidebar__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicSidebar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicSidebar__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSidebar__ArgProps,
      internalVariantPropNames: PlasmicSidebar__VariantProps,
    });

    return PlasmicSidebar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSidebar";
  } else {
    func.displayName = `PlasmicSidebar.${nodeName}`;
  }
  return func;
}

export const PlasmicSidebar = Object.assign(
  // Top-level PlasmicSidebar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    topSidebar: makeNodeComponent("topSidebar"),
    scrollContainer: makeNodeComponent("scrollContainer"),
    homeSidebarItem: makeNodeComponent("homeSidebarItem"),
    organizationName: makeNodeComponent("organizationName"),
    addTimeline: makeNodeComponent("addTimeline"),
    timelinesContainer: makeNodeComponent("timelinesContainer"),

    // Metadata about props expected for PlasmicSidebar
    internalVariantProps: PlasmicSidebar__VariantProps,
    internalArgProps: PlasmicSidebar__ArgProps,
  }
);

export default PlasmicSidebar;
/* prettier-ignore-end */
