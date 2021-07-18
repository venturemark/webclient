// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: uaoIqTcPRC-
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicPhotoAvatar.module.css"; // plasmic-import: uaoIqTcPRC-/css

export type PlasmicPhotoAvatar__VariantMembers = {
  variant: "isLarge";
};

export type PlasmicPhotoAvatar__VariantsArgs = {
  variant?: MultiChoiceArg<"isLarge">;
};

type VariantPropType = keyof PlasmicPhotoAvatar__VariantsArgs;
export const PlasmicPhotoAvatar__VariantProps = new Array<VariantPropType>(
  "variant"
);

export type PlasmicPhotoAvatar__ArgsType = {
  userInitials?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPhotoAvatar__ArgsType;
export const PlasmicPhotoAvatar__ArgProps = new Array<ArgPropType>(
  "userInitials"
);

export type PlasmicPhotoAvatar__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultPhotoAvatarProps {
  userInitials?: React.ReactNode;
  variant?: MultiChoiceArg<"isLarge">;
  className?: string;
}

function PlasmicPhotoAvatar__RenderFunc(props: {
  variants: PlasmicPhotoAvatar__VariantsArgs;
  args: PlasmicPhotoAvatar__ArgsType;
  overrides: PlasmicPhotoAvatar__OverridesType;
  dataFetches?: PlasmicPhotoAvatar__Fetches;
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
        [sty.root__variant_isLarge]: hasVariant(variants, "variant", "isLarge"),
      })}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "KO",
          value: args.userInitials,
          className: classNames(sty.slotUserInitials, {
            [sty.slotUserInitials__variant_isLarge]: hasVariant(
              variants,
              "variant",
              "isLarge"
            ),
          }),
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPhotoAvatar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPhotoAvatar__VariantsArgs;
    args?: PlasmicPhotoAvatar__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPhotoAvatar__Fetches;
  } & Omit<PlasmicPhotoAvatar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPhotoAvatar__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPhotoAvatar__ArgProps,
      internalVariantPropNames: PlasmicPhotoAvatar__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicPhotoAvatar__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPhotoAvatar";
  } else {
    func.displayName = `PlasmicPhotoAvatar.${nodeName}`;
  }
  return func;
}

export const PlasmicPhotoAvatar = Object.assign(
  // Top-level PlasmicPhotoAvatar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicPhotoAvatar
    internalVariantProps: PlasmicPhotoAvatar__VariantProps,
    internalArgProps: PlasmicPhotoAvatar__ArgProps,
  }
);

export default PlasmicPhotoAvatar;
/* prettier-ignore-end */
