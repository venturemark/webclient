/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rr3cgzELv8j1fSZjvVMfyx
// Component: Ii0bQ3L3sO
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
  deriveRenderOpts,
} from "@plasmicapp/react-web";
import IconButton from "../../iconbutton/index"; // plasmic-import: odPjbfT2kyJgB_S/component
import Update from "../../update/index"; // plasmic-import: Fs8bTUrvZrvfhCr/component

import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_home.css"; // plasmic-import: rr3cgzELv8j1fSZjvVMfyx/projectcss
import "./PlasmicHome.css"; // plasmic-import: Ii0bQ3L3sO/css

import IconSendIcon from "../shared/icons/PlasmicIcon__IconSend"; // plasmic-import: oiAgf-ezpQ/icon
import IconWriteIcon from "../shared/icons/PlasmicIcon__IconWrite"; // plasmic-import: zCNIMAkbig/icon
import IconClockIcon from "../flipcard/icons/PlasmicIcon__IconClock"; // plasmic-import: M_91_FWOwwP63LN/icon
import IconBarChartIcon from "../shared/icons/PlasmicIcon__IconBarChart"; // plasmic-import: Y3JBiNHxmK/icon
import IconPersonIcon from "../shared/icons/PlasmicIcon__IconPerson"; // plasmic-import: Exz-c1pU2x/icon
import IconSettingsIcon from "../shared/icons/PlasmicIcon__IconSettings"; // plasmic-import: o3m824rpnQ/icon

export type PlasmicHome__VariantMembers = {};
export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: Flex<"div">;
  editorContainer?: Flex<"div">;
  editor?: Flex<"input">;
  actionBar?: Flex<"div">;
  startIcon2?: Flex<"svg">;
  endIcon2?: Flex<"svg">;
  updatesContainer?: Flex<"div">;
  updateContainer?: Flex<"div">;
  updateActionContainer?: Flex<"div">;
  startIcon3?: Flex<"svg">;
  startIcon32?: Flex<"svg">;
  update?: Flex<typeof Update>;
  updateFeedbackContainer?: Flex<"div">;
  box?: Flex<"div">;
  footer?: Flex<"div">;
  settingsContainer?: Flex<"div">;
};

