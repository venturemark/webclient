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

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: MkyvVOg5Ik/css

import IconMenuIcon from "./icons/PlasmicIcon__IconMenu"; // plasmic-import: gDL0fFl2pD/icon
import Logosvg2Icon from "./icons/PlasmicIcon__Logosvg2"; // plasmic-import: SLtbVdLFU/icon

export type PlasmicHeader__VariantMembers = {
  photoAvatar: "photoAvatar";
  mobileMenu: "mobileMenu";
  profileDropdown: "profileDropdown";
};

export type PlasmicHeader__VariantsArgs = {
  photoAvatar?: SingleBooleanChoiceArg<"photoAvatar">;
  mobileMenu?: SingleBooleanChoiceArg<"mobileMenu">;
  profileDropdown?: SingleBooleanChoiceArg<"profileDropdown">;
};

type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>(
  "photoAvatar",
  "mobileMenu",
  "profileDropdown"
);

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
  avatar?: p.Flex<typeof PhotoAvatar>;
  dropdown?: p.Flex<typeof ProfileDropdown>;
};

export interface DefaultHeaderProps {
  photoAvatar?: SingleBooleanChoiceArg<"photoAvatar">;
  mobileMenu?: SingleBooleanChoiceArg<"mobileMenu">;
  profileDropdown?: SingleBooleanChoiceArg<"profileDropdown">;
  className?: string;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

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
        className={classNames(defaultcss.all, sty.box__ky7Rm)}
      >
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
              className={classNames(defaultcss.all, sty.svg___09Qs7, {
                [sty.svg__mobileMenu___09Qs7DUXmX]: hasVariant(
                  variants,
                  "mobileMenu",
                  "mobileMenu"
                ),
              })}
              role={"img"}
            />
          ) : null}

          <Logosvg2Icon
            className={classNames(defaultcss.all, sty.svg__u6Qtf, {
              [sty.svg__mobileMenu__u6QtfdUXmX]: hasVariant(
                variants,
                "mobileMenu",
                "mobileMenu"
              ),
            })}
            role={"img"}
          />
        </p.Stack>

        {(hasVariant(variants, "photoAvatar", "photoAvatar") ? true : false) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box___4Ktdl, {
              [sty.box__photoAvatar___4KtdlHbxJv]: hasVariant(
                variants,
                "photoAvatar",
                "photoAvatar"
              ),
              [sty.box__profileDropdown___4KtdlZi9Pu]: hasVariant(
                variants,
                "profileDropdown",
                "profileDropdown"
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
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "avatar", "dropdown"],
  avatar: ["avatar"],
  dropdown: ["dropdown"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  avatar: typeof PhotoAvatar;
  dropdown: typeof ProfileDropdown;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicHeader__VariantsArgs;
  args?: PlasmicHeader__ArgsType;
  overrides?: NodeOverridesType<T>;
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

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
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
    avatar: makeNodeComponent("avatar"),
    dropdown: makeNodeComponent("dropdown"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps,
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
