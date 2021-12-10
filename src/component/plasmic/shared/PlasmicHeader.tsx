// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: MkyvVOg5Ik
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
import IconButton from "../../iconbutton/index"; // plasmic-import: UIpuE7M1YY/component
import Button from "../../button/index"; // plasmic-import: JU1t0P9pFY/component
import PhotoAvatar from "../../photoavatar/index"; // plasmic-import: uaoIqTcPRC-/component
import ProfileDropdown from "../../profiledropdown/index"; // plasmic-import: bGjqf-R4Tc/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicHeader.module.css"; // plasmic-import: MkyvVOg5Ik/css

import IconMenuIcon from "./icons/PlasmicIcon__IconMenu"; // plasmic-import: gDL0fFl2pD/icon
import IconExternalLinkIcon from "./icons/PlasmicIcon__IconExternalLink"; // plasmic-import: BDHiWdSyk/icon
import LockIconsvgIcon from "./icons/PlasmicIcon__LockIconsvg"; // plasmic-import: 1tBTTGMGvG/icon
import IconRightIcon from "./icons/PlasmicIcon__IconRight"; // plasmic-import: v822ZhrBq/icon
import IconSettings2Icon from "./icons/PlasmicIcon__IconSettings2"; // plasmic-import: sumyU8-X3n/icon

export type PlasmicHeader__VariantMembers = {
  mobileMenu: "mobileMenu";
  profileDropdown: "profileDropdown";
  views: "userAccount" | "publicView";
};

export type PlasmicHeader__VariantsArgs = {
  mobileMenu?: SingleBooleanChoiceArg<"mobileMenu">;
  profileDropdown?: SingleBooleanChoiceArg<"profileDropdown">;
  views?: SingleChoiceArg<"userAccount" | "publicView">;
};

type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>(
  "mobileMenu",
  "profileDropdown",
  "views"
);

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
  toggleMobileSidebar?: p.Flex<"svg">;
  mainHeader?: p.Flex<typeof MainHeader>;
  text?: p.Flex<"div">;
  link?: p.Flex<"a">;
  button?: p.Flex<typeof Button>;
  iconButton?: p.Flex<typeof IconButton>;
  avatar?: p.Flex<typeof PhotoAvatar>;
  dropdown?: p.Flex<typeof ProfileDropdown>;
};

