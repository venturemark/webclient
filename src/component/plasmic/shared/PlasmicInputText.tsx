// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: v0nNSTRV39
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
import ErrorMessage from "../../errormessage/index"; // plasmic-import: X8H70YUTyF/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicInputText.module.css"; // plasmic-import: v0nNSTRV39/css

import IconCautionIcon from "./icons/PlasmicIcon__IconCaution"; // plasmic-import: 9xu35mhQf/icon

export type PlasmicInputText__VariantMembers = {
  hasTextHelper: "hasTextHelper";
  error: "error";
  hasLabel: "hasLabel";
  isDisabled: "isDisabled";
};

export type PlasmicInputText__VariantsArgs = {
  hasTextHelper?: SingleBooleanChoiceArg<"hasTextHelper">;
  error?: SingleBooleanChoiceArg<"error">;
  hasLabel?: SingleBooleanChoiceArg<"hasLabel">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
};

type VariantPropType = keyof PlasmicInputText__VariantsArgs;
export const PlasmicInputText__VariantProps = new Array<VariantPropType>(
  "hasTextHelper",
  "error",
  "hasLabel",
  "isDisabled"
);

export type PlasmicInputText__ArgsType = {
  label?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicInputText__ArgsType;
export const PlasmicInputText__ArgProps = new Array<ArgPropType>(
  "label",
  "children"
);

export type PlasmicInputText__OverridesType = {
  root?: p.Flex<"div">;
  textInput?: p.Flex<"div">;
  labelContainer?: p.Flex<"label">;
  inputHelperText?: p.Flex<"div">;
  textboxContainer?: p.Flex<"div">;
  input?: p.Flex<"input">;
  errorContainer?: p.Flex<"div">;
  errorMessage?: p.Flex<typeof ErrorMessage>;
};

export interface DefaultInputTextProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  hasTextHelper?: SingleBooleanChoiceArg<"hasTextHelper">;
  error?: SingleBooleanChoiceArg<"error">;
  hasLabel?: SingleBooleanChoiceArg<"hasLabel">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  className?: string;
}

function PlasmicInputText__RenderFunc(props: {
  variants: PlasmicInputText__VariantsArgs;
  args: PlasmicInputText__ArgsType;
  overrides: PlasmicInputText__OverridesType;
  dataFetches?: PlasmicInputText__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"textInput"}
        data-plasmic-override={overrides.textInput}
        hasGap={true}
        className={classNames(defaultcss.all, sty.textInput)}
      >
        {(hasVariant(variants, "hasLabel", "hasLabel") ? true : false) ? (
          <label
            data-plasmic-name={"labelContainer"}
            data-plasmic-override={overrides.labelContainer}
            className={classNames(defaultcss.all, sty.labelContainer, {
              [sty.labelContainer__hasLabel]: hasVariant(
                variants,
                "hasLabel",
                "hasLabel"
              ),
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Label Name",
              value: args.label,
              className: classNames(sty.slotLabel),
            })}
          </label>
        ) : null}
        {(
          hasVariant(variants, "hasTextHelper", "hasTextHelper") ? true : false
        ) ? (
          <div
            data-plasmic-name={"inputHelperText"}
            data-plasmic-override={overrides.inputHelperText}
            className={classNames(defaultcss.all, sty.inputHelperText, {
              [sty.inputHelperText__error]: hasVariant(
                variants,
                "error",
                "error"
              ),
              [sty.inputHelperText__hasTextHelper]: hasVariant(
                variants,
                "hasTextHelper",
                "hasTextHelper"
              ),
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Text Helper Description",
              value: args.children,
              className: classNames(sty.slotChildren),
            })}
          </div>
        ) : null}

        <div className={classNames(defaultcss.all, sty.box___9LrSw)}>
          <div
            data-plasmic-name={"textboxContainer"}
            data-plasmic-override={overrides.textboxContainer}
            className={classNames(defaultcss.all, sty.textboxContainer)}
          >
            <div className={classNames(defaultcss.all, sty.box__lygyM)}>
              <div className={classNames(defaultcss.all, sty.box__eDsPg)}>
                <input
                  data-plasmic-name={"input"}
                  data-plasmic-override={overrides.input}
                  className={classNames(defaultcss.input, sty.input, {
                    [sty.input__isDisabled]: hasVariant(
                      variants,
                      "isDisabled",
                      "isDisabled"
                    ),
                  })}
                  disabled={false}
                  placeholder={"" as const}
                  title={"" as const}
                  type={"text" as const}
                />
              </div>
            </div>
          </div>
        </div>

        {(hasVariant(variants, "error", "error") ? true : true) ? (
          <div
            data-plasmic-name={"errorContainer"}
            data-plasmic-override={overrides.errorContainer}
            className={classNames(defaultcss.all, sty.errorContainer, {
              [sty.errorContainer__error]: hasVariant(
                variants,
                "error",
                "error"
              ),
            })}
          >
            {(hasVariant(variants, "error", "error") ? true : false) ? (
              <ErrorMessage
                data-plasmic-name={"errorMessage"}
                data-plasmic-override={overrides.errorMessage}
                message={"Error message"}
              />
            ) : null}
          </div>
        ) : null}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "textInput",
    "labelContainer",
    "inputHelperText",
    "textboxContainer",
    "input",
    "errorContainer",
    "errorMessage",
  ],
  textInput: [
    "textInput",
    "labelContainer",
    "inputHelperText",
    "textboxContainer",
    "input",
    "errorContainer",
    "errorMessage",
  ],
  labelContainer: ["labelContainer"],
  inputHelperText: ["inputHelperText"],
  textboxContainer: ["textboxContainer", "input"],
  input: ["input"],
  errorContainer: ["errorContainer", "errorMessage"],
  errorMessage: ["errorMessage"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textInput: "div";
  labelContainer: "label";
  inputHelperText: "div";
  textboxContainer: "div";
  input: "input";
  errorContainer: "div";
  errorMessage: typeof ErrorMessage;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInputText__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInputText__VariantsArgs;
    args?: PlasmicInputText__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicInputText__Fetches;
  } & Omit<PlasmicInputText__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInputText__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicInputText__ArgProps,
      internalVariantPropNames: PlasmicInputText__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicInputText__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputText";
  } else {
    func.displayName = `PlasmicInputText.${nodeName}`;
  }
  return func;
}

export const PlasmicInputText = Object.assign(
  // Top-level PlasmicInputText renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    labelContainer: makeNodeComponent("labelContainer"),
    inputHelperText: makeNodeComponent("inputHelperText"),
    textboxContainer: makeNodeComponent("textboxContainer"),
    input: makeNodeComponent("input"),
    errorContainer: makeNodeComponent("errorContainer"),
    errorMessage: makeNodeComponent("errorMessage"),

    // Metadata about props expected for PlasmicInputText
    internalVariantProps: PlasmicInputText__VariantProps,
    internalArgProps: PlasmicInputText__ArgProps,
  }
);

export default PlasmicInputText;
/* prettier-ignore-end */
