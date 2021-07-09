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
import IconButton from "../../iconbutton/index"; // plasmic-import: UIpuE7M1YY/component
import ListItem from "../../listitem/index"; // plasmic-import: q8aEgDsN8_/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicMemberItem.module.css"; // plasmic-import: D8Y_2wee1o/css

import IconAdminIcon from "./icons/PlasmicIcon__IconAdmin"; // plasmic-import: 20h2nOVM8/icon
import IconDotMenuIcon from "./icons/PlasmicIcon__IconDotMenu"; // plasmic-import: Dz069s-rE/icon

export type PlasmicMemberItem__VariantMembers = {
  ventureTimeline: "isTimeline";
  userVariant: "isAdmin" | "isRequested" | "isMember" | "isSelf";
  isOwner: "isOwner";
  isDropdown: "isDropdown";
};

export type PlasmicMemberItem__VariantsArgs = {
  ventureTimeline?: SingleChoiceArg<"isTimeline">;
  userVariant?: SingleChoiceArg<
    "isAdmin" | "isRequested" | "isMember" | "isSelf"
  >;
  isOwner?: SingleBooleanChoiceArg<"isOwner">;
  isDropdown?: SingleBooleanChoiceArg<"isDropdown">;
};

type VariantPropType = keyof PlasmicMemberItem__VariantsArgs;
export const PlasmicMemberItem__VariantProps = new Array<VariantPropType>(
  "ventureTimeline",
  "userVariant",
  "isOwner",
  "isDropdown"
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
  iconButton?: p.Flex<typeof IconButton>;
  dropdown?: p.Flex<"div">;
  removeInvitation?: p.Flex<typeof ListItem>;
};

