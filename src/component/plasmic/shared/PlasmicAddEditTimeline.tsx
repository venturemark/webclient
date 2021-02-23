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
import RadioGroup from "../../radiogroup/index"; // plasmic-import: Q9Z-qP9n2Q/component
import ButtonSetEdit from "../../ButtonSetEdit"; // plasmic-import: pMqUN0f4G_a/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicAddEditTimeline.module.css"; // plasmic-import: 2FtsgZCi1Kx/css

export type PlasmicAddEditTimeline__VariantMembers = {
  variantState: "isEdit";
};

export type PlasmicAddEditTimeline__VariantsArgs = {
  variantState?: SingleChoiceArg<"isEdit">;
};

type VariantPropType = keyof PlasmicAddEditTimeline__VariantsArgs;
export const PlasmicAddEditTimeline__VariantProps = new Array<VariantPropType>(
  "variantState"
);

export type PlasmicAddEditTimeline__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  children2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicAddEditTimeline__ArgsType;
export const PlasmicAddEditTimeline__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "children2"
);

export type PlasmicAddEditTimeline__OverridesType = {
  settings?: p.Flex<"div">;
  box?: p.Flex<"div">;
  inputText?: p.Flex<typeof InputText>;
  inputTextArea?: p.Flex<typeof InputTextArea>;
  radioGroup?: p.Flex<typeof RadioGroup>;
  buttonSetEdit?: p.Flex<typeof ButtonSetEdit>;
};

export interface DefaultAddEditTimelineProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  children2?: React.ReactNode;
  variantState?: SingleChoiceArg<"isEdit">;
  className?: string;
}

function PlasmicAddEditTimeline__RenderFunc(props: {
  variants: PlasmicAddEditTimeline__VariantsArgs;
  args: PlasmicAddEditTimeline__ArgsType;
  overrides: PlasmicAddEditTimeline__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={"div"}
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
          [sty.settings__variantState_isEdit]: hasVariant(
            variants,
            "variantState",
            "isEdit"
          ),
        }
      )}
    >
      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, sty.box)}
      >
        {(hasVariant(variants, "variantState", "isEdit") ? false : true) ? (
          <p.PlasmicSlot
            defaultContents={"Create New Timeline"}
            value={args.children}
            className={classNames(sty.slotChildren, {
              [sty.slotChildren__variantState_isEdit]: hasVariant(
                variants,
                "variantState",
                "isEdit"
              ),
            })}
          />
        ) : null}
        {(hasVariant(variants, "variantState", "isEdit") ? true : false) ? (
          <p.PlasmicSlot
            defaultContents={"Edit Timeline"}
            value={args.children2}
            className={classNames(sty.slotChildren2, {
              [sty.slotChildren2__variantState_isEdit]: hasVariant(
                variants,
                "variantState",
                "isEdit"
              ),
            })}
          />
        ) : null}
        {(hasVariant(variants, "variantState", "isEdit") ? false : true) ? (
          <p.PlasmicSlot
            defaultContents={
              "A timeline is a group of updates that tells a particular story."
            }
            value={args.slot}
          />
        ) : null}
      </div>

      <InputText
        data-plasmic-name={"inputText"}
        data-plasmic-override={overrides.inputText}
        className={classNames("__wab_instance", sty.inputText)}
        hasLabel={"hasLabel" as const}
        label={"Name"}
      />

      <InputTextArea
        data-plasmic-name={"inputTextArea"}
        data-plasmic-override={overrides.inputTextArea}
        className={classNames("__wab_instance", sty.inputTextArea, {
          [sty.inputTextArea__variantState_isEdit]: hasVariant(
            variants,
            "variantState",
            "isEdit"
          ),
        })}
        hasLabel={"hasLabel" as const}
        hasTextHelper={"hasTextHelper" as const}
        label={"Description"}
      >
        {"Tell us a little bit about your venture."}
      </InputTextArea>

      <RadioGroup
        data-plasmic-name={"radioGroup"}
        data-plasmic-override={overrides.radioGroup}
        className={classNames("__wab_instance", sty.radioGroup)}
        hasLabel={"hasLabel" as const}
      />

      <ButtonSetEdit
        data-plasmic-name={"buttonSetEdit"}
        data-plasmic-override={overrides.buttonSetEdit}
        className={classNames("__wab_instance", sty.buttonSetEdit, {
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
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  settings: [
    "settings",
    "box",
    "inputText",
    "inputTextArea",
    "radioGroup",
    "buttonSetEdit",
  ],
  box: ["box"],
  inputText: ["inputText"],
  inputTextArea: ["inputTextArea"],
  radioGroup: ["radioGroup"],
  buttonSetEdit: ["buttonSetEdit"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  settings: "div";
  box: "div";
  inputText: typeof InputText;
  inputTextArea: typeof InputTextArea;
  radioGroup: typeof RadioGroup;
  buttonSetEdit: typeof ButtonSetEdit;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAddEditTimeline__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicAddEditTimeline__VariantsArgs;
  args?: PlasmicAddEditTimeline__ArgsType;
  overrides?: NodeOverridesType<T>;
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

    return PlasmicAddEditTimeline__RenderFunc({
      variants,
      args,
      overrides,
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
    box: makeNodeComponent("box"),
    inputText: makeNodeComponent("inputText"),
    inputTextArea: makeNodeComponent("inputTextArea"),
    radioGroup: makeNodeComponent("radioGroup"),
    buttonSetEdit: makeNodeComponent("buttonSetEdit"),

    // Metadata about props expected for PlasmicAddEditTimeline
    internalVariantProps: PlasmicAddEditTimeline__VariantProps,
    internalArgProps: PlasmicAddEditTimeline__ArgProps,
  }
);

export default PlasmicAddEditTimeline;
/* prettier-ignore-end */
