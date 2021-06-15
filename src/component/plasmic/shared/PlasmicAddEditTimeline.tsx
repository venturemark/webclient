// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: 2FtsgZCi1Kx
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
import RadioGroup from "../../radiogroup/index"; // plasmic-import: Q9Z-qP9n2Q/component
import ButtonSetEdit from "../../buttonsetedit/index"; // plasmic-import: pMqUN0f4G_a/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicAddEditTimeline.module.css"; // plasmic-import: 2FtsgZCi1Kx/css

export type PlasmicAddEditTimeline__VariantMembers = {
  variantState: "isEdit";
  isOwner: "isOwner";
};

export type PlasmicAddEditTimeline__VariantsArgs = {
  variantState?: SingleChoiceArg<"isEdit">;
  isOwner?: SingleBooleanChoiceArg<"isOwner">;
};

type VariantPropType = keyof PlasmicAddEditTimeline__VariantsArgs;
export const PlasmicAddEditTimeline__VariantProps = new Array<VariantPropType>(
  "variantState",
  "isOwner"
);

export type PlasmicAddEditTimeline__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  children2?: React.ReactNode;
  slot2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicAddEditTimeline__ArgsType;
export const PlasmicAddEditTimeline__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "children2",
  "slot2"
);

export type PlasmicAddEditTimeline__OverridesType = {
  settings?: p.Flex<"form">;
  name?: p.Flex<typeof InputText>;
  description?: p.Flex<typeof InputTextArea>;
  _switch?: p.Flex<typeof Switch>;
  visibility?: p.Flex<typeof RadioGroup>;
  buttonSetEdit?: p.Flex<typeof ButtonSetEdit>;
};

export interface DefaultAddEditTimelineProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  children2?: React.ReactNode;
  slot2?: React.ReactNode;
  variantState?: SingleChoiceArg<"isEdit">;
  isOwner?: SingleBooleanChoiceArg<"isOwner">;
  className?: string;
}

