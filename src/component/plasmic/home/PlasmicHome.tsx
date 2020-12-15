// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
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
  Stack,
} from "@plasmicapp/react-web";
import IconButton from "../../iconbutton/index"; // plasmic-import: odPjbfT2kyJgB_S/component
import TimelineItem from "../../timelineitem/index"; // plasmic-import: KDElHbQmfd/component
import ActionBar from "../../actionbar/index"; // plasmic-import: eUnRsS9UXR/component
import Update from "../../update/index"; // plasmic-import: Fs8bTUrvZrvfhCr/component
import ActionsColumn from "../../actionscolumn/index"; // plasmic-import: Ey_MwfntCV/component

import {
  ScreenContext,
  ScreenValue,
} from "../shared/PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_home.module.css"; // plasmic-import: rr3cgzELv8j1fSZjvVMfyx/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: Ii0bQ3L3sO/css

import IconHomeIcon from "../shared/icons/PlasmicIcon__IconHome"; // plasmic-import: Z6YqF7wXr6/icon
import IconAddIcon from "../shared/icons/PlasmicIcon__IconAdd"; // plasmic-import: gg_6iBfcsu/icon
import IconPersonIcon from "../shared/icons/PlasmicIcon__IconPerson"; // plasmic-import: Exz-c1pU2x/icon
import IconSettingsIcon from "../shared/icons/PlasmicIcon__IconSettings"; // plasmic-import: o3m824rpnQ/icon

export type PlasmicHome__VariantMembers = {
  sidebarHidden: "sidebarHidden";
};

export type PlasmicHome__VariantsArgs = {
  sidebarHidden?: SingleBooleanChoiceArg<"sidebarHidden">;
};

type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>(
  "sidebarHidden"
);

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: Flex<"div">;
  sidebar?: Flex<"div">;
  topSidebar?: Flex<"div">;
  homeContainer?: Flex<"div">;
  startIcon3?: Flex<"svg">;
  endIcon3?: Flex<"svg">;
  timelinesContainer?: Flex<"div">;
  bottomSidebar?: Flex<"div">;
  addTimeline?: Flex<"div">;
  addTimelineInput?: Flex<"input">;
  startIcon32?: Flex<"svg">;
  endIcon32?: Flex<"svg">;
  settingsContainer?: Flex<"div">;
  startIcon4?: Flex<"svg">;
  endIcon4?: Flex<"svg">;
  startIcon22?: Flex<"svg">;
  endIcon22?: Flex<"svg">;
  main?: Flex<"div">;
  actionBarContainer?: Flex<"div">;
  actionBar?: Flex<typeof ActionBar>;
  updatesContainer?: Flex<"div">;
  update?: Flex<typeof Update>;
  actionsColumn?: Flex<typeof ActionsColumn>;
};

export interface DefaultHomeProps {
  sidebarHidden?: SingleBooleanChoiceArg<"sidebarHidden">;
  className?: string;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = {
    screen: React.useContext(ScreenContext),
  };

  Object.entries(globalVariants).forEach(([key, value]) => {
    if (value === ("PLEASE_RENDER_INSIDE_PROVIDER" as any)) {
      throw new Error(
        `Context value for ${key} was not defined. Did you render the required provider for this component? Learn More: https://www.plasmic.app/learn/other-assets/#global-variants`
      );
    }
  });

