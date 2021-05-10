// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: 0x0YjULkfHN
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
import * as sty from "./PlasmicRadio.module.css"; // plasmic-import: 0x0YjULkfHN/css

import IconCheckIcon from "./icons/PlasmicIcon__IconCheck"; // plasmic-import: MwyR6vQxWa/icon

export type PlasmicRadio__VariantMembers = {
  position: "top" | "middle" | "bottom";
  radioVariants: "isSelected" | "isDisabled" | "hasLabel";
};

export type PlasmicRadio__VariantsArgs = {
  position?: SingleChoiceArg<"top" | "middle" | "bottom">;
  radioVariants?: MultiChoiceArg<"isSelected" | "isDisabled" | "hasLabel">;
};

type VariantPropType = keyof PlasmicRadio__VariantsArgs;
export const PlasmicRadio__VariantProps = new Array<VariantPropType>(
  "position",
  "radioVariants"
);

export type PlasmicRadio__ArgsType = {
  helperText?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicRadio__ArgsType;
export const PlasmicRadio__ArgProps = new Array<ArgPropType>(
  "helperText",
  "children"
);

export type PlasmicRadio__OverridesType = {
  root?: p.Flex<"div">;
  radio?: p.Flex<"div">;
  labelContainer?: p.Flex<"div">;
  label?: p.Flex<"label">;
  inputHelperText?: p.Flex<"div">;
  buttonContainer?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultRadioProps {
  helperText?: React.ReactNode;
  children?: React.ReactNode;
  position?: SingleChoiceArg<"top" | "middle" | "bottom">;
  radioVariants?: MultiChoiceArg<"isSelected" | "isDisabled" | "hasLabel">;
  className?: string;
}

function PlasmicRadio__RenderFunc(props: {
  variants: PlasmicRadio__VariantsArgs;
  args: PlasmicRadio__ArgsType;
  overrides: PlasmicRadio__OverridesType;
  dataFetches?: PlasmicRadio__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false,
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin,
  };

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__radioVariants_isSelected]: hasVariant(
          variants,
          "radioVariants",
          "isSelected"
        ),
      })}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"radio"}
        data-plasmic-override={overrides.radio}
        hasGap={true}
        className={classNames(defaultcss.all, sty.radio, {
          [sty.radio_____focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.radio__position_bottom]: hasVariant(
            variants,
            "position",
            "bottom"
          ),
          [sty.radio__position_middle]: hasVariant(
            variants,
            "position",
            "middle"
          ),
          [sty.radio__position_top]: hasVariant(variants, "position", "top"),
          [sty.radio__radioVariants_hasLabel]: hasVariant(
            variants,
            "radioVariants",
            "hasLabel"
          ),
          [sty.radio__radioVariants_isDisabled]: hasVariant(
            variants,
            "radioVariants",
            "isDisabled"
          ),
          [sty.radio__radioVariants_isSelected]: hasVariant(
            variants,
            "radioVariants",
            "isSelected"
          ),
          [sty.radio__radioVariants_isSelected_position_middle]:
            hasVariant(variants, "radioVariants", "isSelected") &&
            hasVariant(variants, "position", "middle"),
        })}
      >
        {(hasVariant(variants, "radioVariants", "hasLabel") ? true : false) ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"labelContainer"}
            data-plasmic-override={overrides.labelContainer}
            hasGap={true}
            className={classNames(defaultcss.all, sty.labelContainer, {
              [sty.labelContainer__radioVariants_hasLabel]: hasVariant(
                variants,
                "radioVariants",
                "hasLabel"
              ),
              [sty.labelContainer__radioVariants_isSelected]: hasVariant(
                variants,
                "radioVariants",
                "isSelected"
              ),
            })}
          >
            <label
              data-plasmic-name={"label"}
              data-plasmic-override={overrides.label}
              className={classNames(defaultcss.all, sty.label, {
                [sty.label__radioVariants_hasLabel]: hasVariant(
                  variants,
                  "radioVariants",
                  "hasLabel"
                ),
                [sty.label__radioVariants_isSelected]: hasVariant(
                  variants,
                  "radioVariants",
                  "isSelected"
                ),
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Private",
                value: args.children,
                className: classNames(sty.slotChildren, {
                  [sty.slotChildren__radioVariants_hasLabel]: hasVariant(
                    variants,
                    "radioVariants",
                    "hasLabel"
                  ),
                }),
              })}
            </label>

            <div
              data-plasmic-name={"inputHelperText"}
              data-plasmic-override={overrides.inputHelperText}
              className={classNames(defaultcss.all, sty.inputHelperText)}
            >
              {p.renderPlasmicSlot({
                defaultContents:
                  "Only admins and members invited by you can see this timeline. ",
                value: args.helperText,
                className: classNames(sty.slotHelperText, {
                  [sty.slotHelperText__radioVariants_hasLabel]: hasVariant(
                    variants,
                    "radioVariants",
                    "hasLabel"
                  ),
                }),
              })}
            </div>
          </p.Stack>
        ) : null}
        {(
          hasVariant(variants, "radioVariants", "isSelected") ? true : false
        ) ? (
          <div
            data-plasmic-name={"buttonContainer"}
            data-plasmic-override={overrides.buttonContainer}
            className={classNames(defaultcss.all, sty.buttonContainer, {
              [sty.buttonContainer__position_middle]: hasVariant(
                variants,
                "position",
                "middle"
              ),
              [sty.buttonContainer__radioVariants_isDisabled]: hasVariant(
                variants,
                "radioVariants",
                "isDisabled"
              ),
              [sty.buttonContainer__radioVariants_isSelected]: hasVariant(
                variants,
                "radioVariants",
                "isSelected"
              ),
              [sty.buttonContainer__radioVariants_isSelected_position_middle]:
                hasVariant(variants, "radioVariants", "isSelected") &&
                hasVariant(variants, "position", "middle"),
            })}
          >
            {(
              hasVariant(variants, "position", "middle") &&
              hasVariant(variants, "radioVariants", "isSelected")
                ? true
                : hasVariant(variants, "radioVariants", "isSelected")
                ? true
                : hasVariant(variants, "position", "middle")
                ? false
                : false
            ) ? (
              <IconCheckIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(defaultcss.all, sty.svg, {
                  [sty.svg__position_middle]: hasVariant(
                    variants,
                    "position",
                    "middle"
                  ),
                  [sty.svg__position_middle_radioVariants_isSelected]:
                    hasVariant(variants, "position", "middle") &&
                    hasVariant(variants, "radioVariants", "isSelected"),
                  [sty.svg__radioVariants_isSelected]: hasVariant(
                    variants,
                    "radioVariants",
                    "isSelected"
                  ),
                })}
                role={"img"}
              />
            ) : null}
          </div>
        ) : null}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "radio",
    "labelContainer",
    "label",
    "inputHelperText",
    "buttonContainer",
    "svg",
  ],
  radio: [
    "radio",
    "labelContainer",
    "label",
    "inputHelperText",
    "buttonContainer",
    "svg",
  ],
  labelContainer: ["labelContainer", "label", "inputHelperText"],
  label: ["label"],
  inputHelperText: ["inputHelperText"],
  buttonContainer: ["buttonContainer", "svg"],
  svg: ["svg"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  radio: "div";
  labelContainer: "div";
  label: "label";
  inputHelperText: "div";
  buttonContainer: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRadio__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicRadio__VariantsArgs;
  args?: PlasmicRadio__ArgsType;
  overrides?: NodeOverridesType<T>;
  dataFetches?: PlasmicRadio__Fetches;
} & Omit<PlasmicRadio__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicRadio__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicRadio__ArgProps,
      internalVariantPropNames: PlasmicRadio__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicRadio__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRadio";
  } else {
    func.displayName = `PlasmicRadio.${nodeName}`;
  }
  return func;
}

export const PlasmicRadio = Object.assign(
  // Top-level PlasmicRadio renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    radio: makeNodeComponent("radio"),
    labelContainer: makeNodeComponent("labelContainer"),
    label: makeNodeComponent("label"),
    inputHelperText: makeNodeComponent("inputHelperText"),
    buttonContainer: makeNodeComponent("buttonContainer"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicRadio
    internalVariantProps: PlasmicRadio__VariantProps,
    internalArgProps: PlasmicRadio__ArgProps,
  }
);

export default PlasmicRadio;
/* prettier-ignore-end */
