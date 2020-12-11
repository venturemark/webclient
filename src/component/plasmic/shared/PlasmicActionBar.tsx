// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: eUnRsS9UXR
import * as React from "react";
import {
  hasVariant,
  classNames,
  Flex,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  PlasmicIcon,
  PlasmicSlot,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
} from "@plasmicapp/react-web";

import { ScreenContext, ScreenValue } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicActionBar.module.css"; // plasmic-import: eUnRsS9UXR/css

export type PlasmicActionBar__VariantMembers = {
  error: "hasError";
  text: "hasText";
};

export type PlasmicActionBar__VariantsArgs = {
  error?: MultiChoiceArg<"hasError">;
  text?: MultiChoiceArg<"hasText">;
};

type VariantPropType = keyof PlasmicActionBar__VariantsArgs;
export const PlasmicActionBar__VariantProps = new Array<VariantPropType>(
  "error",
  "text"
);

export type PlasmicActionBar__ArgsType = {
  errorMessage?: React.ReactNode;
};

type ArgPropType = keyof PlasmicActionBar__ArgsType;
export const PlasmicActionBar__ArgProps = new Array<ArgPropType>(
  "errorMessage"
);

export type PlasmicActionBar__OverridesType = {
  root?: Flex<"div">;
  editorContainer?: Flex<"div">;
  textContainer?: Flex<"input">;
  errorContainer?: Flex<"div">;
  progressContainer?: Flex<"img">;
};

export interface DefaultActionBarProps {
  errorMessage?: React.ReactNode;
  error?: MultiChoiceArg<"hasError">;
  text?: MultiChoiceArg<"hasText">;
  className?: string;
}