  return (
    <Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames({
        [defaultcss.all]: true,
        [projectcss.root_reset]: true,
        [sty.root]: true,
        [sty.root__global_screen_mobile]: true,
        [sty.root__sidebarHidden_sidebarHidden]: hasVariant(
          variants,
          "sidebarHidden",
          "sidebarHidden"
        ),
      })}
    >
      {(hasVariant(globalVariants, "screen", "mobile") ? false : true) ? (
        <Stack
          as={"div"}
          data-plasmic-name={"sidebar"}
          data-plasmic-override={overrides.sidebar}
          hasGap={true}
          className={classNames({
            [defaultcss.all]: true,
            [sty.sidebar]: true,
            [sty.sidebar__global_screen_mobile]: true,
            [sty.sidebar__sidebarHidden_sidebarHidden]: hasVariant(
              variants,
              "sidebarHidden",
              "sidebarHidden"
            ),

            [sty.sidebar__sidebarHidden_sidebarHidden_global_screen_mobile]: hasVariant(
              variants,
              "sidebarHidden",
              "sidebarHidden"
            ),
          })}
        >
          <Stack
            as={"div"}
            data-plasmic-name={"topSidebar"}
            data-plasmic-override={overrides.topSidebar}
            hasGap={true}
            className={classNames({
              [defaultcss.all]: true,
              [sty.topSidebar]: true,
            })}
          >
            <div
              data-plasmic-name={"homeContainer"}
              data-plasmic-override={overrides.homeContainer}
              className={classNames({
                [defaultcss.all]: true,
                [sty.homeContainer]: true,
              })}
            >
              {(
                hasVariant(variants, "sidebarHidden", "sidebarHidden")
                  ? false
                  : true
              ) ? (
                <div
                  className={
                    classNames({
                      [defaultcss.all]: true,
                      [sty.box__a4Upt]: true,
                      [sty.box__sidebarHidden_sidebarHidden__a4UptcPu7G]: hasVariant(
                        variants,
                        "sidebarHidden",
                        "sidebarHidden"
                      ),
                    }) +
                    " " +
                    defaultcss.__wab_text
                  }
                >
                  <span>
                    <span style={{ fontWeight: 700 }}>{"Home"}</span>
                  </span>
                </div>
              ) : null}

              <IconButton
                className={classNames({
                  __wab_instance: true,
                  [sty.iconButton___9RNnQ]: true,
                })}
                content={""}
                endIcon={
                  false ? (
                    <svg
                      data-plasmic-name={"endIcon3"}
                      data-plasmic-override={overrides.endIcon3}
                      className={classNames({
                        [defaultcss.all]: true,
                        [sty.endIcon3]: true,
                      })}
                      role={"img"}
                    />
                  ) : null
                }
                showContent={"showContent" as const}
                startIcon={
                  <IconHomeIcon
                    data-plasmic-name={"startIcon3"}
                    data-plasmic-override={overrides.startIcon3}
                    className={classNames({
                      [defaultcss.all]: true,
                      [sty.startIcon3]: true,
                    })}
                    role={"img"}
                  />
                }
                withIcons={["start"]}
              />
            </div>

            {(
              hasVariant(variants, "sidebarHidden", "sidebarHidden")
                ? false
                : true
            ) ? (
              <Stack
                as={"div"}
                data-plasmic-name={"timelinesContainer"}
                data-plasmic-override={overrides.timelinesContainer}
                hasGap={true}
                className={classNames({
                  [defaultcss.all]: true,
                  [sty.timelinesContainer]: true,
                  [sty.timelinesContainer__sidebarHidden_sidebarHidden]: hasVariant(
                    variants,
                    "sidebarHidden",
                    "sidebarHidden"
                  ),
                })}
              >
                <TimelineItem
                  className={classNames({
                    __wab_instance: true,
                    [sty.timelineItem___7QYsY]: true,
                  })}
                >
                  {"Features Shipped"}
                </TimelineItem>

                <TimelineItem
                  className={classNames({
                    __wab_instance: true,
                    [sty.timelineItem___14Lvf]: true,
                  })}
                >
                  {"Revenue"}
                </TimelineItem>

                <TimelineItem
                  className={classNames({
                    __wab_instance: true,
                    [sty.timelineItem__jzcQp]: true,
                  })}
                >
                  {"Active Users"}
                </TimelineItem>

                <TimelineItem
                  className={classNames({
                    __wab_instance: true,
                    [sty.timelineItem__m99Md]: true,
                  })}
                >
                  {"Milestones"}
                </TimelineItem>
              </Stack>
            ) : null}
          </Stack>

          <Stack
            as={"div"}
            data-plasmic-name={"bottomSidebar"}
            data-plasmic-override={overrides.bottomSidebar}
            hasGap={true}
            className={classNames({
              [defaultcss.all]: true,
              [sty.bottomSidebar]: true,
            })}
          >
            <Stack
              as={"div"}
              data-plasmic-name={"addTimeline"}
              data-plasmic-override={overrides.addTimeline}
              hasGap={true}
              className={classNames({
                [defaultcss.all]: true,
                [sty.addTimeline]: true,
              })}
            >
              {(
                hasVariant(variants, "sidebarHidden", "sidebarHidden")
                  ? false
                  : true
              ) ? (
                <input
                  data-plasmic-name={"addTimelineInput"}
                  data-plasmic-override={overrides.addTimelineInput}
                  className={classNames({
                    [defaultcss.input]: true,
                    [sty.addTimelineInput]: true,
                    [sty.addTimelineInput__sidebarHidden_sidebarHidden]: hasVariant(
                      variants,
                      "sidebarHidden",
                      "sidebarHidden"
                    ),
                  })}
                  placeholder={"Add Timeline" as const}
                  size={1 as const}
                  type={"text" as const}
                />
              ) : null}

              <IconButton
                className={classNames({
                  __wab_instance: true,
                  [sty.iconButton__gswCu]: true,
                })}
                content={""}
                endIcon={
                  false ? (
                    <svg
                      data-plasmic-name={"endIcon32"}
                      data-plasmic-override={overrides.endIcon32}
                      className={classNames({
                        [defaultcss.all]: true,
                        [sty.endIcon32]: true,
                      })}
                      role={"img"}
                    />
                  ) : null
                }
                startIcon={
                  <IconAddIcon
                    data-plasmic-name={"startIcon32"}
                    data-plasmic-override={overrides.startIcon32}
                    className={classNames({
                      [defaultcss.all]: true,
                      [sty.startIcon32]: true,
                    })}
                    role={"img"}
                  />
                }
                withIcons={["start"]}
              />
            </Stack>

            {(
              hasVariant(variants, "sidebarHidden", "sidebarHidden")
                ? false
                : true
            ) ? (
              <Stack
                as={"div"}
                data-plasmic-name={"settingsContainer"}
                data-plasmic-override={overrides.settingsContainer}
                hasGap={true}
                className={classNames({
                  [defaultcss.all]: true,
                  [sty.settingsContainer]: true,
                  [sty.settingsContainer__sidebarHidden_sidebarHidden]: hasVariant(
                    variants,
                    "sidebarHidden",
                    "sidebarHidden"
                  ),
                })}
              >
                <div
                  className={classNames({
                    [defaultcss.all]: true,
                    [sty.box__ad5RC]: true,
                  })}
                >
                  <div
                    className={
                      classNames({
                        [defaultcss.all]: true,
                        [sty.box__pS1K3]: true,
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
                      [sty.iconButton__o7VyO]: true,
                    })}
                    content={""}
                    endIcon={
                      false ? (
                        <svg
                          data-plasmic-name={"endIcon4"}
                          data-plasmic-override={overrides.endIcon4}
                          className={classNames({
                            [defaultcss.all]: true,
                            [sty.endIcon4]: true,
                          })}
                          role={"img"}
                        />
                      ) : null
                    }
                    startIcon={
                      <IconPersonIcon
                        data-plasmic-name={"startIcon4"}
                        data-plasmic-override={overrides.startIcon4}
                        className={classNames({
                          [defaultcss.all]: true,
                          [sty.startIcon4]: true,
                        })}
                        role={"img"}
                      />
                    }
                    withIcons={["start"]}
                  />
                </div>

                <div
                  className={classNames({
                    [defaultcss.all]: true,
                    [sty.box__taQf8]: true,
                  })}
                >
                  <div
                    className={
                      classNames({
                        [defaultcss.all]: true,
                        [sty.box__ysBLn]: true,
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
                      [sty.iconButton__zIzeo]: true,
                    })}
                    content={""}
                    endIcon={
                      false ? (
                        <svg
                          data-plasmic-name={"endIcon22"}
                          data-plasmic-override={overrides.endIcon22}
                          className={classNames({
                            [defaultcss.all]: true,
                            [sty.endIcon22]: true,
                          })}
                          role={"img"}
                        />
                      ) : null
                    }
                    startIcon={
                      <IconSettingsIcon
                        data-plasmic-name={"startIcon22"}
                        data-plasmic-override={overrides.startIcon22}
                        className={classNames({
                          [defaultcss.all]: true,
                          [sty.startIcon22]: true,
                        })}
                        role={"img"}
                      />
                    }
                    withIcons={["start"]}
                  />
                </div>
              </Stack>
            ) : null}
          </Stack>
        </Stack>
      ) : null}

