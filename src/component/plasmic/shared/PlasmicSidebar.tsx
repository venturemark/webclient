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
import PhotoAvatar from "../../photoavatar/index"; // plasmic-import: uaoIqTcPRC-/component
import ProfileDropdown from "../../profiledropdown/index"; // plasmic-import: bGjqf-R4Tc/component
import SidebarItemGroup from "../../sidebaritemgroup/index"; // plasmic-import: JQWYItyW5A/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicSidebar.module.css"; // plasmic-import: FZWTu4L61t/css

import LockIconsvgIcon from "./icons/PlasmicIcon__LockIconsvg"; // plasmic-import: 1tBTTGMGvG/icon

export type PlasmicSidebar__VariantMembers = {
  hasInput: "hasInput";
  isPublic: "isPublic";
  isDropdown: "isDropdown";
};

export type PlasmicSidebar__VariantsArgs = {
  hasInput?: SingleBooleanChoiceArg<"hasInput">;
  isPublic?: SingleBooleanChoiceArg<"isPublic">;
  isDropdown?: SingleBooleanChoiceArg<"isDropdown">;
};

type VariantPropType = keyof PlasmicSidebar__VariantsArgs;
export const PlasmicSidebar__VariantProps = new Array<VariantPropType>(
  "hasInput",
  "isPublic",
  "isDropdown"
);

