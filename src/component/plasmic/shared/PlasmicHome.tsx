// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: cRgEcIgCT1
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
import ProfileForm from "../../profileform/index"; // plasmic-import: _XzWccJtXuE/component
import Header from "../../header/index"; // plasmic-import: MkyvVOg5Ik/component
import Sidebar from "../../sidebar/index"; // plasmic-import: FZWTu4L61t/component
import Main from "../../main/index"; // plasmic-import: 0c6QSqHYCk/component
import PostDetails from "../../postdetails/index"; // plasmic-import: 1E73LSzV2l/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicHome.module.css"; // plasmic-import: cRgEcIgCT1/css

export type PlasmicHome__VariantMembers = {
  isVisible: "postDetails" | "mobileSidebar" | "showModal";
};

export type PlasmicHome__VariantsArgs = {
  isVisible?: MultiChoiceArg<"postDetails" | "mobileSidebar" | "showModal">;
};

type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>(
  "isVisible"
);

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  profileForm?: p.Flex<typeof ProfileForm>;
  header?: p.Flex<typeof Header>;
  sidebar?: p.Flex<typeof Sidebar>;
  mainContainer?: p.Flex<"div">;
  main?: p.Flex<typeof Main>;
  postDetails?: p.Flex<typeof PostDetails>;
};

export interface DefaultHomeProps {
  isVisible?: MultiChoiceArg<"postDetails" | "mobileSidebar" | "showModal">;
  className?: string;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
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
              [sty.root__isVisible_showModal]: hasVariant(
                variants,
                "isVisible",
                "showModal"
              ),
            }
          )}
        >
          {(hasVariant(variants, "isVisible", "showModal") ? true : false) ? (
            <div
              className={classNames(defaultcss.all, sty.box__bSzQ, {
                [sty.box__isVisible_showModal__bSzQvxFZh]: hasVariant(
                  variants,
                  "isVisible",
                  "showModal"
                ),
              })}
            >
              <ProfileForm
                data-plasmic-name={"profileForm"}
                data-plasmic-override={overrides.profileForm}
                className={classNames("__wab_instance", sty.profileForm, {
                  [sty.profileForm__isVisible_showModal]: hasVariant(
                    variants,
                    "isVisible",
                    "showModal"
                  ),
                })}
                editProfile={
                  hasVariant(variants, "isVisible", "showModal")
                    ? ("editProfile" as const)
                    : undefined
                }
              />
            </div>
          ) : null}

          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header, {
              [sty.header__isVisible_mobileSidebar]: hasVariant(
                variants,
                "isVisible",
                "mobileSidebar"
              ),
              [sty.header__isVisible_showModal]: hasVariant(
                variants,
                "isVisible",
                "showModal"
              ),
            })}
          />

          <div
            className={classNames(defaultcss.all, sty.box___70Att, {
              [sty.box__isVisible_mobileSidebar___70AttO6F5A]: hasVariant(
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
                  [sty.sidebar__isVisible_mobileSidebar_isVisible_postDetails]:
                    hasVariant(variants, "isVisible", "mobileSidebar") &&
                    hasVariant(variants, "isVisible", "postDetails"),
                })}
                hasInput={"hasInput" as const}
              />
            ) : null}

            <div className={classNames(defaultcss.all, sty.box__cJlKh)}>
              <div
                data-plasmic-name={"mainContainer"}
                data-plasmic-override={overrides.mainContainer}
                className={classNames(defaultcss.all, sty.mainContainer)}
              >
                <Main
                  data-plasmic-name={"main"}
                  data-plasmic-override={overrides.main}
                  className={classNames("__wab_instance", sty.main, {
                    [sty.main__isVisible_postDetails]: hasVariant(
                      variants,
                      "isVisible",
                      "postDetails"
                    ),
                  })}
                  isActive={"feed" as const}
                  variantType={"isEmpty" as const}
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
  root: [
    "root",
    "profileForm",
    "header",
    "sidebar",
    "mainContainer",
    "main",
    "postDetails",
  ],
  profileForm: ["profileForm"],
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
  profileForm: typeof ProfileForm;
  header: typeof Header;
  sidebar: typeof Sidebar;
  mainContainer: "div";
  main: typeof Main;
  postDetails: typeof PostDetails;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicHome__VariantsArgs;
  args?: PlasmicHome__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicHome__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps,
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    profileForm: makeNodeComponent("profileForm"),
    header: makeNodeComponent("header"),
    sidebar: makeNodeComponent("sidebar"),
    mainContainer: makeNodeComponent("mainContainer"),
    main: makeNodeComponent("main"),
    postDetails: makeNodeComponent("postDetails"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