      <div
        data-plasmic-name={"main"}
        data-plasmic-override={overrides.main}
        className={classNames({
          [defaultcss.all]: true,
          [sty.main]: true,
          [sty.main__global_screen_desktop]: true,
        })}
      >
        <Stack
          as={"div"}
          hasGap={true}
          className={classNames({
            [defaultcss.all]: true,
            [sty.box__global_screen_mobile__ineb5CckRm]: true,
            [sty.box__ineb5]: true,
          })}
        >
          <div
            data-plasmic-name={"actionBarContainer"}
            data-plasmic-override={overrides.actionBarContainer}
            className={classNames({
              [defaultcss.all]: true,
              [sty.actionBarContainer]: true,
              [sty.actionBarContainer__global_screen_mobile]: true,
            })}
          >
            <ActionBar
              data-plasmic-name={"actionBar"}
              data-plasmic-override={overrides.actionBar}
              className={classNames({
                __wab_instance: true,
                [sty.actionBar]: true,
                [sty.actionBar__global_screen_mobile]: true,
              })}
              error={hasVariant(globalVariants, "screen", "mobile") ? [] : []}
              errorMessage={
                <div
                  className={
                    classNames({
                      [defaultcss.all]: true,
                      [sty.box__global_screen_mobile__pmC0QCckRm]: true,
                      [sty.box__pmC0Q]: true,
                    }) +
                    " " +
                    defaultcss.__wab_text
                  }
                >
                  {"Please enter a number value"}
                </div>
              }
              text={hasVariant(globalVariants, "screen", "mobile") ? [] : []}
            />
          </div>

