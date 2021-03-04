// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: 0wz8hGqZgNQ
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
import * as sty from "./PlasmicTags.module.css"; // plasmic-import: 0wz8hGqZgNQ/css

import IconCloseIcon from "./icons/PlasmicIcon__IconClose"; // plasmic-import: v016HsKmfL/icon

export type PlasmicTags__VariantMembers = {
  buttonStyle:
    | "primaryPurple"
    | "secondaryPurple"
    | "secondaryGreen"
    | "red"
    | "blue";
  buttonFeatures: "icon" | "hasText";
  disabled: "disabled";
};

export type PlasmicTags__VariantsArgs = {
  buttonStyle?: SingleChoiceArg<
    "primaryPurple" | "secondaryPurple" | "secondaryGreen" | "red" | "blue"
  >;
  buttonFeatures?: MultiChoiceArg<"icon" | "hasText">;
  disabled?: SingleBooleanChoiceArg<"disabled">;
};

type VariantPropType = keyof PlasmicTags__VariantsArgs;
export const PlasmicTags__VariantProps = new Array<VariantPropType>(
  "buttonStyle",
  "buttonFeatures",
  "disabled"
);

export type PlasmicTags__ArgsType = {
  children?: React.ReactNode;
  text2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTags__ArgsType;
export const PlasmicTags__ArgProps = new Array<ArgPropType>(
  "children",
  "text2"
);

export type PlasmicTags__OverridesType = {
  root?: p.Flex<"div">;
  button?: p.Flex<"button">;
  box?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultTagsProps {
  children?: React.ReactNode;
  text2?: React.ReactNode;
  buttonStyle?: SingleChoiceArg<
    "primaryPurple" | "secondaryPurple" | "secondaryGreen" | "red" | "blue"
  >;
  buttonFeatures?: MultiChoiceArg<"icon" | "hasText">;
  disabled?: SingleBooleanChoiceArg<"disabled">;
  className?: string;
}

function PlasmicTags__RenderFunc(props: {
  variants: PlasmicTags__VariantsArgs;
  args: PlasmicTags__ArgsType;
  overrides: PlasmicTags__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__buttonStyle_primaryPurple]: hasVariant(
          variants,
          "buttonStyle",
          "primaryPurple"
        ),
        [sty.root__buttonStyle_red]: hasVariant(variants, "buttonStyle", "red"),
        [sty.root__buttonStyle_secondaryGreen]: hasVariant(
          variants,
          "buttonStyle",
          "secondaryGreen"
        ),
        [sty.root__buttonStyle_secondaryPurple]: hasVariant(
          variants,
          "buttonStyle",
          "secondaryPurple"
        ),
      })}
    >
      <button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames(defaultcss.button, sty.button, {
          [sty.button__buttonFeatures_icon]: hasVariant(
            variants,
            "buttonFeatures",
            "icon"
          ),
          [sty.button__buttonStyle_blue]: hasVariant(
            variants,
            "buttonStyle",
            "blue"
          ),
          [sty.button__buttonStyle_primaryPurple]: hasVariant(
            variants,
            "buttonStyle",
            "primaryPurple"
          ),
          [sty.button__buttonStyle_red]: hasVariant(
            variants,
            "buttonStyle",
            "red"
          ),
          [sty.button__buttonStyle_secondaryGreen]: hasVariant(
            variants,
            "buttonStyle",
            "secondaryGreen"
          ),
          [sty.button__buttonStyle_secondaryPurple]: hasVariant(
            variants,
            "buttonStyle",
            "secondaryPurple"
          ),
          [sty.button__disabled]: hasVariant(variants, "disabled", "disabled"),
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"box"}
          data-plasmic-override={overrides.box}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box, {
            [sty.box__buttonStyle_blue]: hasVariant(
              variants,
              "buttonStyle",
              "blue"
            ),
            [sty.box__buttonStyle_primaryPurple]: hasVariant(
              variants,
              "buttonStyle",
              "primaryPurple"
            ),
          })}
        >
          {(
            hasVariant(variants, "buttonFeatures", "hasText") ? true : false
          ) ? (
            <p.PlasmicSlot
              defaultContents={"Tag Name"}
              value={args.text2}
              className={classNames(sty.slotText2, {
                [sty.slotText2__buttonFeatures_hasText]: hasVariant(
                  variants,
                  "buttonFeatures",
                  "hasText"
                ),
                [sty.slotText2__buttonFeatures_icon]: hasVariant(
                  variants,
                  "buttonFeatures",
                  "icon"
                ),
                [sty.slotText2__buttonStyle_primaryPurple]: hasVariant(
                  variants,
                  "buttonStyle",
                  "primaryPurple"
                ),
                [sty.slotText2__buttonStyle_red]: hasVariant(
                  variants,
                  "buttonStyle",
                  "red"
                ),
                [sty.slotText2__buttonStyle_secondaryGreen]: hasVariant(
                  variants,
                  "buttonStyle",
                  "secondaryGreen"
                ),
                [sty.slotText2__buttonStyle_secondaryPurple]: hasVariant(
                  variants,
                  "buttonStyle",
                  "secondaryPurple"
                ),
                [sty.slotText2__disabled]: hasVariant(
                  variants,
                  "disabled",
                  "disabled"
                ),
              })}
            />
          ) : null}
          {(hasVariant(variants, "buttonFeatures", "icon") ? true : false) ? (
            <p.PlasmicSlot
              defaultContents={
                <IconCloseIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(defaultcss.all, sty.svg)}
                  role={"img"}
                />
              }
              value={args.children}
              className={classNames(sty.slotChildren, {
                [sty.slotChildren__buttonFeatures_icon]: hasVariant(
                  variants,
                  "buttonFeatures",
                  "icon"
                ),
                [sty.slotChildren__buttonFeatures_icon_buttonStyle_red]:
                  hasVariant(variants, "buttonFeatures", "icon") &&
                  hasVariant(variants, "buttonStyle", "red"),
                [sty.slotChildren__buttonFeatures_icon_buttonStyle_secondaryGreen]:
                  hasVariant(variants, "buttonFeatures", "icon") &&
                  hasVariant(variants, "buttonStyle", "secondaryGreen"),
                [sty.slotChildren__buttonFeatures_icon_buttonStyle_secondaryPurple]:
                  hasVariant(variants, "buttonFeatures", "icon") &&
                  hasVariant(variants, "buttonStyle", "secondaryPurple"),
                [sty.slotChildren__buttonStyle_red]: hasVariant(
                  variants,
                  "buttonStyle",
                  "red"
                ),
              })}
            />
          ) : null}
        </p.Stack>
      </button>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button", "box", "svg"],
  button: ["button", "box", "svg"],
  box: ["box", "svg"],
  svg: ["svg"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: "button";
  box: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTags__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicTags__VariantsArgs;
  args?: PlasmicTags__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicTags__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicTags__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTags__ArgProps,
      internalVariantPropNames: PlasmicTags__VariantProps,
    });

    return PlasmicTags__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTags";
  } else {
    func.displayName = `PlasmicTags.${nodeName}`;
  }
  return func;
}

export const PlasmicTags = Object.assign(
  // Top-level PlasmicTags renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    box: makeNodeComponent("box"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicTags
    internalVariantProps: PlasmicTags__VariantProps,
    internalArgProps: PlasmicTags__ArgProps,
  }
);

export default PlasmicTags;
/* prettier-ignore-end */