function PlasmicActionBar__RenderFunc(props: {
  variants: PlasmicActionBar__VariantsArgs;
  args: PlasmicActionBar__ArgsType;
  overrides: PlasmicActionBar__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = {
    screen: React.useContext(ScreenContext),
  };

  Object.entries(globalVariants).forEach(([key, value]) => {
    if (value === ("PLEASE_RENDER_INSIDE_PROVIDER" as any)) {
      throw new Error(
        `Context value for ${key} was not defined. Did you render the required provider for this component? Learn More: https://www.plasmic.app/learn/other-assets/#global-variants`
      );
    }
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      data-plasmic-wrap-flex-child={true}
      className={classNames({
        [defaultcss.all]: true,
        [projectcss.root_reset_mTVXT6w3HHjZ4d74q3gB76]: true,
        [sty.root]: true,
        [sty.root__error_hasError]: hasVariant(variants, "error", "hasError"),
        [sty.root__error_hasError_global_screen_mobile]: hasVariant(
          variants,
          "error",
          "hasError"
        ),

        [sty.root__global_screen_mobile]: true,
        [sty.root__text_hasText]: hasVariant(variants, "text", "hasText"),
        [sty.root__text_hasText_error_hasError]:
          hasVariant(variants, "text", "hasText") &&
          hasVariant(variants, "error", "hasError"),
        [sty.root__text_hasText_error_hasError_global_screen_mobile]:
          hasVariant(variants, "text", "hasText") &&
          hasVariant(variants, "error", "hasError"),
      })}
    >
      <div
        className={classNames({
          [defaultcss.all]: true,
          [sty.box__error_hasError__zG8DoxYqMt]: hasVariant(
            variants,
            "error",
            "hasError"
          ),

          [sty.box__zG8Do]: true,
        })}
      >
        <div
          data-plasmic-name={"editorContainer"}
          data-plasmic-override={overrides.editorContainer}
          className={classNames({
            [defaultcss.all]: true,
            [sty.editorContainer]: true,
            [sty.editorContainer__error_hasError]: hasVariant(
              variants,
              "error",
              "hasError"
            ),

            [sty.editorContainer__global_screen_mobile]: true,
            [sty.editorContainer__text_hasText_error_hasError]:
              hasVariant(variants, "text", "hasText") &&
              hasVariant(variants, "error", "hasError"),
            [sty.editorContainer__text_hasText_error_hasError_global_screen_mobile]:
              hasVariant(variants, "text", "hasText") &&
              hasVariant(variants, "error", "hasError"),
            [sty.editorContainer__text_hasText_global_screen_mobile]: hasVariant(
              variants,
              "text",
              "hasText"
            ),
          })}
        >
          <input
            data-plasmic-name={"textContainer"}
            data-plasmic-override={overrides.textContainer}
            className={classNames({
              [defaultcss.input]: true,
              [sty.textContainer]: true,
              [sty.textContainer__global_screen_mobile]: true,
            })}
            placeholder={
              hasVariant(globalVariants, "screen", "mobile")
                ? ("Write update ..." as const)
                : ("Write an update" as const)
            }
            size={1 as const}
            type={"text" as const}
          />
        </div>
      </div>

      {(
        hasVariant(variants, "text", "hasText")
          ? true
          : hasVariant(variants, "error", "hasError")
          ? true
          : false
      ) ? (
        <div
          className={classNames({
            [defaultcss.all]: true,
            [sty.box__eZiS]: true,
            [sty.box__error_hasError__eZiSxYqMt]: hasVariant(
              variants,
              "error",
              "hasError"
            ),

            [sty.box__text_hasText__eZiSBMkcu]: hasVariant(
              variants,
              "text",
              "hasText"
            ),

            [sty.box__text_hasText_error_hasError__eZiSBMkcuXYqMt]:
              hasVariant(variants, "text", "hasText") &&
              hasVariant(variants, "error", "hasError"),
          })}
        >
          {(hasVariant(variants, "error", "hasError") ? true : false) ? (
            <div
              data-plasmic-name={"errorContainer"}
              data-plasmic-override={overrides.errorContainer}
              className={classNames({
                [defaultcss.all]: true,
                [sty.errorContainer]: true,
                [sty.errorContainer__error_hasError]: hasVariant(
                  variants,
                  "error",
                  "hasError"
                ),

                [sty.errorContainer__text_hasText_error_hasError]:
                  hasVariant(variants, "text", "hasText") &&
                  hasVariant(variants, "error", "hasError"),
                [sty.errorContainer__text_hasText_error_hasError_global_screen_mobile]:
                  hasVariant(variants, "text", "hasText") &&
                  hasVariant(variants, "error", "hasError"),
              })}
            >
              <PlasmicSlot
                defaultContents={"Please enter a number value"}
                value={args.errorMessage}
                className={classNames({
                  [sty.slotErrorMessage]: true,
                  [sty.slotErrorMessage__error_hasError]: hasVariant(
                    variants,
                    "error",
                    "hasError"
                  ),

                  [sty.slotErrorMessage__text_hasText_error_hasError_global_screen_mobile]:
                    hasVariant(variants, "text", "hasText") &&
                    hasVariant(variants, "error", "hasError"),
                })}
              />
            </div>
          ) : null}
          {(hasVariant(variants, "text", "hasText") ? true : false) ? (
            <div
              className={classNames({
                [defaultcss.all]: true,
                [sty.box__text_hasText__wGyU6BMkcu]: hasVariant(
                  variants,
                  "text",
                  "hasText"
                ),

                [sty.box__text_hasText_error_hasError__wGyU6BMkcuXYqMt]:
                  hasVariant(variants, "text", "hasText") &&
                  hasVariant(variants, "error", "hasError"),
                [sty.box__text_hasText_error_hasError_global_screen_mobile__wGyU6BMkcuXYqMtCckRm]:
                  hasVariant(variants, "text", "hasText") &&
                  hasVariant(variants, "error", "hasError"),
                [sty.box__wGyU6]: true,
              })}
            >
              {(hasVariant(variants, "text", "hasText") ? true : false) ? (
                <img
                  data-plasmic-name={"progressContainer"}
                  data-plasmic-override={overrides.progressContainer}
                  alt={""}
                  className={classNames({
                    [defaultcss.img]: true,
                    [sty.progressContainer]: true,
                    [sty.progressContainer__text_hasText]: hasVariant(
                      variants,
                      "text",
                      "hasText"
                    ),

                    [sty.progressContainer__text_hasText_error_hasError]:
                      hasVariant(variants, "text", "hasText") &&
                      hasVariant(variants, "error", "hasError"),
                  })}
                  role={"img"}
                />
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "editorContainer",
    "textContainer",
    "errorContainer",
    "progressContainer",
  ],

  editorContainer: ["editorContainer", "textContainer"],
  textContainer: ["textContainer"],
  errorContainer: ["errorContainer"],
  progressContainer: ["progressContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  editorContainer: "div";
  textContainer: "input";
  errorContainer: "div";
  progressContainer: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActionBar__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicActionBar__VariantsArgs;
    args?: PlasmicActionBar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicActionBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicActionBar__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicActionBar__ArgProps,
      internalVariantPropNames: PlasmicActionBar__VariantProps,
    });

    return PlasmicActionBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicActionBar";
  } else {
    func.displayName = `PlasmicActionBar.${nodeName}`;
  }
  return func;
}

export const PlasmicActionBar = Object.assign(
  // Top-level PlasmicActionBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    editorContainer: makeNodeComponent("editorContainer"),
    textContainer: makeNodeComponent("textContainer"),
    errorContainer: makeNodeComponent("errorContainer"),
    progressContainer: makeNodeComponent("progressContainer"),

    // Metadata about props expected for PlasmicActionBar
    internalVariantProps: PlasmicActionBar__VariantProps,
    internalArgProps: PlasmicActionBar__ArgProps,
  }
);

export default PlasmicActionBar;
/* prettier-ignore-end */
