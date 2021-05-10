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
import PhotoAvatar from "../../photoavatar/index"; // plasmic-import: uaoIqTcPRC-/component
import ProfileDropdown from "../../profiledropdown/index"; // plasmic-import: bGjqf-R4Tc/component
import Button from "../../button/index"; // plasmic-import: JU1t0P9pFY/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicHeader.module.css"; // plasmic-import: MkyvVOg5Ik/css

import IconMenuIcon from "./icons/PlasmicIcon__IconMenu"; // plasmic-import: gDL0fFl2pD/icon
import Logosvg3Icon from "./icons/PlasmicIcon__Logosvg3"; // plasmic-import: o58_ERQlgq/icon
import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon
import IconRightIcon from "./icons/PlasmicIcon__IconRight"; // plasmic-import: v822ZhrBq/icon

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
  svg?: p.Flex<"svg">;
  avatar?: p.Flex<typeof PhotoAvatar>;
  dropdown?: p.Flex<typeof ProfileDropdown>;
  button?: p.Flex<typeof Button>;
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
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__mobileMenu]: hasVariant(
          variants,
          "mobileMenu",
          "mobileMenu"
        ),
      })}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__ky7Rm, {
          [sty.box__mobileMenu__ky7RmdUXmX]: hasVariant(
            variants,
            "mobileMenu",
            "mobileMenu"
          ),
          [sty.box__views_publicView__ky7RmYpLjb]: hasVariant(
            variants,
            "views",
            "publicView"
          ),
          [sty.box__views_userAccount__ky7RmUjVqz]: hasVariant(
            variants,
            "views",
            "userAccount"
          ),
        })}
      >
        {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__wE8Ym)}
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
                className={classNames(defaultcss.all, sty.toggleMobileSidebar, {
                  [sty.toggleMobileSidebar__mobileMenu]: hasVariant(
                    variants,
                    "mobileMenu",
                    "mobileMenu"
                  ),
                })}
                role={"img"}
              />
            ) : null}
          </p.Stack>
        ) : null}

        <Logosvg3Icon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(defaultcss.all, sty.svg, {
            [sty.svg__mobileMenu]: hasVariant(
              variants,
              "mobileMenu",
              "mobileMenu"
            ),
          })}
          role={"img"}
        />

        {(hasVariant(variants, "views", "userAccount") ? true : false) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box___4Ktdl, {
              [sty.box__profileDropdown___4KtdlZi9Pu]: hasVariant(
                variants,
                "profileDropdown",
                "profileDropdown"
              ),
              [sty.box__views_userAccount___4KtdlUjVqz]: hasVariant(
                variants,
                "views",
                "userAccount"
              ),
            })}
          >
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

            {(
              hasVariant(variants, "profileDropdown", "profileDropdown")
                ? true
                : false
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
                prop3={"Log Out"}
              />
            ) : null}
          </p.Stack>
        ) : null}
        {(hasVariant(variants, "views", "publicView") ? true : false) ? (
          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            buttonStyle={
              hasVariant(variants, "views", "publicView")
                ? ("secondaryPurple" as const)
                : undefined
            }
            className={classNames("__wab_instance", sty.button, {
              [sty.button__views_publicView]: hasVariant(
                variants,
                "views",
                "publicView"
              ),
            })}
            text2={
              hasVariant(variants, "views", "publicView") ? "Sign up" : "Button"
            }
          />
        ) : null}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "toggleMobileSidebar", "svg", "avatar", "dropdown", "button"],
  toggleMobileSidebar: ["toggleMobileSidebar"],
  svg: ["svg"],
  avatar: ["avatar"],
  dropdown: ["dropdown"],
  button: ["button"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  toggleMobileSidebar: "svg";
  svg: "svg";
  avatar: typeof PhotoAvatar;
  dropdown: typeof ProfileDropdown;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
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
    svg: makeNodeComponent("svg"),
    avatar: makeNodeComponent("avatar"),
    dropdown: makeNodeComponent("dropdown"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps,
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
