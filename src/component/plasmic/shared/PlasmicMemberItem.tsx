// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: D8Y_2wee1o
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
import Tags from "../../tags/index"; // plasmic-import: 0wz8hGqZgNQ/component
import IconButton from "../../iconbutton/index"; // plasmic-import: UIpuE7M1YY/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicMemberItem.module.css"; // plasmic-import: D8Y_2wee1o/css

import IconCloseIcon from "./icons/PlasmicIcon__IconClose"; // plasmic-import: v016HsKmfL/icon

export type PlasmicMemberItem__VariantMembers = {
  userVariant: "isOwner" | "isRequested" | "isMember";
};

export type PlasmicMemberItem__VariantsArgs = {
  userVariant?: SingleChoiceArg<"isOwner" | "isRequested" | "isMember">;
};

type VariantPropType = keyof PlasmicMemberItem__VariantsArgs;
export const PlasmicMemberItem__VariantProps = new Array<VariantPropType>(
  "userVariant"
);

export type PlasmicMemberItem__ArgsType = {
  userName?: React.ReactNode;
  slot3?: React.ReactNode;
};

type ArgPropType = keyof PlasmicMemberItem__ArgsType;
export const PlasmicMemberItem__ArgProps = new Array<ArgPropType>(
  "userName",
  "slot3"
);

export type PlasmicMemberItem__OverridesType = {
  root?: p.Flex<"div">;
  photoAvatar?: p.Flex<typeof PhotoAvatar>;
  tags?: p.Flex<typeof Tags>;
  iconButton?: p.Flex<typeof IconButton>;
  svg?: p.Flex<"svg">;
};

export interface DefaultMemberItemProps {
  userName?: React.ReactNode;
  slot3?: React.ReactNode;
  userVariant?: SingleChoiceArg<"isOwner" | "isRequested" | "isMember">;
  className?: string;
}

function PlasmicMemberItem__RenderFunc(props: {
  variants: PlasmicMemberItem__VariantsArgs;
  args: PlasmicMemberItem__ArgsType;
  overrides: PlasmicMemberItem__OverridesType;
  dataFetches?: PlasmicMemberItem__Fetches;
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
        [sty.root__userVariant_isMember]: hasVariant(
          variants,
          "userVariant",
          "isMember"
        ),
        [sty.root__userVariant_isOwner]: hasVariant(
          variants,
          "userVariant",
          "isOwner"
        ),
        [sty.root__userVariant_isRequested]: hasVariant(
          variants,
          "userVariant",
          "isRequested"
        ),
      })}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__vAfXq)}
      >
        <PhotoAvatar
          data-plasmic-name={"photoAvatar"}
          data-plasmic-override={overrides.photoAvatar}
          className={classNames("__wab_instance", sty.photoAvatar)}
          userInitials={"KO"}
        />

        {p.renderPlasmicSlot({
          defaultContents: "User Name",
          value: args.userName,
        })}

        {false ? (
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__biq75
            )}
          >
            {"-"}
          </div>
        ) : null}
        {false
          ? p.renderPlasmicSlot({
              defaultContents: "example@email.com",
              value: args.slot3,
              className: classNames(sty.slotSlot3),
            })
          : null}
      </p.Stack>

      {(hasVariant(variants, "userVariant", "isMember") ? false : true) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__ymOfc, {
            [sty.box__userVariant_isMember__ymOfcGdyZr]: hasVariant(
              variants,
              "userVariant",
              "isMember"
            ),
          })}
        >
          {(
            hasVariant(variants, "userVariant", "isRequested")
              ? true
              : hasVariant(variants, "userVariant", "isOwner")
              ? true
              : false
          ) ? (
            <Tags
              data-plasmic-name={"tags"}
              data-plasmic-override={overrides.tags}
              buttonFeatures={["hasText"]}
              buttonStyle={
                hasVariant(variants, "userVariant", "isOwner")
                  ? ("secondaryGreen" as const)
                  : ("blue" as const)
              }
              className={classNames("__wab_instance", sty.tags, {
                [sty.tags__userVariant_isOwner]: hasVariant(
                  variants,
                  "userVariant",
                  "isOwner"
                ),
                [sty.tags__userVariant_isRequested]: hasVariant(
                  variants,
                  "userVariant",
                  "isRequested"
                ),
              })}
              text2={
                hasVariant(variants, "userVariant", "isRequested")
                  ? "Invited"
                  : "Admin"
              }
            />
          ) : null}
          {(
            hasVariant(variants, "userVariant", "isRequested")
              ? false
              : hasVariant(variants, "userVariant", "isOwner")
              ? false
              : true
          ) ? (
            <IconButton
              data-plasmic-name={"iconButton"}
              data-plasmic-override={overrides.iconButton}
            >
              <IconCloseIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(defaultcss.all, sty.svg, {
                  [sty.svg__userVariant_isMember]: hasVariant(
                    variants,
                    "userVariant",
                    "isMember"
                  ),
                  [sty.svg__userVariant_isRequested]: hasVariant(
                    variants,
                    "userVariant",
                    "isRequested"
                  ),
                })}
                role={"img"}
              />
            </IconButton>
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "photoAvatar", "tags", "iconButton", "svg"],
  photoAvatar: ["photoAvatar"],
  tags: ["tags"],
  iconButton: ["iconButton", "svg"],
  svg: ["svg"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  photoAvatar: typeof PhotoAvatar;
  tags: typeof Tags;
  iconButton: typeof IconButton;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMemberItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicMemberItem__VariantsArgs;
  args?: PlasmicMemberItem__ArgsType;
  overrides?: NodeOverridesType<T>;
  dataFetches?: PlasmicMemberItem__Fetches;
} & Omit<PlasmicMemberItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicMemberItem__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicMemberItem__ArgProps,
      internalVariantPropNames: PlasmicMemberItem__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicMemberItem__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMemberItem";
  } else {
    func.displayName = `PlasmicMemberItem.${nodeName}`;
  }
  return func;
}

export const PlasmicMemberItem = Object.assign(
  // Top-level PlasmicMemberItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    photoAvatar: makeNodeComponent("photoAvatar"),
    tags: makeNodeComponent("tags"),
    iconButton: makeNodeComponent("iconButton"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicMemberItem
    internalVariantProps: PlasmicMemberItem__VariantProps,
    internalArgProps: PlasmicMemberItem__ArgProps,
  }
);

export default PlasmicMemberItem;
/* prettier-ignore-end */