          <Stack
            as={"div"}
            data-plasmic-name={"updatesContainer"}
            data-plasmic-override={overrides.updatesContainer}
            hasGap={true}
            className={classNames({
              [defaultcss.all]: true,
              [sty.updatesContainer]: true,
              [sty.updatesContainer__global_screen_mobile]: true,
            })}
          >
            <Update
              data-plasmic-name={"update"}
              data-plasmic-override={overrides.update}
              className={classNames({
                __wab_instance: true,
                [sty.update__global_screen_mobile]: true,
              })}
            />
          </Stack>
        </Stack>

        <ActionsColumn
          data-plasmic-name={"actionsColumn"}
          data-plasmic-override={overrides.actionsColumn}
          className={classNames({
            __wab_instance: true,
            [sty.actionsColumn]: true,
            [sty.actionsColumn__global_screen_mobile]: true,
          })}
          content={["hasContent"]}
          number={"hasNumber" as const}
          numberValue={"4567"}
        />
      </div>
    </Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "sidebar",
    "topSidebar",
    "homeContainer",
    "startIcon3",
    "endIcon3",
    "timelinesContainer",
    "bottomSidebar",
    "addTimeline",
    "addTimelineInput",
    "startIcon32",
    "endIcon32",
    "settingsContainer",
    "startIcon4",
    "endIcon4",
    "startIcon22",
    "endIcon22",
    "main",
    "actionBarContainer",
    "actionBar",
    "updatesContainer",
    "update",
    "actionsColumn",
  ],

  sidebar: [
    "sidebar",
    "topSidebar",
    "homeContainer",
    "startIcon3",
    "endIcon3",
    "timelinesContainer",
    "bottomSidebar",
    "addTimeline",
    "addTimelineInput",
    "startIcon32",
    "endIcon32",
    "settingsContainer",
    "startIcon4",
    "endIcon4",
    "startIcon22",
    "endIcon22",
  ],

  topSidebar: [
    "topSidebar",
    "homeContainer",
    "startIcon3",
    "endIcon3",
    "timelinesContainer",
  ],

  homeContainer: ["homeContainer", "startIcon3", "endIcon3"],
  startIcon3: ["startIcon3"],
  endIcon3: ["endIcon3"],
  timelinesContainer: ["timelinesContainer"],
  bottomSidebar: [
    "bottomSidebar",
    "addTimeline",
    "addTimelineInput",
    "startIcon32",
    "endIcon32",
    "settingsContainer",
    "startIcon4",
    "endIcon4",
    "startIcon22",
    "endIcon22",
  ],

  addTimeline: ["addTimeline", "addTimelineInput", "startIcon32", "endIcon32"],
  addTimelineInput: ["addTimelineInput"],
  startIcon32: ["startIcon32"],
  endIcon32: ["endIcon32"],
  settingsContainer: [
    "settingsContainer",
    "startIcon4",
    "endIcon4",
    "startIcon22",
    "endIcon22",
  ],

  startIcon4: ["startIcon4"],
  endIcon4: ["endIcon4"],
  startIcon22: ["startIcon22"],
  endIcon22: ["endIcon22"],
  main: [
    "main",
    "actionBarContainer",
    "actionBar",
    "updatesContainer",
    "update",
    "actionsColumn",
  ],

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
  sidebar: "div";
  topSidebar: "div";
  homeContainer: "div";
  startIcon3: "svg";
  endIcon3: "svg";
  timelinesContainer: "div";
  bottomSidebar: "div";
  addTimeline: "div";
  addTimelineInput: "input";
  startIcon32: "svg";
  endIcon32: "svg";
  settingsContainer: "div";
  startIcon4: "svg";
  endIcon4: "svg";
  startIcon22: "svg";
  endIcon22: "svg";
  main: "div";
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
    sidebar: makeNodeComponent("sidebar"),
    topSidebar: makeNodeComponent("topSidebar"),
    homeContainer: makeNodeComponent("homeContainer"),
    startIcon3: makeNodeComponent("startIcon3"),
    endIcon3: makeNodeComponent("endIcon3"),
    timelinesContainer: makeNodeComponent("timelinesContainer"),
    bottomSidebar: makeNodeComponent("bottomSidebar"),
    addTimeline: makeNodeComponent("addTimeline"),
    addTimelineInput: makeNodeComponent("addTimelineInput"),
    startIcon32: makeNodeComponent("startIcon32"),
    endIcon32: makeNodeComponent("endIcon32"),
    settingsContainer: makeNodeComponent("settingsContainer"),
    startIcon4: makeNodeComponent("startIcon4"),
    endIcon4: makeNodeComponent("endIcon4"),
    startIcon22: makeNodeComponent("startIcon22"),
    endIcon22: makeNodeComponent("endIcon22"),
    main: makeNodeComponent("main"),
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
