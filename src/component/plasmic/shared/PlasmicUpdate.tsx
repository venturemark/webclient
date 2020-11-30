// @ts-nocheck
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
import IconButton from "../../iconbutton/index"; // plasmic-import: odPjbfT2kyJgB_S/component
import UpdateContent from "../../updatecontent/index"; // plasmic-import: A1UjtYt6k0/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicUpdate.module.css"; // plasmic-import: Fs8bTUrvZrvfhCr/css

import IconWriteIcon from "./icons/PlasmicIcon__IconWrite"; // plasmic-import: zCNIMAkbig/icon
import IconClockIcon from "./icons/PlasmicIcon__IconClock"; // plasmic-import: M_91_FWOwwP63LN/icon
import IconBarChartIcon from "./icons/PlasmicIcon__IconBarChart"; // plasmic-import: Y3JBiNHxmK/icon
import IconTextIcon from "./icons/PlasmicIcon__IconText"; // plasmic-import: ncDyDuIGRd/icon

export type PlasmicUpdate__VariantMembers = {
  state: "text" | "graph";
  hasValue: "hasValue";
};

export type PlasmicUpdate__VariantsArgs = {
  state?: SingleChoiceArg<"text" | "graph">;
  hasValue?: MultiChoiceArg<"hasValue">;
};

type VariantPropType = keyof PlasmicUpdate__VariantsArgs;
export const PlasmicUpdate__VariantProps = new Array<VariantPropType>(
  "state",
  "hasValue"
);

export type PlasmicUpdate__ArgsType = {};
type ArgPropType = keyof PlasmicUpdate__ArgsType;
export const PlasmicUpdate__ArgProps = new Array<ArgPropType>();

export type PlasmicUpdate__OverridesType = {
  root?: Flex<"div">;
  updateActionContainer?: Flex<"div">;
  startIcon?: Flex<"svg">;
  startIcon2?: Flex<"svg">;
  toggleUpdateView?: Flex<typeof IconButton>;
  startIcon22?: Flex<"svg">;
  contentContainer?: Flex<typeof UpdateContent>;
};

export interface DefaultUpdateProps {
  state?: SingleChoiceArg<"text" | "graph">;
  hasValue?: MultiChoiceArg<"hasValue">;
  className?: string;
}

