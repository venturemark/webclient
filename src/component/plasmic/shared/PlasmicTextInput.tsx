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

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicTextInput.module.css"; // plasmic-import: v0nNSTRV39/css

export type PlasmicTextInput__VariantMembers = {};

export type PlasmicTextInput__VariantsArgs = {};
type VariantPropType = keyof PlasmicTextInput__VariantsArgs;
export const PlasmicTextInput__VariantProps = new Array<VariantPropType>();

export type PlasmicTextInput__ArgsType = {
  label?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTextInput__ArgsType;
export const PlasmicTextInput__ArgProps = new Array<ArgPropType>("label");

export type PlasmicTextInput__OverridesType = {
  root?: p.Flex<"div">;
  textInput?: p.Flex<"div">;
  label?: p.Flex<"label">;
  input?: p.Flex<"input">;
};

export interface DefaultTextInputProps {
  label?: React.ReactNode;
  className?: string;
}

function PlasmicTextInput__RenderFunc(props: {
  variants: PlasmicTextInput__VariantsArgs;
  args: PlasmicTextInput__ArgsType;
  overrides: PlasmicTextInput__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

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
        <div className={classNames(defaultcss.all, sty.box__yh41O)}>
          <p.PlasmicSlot
            defaultContents={
              <label
                data-plasmic-name={"label"}
                data-plasmic-override={overrides.label}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.label
                )}
              >
                {"Search your name"}
              </label>
            }
            value={args.label}
            className={classNames(sty.slotLabel)}
          />
        </div>

        <div className={classNames(defaultcss.all, sty.box___9LrSw)}>
          <input
            data-plasmic-name={"input"}
            data-plasmic-override={overrides.input}
            className={classNames(defaultcss.input, sty.input)}
            placeholder={"Thomas Brown" as const}
            size={1 as const}
            type={"text" as const}
          />
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textInput", "label", "input"],
  textInput: ["textInput", "label", "input"],
  label: ["label"],
  input: ["input"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textInput: "div";
  label: "label";
  input: "input";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTextInput__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicTextInput__VariantsArgs;
  args?: PlasmicTextInput__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicTextInput__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicTextInput__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTextInput__ArgProps,
      internalVariantPropNames: PlasmicTextInput__VariantProps,
    });

    return PlasmicTextInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTextInput";
  } else {
    func.displayName = `PlasmicTextInput.${nodeName}`;
  }
  return func;
}

export const PlasmicTextInput = Object.assign(
  // Top-level PlasmicTextInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    label: makeNodeComponent("label"),
    input: makeNodeComponent("input"),

    // Metadata about props expected for PlasmicTextInput
    internalVariantProps: PlasmicTextInput__VariantProps,
    internalArgProps: PlasmicTextInput__ArgProps,
  }
);

export default PlasmicTextInput;
/* prettier-ignore-end */
