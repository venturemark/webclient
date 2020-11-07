/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: Fs8bTUrvZrvfhCr
import * as React from "react";
import {
  hasVariant,
  classNames,
  Flex,
  wrapWithClassName,
  Renderer,
  NodeRenderer,
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
import IconButton from "../../iconButton/index"; // plasmic-import: odPjbfT2kyJgB_S/component

import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_flip_card.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import "./PlasmicUpdate.css"; // plasmic-import: Fs8bTUrvZrvfhCr/css
import IconGraphIcon from "./icons/PlasmicIcon__IconGraph"; // plasmic-import: X0yAm0kztuYc_IO/icon
import IconMetricIcon from "./icons/PlasmicIcon__IconMetric"; // plasmic-import: Sqzw_OTkst-6kZi/icon
import IconTextIcon from "./icons/PlasmicIcon__IconText"; // plasmic-import: ncDyDuIGRd/icon
import IconClockIcon from "./icons/PlasmicIcon__IconClock"; // plasmic-import: M_91_FWOwwP63LN/icon

export type PlasmicUpdate__VariantMembers = {
  state: "text" | "graph";
};

export type PlasmicUpdate__VariantsArgs = {
  state?: SingleChoiceArg<"text" | "graph">;
};

type VariantPropType = keyof PlasmicUpdate__VariantsArgs;
export const PlasmicUpdate__VariantProps = new Array<VariantPropType>("state");

export type PlasmicUpdate__ArgsType = {
  date?: React.ReactNode;
};

type ArgPropType = keyof PlasmicUpdate__ArgsType;
export const PlasmicUpdate__ArgProps = new Array<ArgPropType>("date");

export type PlasmicUpdate__OverridesType = {
  root?: Flex<"div">;
  textContainer?: Flex<"div">;
  metric?: Flex<typeof Metric>;
  toggleUpdateView?: Flex<typeof IconButton>;
  startIcon?: Flex<"svg">;
  endIcon?: Flex<"svg">;
  svg?: Flex<"svg">;
};

export interface DefaultUpdateProps {
  date?: React.ReactNode;
  state?: SingleChoiceArg<"text" | "graph">;
  className?: string;
}

function PlasmicUpdate__RenderFunc(props: {
  variants: PlasmicUpdate__VariantsArgs;
  args: PlasmicUpdate__ArgsType;
  overrides: PlasmicUpdate__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      data-plasmic-wrap-flex-child={true}
      className={classNames({
        "Update__root--graph__qz6VIVLB85": hasVariant(
          variants,
          "state",
          "graph"
        ),

        "Update__root--text__qz6VI__9Dd": hasVariant(variants, "state", "text"),
        Update__root__qz6VI: true,
        "plasmic-default__all": true,
        "plasmic-default__div": true,
        root_reset_mTVXT6w3HHjZ4d74q3gB76: true
      })}
    >
      <div
        data-plasmic-wrap-flex-child={true}
        className={classNames({
          "Update__box--graph__cT4abVLB85": hasVariant(
            variants,
            "state",
            "graph"
          ),

          "Update__box--text__cT4ab__9Dd": hasVariant(
            variants,
            "state",
            "text"
          ),

          Update__box__cT4ab: true,
          "plasmic-default__all": true,
          "plasmic-default__div": true
        })}
      >
        <div
          className={classNames({
            "Update__box--graph__AQbk3VLB85": hasVariant(
              variants,
              "state",
              "graph"
            ),

            "Update__box--text__AQbk3__9Dd": hasVariant(
              variants,
              "state",
              "text"
            ),

            Update__box__AQbk3: true,
            "plasmic-default__all": true,
            "plasmic-default__div": true
          })}
        >
          {(hasVariant(variants, "state", "graph") ? false : true) ? (
            <div
              data-plasmic-name={"textContainer"}
              data-plasmic-override={overrides.textContainer}
              className={
                classNames({
                  "Update__textContainer--graph__Q8i3cVLB85": hasVariant(
                    variants,
                    "state",
                    "graph"
                  ),

                  "Update__textContainer--text__Q8i3c__9Dd": hasVariant(
                    variants,
                    "state",
                    "text"
                  ),

                  Update__textContainer__Q8i3c: true,
                  "plasmic-default__all": true,
                  "plasmic-default__div": true
                }) + " __wab_text"
              }
            >
              {hasVariant(variants, "state", "text")
                ? "How does this feel to create updates?\n\nWe have a character limit in this box. Updates can't be too long.\n\nBut at least it can be long enough to capture a full idea.\n\nsdfsdfsfsfsfsdfsd\n\n\n\n\nsdfsdfsdfsdfsd"
                : "How does this feel to create updates?\n\nWe have a character limit in this box. Updates can't be too long.\n\nBut at least it can be long enough to capture a full idea.\n\nsdfsdfsfsfsfsdfsd\n\n\n\n\nsdfsdfsdfsdfsd"}
            </div>
          ) : null}
          {(hasVariant(variants, "state", "graph") ? true : false) ? (
            <Metric
              data-plasmic-name={"metric"}
              data-plasmic-override={overrides.metric}
              className={classNames({
                "Update__metric--graph__ejHyMVLB85": hasVariant(
                  variants,
                  "state",
                  "graph"
                ),

                Update__metric__ejHyM: true,
                __wab_instance: true
              })}
              {...({} as any)}
            ></Metric>
          ) : null}
        </div>

        {(hasVariant(variants, "state", "text") ? true : true) ? (
          <div
            className={classNames({
              "Update__box--graph__4ZrypVLB85": hasVariant(
                variants,
                "state",
                "graph"
              ),

              "Update__box--text__4Zryp__9Dd": hasVariant(
                variants,
                "state",
                "text"
              ),

              Update__box__4Zryp: true,
              "plasmic-default__all": true,
              "plasmic-default__div": true
            })}
          >
            {(hasVariant(variants, "state", "text") ? true : true) ? (
              <div
                data-plasmic-wrap-flex-child={true}
                className={classNames({
                  "Update__box--graph__rBfllVLB85": hasVariant(
                    variants,
                    "state",
                    "graph"
                  ),

                  "Update__box--text__rBfll__9Dd": hasVariant(
                    variants,
                    "state",
                    "text"
                  ),

                  Update__box__rBfll: true,
                  "plasmic-default__all": true,
                  "plasmic-default__div": true
                })}
              >
                <IconButton
                  data-plasmic-name={"toggleUpdateView"}
                  data-plasmic-override={overrides.toggleUpdateView}
                  className={classNames({
                    "Update__toggleUpdateView--graph__o6_TOVLB85": hasVariant(
                      variants,
                      "state",
                      "graph"
                    ),

                    Update__toggleUpdateView__o6_TO: true,
                    __wab_instance: true
                  })}
                  endIcon={
                    <svg
                      data-plasmic-name={"endIcon"}
                      data-plasmic-override={overrides.endIcon}
                      className={classNames({
                        Update__endIcon__opXPA: true,
                        "plasmic-default__all": true,
                        "plasmic-default__svg": true
                      })}
                      role={"img"}
                    ></svg>
                  }
                  startIcon={
                    <PlasmicIcon
                      data-plasmic-name={"startIcon"}
                      data-plasmic-override={overrides.startIcon}
                      PlasmicIconType={
                        hasVariant(variants, "state", "graph")
                          ? IconTextIcon
                          : hasVariant(variants, "state", "text")
                          ? IconMetricIcon
                          : IconGraphIcon
                      }
                      className={classNames({
                        "Update__startIcon--graph__X90S9VLB85": hasVariant(
                          variants,
                          "state",
                          "graph"
                        ),

                        "Update__startIcon--text__X90S9__9Dd": hasVariant(
                          variants,
                          "state",
                          "text"
                        ),

                        Update__startIcon__X90S9: true,
                        "plasmic-default__all": true,
                        "plasmic-default__svg": true
                      })}
                      role={"img"}
                      {...({} as any)}
                    ></PlasmicIcon>
                  }
                  withIcons={["start"]}
                  {...({} as any)}
                ></IconButton>
              </div>
            ) : null}

            <div
              data-plasmic-wrap-flex-child={true}
              className={classNames({
                "Update__box--graph__NHl3bVLB85": hasVariant(
                  variants,
                  "state",
                  "graph"
                ),

                "Update__box--text__NHl3b__9Dd": hasVariant(
                  variants,
                  "state",
                  "text"
                ),

                Update__box__NHl3b: true,
                "plasmic-default__all": true,
                "plasmic-default__div": true
              })}
            >
              <PlasmicIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                PlasmicIconType={
                  hasVariant(variants, "state", "text")
                    ? IconClockIcon
                    : IconClockIcon
                }
                className={classNames({
                  "Update__svg--graph__L-S2HVLB85": hasVariant(
                    variants,
                    "state",
                    "graph"
                  ),

                  "Update__svg--text__L-S2H__9Dd": hasVariant(
                    variants,
                    "state",
                    "text"
                  ),

                  "Update__svg__L-S2H": true,
                  "plasmic-default__all": true,
                  "plasmic-default__svg": true
                })}
                role={"img"}
                {...({} as any)}
              ></PlasmicIcon>

              <div
                className={classNames({
                  "Update__box--text__ZSoVv__9Dd": hasVariant(
                    variants,
                    "state",
                    "text"
                  ),

                  Update__box__ZSoVv: true,
                  "plasmic-default__all": true,
                  "plasmic-default__div": true
                })}
              >
                <PlasmicSlot
                  defaultContents={"14 hours ago"}
                  value={args.date}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "textContainer",
    "metric",
    "toggleUpdateView",
    "startIcon",
    "endIcon",
    "svg"
  ],

  textContainer: ["textContainer"],
  metric: ["metric"],
  toggleUpdateView: ["toggleUpdateView", "startIcon", "endIcon"],
  startIcon: ["startIcon"],
  endIcon: ["endIcon"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textContainer: "div";
  metric: typeof Metric;
  toggleUpdateView: typeof IconButton;
  startIcon: "svg";
  endIcon: "svg";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUpdate__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUpdate__VariantsArgs;
    args?: PlasmicUpdate__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & // Specify variants directly as props
  Omit<PlasmicUpdate__VariantsArgs, ReservedPropsType> &
    // Specify args directly as props
    Omit<PlasmicUpdate__ArgsType, ReservedPropsType> &
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
  type PropsType = NodeComponentProps<NodeName>;
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicUpdate__ArgProps,
      internalVariantPropNames: PlasmicUpdate__VariantProps
    });

    return PlasmicUpdate__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUpdate";
  } else {
    func.displayName = `PlasmicUpdate.${nodeName}`;
  }
  return func;
}

export const PlasmicUpdate = Object.assign(
  // Top-level PlasmicUpdate renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textContainer: makeNodeComponent("textContainer"),
    metric: makeNodeComponent("metric"),
    toggleUpdateView: makeNodeComponent("toggleUpdateView"),
    startIcon: makeNodeComponent("startIcon"),
    endIcon: makeNodeComponent("endIcon"),
    svg: makeNodeComponent("svg"),

    // Helper for creating a Renderer
    createRenderer: () => new PlasmicUpdate__Renderer({}, {}),

    // Metadata about props expected for PlasmicUpdate
    internalVariantProps: PlasmicUpdate__VariantProps,
    internalArgProps: PlasmicUpdate__ArgProps
  }
);

