// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rr3cgzELv8j1fSZjvVMfyx
// Component: BJX20CpONV
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
import InputField from "../../InputField"; // plasmic-import: yT5Y2AcZ02/component
import Button from "../../Button"; // plasmic-import: 4FEK_8lyET/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_home.module.css"; // plasmic-import: rr3cgzELv8j1fSZjvVMfyx/projectcss
import sty from "./PlasmicTimelinModal.module.css"; // plasmic-import: BJX20CpONV/css

export type PlasmicTimelinModal__VariantMembers = {};
export type PlasmicTimelinModal__VariantsArgs = {};
type VariantPropType = keyof PlasmicTimelinModal__VariantsArgs;
export const PlasmicTimelinModal__VariantProps = new Array<VariantPropType>();

export type PlasmicTimelinModal__ArgsType = {};
type ArgPropType = keyof PlasmicTimelinModal__ArgsType;
export const PlasmicTimelinModal__ArgProps = new Array<ArgPropType>();

export type PlasmicTimelinModal__OverridesType = {
  group55?: p.Flex<"div">;
  booking3DaysBefor2?: p.Flex<"div">;
  textbox?: p.Flex<"input">;
  booking3DaysBefor?: p.Flex<"div">;
  textarea?: p.Flex<"textarea">;
  button?: p.Flex<typeof Button>;
  booking3DaysBefor4?: p.Flex<"div">;
};

export interface DefaultTimelinModalProps {
  className?: string;
}

function PlasmicTimelinModal__RenderFunc(props: {
  variants: PlasmicTimelinModal__VariantsArgs;
  args: PlasmicTimelinModal__ArgsType;
  overrides: PlasmicTimelinModal__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"group55"}
      data-plasmic-override={overrides.group55}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.group55)}
    >
      <div
        data-plasmic-name={"booking3DaysBefor2"}
        data-plasmic-override={overrides.booking3DaysBefor2}
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.booking3DaysBefor2
        )}
      >
        {"Create New Timeline"}
      </div>

      <InputField
        booking3DaysBefor={"Name"}
        className={classNames("__wab_instance", sty.inputField__fzPe3)}
      >
        <input
          data-plasmic-name={"textbox"}
          data-plasmic-override={overrides.textbox}
          className={classNames(defaultcss.input, sty.textbox)}
          placeholder={"Some placeholder" as const}
          size={1 as const}
          type={"text" as const}
          value={"" as const}
        />
      </InputField>

      <InputField
        booking3DaysBefor={
          <div
            data-plasmic-name={"booking3DaysBefor"}
            data-plasmic-override={overrides.booking3DaysBefor}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.booking3DaysBefor
            )}
          >
            {"Description"}
          </div>
        }
        className={classNames("__wab_instance", sty.inputField__hwxq0)}
      >
        <textarea
          data-plasmic-name={"textarea"}
          data-plasmic-override={overrides.textarea}
          className={classNames(defaultcss.textarea, sty.textarea)}
          placeholder={"Some placeholder" as const}
          value={"" as const}
        />
      </InputField>

      <Button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames("__wab_instance", sty.button)}
      />

      <div
        data-plasmic-name={"booking3DaysBefor4"}
        data-plasmic-override={overrides.booking3DaysBefor4}
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.booking3DaysBefor4
        )}
      >
        {"Cancel"}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  group55: [
    "group55",
    "booking3DaysBefor2",
    "textbox",
    "booking3DaysBefor",
    "textarea",
    "button",
    "booking3DaysBefor4",
  ],

  booking3DaysBefor2: ["booking3DaysBefor2"],
  textbox: ["textbox"],
  booking3DaysBefor: ["booking3DaysBefor"],
  textarea: ["textarea"],
  button: ["button"],
  booking3DaysBefor4: ["booking3DaysBefor4"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  group55: "div";
  booking3DaysBefor2: "div";
  textbox: "input";
  booking3DaysBefor: "div";
  textarea: "textarea";
  button: typeof Button;
  booking3DaysBefor4: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTimelinModal__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTimelinModal__VariantsArgs;
    args?: PlasmicTimelinModal__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTimelinModal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTimelinModal__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTimelinModal__ArgProps,
      internalVariantPropNames: PlasmicTimelinModal__VariantProps,
    });

    return PlasmicTimelinModal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "group55") {
    func.displayName = "PlasmicTimelinModal";
  } else {
    func.displayName = `PlasmicTimelinModal.${nodeName}`;
  }
  return func;
}

export const PlasmicTimelinModal = Object.assign(
  // Top-level PlasmicTimelinModal renders the root element
  makeNodeComponent("group55"),
  {
    // Helper components rendering sub-elements
    booking3DaysBefor2: makeNodeComponent("booking3DaysBefor2"),
    textbox: makeNodeComponent("textbox"),
    booking3DaysBefor: makeNodeComponent("booking3DaysBefor"),
    textarea: makeNodeComponent("textarea"),
    button: makeNodeComponent("button"),
    booking3DaysBefor4: makeNodeComponent("booking3DaysBefor4"),

    // Metadata about props expected for PlasmicTimelinModal
    internalVariantProps: PlasmicTimelinModal__VariantProps,
    internalArgProps: PlasmicTimelinModal__ArgProps,
  }
);

export default PlasmicTimelinModal;
/* prettier-ignore-end */
