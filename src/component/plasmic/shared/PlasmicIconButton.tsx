/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: odPjbfT2kyJgB_S
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

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicIconButton.module.css"; // plasmic-import: odPjbfT2kyJgB_S/css

export type PlasmicIconButton__VariantMembers = {
  isDisabled: "isDisabled";
  showContent: "showContent";
  withIcons: "start" | "end";
};

export type PlasmicIconButton__VariantsArgs = {
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  showContent?: SingleBooleanChoiceArg<"showContent">;
  withIcons?: MultiChoiceArg<"start" | "end">;
};

type VariantPropType = keyof PlasmicIconButton__VariantsArgs;
export const PlasmicIconButton__VariantProps = new Array<VariantPropType>(
  "isDisabled",
  "showContent",
  "withIcons"
);

export type PlasmicIconButton__ArgsType = {
  content?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

type ArgPropType = keyof PlasmicIconButton__ArgsType;
export const PlasmicIconButton__ArgProps = new Array<ArgPropType>(
  "content",
  "startIcon",
  "endIcon"
);

export type PlasmicIconButton__OverridesType = {
  root?: Flex<"div">;
  startIcon?: Flex<"svg">;
  box?: Flex<"div">;
  endIcon?: Flex<"svg">;
};

export interface DefaultIconButtonProps {
  content?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  showContent?: SingleBooleanChoiceArg<"showContent">;
  withIcons?: MultiChoiceArg<"start" | "end">;
  className?: string;
}

function PlasmicIconButton__RenderFunc(props: {
  variants: PlasmicIconButton__VariantsArgs;
  args: PlasmicIconButton__ArgsType;
  overrides: PlasmicIconButton__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const [
    isRootFocusVisibleWithin,
    triggerRootFocusVisibleWithinProps,
  ] = useTrigger("useFocusVisibleWithin", {
    isTextInput: false,
  });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin,
  };

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
        [sty.root____focusVisibleWithin]: triggers.focusVisibleWithin_root,
        [sty.root__isDisabled_isDisabled]: hasVariant(
          variants,
          "isDisabled",
          "isDisabled"
        ),

        [sty.root__showContent_showContent]: hasVariant(
          variants,
          "showContent",
          "showContent"
        ),

        [sty.root__withIcons_end]: hasVariant(variants, "withIcons", "end"),
        [sty.root__withIcons_start]: hasVariant(variants, "withIcons", "start"),
      })}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {(hasVariant(variants, "withIcons", "start") ? true : false) ? (
        <PlasmicSlot
          defaultContents={
            <svg
              data-plasmic-name={"startIcon"}
              data-plasmic-override={overrides.startIcon}
              className={classNames({
                [defaultcss.all]: true,
                [sty.startIcon]: true,
              })}
              role={"img"}
            />
          }
          value={args.startIcon}
        />
      ) : null}
      {(
        hasVariant(variants, "withIcons", "start")
          ? false
          : hasVariant(variants, "showContent", "showContent")
          ? true
          : false
      ) ? (
        <div
          data-plasmic-name={"box"}
          data-plasmic-override={overrides.box}
          className={classNames({
            [defaultcss.all]: true,
            [sty.box]: true,
            [sty.box__isDisabled_isDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),

            [sty.box__showContent_showContent]: hasVariant(
              variants,
              "showContent",
              "showContent"
            ),

            [sty.box__withIcons_start]: hasVariant(
              variants,
              "withIcons",
              "start"
            ),
          })}
        >
          <PlasmicSlot
            defaultContents={""}
            value={args.content}
            className={classNames({
              [sty.slotContent]: true,
              [sty.slotContent__isDisabled_isDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),
            })}
          />
        </div>
      ) : null}
      {(hasVariant(variants, "withIcons", "end") ? true : false) ? (
        <PlasmicSlot
          defaultContents={
            false ? (
              <svg
                data-plasmic-name={"endIcon"}
                data-plasmic-override={overrides.endIcon}
                className={classNames({
                  [defaultcss.all]: true,
                  [sty.endIcon]: true,
                })}
                role={"img"}
              />
            ) : null
          }
          value={args.endIcon}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "startIcon", "box", "endIcon"],
  startIcon: ["startIcon"],
  box: ["box"],
  endIcon: ["endIcon"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  startIcon: "svg";
  box: "div";
  endIcon: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIconButton__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIconButton__VariantsArgs;
    args?: PlasmicIconButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIconButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicIconButton__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicIconButton__ArgProps,
      internalVariantPropNames: PlasmicIconButton__VariantProps,
    });

    return PlasmicIconButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIconButton";
  } else {
    func.displayName = `PlasmicIconButton.${nodeName}`;
  }
  return func;
}

export const PlasmicIconButton = Object.assign(
  // Top-level PlasmicIconButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIcon: makeNodeComponent("startIcon"),
    box: makeNodeComponent("box"),
    endIcon: makeNodeComponent("endIcon"),

    // Metadata about props expected for PlasmicIconButton
    internalVariantProps: PlasmicIconButton__VariantProps,
    internalArgProps: PlasmicIconButton__ArgProps,
  }
);

export default PlasmicIconButton;
/* prettier-ignore-end */
