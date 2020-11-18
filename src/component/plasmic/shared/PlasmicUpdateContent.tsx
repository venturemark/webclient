/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: A1UjtYt6k0
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
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Metric from "../../metric/index"; // plasmic-import: _i6uD1XPzdbux6R/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicUpdateContent.module.css"; // plasmic-import: A1UjtYt6k0/css

export type PlasmicUpdateContent__VariantMembers = {
  state: "text" | "graph";
};

export type PlasmicUpdateContent__VariantsArgs = {
  state?: SingleChoiceArg<"text" | "graph">;
};

type VariantPropType = keyof PlasmicUpdateContent__VariantsArgs;
export const PlasmicUpdateContent__VariantProps = new Array<VariantPropType>(
  "state"
);

export type PlasmicUpdateContent__ArgsType = {};
type ArgPropType = keyof PlasmicUpdateContent__ArgsType;
export const PlasmicUpdateContent__ArgProps = new Array<ArgPropType>();

export type PlasmicUpdateContent__OverridesType = {
  contentContainer?: Flex<"div">;
  box?: Flex<"div">;
  textContainer?: Flex<"div">;
  metric?: Flex<typeof Metric>;
};

export interface DefaultUpdateContentProps {
  state?: SingleChoiceArg<"text" | "graph">;
  className?: string;
}

function PlasmicUpdateContent__RenderFunc(props: {
  variants: PlasmicUpdateContent__VariantsArgs;
  args: PlasmicUpdateContent__ArgsType;
  overrides: PlasmicUpdateContent__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const [
    isContentContainerHover,
    triggerContentContainerHoverProps
  ] = useTrigger("useHover", {});
  const triggers = {
    hover_contentContainer: isContentContainerHover
  };

  return (
    <div
      data-plasmic-name={"contentContainer"}
      data-plasmic-override={overrides.contentContainer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames({
        [defaultcss.all]: true,
        [projectcss.root_reset_mTVXT6w3HHjZ4d74q3gB76]: true,
        [sty.contentContainer]: true,
        [sty.contentContainer__state_graph]: hasVariant(
          variants,
          "state",
          "graph"
        ),

        [sty.contentContainer__state_text]: hasVariant(
          variants,
          "state",
          "text"
        )
      })}
      data-plasmic-trigger-props={[triggerContentContainerHoverProps]}
    >
      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames({
          [defaultcss.all]: true,
          [sty.box]: true,
          [sty.box__state_graph]: hasVariant(variants, "state", "graph"),
          [sty.box__state_text]: hasVariant(variants, "state", "text")
        })}
      >
        {(hasVariant(variants, "state", "graph") ? false : true) ? (
          <div
            data-plasmic-name={"textContainer"}
            data-plasmic-override={overrides.textContainer}
            className={
              classNames({
                [defaultcss.all]: true,
                [sty.textContainer]: true,
                [sty.textContainer__state_graph]: hasVariant(
                  variants,
                  "state",
                  "graph"
                ),

                [sty.textContainer__state_text]: hasVariant(
                  variants,
                  "state",
                  "text"
                )
              }) +
              " " +
              defaultcss.__wab_text
            }
          >
            {hasVariant(variants, "state", "text")
              ? "Lorem ipsum #dolor sit amet, consectetur adipiscing elit. Nam mollis varius ex. In ornare #scelerisque ex, ut 35 ullamcorper dui suscipit id. Mauris #maximus congue ante, sed varius sapien lobortis eu."
              : "Lorem ipsum #dolor sit amet, consectetur adipiscing elit. Nam mollis varius ex. In ornare #scelerisque ex, ut 35 ullamcorper dui suscipit id. Mauris #maximus congue ante, sed varius sapien lobortis eu.\n\n\n"}
          </div>
        ) : null}
        {(
          hasVariant(variants, "state", "text") &&
          triggers.hover_contentContainer
            ? false
            : hasVariant(variants, "state", "graph")
            ? true
            : false
        ) ? (
          <Metric
            data-plasmic-name={"metric"}
            data-plasmic-override={overrides.metric}
            className={classNames({
              __wab_instance: true,
              [sty.metric]: true,
              [sty.metric__state_graph]: hasVariant(variants, "state", "graph"),
              [sty.metric__state_text]: hasVariant(variants, "state", "text"),
              [sty.metric__state_text___hover]:
                hasVariant(variants, "state", "text") &&
                triggers.hover_contentContainer
            })}
            {...({} as any)}
          />
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  contentContainer: ["contentContainer", "box", "textContainer", "metric"],
  box: ["box", "textContainer", "metric"],
  textContainer: ["textContainer"],
  metric: ["metric"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  contentContainer: "div";
  box: "div";
  textContainer: "div";
  metric: typeof Metric;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUpdateContent__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUpdateContent__VariantsArgs;
    args?: PlasmicUpdateContent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & // Specify variants directly as props
  Omit<PlasmicUpdateContent__VariantsArgs, ReservedPropsType> &
    // Specify args directly as props
    Omit<PlasmicUpdateContent__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicUpdateContent__ArgProps,
      internalVariantPropNames: PlasmicUpdateContent__VariantProps
    });

    return PlasmicUpdateContent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "contentContainer") {
    func.displayName = "PlasmicUpdateContent";
  } else {
    func.displayName = `PlasmicUpdateContent.${nodeName}`;
  }
  return func;
}

export const PlasmicUpdateContent = Object.assign(
  // Top-level PlasmicUpdateContent renders the root element
  makeNodeComponent("contentContainer"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),
    textContainer: makeNodeComponent("textContainer"),
    metric: makeNodeComponent("metric"),

    // Metadata about props expected for PlasmicUpdateContent
    internalVariantProps: PlasmicUpdateContent__VariantProps,
    internalArgProps: PlasmicUpdateContent__ArgProps
  }
);

export default PlasmicUpdateContent;
/* prettier-ignore-end */
