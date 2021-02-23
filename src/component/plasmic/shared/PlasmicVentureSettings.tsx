// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: FuAQiqPeTF
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
import Header from "../../header/index"; // plasmic-import: MkyvVOg5Ik/component
import Sidebar from "../../sidebar/index"; // plasmic-import: FZWTu4L61t/component
import Main from "../../main/index"; // plasmic-import: 0c6QSqHYCk/component
import PostDetails from "../../postdetails/index"; // plasmic-import: 1E73LSzV2l/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicVentureSettings.module.css"; // plasmic-import: FuAQiqPeTF/css

export type PlasmicVentureSettings__VariantMembers = {
  isVisible: "postDetails" | "mobileSidebar";
};

export type PlasmicVentureSettings__VariantsArgs = {
  isVisible?: MultiChoiceArg<"postDetails" | "mobileSidebar">;
};

type VariantPropType = keyof PlasmicVentureSettings__VariantsArgs;
export const PlasmicVentureSettings__VariantProps = new Array<VariantPropType>(
  "isVisible"
);

export type PlasmicVentureSettings__ArgsType = {};
type ArgPropType = keyof PlasmicVentureSettings__ArgsType;
export const PlasmicVentureSettings__ArgProps = new Array<ArgPropType>();

export type PlasmicVentureSettings__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  sidebar?: p.Flex<typeof Sidebar>;
  mainContainer?: p.Flex<"div">;
  main?: p.Flex<typeof Main>;
  postDetails?: p.Flex<typeof PostDetails>;
};

export interface DefaultVentureSettingsProps {
  isVisible?: MultiChoiceArg<"postDetails" | "mobileSidebar">;
  className?: string;
}

function PlasmicVentureSettings__RenderFunc(props: {
  variants: PlasmicVentureSettings__VariantsArgs;
  args: PlasmicVentureSettings__ArgsType;
  overrides: PlasmicVentureSettings__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  });

  return (
    <React.Fragment>
      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root,
            {
              [sty.root__isVisible_mobileSidebar]: hasVariant(
                variants,
                "isVisible",
                "mobileSidebar"
              ),
              [sty.root__isVisible_postDetails]: hasVariant(
                variants,
                "isVisible",
                "postDetails"
              ),
            }
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
            photoAvatar={"photoAvatar" as const}
          />

          <div
            className={classNames(defaultcss.all, sty.box__kRlHv, {
              [sty.box__isVisible_mobileSidebar__kRlHvgEoQs]: hasVariant(
                variants,
                "isVisible",
                "mobileSidebar"
              ),
            })}
          >
            {(
              hasVariant(variants, "isVisible", "mobileSidebar")
                ? true
                : hasVariant(globalVariants, "screen", "mobile")
                ? false
                : true
            ) ? (
              <Sidebar
                data-plasmic-name={"sidebar"}
                data-plasmic-override={overrides.sidebar}
                className={classNames("__wab_instance", sty.sidebar, {
                  [sty.sidebar__isVisible_mobileSidebar]: hasVariant(
                    variants,
                    "isVisible",
                    "mobileSidebar"
                  ),
                })}
                hasInput={"hasInput" as const}
              />
            ) : null}

            <div className={classNames(defaultcss.all, sty.box___1PYva)}>
              <div
                data-plasmic-name={"mainContainer"}
                data-plasmic-override={overrides.mainContainer}
                className={classNames(defaultcss.all, sty.mainContainer)}
              >
                <Main
                  data-plasmic-name={"main"}
                  data-plasmic-override={overrides.main}
                  className={classNames("__wab_instance", sty.main)}
                  isActive={"settings" as const}
                  variantType={"isVenture" as const}
                />
              </div>

              {(
                hasVariant(variants, "isVisible", "postDetails") ? true : false
              ) ? (
                <PostDetails
                  data-plasmic-name={"postDetails"}
                  data-plasmic-override={overrides.postDetails}
                  className={classNames("__wab_instance", sty.postDetails, {
                    [sty.postDetails__isVisible_postDetails]: hasVariant(
                      variants,
                      "isVisible",
                      "postDetails"
                    ),
                  })}
                >
                  {"Post Details"}
                </PostDetails>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "sidebar", "mainContainer", "main", "postDetails"],
  header: ["header"],
  sidebar: ["sidebar"],
  mainContainer: ["mainContainer", "main"],
  main: ["main"],
  postDetails: ["postDetails"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  sidebar: typeof Sidebar;
  mainContainer: "div";
  main: typeof Main;
  postDetails: typeof PostDetails;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicVentureSettings__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicVentureSettings__VariantsArgs;
  args?: PlasmicVentureSettings__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicVentureSettings__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicVentureSettings__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicVentureSettings__ArgProps,
      internalVariantPropNames: PlasmicVentureSettings__VariantProps,
    });

    return PlasmicVentureSettings__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicVentureSettings";
  } else {
    func.displayName = `PlasmicVentureSettings.${nodeName}`;
  }
  return func;
}

export const PlasmicVentureSettings = Object.assign(
  // Top-level PlasmicVentureSettings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    sidebar: makeNodeComponent("sidebar"),
    mainContainer: makeNodeComponent("mainContainer"),
    main: makeNodeComponent("main"),
    postDetails: makeNodeComponent("postDetails"),

    // Metadata about props expected for PlasmicVentureSettings
    internalVariantProps: PlasmicVentureSettings__VariantProps,
    internalArgProps: PlasmicVentureSettings__ArgProps,
  }
);

export default PlasmicVentureSettings;
/* prettier-ignore-end */