export type PlasmicSidebar__ArgsType = {
  userName?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSidebar__ArgsType;
export const PlasmicSidebar__ArgProps = new Array<ArgPropType>("userName");

export type PlasmicSidebar__OverridesType = {
  root?: p.Flex<"div">;
  topSidebar?: p.Flex<"div">;
  accountSettings?: p.Flex<"div">;
  photoAvatar?: p.Flex<typeof PhotoAvatar>;
  dropdown?: p.Flex<typeof ProfileDropdown>;
  scrollContainer?: p.Flex<"div">;
  itemGroupContainer?: p.Flex<"div">;
  sidebarItemGroup?: p.Flex<typeof SidebarItemGroup>;
  viewCreateVenture?: p.Flex<"a">;
  svg?: p.Flex<"svg">;
};

export interface DefaultSidebarProps {
  userName?: React.ReactNode;
  hasInput?: SingleBooleanChoiceArg<"hasInput">;
  isPublic?: SingleBooleanChoiceArg<"isPublic">;
  isDropdown?: SingleBooleanChoiceArg<"isDropdown">;
  className?: string;
}

function PlasmicSidebar__RenderFunc(props: {
  variants: PlasmicSidebar__VariantsArgs;
  args: PlasmicSidebar__ArgsType;
  overrides: PlasmicSidebar__OverridesType;
  dataFetches?: PlasmicSidebar__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

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
        {(hasVariant(variants, "isPublic", "isPublic") ? false : true) ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"accountSettings"}
            data-plasmic-override={overrides.accountSettings}
            hasGap={true}
            className={classNames(defaultcss.all, sty.accountSettings, {
              [sty.accountSettings__hasInput]: hasVariant(
                variants,
                "hasInput",
                "hasInput"
              ),
              [sty.accountSettings__isDropdown]: hasVariant(
                variants,
                "isDropdown",
                "isDropdown"
              ),
              [sty.accountSettings__isPublic]: hasVariant(
                variants,
                "isPublic",
                "isPublic"
              ),
            })}
          >
            <PhotoAvatar
              data-plasmic-name={"photoAvatar"}
              data-plasmic-override={overrides.photoAvatar}
              className={classNames("__wab_instance", sty.photoAvatar)}
            />

            {p.renderPlasmicSlot({
              defaultContents: "Name",
              value: args.userName,
            })}

            {(
              hasVariant(variants, "isDropdown", "isDropdown") ? true : false
            ) ? (
              <ProfileDropdown
                data-plasmic-name={"dropdown"}
                data-plasmic-override={overrides.dropdown}
                className={classNames("__wab_instance", sty.dropdown, {
                  [sty.dropdown__isDropdown]: hasVariant(
                    variants,
                    "isDropdown",
                    "isDropdown"
                  ),
                })}
                prop={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__jYiYa,
                      {
                        [sty.box__isDropdown__jYiYAmySg3]: hasVariant(
                          variants,
                          "isDropdown",
                          "isDropdown"
                        ),
                      }
                    )}
                  >
                    {"Create new Venture"}
                  </div>
                }
                prop3={"Log Out"}
              />
            ) : null}
          </p.Stack>
        ) : null}

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
            [sty.scrollContainer__isDropdown]: hasVariant(
              variants,
              "isDropdown",
              "isDropdown"
            ),
            [sty.scrollContainer__isPublic]: hasVariant(
              variants,
              "isPublic",
              "isPublic"
            ),
          })}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"itemGroupContainer"}
            data-plasmic-override={overrides.itemGroupContainer}
            hasGap={true}
            className={classNames(defaultcss.all, sty.itemGroupContainer)}
          >
            {(hasVariant(variants, "hasInput", "hasInput") ? true : false) ? (
              <SidebarItemGroup
                data-plasmic-name={"sidebarItemGroup"}
                data-plasmic-override={overrides.sidebarItemGroup}
                isOwner={"isOwner" as const}
                isPublic={
                  hasVariant(variants, "isPublic", "isPublic")
                    ? ("isPublic" as const)
                    : undefined
                }
              />
            ) : null}
          </p.Stack>

          {(hasVariant(variants, "isPublic", "isPublic") ? true : false) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__vgJde, {
                [sty.box__isPublic__vgJdexw1PM]: hasVariant(
                  variants,
                  "isPublic",
                  "isPublic"
                ),
              })}
            >
              {(hasVariant(variants, "isPublic", "isPublic") ? false : true) ? (
                <a
                  data-plasmic-name={"viewCreateVenture"}
                  data-plasmic-override={overrides.viewCreateVenture}
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.viewCreateVenture,
                    {
                      [sty.viewCreateVenture__isPublic]: hasVariant(
                        variants,
                        "isPublic",
                        "isPublic"
                      ),
                    }
                  )}
                >
                  {"Create New Venture"}
                </a>
              ) : null}
              {(hasVariant(variants, "isPublic", "isPublic") ? true : false) ? (
                <LockIconsvgIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(defaultcss.all, sty.svg, {
                    [sty.svg__isPublic]: hasVariant(
                      variants,
                      "isPublic",
                      "isPublic"
                    ),
                  })}
                  role={"img"}
                />
              ) : null}
              {(hasVariant(variants, "isPublic", "isPublic") ? true : false) ? (
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__mR9P,
                    {
                      [sty.box__isPublic__mR9Pxw1PM]: hasVariant(
                        variants,
                        "isPublic",
                        "isPublic"
                      ),
                    }
                  )}
                >
                  {hasVariant(variants, "isPublic", "isPublic")
                    ? "Connect with this venture to recieve access to other timelines and recieve future updates"
                    : "Enter some text"}
                </div>
              ) : null}
            </p.Stack>
          ) : null}
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "topSidebar",
    "accountSettings",
    "photoAvatar",
    "dropdown",
    "scrollContainer",
    "itemGroupContainer",
    "sidebarItemGroup",
    "viewCreateVenture",
    "svg",
  ],
  topSidebar: [
    "topSidebar",
    "accountSettings",
    "photoAvatar",
    "dropdown",
    "scrollContainer",
    "itemGroupContainer",
    "sidebarItemGroup",
    "viewCreateVenture",
    "svg",
  ],
  accountSettings: ["accountSettings", "photoAvatar", "dropdown"],
  photoAvatar: ["photoAvatar"],
  dropdown: ["dropdown"],
  scrollContainer: [
    "scrollContainer",
    "itemGroupContainer",
    "sidebarItemGroup",
    "viewCreateVenture",
    "svg",
  ],
  itemGroupContainer: ["itemGroupContainer", "sidebarItemGroup"],
  sidebarItemGroup: ["sidebarItemGroup"],
  viewCreateVenture: ["viewCreateVenture"],
  svg: ["svg"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  topSidebar: "div";
  accountSettings: "div";
  photoAvatar: typeof PhotoAvatar;
  dropdown: typeof ProfileDropdown;
  scrollContainer: "div";
  itemGroupContainer: "div";
  sidebarItemGroup: typeof SidebarItemGroup;
  viewCreateVenture: "a";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSidebar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSidebar__VariantsArgs;
    args?: PlasmicSidebar__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSidebar__Fetches;
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

    const { dataFetches } = props;

    return PlasmicSidebar__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
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
    accountSettings: makeNodeComponent("accountSettings"),
    photoAvatar: makeNodeComponent("photoAvatar"),
    dropdown: makeNodeComponent("dropdown"),
    scrollContainer: makeNodeComponent("scrollContainer"),
    itemGroupContainer: makeNodeComponent("itemGroupContainer"),
    sidebarItemGroup: makeNodeComponent("sidebarItemGroup"),
    viewCreateVenture: makeNodeComponent("viewCreateVenture"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicSidebar
    internalVariantProps: PlasmicSidebar__VariantProps,
    internalArgProps: PlasmicSidebar__ArgProps,
  }
);

export default PlasmicSidebar;
/* prettier-ignore-end */
