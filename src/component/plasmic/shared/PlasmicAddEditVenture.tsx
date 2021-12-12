// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: xICnD3GwL-L
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
import InputTextArea from "../../inputtextarea/index"; // plasmic-import: Q2R-U25DUBO/component
import Switch from "../../switch/index"; // plasmic-import: l1Qe8RjaNW/component
import ButtonSetEdit from "../../buttonsetedit/index"; // plasmic-import: pMqUN0f4G_a/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicAddEditVenture.module.css"; // plasmic-import: xICnD3GwL-L/css

import IconHashIcon from "./icons/PlasmicIcon__IconHash"; // plasmic-import: AVLV6uMr56/icon

export type PlasmicAddEditVenture__VariantMembers = {
  variantState: "isEdit";
  isOwner: "isOwner";
};

export type PlasmicAddEditVenture__VariantsArgs = {
  variantState?: SingleChoiceArg<"isEdit">;
  isOwner?: SingleBooleanChoiceArg<"isOwner">;
};

type VariantPropType = keyof PlasmicAddEditVenture__VariantsArgs;
export const PlasmicAddEditVenture__VariantProps = new Array<VariantPropType>(
  "variantState",
  "isOwner"
);

export type PlasmicAddEditVenture__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  children2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicAddEditVenture__ArgsType;
export const PlasmicAddEditVenture__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2",
  "children2"
);

export type PlasmicAddEditVenture__OverridesType = {
  settings?: p.Flex<"form">;
  name?: p.Flex<typeof InputText>;
  description?: p.Flex<typeof InputTextArea>;
  url?: p.Flex<typeof InputText>;
  membersWrite?: p.Flex<typeof Switch>;
  buttons?: p.Flex<typeof ButtonSetEdit>;
};

export interface DefaultAddEditVentureProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  children2?: React.ReactNode;
  variantState?: SingleChoiceArg<"isEdit">;
  isOwner?: SingleBooleanChoiceArg<"isOwner">;
  className?: string;
}