function PlasmicUpdate__RenderFunc(props: {
  variants: PlasmicUpdate__VariantsArgs;
  args: PlasmicUpdate__ArgsType;
  overrides: PlasmicUpdate__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover,
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames({
        [defaultcss.all]: true,
        [projectcss.root_reset_mTVXT6w3HHjZ4d74q3gB76]: true,
        [sty.root]: true,
        [sty.root__hasValue_hasValue]: hasVariant(
          variants,
          "hasValue",
          "hasValue"
        ),

        [sty.root__state_graph]: hasVariant(variants, "state", "graph"),
        [sty.root__state_graph_hasValue_hasValue]:
          hasVariant(variants, "state", "graph") &&
          hasVariant(variants, "hasValue", "hasValue"),
        [sty.root__state_text]: hasVariant(variants, "state", "text"),
        [sty.root__state_text_hasValue_hasValue]:
          hasVariant(variants, "state", "text") &&
          hasVariant(variants, "hasValue", "hasValue"),
      })}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      {(
        hasVariant(variants, "state", "graph") && triggers.hover_root
          ? true
          : hasVariant(variants, "state", "text") && triggers.hover_root
          ? true
          : triggers.hover_root
          ? true
          : hasVariant(variants, "state", "graph")
          ? false
          : hasVariant(variants, "state", "text")
          ? false
          : false
      ) ? (
        <div
          data-plasmic-name={"updateActionContainer"}
          data-plasmic-override={overrides.updateActionContainer}
          data-plasmic-wrap-flex-child={true}
          className={classNames({
            [defaultcss.all]: true,
            [sty.updateActionContainer]: true,
            [sty.updateActionContainer____hover]: triggers.hover_root,
            [sty.updateActionContainer__state_graph]: hasVariant(
              variants,
              "state",
              "graph"
            ),

            [sty.updateActionContainer__state_graph___hover]:
              hasVariant(variants, "state", "graph") && triggers.hover_root,
            [sty.updateActionContainer__state_text]: hasVariant(
              variants,
              "state",
              "text"
            ),

            [sty.updateActionContainer__state_text___hover]:
              hasVariant(variants, "state", "text") && triggers.hover_root,
          })}
        >
          {(
            hasVariant(variants, "state", "graph") && triggers.hover_root
              ? true
              : hasVariant(variants, "state", "text")
              ? true
              : true
          ) ? (
            <IconButton
              className={classNames({
                __wab_instance: true,
                [sty.iconButton__i1WjS]: true,
                [sty.iconButton__state_graph___hover__i1WjSvlb85VwvBe]:
                  hasVariant(variants, "state", "graph") && triggers.hover_root,
                [sty.iconButton__state_graph__i1WjSvlb85]: hasVariant(
                  variants,
                  "state",
                  "graph"
                ),

                [sty.iconButton__state_text__i1WjS9Dd]: hasVariant(
                  variants,
                  "state",
                  "text"
                ),
              })}
              startIcon={
                <PlasmicIcon
                  data-plasmic-name={"startIcon"}
                  data-plasmic-override={overrides.startIcon}
                  PlasmicIconType={
                    hasVariant(variants, "state", "text")
                      ? IconWriteIcon
                      : IconWriteIcon
                  }
                  className={classNames({
                    [defaultcss.all]: true,
                    [sty.startIcon]: true,
                    [sty.startIcon__state_graph]: hasVariant(
                      variants,
                      "state",
                      "graph"
                    ),

                    [sty.startIcon__state_text]: hasVariant(
                      variants,
                      "state",
                      "text"
                    ),
                  })}
                  role={"img"}
                  {...({} as any)}
                />
              }
              withIcons={
                hasVariant(variants, "state", "text") ? ["start"] : ["start"]
              }
              {...({} as any)}
            />
          ) : null}
          {(
            hasVariant(variants, "state", "graph") && triggers.hover_root
              ? true
              : hasVariant(variants, "state", "text")
              ? true
              : true
          ) ? (
            <IconButton
              className={classNames({
                __wab_instance: true,
                [sty.iconButton__state_graph___hover__zHnWqVlb85VwvBe]:
                  hasVariant(variants, "state", "graph") && triggers.hover_root,
                [sty.iconButton__state_graph__zHnWqVlb85]: hasVariant(
                  variants,
                  "state",
                  "graph"
                ),

                [sty.iconButton__state_text__zHnWq9Dd]: hasVariant(
                  variants,
                  "state",
                  "text"
                ),

                [sty.iconButton__zHnWq]: true,
              })}
              startIcon={
                <PlasmicIcon
                  data-plasmic-name={"startIcon2"}
                  data-plasmic-override={overrides.startIcon2}
                  PlasmicIconType={
                    hasVariant(variants, "state", "text")
                      ? IconClockIcon
                      : IconClockIcon
                  }
                  className={classNames({
                    [defaultcss.all]: true,
                    [sty.startIcon2]: true,
                    [sty.startIcon2__state_graph]: hasVariant(
                      variants,
                      "state",
                      "graph"
                    ),

                    [sty.startIcon2__state_text]: hasVariant(
                      variants,
                      "state",
                      "text"
                    ),
                  })}
                  role={"img"}
                  {...({} as any)}
                />
              }
              withIcons={
                hasVariant(variants, "state", "text") ? ["start"] : ["start"]
              }
              {...({} as any)}
            />
          ) : null}
          {(
            hasVariant(variants, "state", "graph") && triggers.hover_root
              ? true
              : hasVariant(variants, "state", "text")
              ? true
              : true
          ) ? (
            <IconButton
              data-plasmic-name={"toggleUpdateView"}
              data-plasmic-override={overrides.toggleUpdateView}
              className={classNames({
                __wab_instance: true,
                [sty.toggleUpdateView]: true,
                [sty.toggleUpdateView__state_graph]: hasVariant(
                  variants,
                  "state",
                  "graph"
                ),

                [sty.toggleUpdateView__state_graph___hover]:
                  hasVariant(variants, "state", "graph") && triggers.hover_root,
                [sty.toggleUpdateView__state_text]: hasVariant(
                  variants,
                  "state",
                  "text"
                ),
              })}
              startIcon={
                <PlasmicIcon
                  data-plasmic-name={"startIcon22"}
                  data-plasmic-override={overrides.startIcon22}
                  PlasmicIconType={
                    hasVariant(variants, "state", "graph") &&
                    triggers.hover_root
                      ? IconTextIcon
                      : hasVariant(variants, "state", "text")
                      ? IconBarChartIcon
                      : IconBarChartIcon
                  }
                  className={classNames({
                    [defaultcss.all]: true,
                    [sty.startIcon22]: true,
                    [sty.startIcon22__state_graph]: hasVariant(
                      variants,
                      "state",
                      "graph"
                    ),

                    [sty.startIcon22__state_graph___hover]:
                      hasVariant(variants, "state", "graph") &&
                      triggers.hover_root,
                    [sty.startIcon22__state_text]: hasVariant(
                      variants,
                      "state",
                      "text"
                    ),
                  })}
                  role={"img"}
                  {...({} as any)}
                />
              }
              withIcons={
                hasVariant(variants, "state", "text") ? ["start"] : ["start"]
              }
              {...({} as any)}
            />
          ) : null}
        </div>
      ) : null}

      <UpdateContent
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames({
          __wab_instance: true,
          [sty.contentContainer]: true,
          [sty.contentContainer__state_graph]: hasVariant(
            variants,
            "state",
            "graph"
          ),

          [sty.contentContainer__state_graph_hasValue_hasValue]:
            hasVariant(variants, "state", "graph") &&
            hasVariant(variants, "hasValue", "hasValue"),
          [sty.contentContainer__state_text]: hasVariant(
            variants,
            "state",
            "text"
          ),

          [sty.contentContainer__state_text_hasValue_hasValue]:
            hasVariant(variants, "state", "text") &&
            hasVariant(variants, "hasValue", "hasValue"),
        })}
        state={
          hasVariant(variants, "state", "graph") &&
          hasVariant(variants, "hasValue", "hasValue")
            ? ("graph" as const)
            : hasVariant(variants, "state", "graph")
            ? ("graph" as const)
            : hasVariant(variants, "state", "text")
            ? ("text" as const)
            : undefined
        }
        {...({} as any)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "updateActionContainer",
    "startIcon",
    "startIcon2",
    "toggleUpdateView",
    "startIcon22",
    "contentContainer",
  ],

  updateActionContainer: [
    "updateActionContainer",
    "startIcon",
    "startIcon2",
    "toggleUpdateView",
    "startIcon22",
  ],

  startIcon: ["startIcon"],
  startIcon2: ["startIcon2"],
  toggleUpdateView: ["toggleUpdateView", "startIcon22"],
  startIcon22: ["startIcon22"],
  contentContainer: ["contentContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  updateActionContainer: "div";
  startIcon: "svg";
  startIcon2: "svg";
  toggleUpdateView: typeof IconButton;
  startIcon22: "svg";
  contentContainer: typeof UpdateContent;
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
  } & Omit<PlasmicUpdate__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
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
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicUpdate__ArgProps,
      internalVariantPropNames: PlasmicUpdate__VariantProps,
    });

    return PlasmicUpdate__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
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
    updateActionContainer: makeNodeComponent("updateActionContainer"),
    startIcon: makeNodeComponent("startIcon"),
    startIcon2: makeNodeComponent("startIcon2"),
    toggleUpdateView: makeNodeComponent("toggleUpdateView"),
    startIcon22: makeNodeComponent("startIcon22"),
    contentContainer: makeNodeComponent("contentContainer"),

    // Metadata about props expected for PlasmicUpdate
    internalVariantProps: PlasmicUpdate__VariantProps,
    internalArgProps: PlasmicUpdate__ArgProps,
  }
);

export default PlasmicUpdate;
/* prettier-ignore-end */
