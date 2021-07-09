// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: 3NTlJO7oDpw
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
import InputText from "../../inputtext/index"; // plasmic-import: v0nNSTRV39/component
import Button from "../../button/index"; // plasmic-import: JU1t0P9pFY/component
import MemberItem from "../../memberitem/index"; // plasmic-import: D8Y_2wee1o/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicAddEditMembers.module.css"; // plasmic-import: 3NTlJO7oDpw/css

import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon
import IconRightIcon from "./icons/PlasmicIcon__IconRight"; // plasmic-import: v822ZhrBq/icon
import IconLinkIcon from "./icons/PlasmicIcon__IconLink"; // plasmic-import: 0QuxgUi0r/icon

export type PlasmicAddEditMembers__VariantMembers = {
  type: "isTimeline";
  isOwner: "isOwner";
};

export type PlasmicAddEditMembers__VariantsArgs = {
  type?: SingleChoiceArg<"isTimeline">;
  isOwner?: SingleBooleanChoiceArg<"isOwner">;
};

type VariantPropType = keyof PlasmicAddEditMembers__VariantsArgs;
export const PlasmicAddEditMembers__VariantProps = new Array<VariantPropType>(
  "type",
  "isOwner"
);

export type PlasmicAddEditMembers__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  slot42?: React.ReactNode;
  slot32?: React.ReactNode;
  slot422?: React.ReactNode;
  slot322?: React.ReactNode;
  slot4222?: React.ReactNode;
  slot3222?: React.ReactNode;
  slot43?: React.ReactNode;
  slot33?: React.ReactNode;
  children2?: React.ReactNode;
  slot5?: React.ReactNode;
};

type ArgPropType = keyof PlasmicAddEditMembers__ArgsType;
export const PlasmicAddEditMembers__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2",
  "slot3",
  "slot4",
  "slot42",
  "slot32",
  "slot422",
  "slot322",
  "slot4222",
  "slot3222",
  "slot43",
  "slot33",
  "children2",
  "slot5"
);

export type PlasmicAddEditMembers__OverridesType = {
  root?: p.Flex<"div">;
  form?: p.Flex<"form">;
  email?: p.Flex<typeof InputText>;
  invite?: p.Flex<typeof Button>;
  link?: p.Flex<"a">;
  span?: p.Flex<"span">;
  membersContainer?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
  text2?: p.Flex<"div">;
};

export interface DefaultAddEditMembersProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  slot42?: React.ReactNode;
  slot32?: React.ReactNode;
  slot422?: React.ReactNode;
  slot322?: React.ReactNode;
  slot4222?: React.ReactNode;
  slot3222?: React.ReactNode;
  slot43?: React.ReactNode;
  slot33?: React.ReactNode;
  children2?: React.ReactNode;
  slot5?: React.ReactNode;
  type?: SingleChoiceArg<"isTimeline">;
  isOwner?: SingleBooleanChoiceArg<"isOwner">;
  className?: string;
}

