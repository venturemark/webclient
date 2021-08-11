// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: l1Qe8RjaNW
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
import * as sty from "./PlasmicSwitch.module.css"; // plasmic-import: l1Qe8RjaNW/css

import IconOvalIcon from "./icons/PlasmicIcon__IconOval"; // plasmic-import: FUAnm6q86/icon

export type PlasmicSwitch__VariantMembers = {
  variantSettings: "isSelected" | "isDisabled" | "hasLabel";
};

export type PlasmicSwitch__VariantsArgs = {
  variantSettings?: MultiChoiceArg<"isSelected" | "isDisabled" | "hasLabel">;
};

type VariantPropType = keyof PlasmicSwitch__VariantsArgs;
export const PlasmicSwitch__VariantProps = new Array<VariantPropType>(
  "variantSettings"
);

export type PlasmicSwitch__ArgsType = {
  inputTitle?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSwitch__ArgsType;
export const PlasmicSwitch__ArgProps = new Array<ArgPropType>("inputTitle");

export type PlasmicSwitch__OverridesType = {
  root?: p.Flex<"div">;
  label?: p.Flex<"div">;
  _switch?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultSwitchProps {
  inputTitle?: React.ReactNode;
  variantSettings?: MultiChoiceArg<"isSelected" | "isDisabled" | "hasLabel">;
  className?: string;
}

function PlasmicSwitch__RenderFunc(props: {
  variants: PlasmicSwitch__VariantsArgs;
  args: PlasmicSwitch__ArgsType;
  overrides: PlasmicSwitch__OverridesType;
  dataFetches?: PlasmicSwitch__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__variantSettings_hasLabel]: hasVariant(
          variants,
          "variantSettings",
          "hasLabel"
        ),
        [sty.root__variantSettings_isSelected]: hasVariant(
          variants,
          "variantSettings",
          "isSelected"
        ),
      })}
    >
      <div
        data-plasmic-name={"label"}
        data-plasmic-override={overrides.label}
        className={classNames(defaultcss.all, sty.label)}
      >
        {(hasVariant(variants, "variantSettings", "hasLabel") ? true : false)
          ? p.renderPlasmicSlot({
              defaultContents: "Allow members to create timelines",
              value: args.inputTitle,
              className: classNames(sty.slotInputTitle, {
                [sty.slotInputTitle__variantSettings_hasLabel]: hasVariant(
                  variants,
                  "variantSettings",
                  "hasLabel"
                ),
              }),
            })
          : null}
      </div>

      <div
        data-plasmic-name={"_switch"}
        data-plasmic-override={overrides._switch}
        className={classNames(defaultcss.all, sty._switch, {
          [sty._switch__variantSettings_isSelected]: hasVariant(
            variants,
            "variantSettings",
            "isSelected"
          ),
        })}
      >
        <IconOvalIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(defaultcss.all, sty.svg, {
            [sty.svg__variantSettings_isSelected]: hasVariant(
              variants,
              "variantSettings",
              "isSelected"
            ),
          })}
          role={"img"}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "label", "_switch", "svg"],
  label: ["label"],
  _switch: ["_switch", "svg"],
  svg: ["svg"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  label: "div";
  _switch: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSwitch__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSwitch__VariantsArgs;
    args?: PlasmicSwitch__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSwitch__Fetches;
  } & Omit<PlasmicSwitch__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSwitch__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSwitch__ArgProps,
      internalVariantPropNames: PlasmicSwitch__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicSwitch__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSwitch";
  } else {
    func.displayName = `PlasmicSwitch.${nodeName}`;
  }
  return func;
}

export const PlasmicSwitch = Object.assign(
  // Top-level PlasmicSwitch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    label: makeNodeComponent("label"),
    _switch: makeNodeComponent("_switch"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicSwitch
    internalVariantProps: PlasmicSwitch__VariantProps,
    internalArgProps: PlasmicSwitch__ArgProps,
  }
);

export default PlasmicSwitch;
/* prettier-ignore-end */
