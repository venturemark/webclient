// @ts-nocheck
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
import ActionBar from "../../actionbar/index"; // plasmic-import: eUnRsS9UXR/component
import Update from "../../update/index"; // plasmic-import: Fs8bTUrvZrvfhCr/component
import ActionsColumn from "../../actionscolumn/index"; // plasmic-import: Ey_MwfntCV/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_home.module.css"; // plasmic-import: rr3cgzELv8j1fSZjvVMfyx/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: Ii0bQ3L3sO/css

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
  settingsContainer?: Flex<"div">;
  startIcon?: Flex<"svg">;
  endIcon?: Flex<"svg">;
  startIcon2?: Flex<"svg">;
  endIcon2?: Flex<"svg">;
  actionBarContainer?: Flex<"div">;
  actionBar?: Flex<typeof ActionBar>;
  updatesContainer?: Flex<"div">;
  update?: Flex<typeof Update>;
  actionsColumn?: Flex<typeof ActionsColumn>;
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
        [defaultcss.all]: true,
        [projectcss.root_reset_rr3cgzELv8j1fSZjvVMfyx]: true,
        [sty.root]: true,
      })}
    >
      {false ? (
        <div
          className={classNames({
            [defaultcss.all]: true,
            [sty.box__utMxK]: true,
          })}
        >
          <div
            data-plasmic-name={"settingsContainer"}
            data-plasmic-override={overrides.settingsContainer}
            data-plasmic-wrap-flex-child={true}
            className={classNames({
              [defaultcss.all]: true,
              [sty.settingsContainer]: true,
            })}
          >
            <div
              className={classNames({
                [defaultcss.all]: true,
                [sty.box___26Miy]: true,
              })}
            >
              <div
                className={
                  classNames({
                    [defaultcss.all]: true,
                    [sty.box___1ARwj]: true,
                  }) +
                  " " +
                  defaultcss.__wab_text
                }
              >
                {"Profile"}
              </div>

              <IconButton
                className={classNames({
                  __wab_instance: true,
                  [sty.iconButton__zX6H]: true,
                })}
                content={""}
                endIcon={
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
                startIcon={
                  <IconPersonIcon
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

            <div
              className={classNames({
                [defaultcss.all]: true,
                [sty.box__zoc2]: true,
              })}
            >
              <div
                className={
                  classNames({
                    [defaultcss.all]: true,
                    [sty.box__wwTzT]: true,
                  }) +
                  " " +
                  defaultcss.__wab_text
                }
              >
                {"Settings"}
              </div>

              <IconButton
                className={classNames({
                  __wab_instance: true,
                  [sty.iconButton___21OGd]: true,
                })}
                content={""}
                endIcon={
                  false ? (
                    <svg
                      data-plasmic-name={"endIcon2"}
                      data-plasmic-override={overrides.endIcon2}
                      className={classNames({
                        [defaultcss.all]: true,
                        [sty.endIcon2]: true,
                      })}
                      role={"img"}
                    />
                  ) : null
                }
                startIcon={
                  <IconSettingsIcon
                    data-plasmic-name={"startIcon2"}
                    data-plasmic-override={overrides.startIcon2}
                    className={classNames({
                      [defaultcss.all]: true,
                      [sty.startIcon2]: true,
                    })}
                    role={"img"}
                    {...({} as any)}
                  />
                }
                withIcons={["start"]}
                {...({} as any)}
              />
            </div>
          </div>
        </div>
      ) : null}

      <div
        data-plasmic-wrap-flex-child={true}
        className={classNames({
          [defaultcss.all]: true,
          [sty.box__ineb5]: true,
        })}
      >
        <div
          data-plasmic-name={"actionBarContainer"}
          data-plasmic-override={overrides.actionBarContainer}
          className={classNames({
            [defaultcss.all]: true,
            [sty.actionBarContainer]: true,
          })}
        >
          <ActionBar
            data-plasmic-name={"actionBar"}
            data-plasmic-override={overrides.actionBar}
            className={classNames({
              __wab_instance: true,
              [sty.actionBar]: true,
            })}
            error={[]}
            errorMessage={"Please enter a number value"}
            {...({} as any)}
          />
        </div>

        <div
          data-plasmic-name={"updatesContainer"}
          data-plasmic-override={overrides.updatesContainer}
          data-plasmic-wrap-flex-child={true}
          className={classNames({
            [defaultcss.all]: true,
            [sty.updatesContainer]: true,
          })}
        >
          <Update
            data-plasmic-name={"update"}
            data-plasmic-override={overrides.update}
            {...({} as any)}
          />
        </div>
      </div>

      <ActionsColumn
        data-plasmic-name={"actionsColumn"}
        data-plasmic-override={overrides.actionsColumn}
        className={classNames({
          __wab_instance: true,
          [sty.actionsColumn]: true,
        })}
        content={["hasContent"]}
        number={"hasNumber" as const}
        {...({} as any)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "settingsContainer",
    "startIcon",
    "endIcon",
    "startIcon2",
    "endIcon2",
    "actionBarContainer",
    "actionBar",
    "updatesContainer",
    "update",
    "actionsColumn",
  ],

  settingsContainer: [
    "settingsContainer",
    "startIcon",
    "endIcon",
    "startIcon2",
    "endIcon2",
  ],

  startIcon: ["startIcon"],
  endIcon: ["endIcon"],
  startIcon2: ["startIcon2"],
  endIcon2: ["endIcon2"],
  actionBarContainer: ["actionBarContainer", "actionBar"],
  actionBar: ["actionBar"],
  updatesContainer: ["updatesContainer", "update"],
  update: ["update"],
  actionsColumn: ["actionsColumn"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  settingsContainer: "div";
  startIcon: "svg";
  endIcon: "svg";
  startIcon2: "svg";
  endIcon2: "svg";
  actionBarContainer: "div";
  actionBar: typeof ActionBar;
  updatesContainer: "div";
  update: typeof Update;
  actionsColumn: typeof ActionsColumn;
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
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
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
    settingsContainer: makeNodeComponent("settingsContainer"),
    startIcon: makeNodeComponent("startIcon"),
    endIcon: makeNodeComponent("endIcon"),
    startIcon2: makeNodeComponent("startIcon2"),
    endIcon2: makeNodeComponent("endIcon2"),
    actionBarContainer: makeNodeComponent("actionBarContainer"),
    actionBar: makeNodeComponent("actionBar"),
    updatesContainer: makeNodeComponent("updatesContainer"),
    update: makeNodeComponent("update"),
    actionsColumn: makeNodeComponent("actionsColumn"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