function PlasmicAddEditMembers__RenderFunc(props: {
  variants: PlasmicAddEditMembers__VariantsArgs;
  args: PlasmicAddEditMembers__ArgsType;
  overrides: PlasmicAddEditMembers__OverridesType;
  dataFetches?: PlasmicAddEditMembers__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__type_isTimeline]: hasVariant(variants, "type", "isTimeline"),
      })}
    >
      {(hasVariant(variants, "type", "isTimeline") ? false : true) ? (
        <div
          className={classNames(defaultcss.all, sty.box__sLr04, {
            [sty.box__type_isTimeline__sLr04Qs8Io]: hasVariant(
              variants,
              "type",
              "isTimeline"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Venture Members",
            value: args.children,
            className: classNames(sty.slotChildren, {
              [sty.slotChildren__type_isTimeline]: hasVariant(
                variants,
                "type",
                "isTimeline"
              ),
            }),
          })}

          {false
            ? p.renderPlasmicSlot({
                defaultContents:
                  "Enter their email to invite and add them to this organization.",
                value: args.slot,
              })
            : null}
        </div>
      ) : null}
      {(hasVariant(variants, "type", "isTimeline") ? true : false) ? (
        <div
          className={classNames(defaultcss.all, sty.box___8X9J3, {
            [sty.box__type_isTimeline___8X9J3Qs8Io]: hasVariant(
              variants,
              "type",
              "isTimeline"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Timeline Members",
            value: args.children2,
            className: classNames(sty.slotChildren2, {
              [sty.slotChildren2__type_isTimeline]: hasVariant(
                variants,
                "type",
                "isTimeline"
              ),
            }),
          })}

          {(hasVariant(variants, "isOwner", "isOwner") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents:
                  "Add members from your venture to the timeline",
                value: args.slot5,
              })
            : null}
        </div>
      ) : null}
      {(hasVariant(variants, "isOwner", "isOwner") ? true : false) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__mpPUs, {
            [sty.box__isOwner__mpPUsyBfUd]: hasVariant(
              variants,
              "isOwner",
              "isOwner"
            ),
            [sty.box__type_isTimeline__mpPUsqs8Io]: hasVariant(
              variants,
              "type",
              "isTimeline"
            ),
          })}
        >
          <p.Stack
            as={"form"}
            data-plasmic-name={"form"}
            data-plasmic-override={overrides.form}
            hasGap={true}
            className={classNames(defaultcss.all, sty.form)}
          >
            <InputText
              data-plasmic-name={"email"}
              data-plasmic-override={overrides.email}
              hasLabel={"hasLabel" as const}
              hasTextHelper={"hasTextHelper" as const}
              label={"Invite a member by email"}
            >
              {"Enter their email to invite and add them to this organization."}
            </InputText>

            <Button
              data-plasmic-name={"invite"}
              data-plasmic-override={overrides.invite}
              buttonFeatures={["nonFullWidth", "removeText", "showStartIcon"]}
              className={classNames("__wab_instance", sty.invite)}
              count={"1"}
              text2={"Button"}
            />
          </p.Stack>

          {(hasVariant(variants, "type", "isTimeline") ? false : false) ? (
            <p.Stack
              as={"a"}
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              hasGap={true}
              className={classNames(defaultcss.all, sty.link, {
                [sty.link__type_isTimeline]: hasVariant(
                  variants,
                  "type",
                  "isTimeline"
                ),
              })}
            >
              <IconLinkIcon
                className={classNames(defaultcss.all, sty.svg__opzJ7)}
                role={"img"}
              />

              <span
                data-plasmic-name={"span"}
                data-plasmic-override={overrides.span}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.span,
                  {
                    [sty.span__type_isTimeline]: hasVariant(
                      variants,
                      "type",
                      "isTimeline"
                    ),
                  }
                )}
              >
                {"Copy Invite Link"}
              </span>
            </p.Stack>
          ) : null}
        </p.Stack>
      ) : null}

      <div className={classNames(defaultcss.all, sty.box__yRlj0)}>
        <div className={classNames(defaultcss.all, sty.box__guHgU)}>
          {p.renderPlasmicSlot({
            defaultContents: "Current Members",
            value: args.slot2,
            className: classNames(sty.slotSlot2),
          })}
        </div>

        <div
          data-plasmic-name={"membersContainer"}
          data-plasmic-override={overrides.membersContainer}
          className={classNames(defaultcss.all, sty.membersContainer)}
        >
          <MemberItem
            className={classNames("__wab_instance", sty.memberItem__e3Lpj)}
            isOwner={"isOwner" as const}
            slot3={p.renderPlasmicSlot({
              defaultContents: "example@email.com",
              value: args.slot3,
            })}
            userName={p.renderPlasmicSlot({
              defaultContents: "User Name",
              value: args.slot4,
            })}
            userVariant={"isRequested" as const}
            ventureTimeline={"isTimeline" as const}
          />

          <MemberItem
            className={classNames("__wab_instance", sty.memberItem__ieR1F)}
            slot3={p.renderPlasmicSlot({
              defaultContents: "example@email.com",
              value: args.slot33,
            })}
            userName={p.renderPlasmicSlot({
              defaultContents: "example@email.com",
              value: args.slot43,
            })}
            userVariant={"isAdmin" as const}
          />

          <MemberItem
            className={classNames("__wab_instance", sty.memberItem__vCc52, {
              [sty.memberItem__isOwner__vCc52YBfUd]: hasVariant(
                variants,
                "isOwner",
                "isOwner"
              ),
            })}
            isOwner={"isOwner" as const}
            slot3={p.renderPlasmicSlot({
              defaultContents: "example@email.com",
              value: args.slot3222,
            })}
            userName={p.renderPlasmicSlot({
              defaultContents: "User Name",
              value: args.slot4222,
            })}
            userVariant={
              hasVariant(variants, "isOwner", "isOwner")
                ? undefined
                : ("isSelf" as const)
            }
          />

          <MemberItem
            className={classNames("__wab_instance", sty.memberItem__u5CiK, {
              [sty.memberItem__isOwner__u5CiKyBfUd]: hasVariant(
                variants,
                "isOwner",
                "isOwner"
              ),
            })}
            slot3={p.renderPlasmicSlot({
              defaultContents: "example@email.com",
              value: args.slot322,
            })}
            userName={p.renderPlasmicSlot({
              defaultContents: "User Name",
              value: args.slot422,
            })}
            userVariant={
              hasVariant(variants, "isOwner", "isOwner")
                ? undefined
                : ("isMember" as const)
            }
          />

          <MemberItem
            className={classNames("__wab_instance", sty.memberItem__rUmUt, {
              [sty.memberItem__isOwner__rUmUtyBfUd]: hasVariant(
                variants,
                "isOwner",
                "isOwner"
              ),
            })}
            slot3={p.renderPlasmicSlot({
              defaultContents: "example@email.com",
              value: args.slot32,
            })}
            userName={p.renderPlasmicSlot({
              defaultContents: "User Name",
              value: args.slot42,
            })}
            userVariant={
              hasVariant(variants, "isOwner", "isOwner")
                ? undefined
                : ("isAdmin" as const)
            }
          />
        </div>
      </div>

      {false ? (
        <div className={classNames(defaultcss.all, sty.box___1CNd9)}>
          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            buttonStyle={"primaryPurple" as const}
            count={"1"}
            slot={
              <IconPlusIcon
                className={classNames(defaultcss.all, sty.svg__qlkG3)}
                role={"img"}
              />
            }
            text2={
              <div
                data-plasmic-name={"text2"}
                data-plasmic-override={overrides.text2}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text2
                )}
              >
                {"Done"}
              </div>
            }
          >
            <IconRightIcon
              className={classNames(defaultcss.all, sty.svg__zn1XH)}
              role={"img"}
            />
          </Button>
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "form",
    "email",
    "invite",
    "link",
    "span",
    "membersContainer",
    "button",
    "text2",
  ],
  form: ["form", "email", "invite"],
  email: ["email"],
  invite: ["invite"],
  link: ["link", "span"],
  span: ["span"],
  membersContainer: ["membersContainer"],
  button: ["button", "text2"],
  text2: ["text2"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  form: "form";
  email: typeof InputText;
  invite: typeof Button;
  link: "a";
  span: "span";
  membersContainer: "div";
  button: typeof Button;
  text2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAddEditMembers__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAddEditMembers__VariantsArgs;
    args?: PlasmicAddEditMembers__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicAddEditMembers__Fetches;
  } & Omit<PlasmicAddEditMembers__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAddEditMembers__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAddEditMembers__ArgProps,
      internalVariantPropNames: PlasmicAddEditMembers__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicAddEditMembers__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAddEditMembers";
  } else {
    func.displayName = `PlasmicAddEditMembers.${nodeName}`;
  }
  return func;
}

export const PlasmicAddEditMembers = Object.assign(
  // Top-level PlasmicAddEditMembers renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    form: makeNodeComponent("form"),
    email: makeNodeComponent("email"),
    invite: makeNodeComponent("invite"),
    link: makeNodeComponent("link"),
    span: makeNodeComponent("span"),
    membersContainer: makeNodeComponent("membersContainer"),
    button: makeNodeComponent("button"),
    text2: makeNodeComponent("text2"),

    // Metadata about props expected for PlasmicAddEditMembers
    internalVariantProps: PlasmicAddEditMembers__VariantProps,
    internalArgProps: PlasmicAddEditMembers__ArgProps,
  }
);

export default PlasmicAddEditMembers;
/* prettier-ignore-end */
