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
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicInputToggleButton.module.css"; // plasmic-import: 0x0YjULkfHN/css

import IconCheckIcon from "./icons/PlasmicIcon__IconCheck"; // plasmic-import: MwyR6vQxWa/icon

export type PlasmicInputToggleButton__VariantMembers = {
  position: "top" | "middle" | "bottom";
  selected: "selected";
};

export type PlasmicInputToggleButton__VariantsArgs = {
  position?: SingleChoiceArg<"top" | "middle" | "bottom">;
  selected?: SingleBooleanChoiceArg<"selected">;
};

type VariantPropType = keyof PlasmicInputToggleButton__VariantsArgs;
export const PlasmicInputToggleButton__VariantProps = new Array<VariantPropType>(
  "position",
  "selected"
);

export type PlasmicInputToggleButton__ArgsType = {
  children?: React.ReactNode;
  label3?: React.ReactNode;
};

type ArgPropType = keyof PlasmicInputToggleButton__ArgsType;
export const PlasmicInputToggleButton__ArgProps = new Array<ArgPropType>(
  "children",
  "label3"
);

export type PlasmicInputToggleButton__OverridesType = {
  root?: p.Flex<"div">;
  toggleSet?: p.Flex<"div">;
  label?: p.Flex<"label">;
  inputHelperText?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultInputToggleButtonProps {
  children?: React.ReactNode;
  label3?: React.ReactNode;
  position?: SingleChoiceArg<"top" | "middle" | "bottom">;
  selected?: SingleBooleanChoiceArg<"selected">;
  className?: string;
}

function PlasmicInputToggleButton__RenderFunc(props: {
  variants: PlasmicInputToggleButton__VariantsArgs;
  args: PlasmicInputToggleButton__ArgsType;
  overrides: PlasmicInputToggleButton__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__selected]: hasVariant(variants, "selected", "selected"),
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"toggleSet"}
        data-plasmic-override={overrides.toggleSet}
        hasGap={true}
        className={classNames(defaultcss.all, sty.toggleSet, {
          [sty.toggleSet__position_bottom]: hasVariant(
            variants,
            "position",
            "bottom"
          ),

          [sty.toggleSet__position_middle]: hasVariant(
            variants,
            "position",
            "middle"
          ),

          [sty.toggleSet__position_top]: hasVariant(
            variants,
            "position",
            "top"
          ),

          [sty.toggleSet__selected]: hasVariant(
            variants,
            "selected",
            "selected"
          ),

          [sty.toggleSet__selected_position_middle]:
            hasVariant(variants, "selected", "selected") &&
            hasVariant(variants, "position", "middle"),
        })}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__itbKd, {
            [sty.box__selected__itbKd8Bz4B]: hasVariant(
              variants,
              "selected",
              "selected"
            ),
          })}
        >
          <label
            data-plasmic-name={"label"}
            data-plasmic-override={overrides.label}
            className={classNames(defaultcss.all, sty.label, {
              [sty.label__selected]: hasVariant(
                variants,
                "selected",
                "selected"
              ),
            })}
          >
            <p.PlasmicSlot
              defaultContents={"Private"}
              value={args.label3}
              className={classNames(sty.slotLabel3)}
            />
          </label>

          <div
            data-plasmic-name={"inputHelperText"}
            data-plasmic-override={overrides.inputHelperText}
            className={classNames(defaultcss.all, sty.inputHelperText)}
          >
            <p.PlasmicSlot
              defaultContents={
                "Only admins and members invited by you can see this timeline. "
              }
              value={args.children}
              className={classNames(sty.slotChildren)}
            />
          </div>
        </p.Stack>

        <div
          className={classNames(defaultcss.all, sty.box__jjyTr, {
            [sty.box__position_middle__jjyTrVfvwY]: hasVariant(
              variants,
              "position",
              "middle"
            ),

            [sty.box__selected__jjyTr8Bz4B]: hasVariant(
              variants,
              "selected",
              "selected"
            ),

            [sty.box__selected_position_middle__jjyTr8Bz4BVfvwY]:
              hasVariant(variants, "selected", "selected") &&
              hasVariant(variants, "position", "middle"),
          })}
        >
          {(
            hasVariant(variants, "position", "middle") &&
            hasVariant(variants, "selected", "selected")
              ? true
              : hasVariant(variants, "selected", "selected")
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

                [sty.svg__position_middle_selected]:
                  hasVariant(variants, "position", "middle") &&
                  hasVariant(variants, "selected", "selected"),
                [sty.svg__selected]: hasVariant(
                  variants,
                  "selected",
                  "selected"
                ),
              })}
              role={"img"}
            />
          ) : null}
        </div>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "toggleSet", "label", "inputHelperText", "svg"],
  toggleSet: ["toggleSet", "label", "inputHelperText", "svg"],
  label: ["label"],
  inputHelperText: ["inputHelperText"],
  svg: ["svg"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  toggleSet: "div";
  label: "label";
  inputHelperText: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInputToggleButton__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicInputToggleButton__VariantsArgs;
  args?: PlasmicInputToggleButton__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicInputToggleButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicInputToggleButton__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicInputToggleButton__ArgProps,
      internalVariantPropNames: PlasmicInputToggleButton__VariantProps,
    });

    return PlasmicInputToggleButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputToggleButton";
  } else {
    func.displayName = `PlasmicInputToggleButton.${nodeName}`;
  }
  return func;
}

export const PlasmicInputToggleButton = Object.assign(
  // Top-level PlasmicInputToggleButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    toggleSet: makeNodeComponent("toggleSet"),
    label: makeNodeComponent("label"),
    inputHelperText: makeNodeComponent("inputHelperText"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicInputToggleButton
    internalVariantProps: PlasmicInputToggleButton__VariantProps,
    internalArgProps: PlasmicInputToggleButton__ArgProps,
  }
);

export default PlasmicInputToggleButton;
/* prettier-ignore-end */