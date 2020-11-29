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
import ActionBar from "../../actionbar/index"; // plasmic-import: eUnRsS9UXR/component
import Update from "../../update/index"; // plasmic-import: Fs8bTUrvZrvfhCr/component
import IconButton from "../../iconbutton/index"; // plasmic-import: odPjbfT2kyJgB_S/component

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
  actionBarContainer?: Flex<"div">;
  actionBar?: Flex<typeof ActionBar>;
  updatesContainer?: Flex<"div">;
  update?: Flex<typeof Update>;
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
        [defaultcss.all]: true,
        [projectcss.root_reset_rr3cgzELv8j1fSZjvVMfyx]: true,
        [sty.root]: true,
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

      <div
        data-plasmic-name={"footer"}
        data-plasmic-override={overrides.footer}
        className={classNames({ [defaultcss.all]: true, [sty.footer]: true })}
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
          <IconButton
            className={classNames({
              __wab_instance: true,
              [sty.iconButton__zX6H]: true,
            })}
            content={""}
            endIcon={
              false ? (
                <svg
                  className={classNames({
                    [defaultcss.all]: true,
                    [sty.svg___1OBNx]: true,
                  })}
                  role={"img"}
                />
              ) : null
            }
            startIcon={
              <IconPersonIcon
                className={classNames({
                  [defaultcss.all]: true,
                  [sty.svg___0O2Rb]: true,
                })}
                role={"img"}
                {...({} as any)}
              />
            }
            withIcons={["start"]}
            {...({} as any)}
          />

          <IconButton
            className={classNames({
              __wab_instance: true,
              [sty.iconButton__hDyK9]: true,
            })}
            content={""}
            endIcon={
              false ? (
                <svg
                  className={classNames({
                    [defaultcss.all]: true,
                    [sty.svg__cw2T7]: true,
                  })}
                  role={"img"}
                />
              ) : null
            }
            startIcon={
              <IconSettingsIcon
                className={classNames({
                  [defaultcss.all]: true,
                  [sty.svg__jAIa1]: true,
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
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "actionBarContainer",
    "actionBar",
    "updatesContainer",
    "update",
    "footer",
    "settingsContainer",
  ],

  actionBarContainer: ["actionBarContainer", "actionBar"],
  actionBar: ["actionBar"],
  updatesContainer: ["updatesContainer", "update"],
  update: ["update"],
  footer: ["footer", "settingsContainer"],
  settingsContainer: ["settingsContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  actionBarContainer: "div";
  actionBar: typeof ActionBar;
  updatesContainer: "div";
  update: typeof Update;
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
    actionBarContainer: makeNodeComponent("actionBarContainer"),
    actionBar: makeNodeComponent("actionBar"),
    updatesContainer: makeNodeComponent("updatesContainer"),
    update: makeNodeComponent("update"),
    footer: makeNodeComponent("footer"),
    settingsContainer: makeNodeComponent("settingsContainer"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
