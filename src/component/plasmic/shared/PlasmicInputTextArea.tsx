// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: Q2R-U25DUBO
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
import * as sty from "./PlasmicInputTextArea.module.css"; // plasmic-import: Q2R-U25DUBO/css

import IconCautionIcon from "./icons/PlasmicIcon__IconCaution"; // plasmic-import: 9xu35mhQf/icon

export type PlasmicInputTextArea__VariantMembers = {
  hasTextHelper: "hasTextHelper";
  error: "error";
  hasLabel: "hasLabel";
  isDisabled: "isDisabled";
};

export type PlasmicInputTextArea__VariantsArgs = {
  hasTextHelper?: SingleBooleanChoiceArg<"hasTextHelper">;
  error?: SingleBooleanChoiceArg<"error">;
  hasLabel?: SingleBooleanChoiceArg<"hasLabel">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
};

type VariantPropType = keyof PlasmicInputTextArea__VariantsArgs;
export const PlasmicInputTextArea__VariantProps = new Array<VariantPropType>(
  "hasTextHelper",
  "error",
  "hasLabel",
  "isDisabled"
);

export type PlasmicInputTextArea__ArgsType = {
  label?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicInputTextArea__ArgsType;
export const PlasmicInputTextArea__ArgProps = new Array<ArgPropType>(
  "label",
  "children"
);

export type PlasmicInputTextArea__OverridesType = {
  root?: p.Flex<"div">;
  textInput?: p.Flex<"div">;
  labelContainer?: p.Flex<"label">;
  inputHelperText?: p.Flex<"div">;
  textboxContainer?: p.Flex<"div">;
  input?: p.Flex<"textarea">;
  svg?: p.Flex<"svg">;
  errorMessage?: p.Flex<typeof ErrorMessage>;
};

export interface DefaultInputTextAreaProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  hasTextHelper?: SingleBooleanChoiceArg<"hasTextHelper">;
  error?: SingleBooleanChoiceArg<"error">;
  hasLabel?: SingleBooleanChoiceArg<"hasLabel">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  className?: string;
}

function PlasmicInputTextArea__RenderFunc(props: {
  variants: PlasmicInputTextArea__VariantsArgs;
  args: PlasmicInputTextArea__ArgsType;
  overrides: PlasmicInputTextArea__OverridesType;
  dataFetches?: PlasmicInputTextArea__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root,
        {
          [sty.root__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
        }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"textInput"}
        data-plasmic-override={overrides.textInput}
        hasGap={true}
        className={classNames(defaultcss.all, projectcss.all, sty.textInput)}
      >
        {(hasVariant(variants, "hasLabel", "hasLabel") ? true : false) ? (
          <label
            data-plasmic-name={"labelContainer"}
            data-plasmic-override={overrides.labelContainer}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.labelContainer,
              {
                [sty.labelContainer__hasLabel]: hasVariant(
                  variants,
                  "hasLabel",
                  "hasLabel"
                ),
              }
            )}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Label Name",
              value: args.label,
              className: classNames(sty.slotTargetLabel),
            })}
          </label>
        ) : null}
        {(
          hasVariant(variants, "hasTextHelper", "hasTextHelper") ? true : false
        ) ? (
          <div
            data-plasmic-name={"inputHelperText"}
            data-plasmic-override={overrides.inputHelperText}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.inputHelperText,
              {
                [sty.inputHelperText__error]: hasVariant(
                  variants,
                  "error",
                  "error"
                ),
                [sty.inputHelperText__hasLabel]: hasVariant(
                  variants,
                  "hasLabel",
                  "hasLabel"
                ),
                [sty.inputHelperText__hasTextHelper]: hasVariant(
                  variants,
                  "hasTextHelper",
                  "hasTextHelper"
                ),
              }
            )}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Text Helper Description",
              value: args.children,
              className: classNames(sty.slotTargetChildren),
            })}
          </div>
        ) : null}

        <div
          data-plasmic-name={"textboxContainer"}
          data-plasmic-override={overrides.textboxContainer}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.textboxContainer
          )}
        >
          <textarea
            data-plasmic-name={"input"}
            data-plasmic-override={overrides.input}
            className={classNames(
              defaultcss.textarea,
              projectcss.textarea,
              sty.input,
              {
                [sty.input__error]: hasVariant(variants, "error", "error"),
                [sty.input__isDisabled]: hasVariant(
                  variants,
                  "isDisabled",
                  "isDisabled"
                ),
              }
            )}
            placeholder={"" as const}
            title={"" as const}
          />

          {false ? (
            <svg
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(defaultcss.all, projectcss.all, sty.svg)}
              role={"img"}
            />
          ) : null}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.freeBox__wBY0
          )}
        />

        <div
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.freeBox__ytJal,
            {
              [sty.freeBox__error__ytJalieWq6]: hasVariant(
                variants,
                "error",
                "error"
              ),
            }
          )}
        >
          {(hasVariant(variants, "error", "error") ? true : false) ? (
            <ErrorMessage
              data-plasmic-name={"errorMessage"}
              data-plasmic-override={overrides.errorMessage}
              message={"Error message"}
            />
          ) : null}
        </div>
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
    "svg",
    "errorMessage",
  ],
  textInput: [
    "textInput",
    "labelContainer",
    "inputHelperText",
    "textboxContainer",
    "input",
    "svg",
    "errorMessage",
  ],
  labelContainer: ["labelContainer"],
  inputHelperText: ["inputHelperText"],
  textboxContainer: ["textboxContainer", "input", "svg"],
  input: ["input"],
  svg: ["svg"],
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
  input: "textarea";
  svg: "svg";
  errorMessage: typeof ErrorMessage;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInputTextArea__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInputTextArea__VariantsArgs;
    args?: PlasmicInputTextArea__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicInputTextArea__Fetches;
  } & Omit<PlasmicInputTextArea__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInputTextArea__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicInputTextArea__ArgProps,
      internalVariantPropNames: PlasmicInputTextArea__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicInputTextArea__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputTextArea";
  } else {
    func.displayName = `PlasmicInputTextArea.${nodeName}`;
  }
  return func;
}

export const PlasmicInputTextArea = Object.assign(
  // Top-level PlasmicInputTextArea renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    labelContainer: makeNodeComponent("labelContainer"),
    inputHelperText: makeNodeComponent("inputHelperText"),
    textboxContainer: makeNodeComponent("textboxContainer"),
    input: makeNodeComponent("input"),
    svg: makeNodeComponent("svg"),
    errorMessage: makeNodeComponent("errorMessage"),

    // Metadata about props expected for PlasmicInputTextArea
    internalVariantProps: PlasmicInputTextArea__VariantProps,
    internalArgProps: PlasmicInputTextArea__ArgProps,
  }
);

export default PlasmicInputTextArea;
/* prettier-ignore-end */
