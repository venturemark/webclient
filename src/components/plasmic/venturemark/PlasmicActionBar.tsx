/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mSMs7FqGjFMPgGjdzmbmrV
// Component: wB9ZqI-HxA
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
import IconButton from "../../IconButton"; // plasmic-import: 4ntWB_3tm2/component

import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_venturemark.css"; // plasmic-import: mSMs7FqGjFMPgGjdzmbmrV/projectcss
import "./PlasmicActionBar.css"; // plasmic-import: wB9ZqI-HxA/css
import IconAudienceIcon from "./icons/PlasmicIcon__IconAudience"; // plasmic-import: zICM6YbRr4/icon
import IconAskIcon from "./icons/PlasmicIcon__IconAsk"; // plasmic-import: 36OPIllke4/icon
import IconMetricIcon from "./icons/PlasmicIcon__IconMetric"; // plasmic-import: -jtIQQh_Az/icon
import IconEmailIcon from "./icons/PlasmicIcon__IconEmail"; // plasmic-import: raLc9YcB2e/icon
import IconCancelIcon from "./icons/PlasmicIcon__IconCancel"; // plasmic-import: VZwn0H7x-/icon
import IconAcceptIcon from "./icons/PlasmicIcon__IconAccept"; // plasmic-import: eTu0Yr98L9/icon

export type PlasmicActionBar__VariantMembers = {
  state: "audience" | "metric" | "ask";
};

export type PlasmicActionBar__VariantsArgs = {
  state?: SingleChoiceArg<"audience" | "metric" | "ask">;
};

type VariantPropType = keyof PlasmicActionBar__VariantsArgs;
export const PlasmicActionBar__VariantProps = new Array<VariantPropType>(
  "state"
);

export type PlasmicActionBar__ArgsType = {};
type ArgPropType = keyof PlasmicActionBar__ArgsType;
export const PlasmicActionBar__ArgProps = new Array<ArgPropType>();

export type PlasmicActionBar__OverridesType = {
  root?: Flex<"div">;
  audienceButton?: Flex<typeof IconButton>;
  askButton?: Flex<typeof IconButton>;
  metricButton?: Flex<typeof IconButton>;
  formContainer?: Flex<"form">;
  audienceSelect?: Flex<"div">;
  askSelect?: Flex<"div">;
  metricSelect?: Flex<"div">;
  publishEmail?: Flex<typeof IconButton>;
  cancelAction?: Flex<typeof IconButton>;
  acceptAction?: Flex<typeof IconButton>;
};

export interface DefaultActionBarProps {
  state?: SingleChoiceArg<"audience" | "metric" | "ask">;
  className?: string;
}