export interface DefaultHomeProps {
  className?: string;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
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
        Home__root: true,
        plasmic_default__all: true,
        plasmic_default__div: true,
        root_reset_rr3cgzELv8j1fSZjvVMfyx: true,
      })}
    >
      <div
        data-plasmic-name={"editorContainer"}
        data-plasmic-override={overrides.editorContainer}
        className={classNames({
          Home__editorContainer: true,
          plasmic_default__all: true,
          plasmic_default__div: true,
        })}
      >
        <input
          data-plasmic-name={"editor"}
          data-plasmic-override={overrides.editor}
          className={classNames({
            Home__editor: true,
            plasmic_default__all: true,
            plasmic_default__input: true,
          })}
          placeholder={"Some placeholder" as const}
          size={1 as const}
          type={"text" as const}
          value={"Some value" as const}
        ></input>

        <div
          data-plasmic-name={"actionBar"}
          data-plasmic-override={overrides.actionBar}
          className={classNames({
            Home__actionBar: true,
            plasmic_default__all: true,
            plasmic_default__div: true,
          })}
        >
          <IconButton
            className={classNames({
              Home__iconButton__g8Jgr: true,
              __wab_instance: true,
            })}
            content={""}
            endIcon={
              false ? (
                <svg
                  data-plasmic-name={"endIcon2"}
                  data-plasmic-override={overrides.endIcon2}
                  className={classNames({
                    Home__endIcon2: true,
                    plasmic_default__all: true,
                    plasmic_default__svg: true,
                  })}
                  role={"img"}
                ></svg>
              ) : null
            }
            startIcon={
              <IconSendIcon
                data-plasmic-name={"startIcon2"}
                data-plasmic-override={overrides.startIcon2}
                className={classNames({
                  Home__startIcon2: true,
                  plasmic_default__all: true,
                  plasmic_default__svg: true,
                })}
                role={"img"}
                {...({} as any)}
              ></IconSendIcon>
            }
            withIcons={["start"]}
            {...({} as any)}
          ></IconButton>
        </div>
      </div>

      <div
        data-plasmic-name={"updatesContainer"}
        data-plasmic-override={overrides.updatesContainer}
        className={classNames({
          Home__updatesContainer: true,
          plasmic_default__all: true,
          plasmic_default__div: true,
        })}
      >
        <div
          data-plasmic-name={"updateContainer"}
          data-plasmic-override={overrides.updateContainer}
          className={classNames({
            Home__updateContainer: true,
            plasmic_default__all: true,
            plasmic_default__div: true,
          })}
        >
          <div
            data-plasmic-name={"updateActionContainer"}
            data-plasmic-override={overrides.updateActionContainer}
            data-plasmic-wrap-flex-child={true}
            className={classNames({
              Home__updateActionContainer: true,
              plasmic_default__all: true,
              plasmic_default__div: true,
            })}
          >
            <IconButton
              className={classNames({
                Home__iconButton__wtoQs: true,
                __wab_instance: true,
              })}
              startIcon={
                <IconWriteIcon
                  className={classNames({
                    Home__svg__r0Kjs: true,
                    plasmic_default__all: true,
                    plasmic_default__svg: true,
                  })}
                  role={"img"}
                  {...({} as any)}
                ></IconWriteIcon>
              }
              withIcons={["start"]}
              {...({} as any)}
            ></IconButton>

            <IconButton
              className={classNames({
                Home__iconButton__xcG4: true,
                __wab_instance: true,
              })}
              startIcon={
                <IconClockIcon
                  data-plasmic-name={"startIcon3"}
                  data-plasmic-override={overrides.startIcon3}
                  className={classNames({
                    Home__startIcon3: true,
                    plasmic_default__all: true,
                    plasmic_default__svg: true,
                  })}
                  role={"img"}
                  {...({} as any)}
                ></IconClockIcon>
              }
              withIcons={["start"]}
              {...({} as any)}
            ></IconButton>

            <IconButton
              className={classNames({
                Home__iconButton__c3DgA: true,
                __wab_instance: true,
              })}
              startIcon={
                <IconBarChartIcon
                  data-plasmic-name={"startIcon32"}
                  data-plasmic-override={overrides.startIcon32}
                  className={classNames({
                    Home__startIcon32: true,
                    plasmic_default__all: true,
                    plasmic_default__svg: true,
                  })}
                  role={"img"}
                  {...({} as any)}
                ></IconBarChartIcon>
              }
              withIcons={["start"]}
              {...({} as any)}
            ></IconButton>
          </div>

          <Update
            data-plasmic-name={"update"}
            data-plasmic-override={overrides.update}
            className={classNames({ Home__update: true, __wab_instance: true })}
            state={"text" as const}
            {...({} as any)}
          ></Update>

          <div
            data-plasmic-name={"updateFeedbackContainer"}
            data-plasmic-override={overrides.updateFeedbackContainer}
            data-plasmic-wrap-flex-child={true}
            className={classNames({
              Home__updateFeedbackContainer: true,
              plasmic_default__all: true,
              plasmic_default__div: true,
            })}
          >
            <div
              data-plasmic-name={"box"}
              data-plasmic-override={overrides.box}
              className={
                classNames({
                  Home__box: true,
                  plasmic_default__all: true,
                  plasmic_default__div: true,
                }) +
                " " +
                "__wab_text"
              }
            >
              {"35"}
            </div>
          </div>
        </div>
      </div>

      <div
        data-plasmic-name={"footer"}
        data-plasmic-override={overrides.footer}
        className={classNames({
          Home__footer: true,
          plasmic_default__all: true,
          plasmic_default__div: true,
        })}
      >
        <div
          data-plasmic-name={"settingsContainer"}
          data-plasmic-override={overrides.settingsContainer}
          data-plasmic-wrap-flex-child={true}
          className={classNames({
            Home__settingsContainer: true,
            plasmic_default__all: true,
            plasmic_default__div: true,
          })}
        >
          <IconButton
            className={classNames({
              Home__iconButton__zX6H: true,
              __wab_instance: true,
            })}
            content={""}
            endIcon={
              false ? (
                <svg
                  className={classNames({
                    Home__svg___1OBNx: true,
                    plasmic_default__all: true,
                    plasmic_default__svg: true,
                  })}
                  role={"img"}
                ></svg>
              ) : null
            }
            startIcon={
              <IconPersonIcon
                className={classNames({
                  Home__svg___0O2Rb: true,
                  plasmic_default__all: true,
                  plasmic_default__svg: true,
                })}
                role={"img"}
                {...({} as any)}
              ></IconPersonIcon>
            }
            withIcons={["start"]}
            {...({} as any)}
          ></IconButton>

          <IconButton
            className={classNames({
              Home__iconButton__hDyK9: true,
              __wab_instance: true,
            })}
            content={""}
            endIcon={
              false ? (
                <svg
                  className={classNames({
                    Home__svg__cw2T7: true,
                    plasmic_default__all: true,
                    plasmic_default__svg: true,
                  })}
                  role={"img"}
                ></svg>
              ) : null
            }
            startIcon={
              <IconSettingsIcon
                className={classNames({
                  Home__svg__jAIa1: true,
                  plasmic_default__all: true,
                  plasmic_default__svg: true,
                })}
                role={"img"}
                {...({} as any)}
              ></IconSettingsIcon>
            }
            withIcons={["start"]}
            {...({} as any)}
          ></IconButton>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "editorContainer",
    "editor",
    "actionBar",
    "startIcon2",
    "endIcon2",
    "updatesContainer",
    "updateContainer",
    "updateActionContainer",
    "startIcon3",
    "startIcon32",
    "update",
    "updateFeedbackContainer",
    "box",
    "footer",
    "settingsContainer",
  ],

  editorContainer: [
    "editorContainer",
    "editor",
    "actionBar",
    "startIcon2",
    "endIcon2",
  ],

  editor: ["editor"],
  actionBar: ["actionBar", "startIcon2", "endIcon2"],
  startIcon2: ["startIcon2"],
  endIcon2: ["endIcon2"],
  updatesContainer: [
    "updatesContainer",
    "updateContainer",
    "updateActionContainer",
    "startIcon3",
    "startIcon32",
    "update",
    "updateFeedbackContainer",
    "box",
  ],

  updateContainer: [
    "updateContainer",
    "updateActionContainer",
    "startIcon3",
    "startIcon32",
    "update",
    "updateFeedbackContainer",
    "box",
  ],

  updateActionContainer: ["updateActionContainer", "startIcon3", "startIcon32"],
  startIcon3: ["startIcon3"],
  startIcon32: ["startIcon32"],
  update: ["update"],
  updateFeedbackContainer: ["updateFeedbackContainer", "box"],
  box: ["box"],
  footer: ["footer", "settingsContainer"],
  settingsContainer: ["settingsContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  editorContainer: "div";
  editor: "input";
  actionBar: "div";
  startIcon2: "svg";
  endIcon2: "svg";
  updatesContainer: "div";
  updateContainer: "div";
  updateActionContainer: "div";
  startIcon3: "svg";
  startIcon32: "svg";
  update: typeof Update;
  updateFeedbackContainer: "div";
  box: "div";
  footer: "div";
  settingsContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHome__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps,
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    editorContainer: makeNodeComponent("editorContainer"),
    editor: makeNodeComponent("editor"),
    actionBar: makeNodeComponent("actionBar"),
    startIcon2: makeNodeComponent("startIcon2"),
    endIcon2: makeNodeComponent("endIcon2"),
    updatesContainer: makeNodeComponent("updatesContainer"),
    updateContainer: makeNodeComponent("updateContainer"),
    updateActionContainer: makeNodeComponent("updateActionContainer"),
    startIcon3: makeNodeComponent("startIcon3"),
    startIcon32: makeNodeComponent("startIcon32"),
    update: makeNodeComponent("update"),
    updateFeedbackContainer: makeNodeComponent("updateFeedbackContainer"),
    box: makeNodeComponent("box"),
    footer: makeNodeComponent("footer"),
    settingsContainer: makeNodeComponent("settingsContainer"),

    // Helper for creating a Renderer
    createRenderer: () => new PlasmicHome__Renderer({}, {}),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,
  }
);