function PlasmicAddEditTimeline__RenderFunc(props: {
  variants: PlasmicAddEditTimeline__VariantsArgs;
  args: PlasmicAddEditTimeline__ArgsType;
  overrides: PlasmicAddEditTimeline__OverridesType;
  dataFetches?: PlasmicAddEditTimeline__Fetches;
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
        defaultcss.all,
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
      <div className={classNames(defaultcss.all, sty.box__tab7F)}>
        {(hasVariant(variants, "variantState", "isEdit") ? false : true)
          ? p.renderPlasmicSlot({
              defaultContents: "Create New Timeline",
              value: args.children,
              className: classNames(sty.slotChildren, {
                [sty.slotChildren__variantState_isEdit]: hasVariant(
                  variants,
                  "variantState",
                  "isEdit"
                ),
              }),
            })
          : null}
        {(hasVariant(variants, "variantState", "isEdit") ? true : false)
          ? p.renderPlasmicSlot({
              defaultContents: "Timeline Info",
              value: args.children2,
              className: classNames(sty.slotChildren2, {
                [sty.slotChildren2__variantState_isEdit]: hasVariant(
                  variants,
                  "variantState",
                  "isEdit"
                ),
              }),
            })
          : null}
        {(hasVariant(variants, "variantState", "isEdit") ? false : true)
          ? p.renderPlasmicSlot({
              defaultContents:
                "A timeline is a group of updates that tells a particular story.",
              value: args.slot,
            })
          : null}
      </div>

      <InputText
        data-plasmic-name={"name"}
        data-plasmic-override={overrides.name}
        className={classNames("__wab_instance", sty.name, {
          [sty.name__isOwner_variantState_isEdit]:
            hasVariant(variants, "isOwner", "isOwner") &&
            hasVariant(variants, "variantState", "isEdit"),
          [sty.name__variantState_isEdit]: hasVariant(
            variants,
            "variantState",
            "isEdit"
          ),
        })}
        hasLabel={"hasLabel" as const}
        isDisabled={
          hasVariant(variants, "isOwner", "isOwner") &&
          hasVariant(variants, "variantState", "isEdit")
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
          [sty.description__isOwner_variantState_isEdit]:
            hasVariant(variants, "isOwner", "isOwner") &&
            hasVariant(variants, "variantState", "isEdit"),
          [sty.description__variantState_isEdit]: hasVariant(
            variants,
            "variantState",
            "isEdit"
          ),
        })}
        hasLabel={"hasLabel" as const}
        hasTextHelper={"hasTextHelper" as const}
        isDisabled={
          hasVariant(variants, "isOwner", "isOwner") &&
          hasVariant(variants, "variantState", "isEdit")
            ? undefined
            : hasVariant(variants, "variantState", "isEdit")
            ? ("isDisabled" as const)
            : undefined
        }
        label={"Description"}
      >
        {"Tell us a little bit about your timeline."}
      </InputTextArea>

      {(
        hasVariant(variants, "variantState", "isEdit") &&
        hasVariant(variants, "isOwner", "isOwner")
          ? true
          : hasVariant(variants, "variantState", "isEdit")
          ? false
          : hasVariant(globalVariants, "screen", "mobile")
          ? true
          : true
      ) ? (
        <div
          className={classNames(defaultcss.all, sty.box__iyK9P, {
            [sty.box__variantState_isEdit__iyK9P7BsqN]: hasVariant(
              variants,
              "variantState",
              "isEdit"
            ),
            [sty.box__variantState_isEdit_isOwner__iyK9P7BsqNKSn9M]:
              hasVariant(variants, "variantState", "isEdit") &&
              hasVariant(variants, "isOwner", "isOwner"),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Permissions",
            value: args.slot2,
            className: classNames(sty.slotSlot2, {
              [sty.slotSlot2__variantState_isEdit]: hasVariant(
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
          : hasVariant(variants, "variantState", "isEdit")
          ? false
          : true
      ) ? (
        <Switch
          data-plasmic-name={"_switch"}
          data-plasmic-override={overrides._switch}
          className={classNames("__wab_instance", sty._switch, {
            [sty._switch__isOwner]: hasVariant(variants, "isOwner", "isOwner"),
            [sty._switch__variantState_isEdit]: hasVariant(
              variants,
              "variantState",
              "isEdit"
            ),
            [sty._switch__variantState_isEdit_isOwner]:
              hasVariant(variants, "variantState", "isEdit") &&
              hasVariant(variants, "isOwner", "isOwner"),
          })}
          inputTitle={"Allow all members to create updates"}
          variantSettings={["hasLabel"]}
        />
      ) : null}
      {(
        hasVariant(variants, "isOwner", "isOwner") &&
        hasVariant(variants, "variantState", "isEdit")
          ? false
          : hasVariant(variants, "variantState", "isEdit")
          ? false
          : true
      ) ? (
        <RadioGroup
          data-plasmic-name={"visibility"}
          data-plasmic-override={overrides.visibility}
          className={classNames("__wab_instance", sty.visibility, {
            [sty.visibility__isOwner]: hasVariant(
              variants,
              "isOwner",
              "isOwner"
            ),
            [sty.visibility__isOwner_variantState_isEdit]:
              hasVariant(variants, "isOwner", "isOwner") &&
              hasVariant(variants, "variantState", "isEdit"),
            [sty.visibility__variantState_isEdit]: hasVariant(
              variants,
              "variantState",
              "isEdit"
            ),
          })}
          hasLabel={"hasLabel" as const}
        />
      ) : null}
      {(
        hasVariant(variants, "isOwner", "isOwner") &&
        hasVariant(variants, "variantState", "isEdit")
          ? true
          : hasVariant(variants, "variantState", "isEdit")
          ? false
          : true
      ) ? (
        <ButtonSetEdit
          data-plasmic-name={"buttonSetEdit"}
          data-plasmic-override={overrides.buttonSetEdit}
          className={classNames("__wab_instance", sty.buttonSetEdit, {
            [sty.buttonSetEdit__isOwner_variantState_isEdit]:
              hasVariant(variants, "isOwner", "isOwner") &&
              hasVariant(variants, "variantState", "isEdit"),
            [sty.buttonSetEdit__variantState_isEdit]: hasVariant(
              variants,
              "variantState",
              "isEdit"
            ),
          })}
          variantState={
            hasVariant(variants, "variantState", "isEdit")
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
    "_switch",
    "visibility",
    "buttonSetEdit",
  ],
  name: ["name"],
  description: ["description"],
  _switch: ["_switch"],
  visibility: ["visibility"],
  buttonSetEdit: ["buttonSetEdit"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  settings: "form";
  name: typeof InputText;
  description: typeof InputTextArea;
  _switch: typeof Switch;
  visibility: typeof RadioGroup;
  buttonSetEdit: typeof ButtonSetEdit;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAddEditTimeline__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAddEditTimeline__VariantsArgs;
    args?: PlasmicAddEditTimeline__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicAddEditTimeline__Fetches;
  } & Omit<PlasmicAddEditTimeline__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAddEditTimeline__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAddEditTimeline__ArgProps,
      internalVariantPropNames: PlasmicAddEditTimeline__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicAddEditTimeline__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "settings") {
    func.displayName = "PlasmicAddEditTimeline";
  } else {
    func.displayName = `PlasmicAddEditTimeline.${nodeName}`;
  }
  return func;
}

export const PlasmicAddEditTimeline = Object.assign(
  // Top-level PlasmicAddEditTimeline renders the root element
  makeNodeComponent("settings"),
  {
    // Helper components rendering sub-elements
    _name: makeNodeComponent("name"),
    description: makeNodeComponent("description"),
    _switch: makeNodeComponent("_switch"),
    visibility: makeNodeComponent("visibility"),
    buttonSetEdit: makeNodeComponent("buttonSetEdit"),

    // Metadata about props expected for PlasmicAddEditTimeline
    internalVariantProps: PlasmicAddEditTimeline__VariantProps,
    internalArgProps: PlasmicAddEditTimeline__ArgProps,
  }
);

export default PlasmicAddEditTimeline;
/* prettier-ignore-end */