function PlasmicActionBar__RenderFunc(props: {
  variants: PlasmicActionBar__VariantsArgs;
  args: PlasmicActionBar__ArgsType;
  overrides: PlasmicActionBar__OverridesType;
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
        "ActionBar__root--ask__BJMT5xwrgP": hasVariant(
          variants,
          "state",
          "ask"
        ),

        "ActionBar__root--audience__BJMT5f5gde": hasVariant(
          variants,
          "state",
          "audience"
        ),

        "ActionBar__root--metric__BJMT5oOszN": hasVariant(
          variants,
          "state",
          "metric"
        ),

        ActionBar__root__BJMT5: true,
        "plasmic-default__all": true,
        "plasmic-default__div": true,
        root_reset_mSMs7FqGjFMPgGjdzmbmrV: true
      })}
    >
      <IconButton
        data-plasmic-name={"audienceButton"}
        data-plasmic-override={overrides.audienceButton}
        className={classNames({
          "ActionBar__audienceButton--audience__-Nyctf5gde": hasVariant(
            variants,
            "state",
            "audience"
          ),

          "ActionBar__audienceButton__-Nyct": true,
          __wab_instance: true
        })}
        startIcon={
          <IconAudienceIcon
            className={classNames({
              ActionBar__svg__LrQHe: true,
              "plasmic-default__all": true,
              "plasmic-default__svg": true
            })}
            role={"img"}
            {...({} as any)}
          ></IconAudienceIcon>
        }
        withIcons={["start"]}
        {...({} as any)}
      ></IconButton>

      {(
        hasVariant(variants, "state", "ask")
          ? false
          : hasVariant(variants, "state", "metric")
          ? false
          : hasVariant(variants, "state", "audience")
          ? false
          : true
      ) ? (
        <div
          data-plasmic-wrap-flex-child={true}
          className={classNames({
            "ActionBar__box--ask__fnoNUxwrgP": hasVariant(
              variants,
              "state",
              "ask"
            ),

            "ActionBar__box--audience__fnoNUf5gde": hasVariant(
              variants,
              "state",
              "audience"
            ),

            "ActionBar__box--metric__fnoNUoOszN": hasVariant(
              variants,
              "state",
              "metric"
            ),

            ActionBar__box__fnoNU: true,
            "plasmic-default__all": true,
            "plasmic-default__div": true
          })}
        >
          <IconButton
            data-plasmic-name={"askButton"}
            data-plasmic-override={overrides.askButton}
            className={classNames({
              "ActionBar__askButton__Fs-mE": true,
              __wab_instance: true
            })}
            startIcon={
              <IconAskIcon
                className={classNames({
                  ActionBar__svg__2vkeB: true,
                  "plasmic-default__all": true,
                  "plasmic-default__svg": true
                })}
                role={"img"}
                {...({} as any)}
              ></IconAskIcon>
            }
            withIcons={["start"]}
            {...({} as any)}
          ></IconButton>

          <IconButton
            data-plasmic-name={"metricButton"}
            data-plasmic-override={overrides.metricButton}
            className={classNames({
              "ActionBar__metricButton--audience___Tglyf5gde": hasVariant(
                variants,
                "state",
                "audience"
              ),

              "ActionBar__metricButton--metric___TglyoOszN": hasVariant(
                variants,
                "state",
                "metric"
              ),

              ActionBar__metricButton___Tgly: true,
              __wab_instance: true
            })}
            startIcon={
              <IconMetricIcon
                className={classNames({
                  ActionBar__svg__jOjXS: true,
                  "plasmic-default__all": true,
                  "plasmic-default__svg": true
                })}
                role={"img"}
                {...({} as any)}
              ></IconMetricIcon>
            }
            withIcons={["start"]}
            {...({} as any)}
          ></IconButton>
        </div>
      ) : null}
      {(
        hasVariant(variants, "state", "ask")
          ? true
          : hasVariant(variants, "state", "metric")
          ? true
          : hasVariant(variants, "state", "audience")
          ? true
          : false
      ) ? (
        <form
          data-plasmic-name={"formContainer"}
          data-plasmic-override={overrides.formContainer}
          data-plasmic-wrap-flex-child={true}
          className={classNames({
            "ActionBar__formContainer--ask__CeHdTxwrgP": hasVariant(
              variants,
              "state",
              "ask"
            ),

            "ActionBar__formContainer--audience__CeHdTf5gde": hasVariant(
              variants,
              "state",
              "audience"
            ),

            "ActionBar__formContainer--metric__CeHdToOszN": hasVariant(
              variants,
              "state",
              "metric"
            ),

            ActionBar__formContainer__CeHdT: true,
            "plasmic-default__all": true,
            "plasmic-default__form": true
          })}
        >
          {(hasVariant(variants, "state", "audience") ? true : false) ? (
            <div
              data-plasmic-name={"audienceSelect"}
              data-plasmic-override={overrides.audienceSelect}
              className={
                classNames({
                  "ActionBar__audienceSelect--ask__Oa47jxwrgP": hasVariant(
                    variants,
                    "state",
                    "ask"
                  ),

                  "ActionBar__audienceSelect--audience__Oa47jf5gde": hasVariant(
                    variants,
                    "state",
                    "audience"
                  ),

                  "ActionBar__audienceSelect--metric__Oa47joOszN": hasVariant(
                    variants,
                    "state",
                    "metric"
                  ),

                  ActionBar__audienceSelect__Oa47j: true,
                  "plasmic-default__all": true,
                  "plasmic-default__div": true
                }) + " __wab_text"
              }
            >
              {hasVariant(variants, "state", "audience")
                ? "Select Audience"
                : "ASK"}
            </div>
          ) : null}
          {(
            hasVariant(variants, "state", "ask")
              ? true
              : hasVariant(variants, "state", "audience")
              ? false
              : false
          ) ? (
            <div
              data-plasmic-name={"askSelect"}
              data-plasmic-override={overrides.askSelect}
              className={
                classNames({
                  "ActionBar__askSelect--ask__BpUgjxwrgP": hasVariant(
                    variants,
                    "state",
                    "ask"
                  ),

                  "ActionBar__askSelect--audience__BpUgjf5gde": hasVariant(
                    variants,
                    "state",
                    "audience"
                  ),

                  "ActionBar__askSelect--metric__BpUgjoOszN": hasVariant(
                    variants,
                    "state",
                    "metric"
                  ),

                  ActionBar__askSelect__BpUgj: true,
                  "plasmic-default__all": true,
                  "plasmic-default__div": true
                }) + " __wab_text"
              }
            >
              {hasVariant(variants, "state", "ask")
                ? "Select Ask"
                : hasVariant(variants, "state", "audience")
                ? "Select Audience"
                : "ASK"}
            </div>
          ) : null}
          {(
            hasVariant(variants, "state", "ask")
              ? false
              : hasVariant(variants, "state", "audience")
              ? false
              : true
          ) ? (
            <div
              data-plasmic-name={"metricSelect"}
              data-plasmic-override={overrides.metricSelect}
              className={
                classNames({
                  "ActionBar__metricSelect--ask__ro5jQxwrgP": hasVariant(
                    variants,
                    "state",
                    "ask"
                  ),

                  "ActionBar__metricSelect--audience__ro5jQf5gde": hasVariant(
                    variants,
                    "state",
                    "audience"
                  ),

                  "ActionBar__metricSelect--metric__ro5jQoOszN": hasVariant(
                    variants,
                    "state",
                    "metric"
                  ),

                  ActionBar__metricSelect__ro5jQ: true,
                  "plasmic-default__all": true,
                  "plasmic-default__div": true
                }) + " __wab_text"
              }
            >
              {hasVariant(variants, "state", "metric")
                ? "Select Metric"
                : "WHAT:"}
            </div>
          ) : null}
        </form>
      ) : null}

      <div
        data-plasmic-wrap-flex-child={
          hasVariant(variants, "state", "audience") ||
          hasVariant(variants, "state", "metric") ||
          hasVariant(variants, "state", "ask")
            ? true
            : false
        }
        className={classNames({
          "ActionBar__box--ask__w7EesxwrgP": hasVariant(
            variants,
            "state",
            "ask"
          ),

          "ActionBar__box--audience__w7Eesf5gde": hasVariant(
            variants,
            "state",
            "audience"
          ),

          "ActionBar__box--metric__w7EesoOszN": hasVariant(
            variants,
            "state",
            "metric"
          ),

          ActionBar__box__w7Ees: true,
          "plasmic-default__all": true,
          "plasmic-default__div": true
        })}
      >
        {(
          hasVariant(variants, "state", "ask")
            ? false
            : hasVariant(variants, "state", "metric")
            ? false
            : hasVariant(variants, "state", "audience")
            ? false
            : true
        ) ? (
          <IconButton
            data-plasmic-name={"publishEmail"}
            data-plasmic-override={overrides.publishEmail}
            className={classNames({
              "ActionBar__publishEmail--ask__cozOqxwrgP": hasVariant(
                variants,
                "state",
                "ask"
              ),

              "ActionBar__publishEmail--audience__cozOqf5gde": hasVariant(
                variants,
                "state",
                "audience"
              ),

              "ActionBar__publishEmail--metric__cozOqoOszN": hasVariant(
                variants,
                "state",
                "metric"
              ),

              ActionBar__publishEmail__cozOq: true,
              __wab_instance: true
            })}
            startIcon={
              <IconEmailIcon
                className={classNames({
                  ActionBar__svg__Gr8N4: true,
                  "plasmic-default__all": true,
                  "plasmic-default__svg": true
                })}
                role={"img"}
                {...({} as any)}
              ></IconEmailIcon>
            }
            withIcons={["start"]}
            {...({} as any)}
          ></IconButton>
        ) : null}
        {(
          hasVariant(variants, "state", "ask")
            ? true
            : hasVariant(variants, "state", "metric")
            ? true
            : hasVariant(variants, "state", "audience")
            ? true
            : false
        ) ? (
          <IconButton
            data-plasmic-name={"cancelAction"}
            data-plasmic-override={overrides.cancelAction}
            className={classNames({
              "ActionBar__cancelAction--ask__Khh_-xwrgP": hasVariant(
                variants,
                "state",
                "ask"
              ),

              "ActionBar__cancelAction--audience__Khh_-f5gde": hasVariant(
                variants,
                "state",
                "audience"
              ),

              "ActionBar__cancelAction--metric__Khh_-oOszN": hasVariant(
                variants,
                "state",
                "metric"
              ),

              "ActionBar__cancelAction__Khh_-": true,
              __wab_instance: true
            })}
            startIcon={
              <PlasmicIcon
                PlasmicIconType={
                  hasVariant(variants, "state", "ask")
                    ? IconCancelIcon
                    : hasVariant(variants, "state", "metric")
                    ? IconCancelIcon
                    : hasVariant(variants, "state", "audience")
                    ? IconCancelIcon
                    : IconAudienceIcon
                }
                className={classNames({
                  "ActionBar__svg--ask__H7rvYxwrgP": hasVariant(
                    variants,
                    "state",
                    "ask"
                  ),

                  "ActionBar__svg--audience__H7rvYf5gde": hasVariant(
                    variants,
                    "state",
                    "audience"
                  ),

                  "ActionBar__svg--metric__H7rvYoOszN": hasVariant(
                    variants,
                    "state",
                    "metric"
                  ),

                  ActionBar__svg__H7rvY: true,
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
        ) : null}
        {(
          hasVariant(variants, "state", "ask")
            ? true
            : hasVariant(variants, "state", "metric")
            ? true
            : hasVariant(variants, "state", "audience")
            ? true
            : false
        ) ? (
          <IconButton
            data-plasmic-name={"acceptAction"}
            data-plasmic-override={overrides.acceptAction}
            className={classNames({
              "ActionBar__acceptAction--ask__d5qJBxwrgP": hasVariant(
                variants,
                "state",
                "ask"
              ),

              "ActionBar__acceptAction--audience__d5qJBf5gde": hasVariant(
                variants,
                "state",
                "audience"
              ),

              "ActionBar__acceptAction--metric__d5qJBoOszN": hasVariant(
                variants,
                "state",
                "metric"
              ),

              ActionBar__acceptAction__d5qJB: true,
              __wab_instance: true
            })}
            startIcon={
              <PlasmicIcon
                PlasmicIconType={
                  hasVariant(variants, "state", "ask")
                    ? IconAcceptIcon
                    : hasVariant(variants, "state", "metric")
                    ? IconAcceptIcon
                    : hasVariant(variants, "state", "audience")
                    ? IconAcceptIcon
                    : IconAudienceIcon
                }
                className={classNames({
                  "ActionBar__svg--ask__uGERbxwrgP": hasVariant(
                    variants,
                    "state",
                    "ask"
                  ),

                  "ActionBar__svg--audience__uGERbf5gde": hasVariant(
                    variants,
                    "state",
                    "audience"
                  ),

                  "ActionBar__svg--metric__uGERboOszN": hasVariant(
                    variants,
                    "state",
                    "metric"
                  ),

                  ActionBar__svg__uGERb: true,
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
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "audienceButton",
    "askButton",
    "metricButton",
    "formContainer",
    "audienceSelect",
    "askSelect",
    "metricSelect",
    "publishEmail",
    "cancelAction",
    "acceptAction"
  ],

  audienceButton: ["audienceButton"],
  askButton: ["askButton"],
  metricButton: ["metricButton"],
  formContainer: [
    "formContainer",
    "audienceSelect",
    "askSelect",
    "metricSelect"
  ],

  audienceSelect: ["audienceSelect"],
  askSelect: ["askSelect"],
  metricSelect: ["metricSelect"],
  publishEmail: ["publishEmail"],
  cancelAction: ["cancelAction"],
  acceptAction: ["acceptAction"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  audienceButton: typeof IconButton;
  askButton: typeof IconButton;
  metricButton: typeof IconButton;
  formContainer: "form";
  audienceSelect: "div";
  askSelect: "div";
  metricSelect: "div";
  publishEmail: typeof IconButton;
  cancelAction: typeof IconButton;
  acceptAction: typeof IconButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActionBar__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicActionBar__VariantsArgs;
    args?: PlasmicActionBar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & // Specify variants directly as props
  Omit<PlasmicActionBar__VariantsArgs, ReservedPropsType> &
    // Specify args directly as props
    Omit<PlasmicActionBar__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicActionBar__ArgProps,
      internalVariantPropNames: PlasmicActionBar__VariantProps
    });

    return PlasmicActionBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicActionBar";
  } else {
    func.displayName = `PlasmicActionBar.${nodeName}`;
  }
  return func;
}

export const PlasmicActionBar = Object.assign(
  // Top-level PlasmicActionBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    audienceButton: makeNodeComponent("audienceButton"),
    askButton: makeNodeComponent("askButton"),
    metricButton: makeNodeComponent("metricButton"),
    formContainer: makeNodeComponent("formContainer"),
    audienceSelect: makeNodeComponent("audienceSelect"),
    askSelect: makeNodeComponent("askSelect"),
    metricSelect: makeNodeComponent("metricSelect"),
    publishEmail: makeNodeComponent("publishEmail"),
    cancelAction: makeNodeComponent("cancelAction"),
    acceptAction: makeNodeComponent("acceptAction"),

    // Helper for creating a Renderer
    createRenderer: () => new PlasmicActionBar__Renderer({}, {}),

    // Metadata about props expected for PlasmicActionBar
    internalVariantProps: PlasmicActionBar__VariantProps,
    internalArgProps: PlasmicActionBar__ArgProps
  }
);

type ForNodeRenderer<NodeName extends NodeNameType> = NodeRenderer<
  PlasmicActionBar__VariantsArgs,
  PlasmicActionBar__ArgsType,
  NodeOverridesType<NodeName>
>;

class PlasmicActionBar__Renderer extends Renderer<
  PlasmicActionBar__VariantsArgs,
  PlasmicActionBar__ArgsType,
  PlasmicActionBar__OverridesType,
  "root"
> {
  constructor(
    variants: PlasmicActionBar__VariantsArgs,
    args: PlasmicActionBar__ArgsType
  ) {
    super(variants, args, PlasmicActionBar__RenderFunc, "root");
  }

  protected create(
    variants: PlasmicActionBar__VariantsArgs,
    args: PlasmicActionBar__ArgsType
  ) {
    return new PlasmicActionBar__Renderer(variants, args);
  }

  getInternalVariantProps(): VariantPropType[] {
    return PlasmicActionBar__VariantProps;
  }

  getInternalArgProps(): ArgPropType[] {
    return PlasmicActionBar__ArgProps;
  }

  forNode(name: "acceptAction"): ForNodeRenderer<"acceptAction">;
  forNode(name: "cancelAction"): ForNodeRenderer<"cancelAction">;
  forNode(name: "publishEmail"): ForNodeRenderer<"publishEmail">;
  forNode(name: "metricSelect"): ForNodeRenderer<"metricSelect">;
  forNode(name: "askSelect"): ForNodeRenderer<"askSelect">;
  forNode(name: "audienceSelect"): ForNodeRenderer<"audienceSelect">;
  forNode(name: "formContainer"): ForNodeRenderer<"formContainer">;
  forNode(name: "metricButton"): ForNodeRenderer<"metricButton">;
  forNode(name: "askButton"): ForNodeRenderer<"askButton">;
  forNode(name: "audienceButton"): ForNodeRenderer<"audienceButton">;
  forNode(name: "root"): ForNodeRenderer<"root">;
  forNode(name: NodeNameType) {
    return super.forNode(name);
  }
}

export default PlasmicActionBar;
/* prettier-ignore-end */