export interface DefaultHeaderProps {
  mobileMenu?: SingleBooleanChoiceArg<"mobileMenu">;
  profileDropdown?: SingleBooleanChoiceArg<"profileDropdown">;
  views?: SingleChoiceArg<"userAccount" | "publicView">;
  className?: string;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
  dataFetches?: PlasmicHeader__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__mobileMenu]: hasVariant(
          variants,
          "mobileMenu",
          "mobileMenu"
        ),
        [sty.root__views_publicView]: hasVariant(
          variants,
          "views",
          "publicView"
        ),
      })}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ky7Rm, {
          [sty.freeBox__mobileMenu__ky7RmdUXmX]: hasVariant(
            variants,
            "mobileMenu",
            "mobileMenu"
          ),
          [sty.freeBox__views_publicView__ky7RmYpLjb]: hasVariant(
            variants,
            "views",
            "publicView"
          ),
          [sty.freeBox__views_userAccount__ky7RmUjVqz]: hasVariant(
            variants,
            "views",
            "userAccount"
          ),
        })}
      >
        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__wE8Ym)}
          >
            {(
              hasVariant(variants, "mobileMenu", "mobileMenu") &&
              hasVariant(globalVariants, "screen", "mobile")
                ? false
                : hasVariant(variants, "mobileMenu", "mobileMenu")
                ? true
                : hasVariant(globalVariants, "screen", "mobile")
                ? true
                : false
            ) ? (
              <IconMenuIcon
                data-plasmic-name={"toggleMobileSidebar"}
                data-plasmic-override={overrides.toggleMobileSidebar}
                className={classNames(projectcss.all, sty.toggleMobileSidebar, {
                  [sty.toggleMobileSidebar__mobileMenu]: hasVariant(
                    variants,
                    "mobileMenu",
                    "mobileMenu"
                  ),
                  [sty.toggleMobileSidebar__views_publicView]: hasVariant(
                    variants,
                    "views",
                    "publicView"
                  ),
                })}
                role={"img"}
              />
            ) : null}

            <MainHeader
              data-plasmic-name={"mainHeader"}
              data-plasmic-override={overrides.mainHeader}
              className={classNames("__wab_instance", sty.mainHeader)}
              headerStyles={"timelineHeader" as const}
            />
          </p.Stack>
        ) : null}
        {(hasVariant(variants, "views", "publicView") ? true : false) ? (
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text,
              {
                [sty.text__views_publicView]: hasVariant(
                  variants,
                  "views",
                  "publicView"
                ),
              }
            )}
          >
            {hasVariant(variants, "views", "publicView")
              ? "The easiest way to track and share your progress with anyone."
              : "The easiest way to track and share your progress with anyone."}
          </div>
        ) : null}
        {(hasVariant(variants, "views", "publicView") ? true : false) ? (
          <a
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(
              projectcss.a,
              projectcss.__wab_text,
              sty.link,
              {
                [sty.link__views_publicView]: hasVariant(
                  variants,
                  "views",
                  "publicView"
                ),
              }
            )}
            href={
              hasVariant(variants, "views", "publicView")
                ? ("http://venturemark.co/" as const)
                : ("https://www.plasmic.app/" as const)
            }
          >
            {hasVariant(variants, "views", "publicView")
              ? "Join Waitlist"
              : "Some link text"}
          </a>
        ) : null}
        {(hasVariant(variants, "views", "userAccount") ? true : false) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___4Ktdl, {
              [sty.freeBox__profileDropdown___4KtdlZi9Pu]: hasVariant(
                variants,
                "profileDropdown",
                "profileDropdown"
              ),
              [sty.freeBox__views_userAccount___4KtdlUjVqz]: hasVariant(
                variants,
                "views",
                "userAccount"
              ),
            })}
          >
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              buttonFeatures={["showStartIcon"]}
              className={classNames("__wab_instance", sty.button)}
              slot={
                <LockIconsvgIcon
                  className={classNames(projectcss.all, sty.svg__sYc20)}
                  role={"img"}
                />
              }
              text2={"Share"}
            />

            {true ? (
              <IconButton
                data-plasmic-name={"iconButton"}
                data-plasmic-override={overrides.iconButton}
                className={classNames("__wab_instance", sty.iconButton)}
                iconSize={"large" as const}
              >
                <IconSettings2Icon
                  className={classNames(projectcss.all, sty.svg___8QpRc)}
                  role={"img"}
                />
              </IconButton>
            ) : null}
            {true ? (
              <PhotoAvatar
                data-plasmic-name={"avatar"}
                data-plasmic-override={overrides.avatar}
                className={classNames("__wab_instance", sty.avatar, {
                  [sty.avatar__profileDropdown]: hasVariant(
                    variants,
                    "profileDropdown",
                    "profileDropdown"
                  ),
                })}
                userInitials={"KO"}
              />
            ) : null}
            {(
              hasVariant(variants, "profileDropdown", "profileDropdown")
                ? true
                : true
            ) ? (
              <ProfileDropdown
                data-plasmic-name={"dropdown"}
                data-plasmic-override={overrides.dropdown}
                className={classNames("__wab_instance", sty.dropdown, {
                  [sty.dropdown__profileDropdown]: hasVariant(
                    variants,
                    "profileDropdown",
                    "profileDropdown"
                  ),
                })}
                isMobile={"isMobile" as const}
                prop3={"Log Out"}
              />
            ) : null}
          </p.Stack>
        ) : null}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "toggleMobileSidebar",
    "mainHeader",
    "text",
    "link",
    "button",
    "iconButton",
    "avatar",
    "dropdown",
  ],
  toggleMobileSidebar: ["toggleMobileSidebar"],
  mainHeader: ["mainHeader"],
  text: ["text"],
  link: ["link"],
  button: ["button"],
  iconButton: ["iconButton"],
  avatar: ["avatar"],
  dropdown: ["dropdown"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  toggleMobileSidebar: "svg";
  mainHeader: typeof MainHeader;
  text: "div";
  link: "a";
  button: typeof Button;
  iconButton: typeof IconButton;
  avatar: typeof PhotoAvatar;
  dropdown: typeof ProfileDropdown;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHeader__Fetches;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    toggleMobileSidebar: makeNodeComponent("toggleMobileSidebar"),
    mainHeader: makeNodeComponent("mainHeader"),
    text: makeNodeComponent("text"),
    link: makeNodeComponent("link"),
    button: makeNodeComponent("button"),
    iconButton: makeNodeComponent("iconButton"),
    avatar: makeNodeComponent("avatar"),
    dropdown: makeNodeComponent("dropdown"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps,
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