type ForNodeRenderer<NodeName extends NodeNameType> = NodeRenderer<
  PlasmicUpdate__VariantsArgs,
  PlasmicUpdate__ArgsType,
  NodeOverridesType<NodeName>
>;

class PlasmicUpdate__Renderer extends Renderer<
  PlasmicUpdate__VariantsArgs,
  PlasmicUpdate__ArgsType,
  PlasmicUpdate__OverridesType,
  "root"
> {
  constructor(
    variants: PlasmicUpdate__VariantsArgs,
    args: PlasmicUpdate__ArgsType
  ) {
    super(variants, args, PlasmicUpdate__RenderFunc, "root");
  }

  protected create(
    variants: PlasmicUpdate__VariantsArgs,
    args: PlasmicUpdate__ArgsType
  ) {
    return new PlasmicUpdate__Renderer(variants, args);
  }

  getInternalVariantProps(): VariantPropType[] {
    return PlasmicUpdate__VariantProps;
  }

  getInternalArgProps(): ArgPropType[] {
    return PlasmicUpdate__ArgProps;
  }

  forNode(name: "svg"): ForNodeRenderer<"svg">;
  forNode(name: "endIcon"): ForNodeRenderer<"endIcon">;
  forNode(name: "startIcon"): ForNodeRenderer<"startIcon">;
  forNode(name: "toggleUpdateView"): ForNodeRenderer<"toggleUpdateView">;
  forNode(name: "metric"): ForNodeRenderer<"metric">;
  forNode(name: "textContainer"): ForNodeRenderer<"textContainer">;
  forNode(name: "root"): ForNodeRenderer<"root">;
  forNode(name: NodeNameType) {
    return super.forNode(name);
  }
}

export default PlasmicUpdate;
/* prettier-ignore-end */