function PlasmicAddEditVenture__RenderFunc(props: {
  variants: PlasmicAddEditVenture__VariantsArgs;
  args: PlasmicAddEditVenture__ArgsType;
  overrides: PlasmicAddEditVenture__OverridesType;
  dataFetches?: PlasmicAddEditVenture__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  });

  return (
    <p.Stack
      as={"form"}
      data-plasmic-name={"settings"}
      data-plasmic-override={overrides.settings}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        sty.settings,
        {
          [sty.settings__isOwner]: hasVariant(variants, "isOwner", "isOwner"),
          [sty.settings__variantState_isEdit]: hasVariant(
            variants,
            "variantState",
            "isEdit"
          ),
        }
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__nqvhu)}>
        {(hasVariant(variants, "variantState", "isEdit") ? false : true)
          ? p.renderPlasmicSlot({
              defaultContents: "Create a New Venture",
              value: args.children,
              className: classNames(sty.slotTargetChildren, {
                [sty.slotTargetChildren__variantState_isEdit]: hasVariant(
                  variants,
                  "variantState",
                  "isEdit"
                ),
              }),
            })
          : null}
        {(hasVariant(variants, "variantState", "isEdit") ? true : false)
          ? p.renderPlasmicSlot({
              defaultContents: "Venture Info",
              value: args.children2,
              className: classNames(sty.slotTargetChildren2, {
                [sty.slotTargetChildren2__variantState_isEdit]: hasVariant(
                  variants,
                  "variantState",
                  "isEdit"
                ),
              }),
            })
          : null}
        {(hasVariant(variants, "variantState", "isEdit") ? false : true)
          ? p.renderPlasmicSlot({
              defaultContents: "Start a new venture to share stories.",
              value: args.slot,
            })
          : null}
      </div>

      <InputText
        data-plasmic-name={"name"}
        data-plasmic-override={overrides.name}
        className={classNames("__wab_instance", sty.name, {
          [sty.name__isOwner]: hasVariant(variants, "isOwner", "isOwner"),
          [sty.name__variantState_isEdit]: hasVariant(
            variants,
            "variantState",
            "isEdit"
          ),
          [sty.name__variantState_isEdit_isOwner]:
            hasVariant(variants, "variantState", "isEdit") &&
            hasVariant(variants, "isOwner", "isOwner"),
        })}
        hasLabel={"hasLabel" as const}
        isDisabled={
          hasVariant(variants, "variantState", "isEdit") &&
          hasVariant(variants, "isOwner", "isOwner")
            ? undefined
            : hasVariant(variants, "variantState", "isEdit")
            ? ("isDisabled" as const)
            : undefined
        }
        label={"Name"}
      />

      <InputTextArea
        data-plasmic-name={"description"}
        data-plasmic-override={overrides.description}
        className={classNames("__wab_instance", sty.description, {
          [sty.description__isOwner]: hasVariant(
            variants,
            "isOwner",
            "isOwner"
          ),
          [sty.description__variantState_isEdit]: hasVariant(
            variants,
            "variantState",
            "isEdit"
          ),
          [sty.description__variantState_isEdit_isOwner]:
            hasVariant(variants, "variantState", "isEdit") &&
            hasVariant(variants, "isOwner", "isOwner"),
        })}
        hasLabel={"hasLabel" as const}
        hasTextHelper={
          hasVariant(variants, "isOwner", "isOwner")
            ? ("hasTextHelper" as const)
            : hasVariant(variants, "variantState", "isEdit")
            ? undefined
            : ("hasTextHelper" as const)
        }
        isDisabled={
          hasVariant(variants, "variantState", "isEdit") &&
          hasVariant(variants, "isOwner", "isOwner")
            ? undefined
            : hasVariant(variants, "variantState", "isEdit")
            ? ("isDisabled" as const)
            : undefined
        }
        label={"Description"}
      >
        {"Tell us a little bit about your venture."}
      </InputTextArea>

      {(
        hasVariant(variants, "variantState", "isEdit") &&
        hasVariant(variants, "isOwner", "isOwner")
          ? true
          : hasVariant(variants, "variantState", "isEdit")
          ? true
          : true
      ) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__uCWf, {
            [sty.freeBox__isOwner__uCWfmdraL]: hasVariant(
              variants,
              "isOwner",
              "isOwner"
            ),
            [sty.freeBox__variantState_isEdit__uCWf2IFcI]: hasVariant(
              variants,
              "variantState",
              "isEdit"
            ),
            [sty.freeBox__variantState_isEdit_isOwner__uCWf2IFcIMdraL]:
              hasVariant(variants, "variantState", "isEdit") &&
              hasVariant(variants, "isOwner", "isOwner"),
          })}
        >
          {false ? (
            <InputText
              data-plasmic-name={"url"}
              data-plasmic-override={overrides.url}
              hasLabel={"hasLabel" as const}
              hasTextHelper={"hasTextHelper" as const}
              isDisabled={
                hasVariant(variants, "isOwner", "isOwner")
                  ? undefined
                  : ("isDisabled" as const)
              }
              label={"Custom URL"}
            >
              {"Enter in a URL name for this venture"}
            </InputText>
          ) : null}
        </p.Stack>
      ) : null}
      {(
        hasVariant(variants, "variantState", "isEdit") &&
        hasVariant(variants, "isOwner", "isOwner")
          ? true
          : hasVariant(variants, "isOwner", "isOwner")
          ? true
          : hasVariant(variants, "variantState", "isEdit")
          ? false
          : hasVariant(globalVariants, "screen", "mobile")
          ? false
          : false
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__katKc, {
            [sty.freeBox__isOwner__katKcmdraL]: hasVariant(
              variants,
              "isOwner",
              "isOwner"
            ),
            [sty.freeBox__variantState_isEdit__katKc2IFcI]: hasVariant(
              variants,
              "variantState",
              "isEdit"
            ),
            [sty.freeBox__variantState_isEdit_isOwner__katKc2IFcIMdraL]:
              hasVariant(variants, "variantState", "isEdit") &&
              hasVariant(variants, "isOwner", "isOwner"),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Permissions",
            value: args.slot2,
            className: classNames(sty.slotTargetSlot2, {
              [sty.slotTargetSlot2__isOwner]: hasVariant(
                variants,
                "isOwner",
                "isOwner"
              ),
              [sty.slotTargetSlot2__isOwner_variantState_isEdit]:
                hasVariant(variants, "isOwner", "isOwner") &&
                hasVariant(variants, "variantState", "isEdit"),
              [sty.slotTargetSlot2__variantState_isEdit]: hasVariant(
                variants,
                "variantState",
                "isEdit"
              ),
            }),
          })}
        </div>
      ) : null}
      {(
        hasVariant(variants, "variantState", "isEdit") &&
        hasVariant(variants, "isOwner", "isOwner")
          ? true
          : hasVariant(variants, "isOwner", "isOwner")
          ? true
          : hasVariant(variants, "variantState", "isEdit")
          ? false
          : hasVariant(globalVariants, "screen", "mobile")
          ? false
          : false
      ) ? (
        <Switch
          data-plasmic-name={"membersWrite"}
          data-plasmic-override={overrides.membersWrite}
          className={classNames("__wab_instance", sty.membersWrite, {
            [sty.membersWrite__isOwner]: hasVariant(
              variants,
              "isOwner",
              "isOwner"
            ),
            [sty.membersWrite__variantState_isEdit]: hasVariant(
              variants,
              "variantState",
              "isEdit"
            ),
            [sty.membersWrite__variantState_isEdit_isOwner]:
              hasVariant(variants, "variantState", "isEdit") &&
              hasVariant(variants, "isOwner", "isOwner"),
          })}
          inputTitle={
            hasVariant(variants, "isOwner", "isOwner")
              ? "Allow all members to create timelines"
              : "Allow members to create timelines"
          }
          variantSettings={
            hasVariant(variants, "isOwner", "isOwner")
              ? ["hasLabel"]
              : ["hasLabel", "isSelected"]
          }
        />
      ) : null}
      {(
        hasVariant(variants, "variantState", "isEdit") &&
        hasVariant(variants, "isOwner", "isOwner")
          ? true
          : hasVariant(variants, "isOwner", "isOwner")
          ? true
          : hasVariant(variants, "variantState", "isEdit")
          ? false
          : true
      ) ? (
        <ButtonSetEdit
          data-plasmic-name={"buttons"}
          data-plasmic-override={overrides.buttons}
          className={classNames("__wab_instance", sty.buttons, {
            [sty.buttons__isOwner]: hasVariant(variants, "isOwner", "isOwner"),
            [sty.buttons__variantState_isEdit]: hasVariant(
              variants,
              "variantState",
              "isEdit"
            ),
            [sty.buttons__variantState_isEdit_isOwner]:
              hasVariant(variants, "variantState", "isEdit") &&
              hasVariant(variants, "isOwner", "isOwner"),
          })}
          variantState={
            hasVariant(variants, "variantState", "isEdit") &&
            hasVariant(globalVariants, "screen", "mobile")
              ? ("isEdit" as const)
              : hasVariant(variants, "variantState", "isEdit")
              ? ("isEdit" as const)
              : undefined
          }
        />
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  settings: [
    "settings",
    "name",
    "description",
    "url",
    "membersWrite",
    "buttons",
  ],
  name: ["name"],
  description: ["description"],
  url: ["url"],
  membersWrite: ["membersWrite"],
  buttons: ["buttons"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  settings: "form";
  name: typeof InputText;
  description: typeof InputTextArea;
  url: typeof InputText;
  membersWrite: typeof Switch;
  buttons: typeof ButtonSetEdit;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAddEditVenture__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAddEditVenture__VariantsArgs;
    args?: PlasmicAddEditVenture__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicAddEditVenture__Fetches;
  } & Omit<PlasmicAddEditVenture__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAddEditVenture__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAddEditVenture__ArgProps,
      internalVariantPropNames: PlasmicAddEditVenture__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicAddEditVenture__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "settings") {
    func.displayName = "PlasmicAddEditVenture";
  } else {
    func.displayName = `PlasmicAddEditVenture.${nodeName}`;
  }
  return func;
}

export const PlasmicAddEditVenture = Object.assign(
  // Top-level PlasmicAddEditVenture renders the root element
  makeNodeComponent("settings"),
  {
    // Helper components rendering sub-elements
    _name: makeNodeComponent("name"),
    description: makeNodeComponent("description"),
    url: makeNodeComponent("url"),
    membersWrite: makeNodeComponent("membersWrite"),
    buttons: makeNodeComponent("buttons"),

    // Metadata about props expected for PlasmicAddEditVenture
    internalVariantProps: PlasmicAddEditVenture__VariantProps,
    internalArgProps: PlasmicAddEditVenture__ArgProps,
  }
);

export default PlasmicAddEditVenture;
/* prettier-ignore-end */
