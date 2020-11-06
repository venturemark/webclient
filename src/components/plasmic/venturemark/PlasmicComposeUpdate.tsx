/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mSMs7FqGjFMPgGjdzmbmrV
// Component: HtYltV_zNv
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

import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_venturemark.css"; // plasmic-import: mSMs7FqGjFMPgGjdzmbmrV/projectcss
import "./PlasmicComposeUpdate.css"; // plasmic-import: HtYltV_zNv/css
import IconMetricIcon from "./icons/PlasmicIcon__IconMetric"; // plasmic-import: -jtIQQh_Az/icon
import IconAttentionIcon from "./icons/PlasmicIcon__IconAttention"; // plasmic-import: JiGnSt4Vsj/icon

export type PlasmicComposeUpdate__VariantMembers = {
  state: "metric" | "ask";
};

export type PlasmicComposeUpdate__VariantsArgs = {
  state?: SingleChoiceArg<"metric" | "ask">;
};

type VariantPropType = keyof PlasmicComposeUpdate__VariantsArgs;
export const PlasmicComposeUpdate__VariantProps = new Array<VariantPropType>(
  "state"
);

export type PlasmicComposeUpdate__ArgsType = {
  errorMessage?: React.ReactNode;
};

type ArgPropType = keyof PlasmicComposeUpdate__ArgsType;
export const PlasmicComposeUpdate__ArgProps = new Array<ArgPropType>(
  "errorMessage"
);

export type PlasmicComposeUpdate__OverridesType = {
  root?: Flex<"form">;
  avatar?: Flex<"img">;
  valueInput?: Flex<"input">;
  textbox?: Flex<"input">;
  svg?: Flex<"svg">;
  slateEditor?: Flex<"div">;
};

export interface DefaultComposeUpdateProps {
  errorMessage?: React.ReactNode;
  state?: SingleChoiceArg<"metric" | "ask">;
  className?: string;
}

