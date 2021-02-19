// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: JU1t0P9pFY
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
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: JU1t0P9pFY/css

import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon
import IconRightIcon from "./icons/PlasmicIcon__IconRight"; // plasmic-import: v822ZhrBq/icon

export type PlasmicButton__VariantMembers = {
  buttonStyle:
    | "primaryPurple"
    | "secondaryPurple"
    | "secondaryGreen"
    | "danger"
    | "whiteBlue";
  buttonFeatures:
    | "showStartIcon"
    | "showEndIcon"
    | "isRounded"
    | "showCount"
    | "removeText";
  isDisabled: "isDisabled";
};

export type PlasmicButton__VariantsArgs = {
  buttonStyle?: SingleChoiceArg<
    | "primaryPurple"
    | "secondaryPurple"
    | "secondaryGreen"
    | "danger"
    | "whiteBlue"
  >;

  buttonFeatures?: MultiChoiceArg<
    "showStartIcon" | "showEndIcon" | "isRounded" | "showCount" | "removeText"
  >;

  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
};

type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "buttonStyle",
  "buttonFeatures",
  "isDisabled"
);

export type PlasmicButton__ArgsType = {
  count?: React.ReactNode;
  children?: React.ReactNode;
  slot?: React.ReactNode;
  text2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>(
  "count",
  "children",
  "slot",
  "text2"
);

export type PlasmicButton__OverridesType = {
  root?: p.Flex<"div">;
  button?: p.Flex<"button">;
  box?: p.Flex<"div">;
};

export interface DefaultButtonProps {
  count?: React.ReactNode;
  children?: React.ReactNode;
  slot?: React.ReactNode;
  text2?: React.ReactNode;
  buttonStyle?: SingleChoiceArg<
    | "primaryPurple"
    | "secondaryPurple"
    | "secondaryGreen"
    | "danger"
    | "whiteBlue"
  >;

  buttonFeatures?: MultiChoiceArg<
    "showStartIcon" | "showEndIcon" | "isRounded" | "showCount" | "removeText"
  >;

  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  className?: string;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;
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
        [sty.root__buttonFeatures_removeText]: hasVariant(
          variants,
          "buttonFeatures",
          "removeText"
        ),

        [sty.root__buttonStyle_danger]: hasVariant(
          variants,
          "buttonStyle",
          "danger"
        ),

        [sty.root__buttonStyle_primaryPurple]: hasVariant(
          variants,
          "buttonStyle",
          "primaryPurple"
        ),

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

        [sty.root__buttonStyle_whiteBlue]: hasVariant(
          variants,
          "buttonStyle",
          "whiteBlue"
        ),
      })}
    >
      <button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames(defaultcss.button, sty.button, {
          [sty.button__buttonFeatures_isRounded]: hasVariant(
            variants,
            "buttonFeatures",
            "isRounded"
          ),

          [sty.button__buttonFeatures_removeText]: hasVariant(
            variants,
            "buttonFeatures",
            "removeText"
          ),

          [sty.button__buttonFeatures_showCount]: hasVariant(
            variants,
            "buttonFeatures",
            "showCount"
          ),

          [sty.button__buttonFeatures_showEndIcon]: hasVariant(
            variants,
            "buttonFeatures",
            "showEndIcon"
          ),

          [sty.button__buttonFeatures_showEndIcon_buttonFeatures_showStartIcon]:
            hasVariant(variants, "buttonFeatures", "showEndIcon") &&
            hasVariant(variants, "buttonFeatures", "showStartIcon"),
          [sty.button__buttonFeatures_showEndIcon_buttonFeatures_showStartIcon_buttonStyle_secondaryPurple]:
            hasVariant(variants, "buttonFeatures", "showEndIcon") &&
            hasVariant(variants, "buttonFeatures", "showStartIcon") &&
            hasVariant(variants, "buttonStyle", "secondaryPurple"),
          [sty.button__buttonFeatures_showStartIcon]: hasVariant(
            variants,
            "buttonFeatures",
            "showStartIcon"
          ),

          [sty.button__buttonStyle_danger]: hasVariant(
            variants,
            "buttonStyle",
            "danger"
          ),

          [sty.button__buttonStyle_primaryPurple]: hasVariant(
            variants,
            "buttonStyle",
            "primaryPurple"
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

          [sty.button__buttonStyle_whiteBlue]: hasVariant(
            variants,
            "buttonStyle",
            "whiteBlue"
          ),

          [sty.button__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"box"}
          data-plasmic-override={overrides.box}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box, {
            [sty.box__buttonFeatures_removeText]: hasVariant(
              variants,
              "buttonFeatures",
              "removeText"
            ),
          })}
        >
          {(
            hasVariant(variants, "buttonFeatures", "showStartIcon")
              ? true
              : false
          ) ? (
            <p.PlasmicSlot
              defaultContents={
                <IconPlusIcon
                  className={classNames(defaultcss.all, sty.svg__vdEop)}
                  role={"img"}
                />
              }
              value={args.slot}
              className={classNames(sty.slotSlot, {
                [sty.slotSlot__buttonFeatures_showEndIcon]: hasVariant(
                  variants,
                  "buttonFeatures",
                  "showEndIcon"
                ),

                [sty.slotSlot__buttonFeatures_showEndIcon_buttonStyle_primaryPurple]:
                  hasVariant(variants, "buttonFeatures", "showEndIcon") &&
                  hasVariant(variants, "buttonStyle", "primaryPurple"),
                [sty.slotSlot__buttonFeatures_showEndIcon_buttonStyle_secondaryPurple]:
                  hasVariant(variants, "buttonFeatures", "showEndIcon") &&
                  hasVariant(variants, "buttonStyle", "secondaryPurple"),
                [sty.slotSlot__buttonFeatures_showStartIcon]: hasVariant(
                  variants,
                  "buttonFeatures",
                  "showStartIcon"
                ),

                [sty.slotSlot__buttonFeatures_showStartIcon_buttonFeatures_showEndIcon]:
                  hasVariant(variants, "buttonFeatures", "showStartIcon") &&
                  hasVariant(variants, "buttonFeatures", "showEndIcon"),
                [sty.slotSlot__buttonFeatures_showStartIcon_buttonStyle_danger]:
                  hasVariant(variants, "buttonFeatures", "showStartIcon") &&
                  hasVariant(variants, "buttonStyle", "danger"),
                [sty.slotSlot__buttonFeatures_showStartIcon_buttonStyle_secondaryGreen]:
                  hasVariant(variants, "buttonFeatures", "showStartIcon") &&
                  hasVariant(variants, "buttonStyle", "secondaryGreen"),
                [sty.slotSlot__buttonFeatures_showStartIcon_buttonStyle_secondaryPurple]:
                  hasVariant(variants, "buttonFeatures", "showStartIcon") &&
                  hasVariant(variants, "buttonStyle", "secondaryPurple"),
              })}
            />
          ) : null}
          {(
            hasVariant(variants, "buttonFeatures", "showCount") ? true : false
          ) ? (
            <p.PlasmicSlot
              defaultContents={"1"}
              value={args.count}
              className={classNames(sty.slotCount, {
                [sty.slotCount__buttonFeatures_isRounded]: hasVariant(
                  variants,
                  "buttonFeatures",
                  "isRounded"
                ),

                [sty.slotCount__buttonFeatures_showCount]: hasVariant(
                  variants,
                  "buttonFeatures",
                  "showCount"
                ),

                [sty.slotCount__buttonFeatures_showEndIcon]: hasVariant(
                  variants,
                  "buttonFeatures",
                  "showEndIcon"
                ),

                [sty.slotCount__buttonFeatures_showStartIcon]: hasVariant(
                  variants,
                  "buttonFeatures",
                  "showStartIcon"
                ),

                [sty.slotCount__buttonStyle_danger]: hasVariant(
                  variants,
                  "buttonStyle",
                  "danger"
                ),

                [sty.slotCount__buttonStyle_primaryPurple]: hasVariant(
                  variants,
                  "buttonStyle",
                  "primaryPurple"
                ),

                [sty.slotCount__buttonStyle_secondaryGreen]: hasVariant(
                  variants,
                  "buttonStyle",
                  "secondaryGreen"
                ),

                [sty.slotCount__buttonStyle_secondaryPurple]: hasVariant(
                  variants,
                  "buttonStyle",
                  "secondaryPurple"
                ),

                [sty.slotCount__isDisabled]: hasVariant(
                  variants,
                  "isDisabled",
                  "isDisabled"
                ),
              })}
            />
          ) : null}
          {(
            hasVariant(variants, "buttonFeatures", "removeText") ? false : true
          ) ? (
            <p.PlasmicSlot
              defaultContents={"Button"}
              value={args.text2}
              className={classNames(sty.slotText2, {
                [sty.slotText2__buttonFeatures_isRounded]: hasVariant(
                  variants,
                  "buttonFeatures",
                  "isRounded"
                ),

                [sty.slotText2__buttonFeatures_removeText]: hasVariant(
                  variants,
                  "buttonFeatures",
                  "removeText"
                ),

                [sty.slotText2__buttonFeatures_showCount]: hasVariant(
                  variants,
                  "buttonFeatures",
                  "showCount"
                ),

                [sty.slotText2__buttonFeatures_showStartIcon]: hasVariant(
                  variants,
                  "buttonFeatures",
                  "showStartIcon"
                ),

                [sty.slotText2__buttonStyle_danger]: hasVariant(
                  variants,
                  "buttonStyle",
                  "danger"
                ),

                [sty.slotText2__buttonStyle_primaryPurple]: hasVariant(
                  variants,
                  "buttonStyle",
                  "primaryPurple"
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

                [sty.slotText2__buttonStyle_whiteBlue]: hasVariant(
                  variants,
                  "buttonStyle",
                  "whiteBlue"
                ),
              })}
            />
          ) : null}
          {(
            hasVariant(variants, "buttonFeatures", "showEndIcon") ? true : false
          ) ? (
            <p.PlasmicSlot
              defaultContents={
                <IconRightIcon
                  className={classNames(defaultcss.all, sty.svg___85Aov)}
                  role={"img"}
                />
              }
              value={args.children}
              className={classNames(sty.slotChildren, {
                [sty.slotChildren__buttonFeatures_showEndIcon]: hasVariant(
                  variants,
                  "buttonFeatures",
                  "showEndIcon"
                ),

                [sty.slotChildren__buttonFeatures_showEndIcon_buttonStyle_danger]:
                  hasVariant(variants, "buttonFeatures", "showEndIcon") &&
                  hasVariant(variants, "buttonStyle", "danger"),
                [sty.slotChildren__buttonFeatures_showEndIcon_buttonStyle_secondaryGreen]:
                  hasVariant(variants, "buttonFeatures", "showEndIcon") &&
                  hasVariant(variants, "buttonStyle", "secondaryGreen"),
                [sty.slotChildren__buttonFeatures_showEndIcon_buttonStyle_secondaryPurple]:
                  hasVariant(variants, "buttonFeatures", "showEndIcon") &&
                  hasVariant(variants, "buttonStyle", "secondaryPurple"),
                [sty.slotChildren__buttonFeatures_showStartIcon]: hasVariant(
                  variants,
                  "buttonFeatures",
                  "showStartIcon"
                ),

                [sty.slotChildren__buttonStyle_danger]: hasVariant(
                  variants,
                  "buttonStyle",
                  "danger"
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
  root: ["root", "button", "box"],
  button: ["button", "box"],
  box: ["box"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: "button";
  box: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicButton__VariantsArgs;
  args?: PlasmicButton__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicButton__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicButton__ArgProps,
      internalVariantPropNames: PlasmicButton__VariantProps,
    });

    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
