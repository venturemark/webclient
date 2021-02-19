// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: PE9pgtdNju
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
import Button from "../../button/index"; // plasmic-import: JU1t0P9pFY/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicReplyInput.module.css"; // plasmic-import: PE9pgtdNju/css

import IconRightIcon from "./icons/PlasmicIcon__IconRight"; // plasmic-import: v822ZhrBq/icon
import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon

export type PlasmicReplyInput__VariantMembers = {};

export type PlasmicReplyInput__VariantsArgs = {};
type VariantPropType = keyof PlasmicReplyInput__VariantsArgs;
export const PlasmicReplyInput__VariantProps = new Array<VariantPropType>();

export type PlasmicReplyInput__ArgsType = {};
type ArgPropType = keyof PlasmicReplyInput__ArgsType;
export const PlasmicReplyInput__ArgProps = new Array<ArgPropType>();

export type PlasmicReplyInput__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"div">;
  replyForm?: p.Flex<"form">;
  replyInput?: p.Flex<"input">;
  postReplyButton?: p.Flex<typeof Button>;
  text?: p.Flex<"div">;
};

export interface DefaultReplyInputProps {
  className?: string;
}

function PlasmicReplyInput__RenderFunc(props: {
  variants: PlasmicReplyInput__VariantsArgs;
  args: PlasmicReplyInput__ArgsType;
  overrides: PlasmicReplyInput__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const [isRootFocusWithin, triggerRootFocusWithinProps] = useTrigger(
    "useFocusedWithin",
    {}
  );

  const triggers = {
    focusWithin_root: isRootFocusWithin,
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      data-plasmic-trigger-props={[triggerRootFocusWithinProps]}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box)}
      >
        <form
          data-plasmic-name={"replyForm"}
          data-plasmic-override={overrides.replyForm}
          className={classNames(defaultcss.all, sty.replyForm)}
        >
          <input
            data-plasmic-name={"replyInput"}
            data-plasmic-override={overrides.replyInput}
            className={classNames(defaultcss.input, sty.replyInput)}
            placeholder={"Write a reply" as const}
            type={"text" as const}
          />

          {(triggers.focusWithin_root ? true : false) ? (
            <Button
              data-plasmic-name={"postReplyButton"}
              data-plasmic-override={overrides.postReplyButton}
              className={classNames("__wab_instance", sty.postReplyButton)}
              count={
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text
                  )}
                >
                  {"Post Reply"}
                </div>
              }
            />
          ) : null}
        </form>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "box", "replyForm", "replyInput", "postReplyButton", "text"],
  box: ["box", "replyForm", "replyInput", "postReplyButton", "text"],
  replyForm: ["replyForm", "replyInput", "postReplyButton", "text"],
  replyInput: ["replyInput"],
  postReplyButton: ["postReplyButton", "text"],
  text: ["text"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  box: "div";
  replyForm: "form";
  replyInput: "input";
  postReplyButton: typeof Button;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReplyInput__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicReplyInput__VariantsArgs;
  args?: PlasmicReplyInput__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicReplyInput__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicReplyInput__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicReplyInput__ArgProps,
      internalVariantPropNames: PlasmicReplyInput__VariantProps,
    });

    return PlasmicReplyInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicReplyInput";
  } else {
    func.displayName = `PlasmicReplyInput.${nodeName}`;
  }
  return func;
}

export const PlasmicReplyInput = Object.assign(
  // Top-level PlasmicReplyInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),
    replyForm: makeNodeComponent("replyForm"),
    replyInput: makeNodeComponent("replyInput"),
    postReplyButton: makeNodeComponent("postReplyButton"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicReplyInput
    internalVariantProps: PlasmicReplyInput__VariantProps,
    internalArgProps: PlasmicReplyInput__ArgProps,
  }
);

export default PlasmicReplyInput;
/* prettier-ignore-end */