export interface DefaultMemberItemProps {
  userName?: React.ReactNode;
  slot3?: React.ReactNode;
  ventureTimeline?: SingleChoiceArg<"isTimeline">;
  userVariant?: SingleChoiceArg<
    "isAdmin" | "isRequested" | "isMember" | "isSelf"
  >;
  isOwner?: SingleBooleanChoiceArg<"isOwner">;
  isDropdown?: SingleBooleanChoiceArg<"isDropdown">;
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
        [sty.root__isDropdown]: hasVariant(
          variants,
          "isDropdown",
          "isDropdown"
        ),
        [sty.root__isOwner]: hasVariant(variants, "isOwner", "isOwner"),
        [sty.root__isOwner_isDropdown_userVariant_isMember]:
          hasVariant(variants, "isOwner", "isOwner") &&
          hasVariant(variants, "isDropdown", "isDropdown") &&
          hasVariant(variants, "userVariant", "isMember"),
        [sty.root__isOwner_isDropdown_userVariant_isRequested]:
          hasVariant(variants, "isOwner", "isOwner") &&
          hasVariant(variants, "isDropdown", "isDropdown") &&
          hasVariant(variants, "userVariant", "isRequested"),
        [sty.root__isOwner_userVariant_isAdmin]:
          hasVariant(variants, "isOwner", "isOwner") &&
          hasVariant(variants, "userVariant", "isAdmin"),
        [sty.root__isOwner_userVariant_isAdmin_isDropdown]:
          hasVariant(variants, "isOwner", "isOwner") &&
          hasVariant(variants, "userVariant", "isAdmin") &&
          hasVariant(variants, "isDropdown", "isDropdown"),
        [sty.root__isOwner_userVariant_isMember]:
          hasVariant(variants, "isOwner", "isOwner") &&
          hasVariant(variants, "userVariant", "isMember"),
        [sty.root__userVariant_isAdmin]: hasVariant(
          variants,
          "userVariant",
          "isAdmin"
        ),
        [sty.root__userVariant_isMember]: hasVariant(
          variants,
          "userVariant",
          "isMember"
        ),
        [sty.root__userVariant_isRequested]: hasVariant(
          variants,
          "userVariant",
          "isRequested"
        ),
        [sty.root__userVariant_isRequested_isOwner]:
          hasVariant(variants, "userVariant", "isRequested") &&
          hasVariant(variants, "isOwner", "isOwner"),
        [sty.root__userVariant_isSelf]: hasVariant(
          variants,
          "userVariant",
          "isSelf"
        ),
        [sty.root__userVariant_isSelf_isOwner]:
          hasVariant(variants, "userVariant", "isSelf") &&
          hasVariant(variants, "isOwner", "isOwner"),
      })}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__vAfXq, {
          [sty.box__isOwner_userVariant_isMember__vAfXqpkRzzGdyZr]:
            hasVariant(variants, "isOwner", "isOwner") &&
            hasVariant(variants, "userVariant", "isMember"),
        })}
      >
        <PhotoAvatar
          data-plasmic-name={"photoAvatar"}
          data-plasmic-override={overrides.photoAvatar}
          className={classNames("__wab_instance", sty.photoAvatar, {
            [sty.photoAvatar__userVariant_isRequested]: hasVariant(
              variants,
              "userVariant",
              "isRequested"
            ),
          })}
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
              sty.box__biq75,
              {
                [sty.box__userVariant_isRequested__biq75OSddm]: hasVariant(
                  variants,
                  "userVariant",
                  "isRequested"
                ),
                [sty.box__userVariant_isSelf__biq75AAx2Z]: hasVariant(
                  variants,
                  "userVariant",
                  "isSelf"
                ),
              }
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
        {(
          hasVariant(variants, "isOwner", "isOwner") &&
          hasVariant(variants, "userVariant", "isRequested")
            ? true
            : hasVariant(variants, "isOwner", "isOwner") &&
              hasVariant(variants, "userVariant", "isMember")
            ? true
            : hasVariant(variants, "userVariant", "isSelf")
            ? true
            : hasVariant(variants, "userVariant", "isMember")
            ? true
            : hasVariant(variants, "userVariant", "isRequested")
            ? true
            : true
        ) ? (
          <IconAdminIcon
            className={classNames(defaultcss.all, sty.svg__dd2Hx, {
              [sty.svg__isOwner_userVariant_isAdmin__dd2HXpkRzz35Uok]:
                hasVariant(variants, "isOwner", "isOwner") &&
                hasVariant(variants, "userVariant", "isAdmin"),
              [sty.svg__isOwner_userVariant_isMember__dd2HXpkRzzGdyZr]:
                hasVariant(variants, "isOwner", "isOwner") &&
                hasVariant(variants, "userVariant", "isMember"),
              [sty.svg__isOwner_userVariant_isRequested__dd2HXpkRzzOSddm]:
                hasVariant(variants, "isOwner", "isOwner") &&
                hasVariant(variants, "userVariant", "isRequested"),
              [sty.svg__isOwner_userVariant_isSelf__dd2HXpkRzzAAx2Z]:
                hasVariant(variants, "isOwner", "isOwner") &&
                hasVariant(variants, "userVariant", "isSelf"),
              [sty.svg__userVariant_isMember__dd2HxgdyZr]: hasVariant(
                variants,
                "userVariant",
                "isMember"
              ),
              [sty.svg__userVariant_isRequested__dd2HXoSddm]: hasVariant(
                variants,
                "userVariant",
                "isRequested"
              ),
              [sty.svg__userVariant_isSelf__dd2HxaAx2Z]: hasVariant(
                variants,
                "userVariant",
                "isSelf"
              ),
            })}
            role={"img"}
          />
        ) : null}
      </p.Stack>

      {(hasVariant(variants, "userVariant", "isMember") ? true : true) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__ymOfc, {
            [sty.box__isOwner_userVariant_isMember__ymOfcpkRzzGdyZr]:
              hasVariant(variants, "isOwner", "isOwner") &&
              hasVariant(variants, "userVariant", "isMember"),
            [sty.box__userVariant_isMember__ymOfcGdyZr]: hasVariant(
              variants,
              "userVariant",
              "isMember"
            ),
            [sty.box__userVariant_isRequested__ymOfcoSddm]: hasVariant(
              variants,
              "userVariant",
              "isRequested"
            ),
            [sty.box__userVariant_isSelf__ymOfcAAx2Z]: hasVariant(
              variants,
              "userVariant",
              "isSelf"
            ),
            [sty.box__userVariant_isSelf_isOwner__ymOfcAAx2ZPkRzz]:
              hasVariant(variants, "userVariant", "isSelf") &&
              hasVariant(variants, "isOwner", "isOwner"),
          })}
        >
          {(
            hasVariant(variants, "userVariant", "isSelf") &&
            hasVariant(variants, "isOwner", "isOwner")
              ? true
              : hasVariant(variants, "isOwner", "isOwner")
              ? true
              : hasVariant(variants, "userVariant", "isSelf")
              ? false
              : false
          ) ? (
            <IconButton
              data-plasmic-name={"iconButton"}
              data-plasmic-override={overrides.iconButton}
              className={classNames("__wab_instance", sty.iconButton, {
                [sty.iconButton__isDropdown]: hasVariant(
                  variants,
                  "isDropdown",
                  "isDropdown"
                ),
                [sty.iconButton__isDropdown_isOwner_userVariant_isMember]:
                  hasVariant(variants, "isDropdown", "isDropdown") &&
                  hasVariant(variants, "isOwner", "isOwner") &&
                  hasVariant(variants, "userVariant", "isMember"),
                [sty.iconButton__isDropdown_isOwner_userVariant_isRequested]:
                  hasVariant(variants, "isDropdown", "isDropdown") &&
                  hasVariant(variants, "isOwner", "isOwner") &&
                  hasVariant(variants, "userVariant", "isRequested"),
                [sty.iconButton__isDropdown_isOwner_userVariant_isSelf]:
                  hasVariant(variants, "isDropdown", "isDropdown") &&
                  hasVariant(variants, "isOwner", "isOwner") &&
                  hasVariant(variants, "userVariant", "isSelf"),
                [sty.iconButton__isDropdown_userVariant_isAdmin_isOwner]:
                  hasVariant(variants, "isDropdown", "isDropdown") &&
                  hasVariant(variants, "userVariant", "isAdmin") &&
                  hasVariant(variants, "isOwner", "isOwner"),
                [sty.iconButton__isOwner]: hasVariant(
                  variants,
                  "isOwner",
                  "isOwner"
                ),
                [sty.iconButton__userVariant_isAdmin]: hasVariant(
                  variants,
                  "userVariant",
                  "isAdmin"
                ),
                [sty.iconButton__userVariant_isAdmin_isDropdown]:
                  hasVariant(variants, "userVariant", "isAdmin") &&
                  hasVariant(variants, "isDropdown", "isDropdown"),
                [sty.iconButton__userVariant_isRequested]: hasVariant(
                  variants,
                  "userVariant",
                  "isRequested"
                ),
                [sty.iconButton__userVariant_isSelf]: hasVariant(
                  variants,
                  "userVariant",
                  "isSelf"
                ),
                [sty.iconButton__userVariant_isSelf_isOwner]:
                  hasVariant(variants, "userVariant", "isSelf") &&
                  hasVariant(variants, "isOwner", "isOwner"),
              })}
            >
              <IconDotMenuIcon
                className={classNames(defaultcss.all, sty.svg__jmi9G, {
                  [sty.svg__isOwner__jmi9GpkRzz]: hasVariant(
                    variants,
                    "isOwner",
                    "isOwner"
                  ),
                  [sty.svg__isOwner_userVariant_isMember__jmi9GpkRzzGdyZr]:
                    hasVariant(variants, "isOwner", "isOwner") &&
                    hasVariant(variants, "userVariant", "isMember"),
                  [sty.svg__userVariant_isAdmin__jmi9G35Uok]: hasVariant(
                    variants,
                    "userVariant",
                    "isAdmin"
                  ),
                  [sty.svg__userVariant_isMember__jmi9GgdyZr]: hasVariant(
                    variants,
                    "userVariant",
                    "isMember"
                  ),
                  [sty.svg__userVariant_isSelf__jmi9GaAx2Z]: hasVariant(
                    variants,
                    "userVariant",
                    "isSelf"
                  ),
                })}
                role={"img"}
              />
            </IconButton>
          ) : null}
          {(hasVariant(variants, "isDropdown", "isDropdown") ? true : true) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"dropdown"}
              data-plasmic-override={overrides.dropdown}
              hasGap={true}
              className={classNames(defaultcss.all, sty.dropdown, {
                [sty.dropdown__isDropdown]: hasVariant(
                  variants,
                  "isDropdown",
                  "isDropdown"
                ),
                [sty.dropdown__isDropdown_userVariant_isMember]:
                  hasVariant(variants, "isDropdown", "isDropdown") &&
                  hasVariant(variants, "userVariant", "isMember"),
                [sty.dropdown__isOwner]: hasVariant(
                  variants,
                  "isOwner",
                  "isOwner"
                ),
                [sty.dropdown__isOwner_isDropdown]:
                  hasVariant(variants, "isOwner", "isOwner") &&
                  hasVariant(variants, "isDropdown", "isDropdown"),
                [sty.dropdown__isOwner_isDropdown_userVariant_isAdmin]:
                  hasVariant(variants, "isOwner", "isOwner") &&
                  hasVariant(variants, "isDropdown", "isDropdown") &&
                  hasVariant(variants, "userVariant", "isAdmin"),
                [sty.dropdown__isOwner_isDropdown_userVariant_isMember]:
                  hasVariant(variants, "isOwner", "isOwner") &&
                  hasVariant(variants, "isDropdown", "isDropdown") &&
                  hasVariant(variants, "userVariant", "isMember"),
                [sty.dropdown__isOwner_isDropdown_userVariant_isRequested]:
                  hasVariant(variants, "isOwner", "isOwner") &&
                  hasVariant(variants, "isDropdown", "isDropdown") &&
                  hasVariant(variants, "userVariant", "isRequested"),
                [sty.dropdown__isOwner_isDropdown_userVariant_isSelf]:
                  hasVariant(variants, "isOwner", "isOwner") &&
                  hasVariant(variants, "isDropdown", "isDropdown") &&
                  hasVariant(variants, "userVariant", "isSelf"),
                [sty.dropdown__isOwner_userVariant_isMember]:
                  hasVariant(variants, "isOwner", "isOwner") &&
                  hasVariant(variants, "userVariant", "isMember"),
                [sty.dropdown__userVariant_isRequested]: hasVariant(
                  variants,
                  "userVariant",
                  "isRequested"
                ),
              })}
            >
              {(
                hasVariant(variants, "isOwner", "isOwner") &&
                hasVariant(variants, "isDropdown", "isDropdown") &&
                hasVariant(variants, "userVariant", "isMember")
                  ? true
                  : hasVariant(variants, "isOwner", "isOwner") &&
                    hasVariant(variants, "userVariant", "isAdmin") &&
                    hasVariant(variants, "isDropdown", "isDropdown")
                  ? true
                  : hasVariant(variants, "isOwner", "isOwner") &&
                    hasVariant(variants, "userVariant", "isMember")
                  ? true
                  : hasVariant(variants, "userVariant", "isSelf")
                  ? false
                  : true
              ) ? (
                <ListItem
                  data-plasmic-name={"removeInvitation"}
                  data-plasmic-override={overrides.removeInvitation}
                  className={classNames(
                    "__wab_instance",
                    sty.removeInvitation,
                    {
                      [sty.removeInvitation__isDropdown]: hasVariant(
                        variants,
                        "isDropdown",
                        "isDropdown"
                      ),
                      [sty.removeInvitation__isOwner_isDropdown_userVariant_isMember]:
                        hasVariant(variants, "isOwner", "isOwner") &&
                        hasVariant(variants, "isDropdown", "isDropdown") &&
                        hasVariant(variants, "userVariant", "isMember"),
                      [sty.removeInvitation__isOwner_isDropdown_userVariant_isRequested]:
                        hasVariant(variants, "isOwner", "isOwner") &&
                        hasVariant(variants, "isDropdown", "isDropdown") &&
                        hasVariant(variants, "userVariant", "isRequested"),
                      [sty.removeInvitation__isOwner_userVariant_isAdmin_isDropdown]:
                        hasVariant(variants, "isOwner", "isOwner") &&
                        hasVariant(variants, "userVariant", "isAdmin") &&
                        hasVariant(variants, "isDropdown", "isDropdown"),
                      [sty.removeInvitation__isOwner_userVariant_isMember]:
                        hasVariant(variants, "isOwner", "isOwner") &&
                        hasVariant(variants, "userVariant", "isMember"),
                      [sty.removeInvitation__userVariant_isRequested]:
                        hasVariant(variants, "userVariant", "isRequested"),
                      [sty.removeInvitation__userVariant_isSelf]: hasVariant(
                        variants,
                        "userVariant",
                        "isSelf"
                      ),
                    }
                  )}
                  rename={"Remove member"}
                />
              ) : null}
            </p.Stack>
          ) : null}
          {(
            hasVariant(variants, "userVariant", "isSelf") &&
            hasVariant(variants, "isOwner", "isOwner")
              ? false
              : hasVariant(variants, "userVariant", "isAdmin")
              ? false
              : false
          ) ? (
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box___5GQ6G,
                {
                  [sty.box__userVariant_isAdmin___5GQ6G35Uok]: hasVariant(
                    variants,
                    "userVariant",
                    "isAdmin"
                  ),
                  [sty.box__userVariant_isMember___5GQ6GGdyZr]: hasVariant(
                    variants,
                    "userVariant",
                    "isMember"
                  ),
                  [sty.box__userVariant_isSelf___5GQ6GAAx2Z]: hasVariant(
                    variants,
                    "userVariant",
                    "isSelf"
                  ),
                  [sty.box__userVariant_isSelf_isOwner___5GQ6GAAx2ZPkRzz]:
                    hasVariant(variants, "userVariant", "isSelf") &&
                    hasVariant(variants, "isOwner", "isOwner"),
                }
              )}
            >
              {hasVariant(variants, "userVariant", "isSelf") &&
              hasVariant(variants, "isOwner", "isOwner")
                ? "Creator"
                : hasVariant(variants, "userVariant", "isAdmin")
                ? "Creator"
                : "Enter some text"}
            </div>
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "photoAvatar", "iconButton", "dropdown", "removeInvitation"],
  photoAvatar: ["photoAvatar"],
  iconButton: ["iconButton"],
  dropdown: ["dropdown", "removeInvitation"],
  removeInvitation: ["removeInvitation"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  photoAvatar: typeof PhotoAvatar;
  iconButton: typeof IconButton;
  dropdown: "div";
  removeInvitation: typeof ListItem;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMemberItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
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
    iconButton: makeNodeComponent("iconButton"),
    dropdown: makeNodeComponent("dropdown"),
    removeInvitation: makeNodeComponent("removeInvitation"),

    // Metadata about props expected for PlasmicMemberItem
    internalVariantProps: PlasmicMemberItem__VariantProps,
    internalArgProps: PlasmicMemberItem__ArgProps,
  }
);

export default PlasmicMemberItem;
/* prettier-ignore-end */