function PlasmicComposeUpdate__RenderFunc(props: {
  variants: PlasmicComposeUpdate__VariantsArgs;
  args: PlasmicComposeUpdate__ArgsType;
  overrides: PlasmicComposeUpdate__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <form
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      data-plasmic-wrap-flex-child={true}
      className={classNames({
        "ComposeUpdate__root--ask__KZwEIGgCLb": hasVariant(
          variants,
          "state",
          "ask"
        ),

        "ComposeUpdate__root--metricDesktop__KZwEIG90xd_U__2W": hasVariant(
          variants,
          "state",
          "metric"
        ),

        "ComposeUpdate__root--metric__KZwEIG90xd": hasVariant(
          variants,
          "state",
          "metric"
        ),

        ComposeUpdate__root__KZwEI: true,
        "plasmic-default__all": true,
        "plasmic-default__form": true,
        root_reset_mSMs7FqGjFMPgGjdzmbmrV: true
      })}
    >
      <div
        data-plasmic-wrap-flex-child={true}
        className={classNames({
          "ComposeUpdate__box--metricDesktop__QixRfG90xd_U__2W": hasVariant(
            variants,
            "state",
            "metric"
          ),

          "ComposeUpdate__box--metric__QixRfG90xd": hasVariant(
            variants,
            "state",
            "metric"
          ),

          ComposeUpdate__box__QixRf: true,
          "plasmic-default__all": true,
          "plasmic-default__div": true
        })}
      >
        <div
          className={classNames({
            "ComposeUpdate__box--ask__dfBY3GgCLb": hasVariant(
              variants,
              "state",
              "ask"
            ),

            "ComposeUpdate__box--metric__dfBY3G90xd": hasVariant(
              variants,
              "state",
              "metric"
            ),

            ComposeUpdate__box__dfBY3: true,
            "plasmic-default__all": true,
            "plasmic-default__div": true
          })}
        >
          <img
            data-plasmic-name={"avatar"}
            data-plasmic-override={overrides.avatar}
            alt={""}
            className={classNames({
              "ComposeUpdate__avatar--ask__HSkvIGgCLb": hasVariant(
                variants,
                "state",
                "ask"
              ),

              "ComposeUpdate__avatar--metric__HSkvIG90xd": hasVariant(
                variants,
                "state",
                "metric"
              ),

              ComposeUpdate__avatar__HSkvI: true,
              "plasmic-default__all": true,
              "plasmic-default__img": true
            })}
            role={"img"}
            src={
              "https://pbs.twimg.com/profile_images/1027401107708858368/FNZP7TEE_400x400.jpg" as const
            }
          ></img>
        </div>

        {(hasVariant(variants, "state", "metric") ? true : false) ? (
          <div
            className={classNames({
              "ComposeUpdate__box--metric__5ns_jG90xd": hasVariant(
                variants,
                "state",
                "metric"
              ),

              ComposeUpdate__box__5ns_j: true,
              "plasmic-default__all": true,
              "plasmic-default__div": true
            })}
          >
            <input
              data-plasmic-name={"valueInput"}
              data-plasmic-override={overrides.valueInput}
              className={classNames({
                "ComposeUpdate__valueInput--metric__MY7cGG90xd": hasVariant(
                  variants,
                  "state",
                  "metric"
                ),

                ComposeUpdate__valueInput__MY7cG: true,
                "plasmic-default__all": true,
                "plasmic-default__input": true
              })}
              placeholder={"Enter Value" as const}
              size={1 as const}
              type={"text" as const}
            ></input>
          </div>
        ) : null}
        {(hasVariant(variants, "state", "metric") ? false : false) ? (
          <div
            className={classNames({
              "ComposeUpdate__box--metric__8yYkBG90xd": hasVariant(
                variants,
                "state",
                "metric"
              ),

              ComposeUpdate__box__8yYkB: true,
              "plasmic-default__all": true,
              "plasmic-default__div": true
            })}
          >
            <input
              data-plasmic-name={"textbox"}
              data-plasmic-override={overrides.textbox}
              className={classNames({
                "ComposeUpdate__textbox--metric__u4WTPG90xd": hasVariant(
                  variants,
                  "state",
                  "metric"
                ),

                ComposeUpdate__textbox__u4WTP: true,
                "plasmic-default__all": true,
                "plasmic-default__input": true
              })}
              placeholder={"Enter Value" as const}
              size={1 as const}
              type={"text" as const}
            ></input>
          </div>
        ) : null}
      </div>

      <div
        className={classNames({
          "ComposeUpdate__box--ask__NmsGIGgCLb": hasVariant(
            variants,
            "state",
            "ask"
          ),

          "ComposeUpdate__box--metricDesktop__NmsGIG90xd_U__2W": hasVariant(
            variants,
            "state",
            "metric"
          ),

          "ComposeUpdate__box--metric__NmsGIG90xd": hasVariant(
            variants,
            "state",
            "metric"
          ),

          ComposeUpdate__box__NmsGI: true,
          "plasmic-default__all": true,
          "plasmic-default__div": true
        })}
      >
        {(
          hasVariant(variants, "state", "ask")
            ? false
            : hasVariant(variants, "state", "metric")
            ? false
            : false
        ) ? (
          <div
            data-plasmic-wrap-flex-child={
              hasVariant(variants, "state", "metric") ||
              hasVariant(variants, "state", "ask")
                ? true
                : false
            }
            className={classNames({
              "ComposeUpdate__box--ask__afECIGgCLb": hasVariant(
                variants,
                "state",
                "ask"
              ),

              "ComposeUpdate__box--metric__afECIG90xd": hasVariant(
                variants,
                "state",
                "metric"
              ),

              ComposeUpdate__box__afECI: true,
              "plasmic-default__all": true,
              "plasmic-default__div": true
            })}
          >
            {(
              hasVariant(variants, "state", "ask")
                ? false
                : hasVariant(variants, "state", "metric")
                ? false
                : true
            ) ? (
              <PlasmicIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                PlasmicIconType={
                  hasVariant(variants, "state", "ask")
                    ? IconAttentionIcon
                    : IconMetricIcon
                }
                className={classNames({
                  "ComposeUpdate__svg--ask__mcUTHGgCLb": hasVariant(
                    variants,
                    "state",
                    "ask"
                  ),

                  "ComposeUpdate__svg--metric__mcUTHG90xd": hasVariant(
                    variants,
                    "state",
                    "metric"
                  ),

                  ComposeUpdate__svg__mcUTH: true,
                  "plasmic-default__all": true,
                  "plasmic-default__svg": true
                })}
                role={"img"}
                {...({} as any)}
              ></PlasmicIcon>
            ) : null}
            {(
              hasVariant(variants, "state", "ask")
                ? false
                : hasVariant(variants, "state", "metric")
                ? false
                : true
            ) ? (
              <div
                className={
                  classNames({
                    "ComposeUpdate__box--ask__sGa2gGgCLb": hasVariant(
                      variants,
                      "state",
                      "ask"
                    ),

                    "ComposeUpdate__box--metric__sGa2gG90xd": hasVariant(
                      variants,
                      "state",
                      "metric"
                    ),

                    ComposeUpdate__box__sGa2g: true,
                    "plasmic-default__all": true,
                    "plasmic-default__div": true
                  }) + " __wab_text"
                }
              >
                {hasVariant(variants, "state", "ask")
                  ? "Intro Request"
                  : "People"}
              </div>
            ) : null}
          </div>
        ) : null}

        <div
          className={classNames({
            "ComposeUpdate__box--ask__svP9EGgCLb": hasVariant(
              variants,
              "state",
              "ask"
            ),

            "ComposeUpdate__box--metricDesktop__svP9EG90xd_U__2W": hasVariant(
              variants,
              "state",
              "metric"
            ),

            "ComposeUpdate__box--metric__svP9EG90xd": hasVariant(
              variants,
              "state",
              "metric"
            ),

            ComposeUpdate__box__svP9E: true,
            "plasmic-default__all": true,
            "plasmic-default__div": true
          })}
        >
          <div
            data-plasmic-name={"slateEditor"}
            data-plasmic-override={overrides.slateEditor}
            className={
              classNames({
                "ComposeUpdate__slateEditor--ask__1s6LbGgCLb": hasVariant(
                  variants,
                  "state",
                  "ask"
                ),

                "ComposeUpdate__slateEditor--metricDesktop__1s6LbG90xd_U__2W": hasVariant(
                  variants,
                  "state",
                  "metric"
                ),

                "ComposeUpdate__slateEditor--metric__1s6LbG90xd": hasVariant(
                  variants,
                  "state",
                  "metric"
                ),

                ComposeUpdate__slateEditor__1s6Lb: true,
                "plasmic-default__all": true,
                "plasmic-default__div": true
              }) + " __wab_text"
            }
          >
            {"Why does this matter?"}
          </div>
        </div>
      </div>

      <div
        className={classNames({
          "ComposeUpdate__box--ask__NrVWfGgCLb": hasVariant(
            variants,
            "state",
            "ask"
          ),

          "ComposeUpdate__box--metric__NrVWfG90xd": hasVariant(
            variants,
            "state",
            "metric"
          ),

          ComposeUpdate__box__NrVWf: true,
          "plasmic-default__all": true,
          "plasmic-default__div": true
        })}
      >
        <div
          className={classNames({
            ComposeUpdate__box__cywFR: true,
            "plasmic-default__all": true,
            "plasmic-default__div": true
          })}
        >
          <PlasmicSlot
            defaultContents={""}
            value={args.errorMessage}
            className={classNames({
              ComposeUpdate__slotErrorMessage__nnGGC: true
            })}
          />
        </div>
      </div>
    </form>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "avatar", "valueInput", "textbox", "svg", "slateEditor"],
  avatar: ["avatar"],
  valueInput: ["valueInput"],
  textbox: ["textbox"],
  svg: ["svg"],
  slateEditor: ["slateEditor"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "form";
  avatar: "img";
  valueInput: "input";
  textbox: "input";
  svg: "svg";
  slateEditor: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicComposeUpdate__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicComposeUpdate__VariantsArgs;
    args?: PlasmicComposeUpdate__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & // Specify variants directly as props
  Omit<PlasmicComposeUpdate__VariantsArgs, ReservedPropsType> &
    // Specify args directly as props
    Omit<PlasmicComposeUpdate__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicComposeUpdate__ArgProps,
      internalVariantPropNames: PlasmicComposeUpdate__VariantProps
    });

    return PlasmicComposeUpdate__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicComposeUpdate";
  } else {
    func.displayName = `PlasmicComposeUpdate.${nodeName}`;
  }
  return func;
}

