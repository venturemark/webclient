/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: eUnRsS9UXR
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

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicActionBar.css"; // plasmic-import: eUnRsS9UXR/css

import IconSendIcon from "./icons/PlasmicIcon__IconSend"; // plasmic-import: oiAgf-ezpQ/icon

export type PlasmicActionBar__VariantMembers = {
  content: "hasContent";
};

export type PlasmicActionBar__VariantsArgs = {
  content?: SingleChoiceArg<"hasContent">;
};

type VariantPropType = keyof PlasmicActionBar__VariantsArgs;
export const PlasmicActionBar__VariantProps = new Array<VariantPropType>(
  "content"
);

export type PlasmicActionBar__ArgsType = {};
type ArgPropType = keyof PlasmicActionBar__ArgsType;
export const PlasmicActionBar__ArgProps = new Array<ArgPropType>();

export type PlasmicActionBar__OverridesType = {
  root?: Flex<"div">;
  editorContainer?: Flex<"div">;
  textbox?: Flex<"input">;
  actionContainer?: Flex<"div">;
  iconButton?: Flex<typeof IconButton>;
  startIcon?: Flex<"svg">;
};

export interface DefaultActionBarProps {
  content?: SingleChoiceArg<"hasContent">;
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
      className={classNames({
        [defaultcss.all]: true,
        [projectcss.root_reset_mTVXT6w3HHjZ4d74q3gB76]: true,
        [sty.root]: true,
      })}
    >
      <div
        data-plasmic-name={"editorContainer"}
        data-plasmic-override={overrides.editorContainer}
        className={classNames({
          [defaultcss.all]: true,
          [sty.editorContainer]: true,
          [sty.editorContainer__content_hasContent]: hasVariant(
            variants,
            "content",
            "hasContent"
          ),
        })}
      >
        <input
          data-plasmic-name={"textbox"}
          data-plasmic-override={overrides.textbox}
          className={classNames({
            [defaultcss.input]: true,
            [sty.textbox]: true,
          })}
          placeholder={"Write an update" as const}
          size={1 as const}
          type={"text" as const}
        />
      </div>

      {(hasVariant(variants, "content", "hasContent") ? true : false) ? (
        <div
          data-plasmic-name={"actionContainer"}
          data-plasmic-override={overrides.actionContainer}
          className={classNames({
            [defaultcss.all]: true,
            [sty.actionContainer]: true,
            [sty.actionContainer__content_hasContent]: hasVariant(
              variants,
              "content",
              "hasContent"
            ),
          })}
        >
          <IconButton
            data-plasmic-name={"iconButton"}
            data-plasmic-override={overrides.iconButton}
            className={classNames({
              __wab_instance: true,
              [sty.iconButton]: true,
            })}
            startIcon={
              <IconSendIcon
                data-plasmic-name={"startIcon"}
                data-plasmic-override={overrides.startIcon}
                className={classNames({
                  [defaultcss.all]: true,
                  [sty.startIcon]: true,
                })}
                role={"img"}
                {...({} as any)}
              />
            }
            withIcons={["start"]}
            {...({} as any)}
          />
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "editorContainer",
    "textbox",
    "actionContainer",
    "iconButton",
    "startIcon",
  ],

  editorContainer: ["editorContainer", "textbox"],
  textbox: ["textbox"],
  actionContainer: ["actionContainer", "iconButton", "startIcon"],
  iconButton: ["iconButton", "startIcon"],
  startIcon: ["startIcon"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  editorContainer: "div";
  textbox: "input";
  actionContainer: "div";
  iconButton: typeof IconButton;
  startIcon: "svg";
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
  } & Omit<PlasmicActionBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
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
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicActionBar__ArgProps,
      internalVariantPropNames: PlasmicActionBar__VariantProps,
    });

    return PlasmicActionBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
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
    editorContainer: makeNodeComponent("editorContainer"),
    textbox: makeNodeComponent("textbox"),
    actionContainer: makeNodeComponent("actionContainer"),
    iconButton: makeNodeComponent("iconButton"),
    startIcon: makeNodeComponent("startIcon"),

    // Metadata about props expected for PlasmicActionBar
    internalVariantProps: PlasmicActionBar__VariantProps,
    internalArgProps: PlasmicActionBar__ArgProps,
  }
);

export default PlasmicActionBar;
/* prettier-ignore-end */