type ForNodeRenderer<NodeName extends NodeNameType> = NodeRenderer<
  PlasmicHome__VariantsArgs,
  PlasmicHome__ArgsType,
  NodeOverridesType<NodeName>
>;

class PlasmicHome__Renderer extends Renderer<
  PlasmicHome__VariantsArgs,
  PlasmicHome__ArgsType,
  PlasmicHome__OverridesType,
  "root"
> {
  constructor(
    variants: PlasmicHome__VariantsArgs,
    args: PlasmicHome__ArgsType
  ) {
    super(variants, args, PlasmicHome__RenderFunc, "root");
  }

  protected create(
    variants: PlasmicHome__VariantsArgs,
    args: PlasmicHome__ArgsType
  ) {
    return new PlasmicHome__Renderer(variants, args);
  }

  getInternalVariantProps(): VariantPropType[] {
    return PlasmicHome__VariantProps;
  }

  getInternalArgProps(): ArgPropType[] {
    return PlasmicHome__ArgProps;
  }

  forNode(name: "settingsContainer"): ForNodeRenderer<"settingsContainer">;
  forNode(name: "footer"): ForNodeRenderer<"footer">;
  forNode(name: "box"): ForNodeRenderer<"box">;
  forNode(
    name: "updateFeedbackContainer"
  ): ForNodeRenderer<"updateFeedbackContainer">;
  forNode(name: "update"): ForNodeRenderer<"update">;
  forNode(name: "startIcon32"): ForNodeRenderer<"startIcon32">;
  forNode(name: "startIcon3"): ForNodeRenderer<"startIcon3">;
  forNode(
    name: "updateActionContainer"
  ): ForNodeRenderer<"updateActionContainer">;
  forNode(name: "updateContainer"): ForNodeRenderer<"updateContainer">;
  forNode(name: "updatesContainer"): ForNodeRenderer<"updatesContainer">;
  forNode(name: "endIcon2"): ForNodeRenderer<"endIcon2">;
  forNode(name: "startIcon2"): ForNodeRenderer<"startIcon2">;
  forNode(name: "actionBar"): ForNodeRenderer<"actionBar">;
  forNode(name: "editor"): ForNodeRenderer<"editor">;
  forNode(name: "editorContainer"): ForNodeRenderer<"editorContainer">;
  forNode(name: "root"): ForNodeRenderer<"root">;
  forNode(name: NodeNameType) {
    return super.forNode(name);
  }
}

export default PlasmicHome;
/* prettier-ignore-end */