export const PlasmicComposeUpdate = Object.assign(
  // Top-level PlasmicComposeUpdate renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    valueInput: makeNodeComponent("valueInput"),
    textbox: makeNodeComponent("textbox"),
    svg: makeNodeComponent("svg"),
    slateEditor: makeNodeComponent("slateEditor"),

    // Helper for creating a Renderer
    createRenderer: () => new PlasmicComposeUpdate__Renderer({}, {}),

    // Metadata about props expected for PlasmicComposeUpdate
    internalVariantProps: PlasmicComposeUpdate__VariantProps,
    internalArgProps: PlasmicComposeUpdate__ArgProps
  }
);

type ForNodeRenderer<NodeName extends NodeNameType> = NodeRenderer<
  PlasmicComposeUpdate__VariantsArgs,
  PlasmicComposeUpdate__ArgsType,
  NodeOverridesType<NodeName>
>;

class PlasmicComposeUpdate__Renderer extends Renderer<
  PlasmicComposeUpdate__VariantsArgs,
  PlasmicComposeUpdate__ArgsType,
  PlasmicComposeUpdate__OverridesType,
  "root"
> {
  constructor(
    variants: PlasmicComposeUpdate__VariantsArgs,
    args: PlasmicComposeUpdate__ArgsType
  ) {
    super(variants, args, PlasmicComposeUpdate__RenderFunc, "root");
  }

  protected create(
    variants: PlasmicComposeUpdate__VariantsArgs,
    args: PlasmicComposeUpdate__ArgsType
  ) {
    return new PlasmicComposeUpdate__Renderer(variants, args);
  }

  getInternalVariantProps(): VariantPropType[] {
    return PlasmicComposeUpdate__VariantProps;
  }

  getInternalArgProps(): ArgPropType[] {
    return PlasmicComposeUpdate__ArgProps;
  }

  forNode(name: "slateEditor"): ForNodeRenderer<"slateEditor">;
  forNode(name: "svg"): ForNodeRenderer<"svg">;
  forNode(name: "textbox"): ForNodeRenderer<"textbox">;
  forNode(name: "valueInput"): ForNodeRenderer<"valueInput">;
  forNode(name: "avatar"): ForNodeRenderer<"avatar">;
  forNode(name: "root"): ForNodeRenderer<"root">;
  forNode(name: NodeNameType) {
    return super.forNode(name);
  }
}

export default PlasmicComposeUpdate;
/* prettier-ignore-end */
