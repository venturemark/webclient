// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: JQWYItyW5A
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import SidebarItem from "../../sidebaritem/index"; // plasmic-import: KDElHbQmfd/component
import IconButton from "../../iconbutton/index"; // plasmic-import: UIpuE7M1YY/component
import Dropdown from "../../dropdown/index"; // plasmic-import: Umq3CDOCIR/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicSidebarItemGroup.module.css"; // plasmic-import: JQWYItyW5A/css

import IconHashIcon from "./icons/PlasmicIcon__IconHash"; // plasmic-import: AVLV6uMr56/icon
import LockIconsvgIcon from "./icons/PlasmicIcon__LockIconsvg"; // plasmic-import: 1tBTTGMGvG/icon

export type PlasmicSidebarItemGroup__VariantMembers = {
  isCollapsed: "isCollapsed";
  isOwner: "isOwner";
  isPublic: "isPublic";
};

export type PlasmicSidebarItemGroup__VariantsArgs = {
  isCollapsed?: SingleBooleanChoiceArg<"isCollapsed">;
  isOwner?: SingleBooleanChoiceArg<"isOwner">;
  isPublic?: SingleBooleanChoiceArg<"isPublic">;
};

type VariantPropType = keyof PlasmicSidebarItemGroup__VariantsArgs;
export const PlasmicSidebarItemGroup__VariantProps = new Array<VariantPropType>(
  "isCollapsed",
  "isOwner",
  "isPublic"
);

export type PlasmicSidebarItemGroup__ArgsType = {};
type ArgPropType = keyof PlasmicSidebarItemGroup__ArgsType;
export const PlasmicSidebarItemGroup__ArgProps = new Array<ArgPropType>();

export type PlasmicSidebarItemGroup__OverridesType = {
  root?: p.Flex<"div">;
  venture?: p.Flex<typeof SidebarItem>;
  itemContainer?: p.Flex<"div">;
  sidebarItem?: p.Flex<typeof SidebarItem>;
  itemContainer2?: p.Flex<"div">;
  icon?: p.Flex<typeof IconButton>;
  itemContainer22?: p.Flex<"div">;
  icon2?: p.Flex<typeof IconButton>;
  itemContainer222?: p.Flex<"div">;
  icon22?: p.Flex<typeof IconButton>;
  newTimeline?: p.Flex<typeof SidebarItem>;
};

export interface DefaultSidebarItemGroupProps {
  isCollapsed?: SingleBooleanChoiceArg<"isCollapsed">;
  isOwner?: SingleBooleanChoiceArg<"isOwner">;
  isPublic?: SingleBooleanChoiceArg<"isPublic">;
  className?: string;
}

function PlasmicSidebarItemGroup__RenderFunc(props: {
  variants: PlasmicSidebarItemGroup__VariantsArgs;
  args: PlasmicSidebarItemGroup__ArgsType;
  overrides: PlasmicSidebarItemGroup__OverridesType;
  dataFetches?: PlasmicSidebarItemGroup__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

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
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root,
        {
          [sty.root__isCollapsed]: hasVariant(
            variants,
            "isCollapsed",
            "isCollapsed"
          ),
          [sty.root__isOwner]: hasVariant(variants, "isOwner", "isOwner"),
        }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <SidebarItem
        data-plasmic-name={"venture"}
        data-plasmic-override={overrides.venture}
        className={classNames("__wab_instance", sty.venture, {
          [sty.venture__isCollapsed]: hasVariant(
            variants,
            "isCollapsed",
            "isCollapsed"
          ),
          [sty.venture__isOwner]: hasVariant(variants, "isOwner", "isOwner"),
          [sty.venture__isPublic]: hasVariant(variants, "isPublic", "isPublic"),
        })}
        isActive={
          triggers.hover_root ? ("isActive" as const) : ("isActive" as const)
        }
        itemType={
          hasVariant(variants, "isCollapsed", "isCollapsed")
            ? ("ventureCollapsed" as const)
            : undefined
        }
        name={
          <div
            className={classNames(
              defaultcss.all,
              projectcss.all,
              defaultcss.__wab_text,
              sty.text__fqyEx,
              {
                [sty.text__isCollapsed__fqyExR1V]: hasVariant(
                  variants,
                  "isCollapsed",
                  "isCollapsed"
                ),
                [sty.text__isPublic__fqyExYwyIq]: hasVariant(
                  variants,
                  "isPublic",
                  "isPublic"
                ),
              }
            )}
          >
            {"Venture Name"}
          </div>
        }
      />

      {(hasVariant(variants, "isCollapsed", "isCollapsed") ? false : true) ? (
        <div
          data-plasmic-name={"itemContainer"}
          data-plasmic-override={overrides.itemContainer}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.itemContainer,
            {
              [sty.itemContainer__isCollapsed]: hasVariant(
                variants,
                "isCollapsed",
                "isCollapsed"
              ),
              [sty.itemContainer__isPublic]: hasVariant(
                variants,
                "isPublic",
                "isPublic"
              ),
            }
          )}
        >
          <SidebarItem
            data-plasmic-name={"sidebarItem"}
            data-plasmic-override={overrides.sidebarItem}
            className={classNames("__wab_instance", sty.sidebarItem, {
              [sty.sidebarItem__isCollapsed]: hasVariant(
                variants,
                "isCollapsed",
                "isCollapsed"
              ),
              [sty.sidebarItem__isOwner]: hasVariant(
                variants,
                "isOwner",
                "isOwner"
              ),
              [sty.sidebarItem__isPublic]: hasVariant(
                variants,
                "isPublic",
                "isPublic"
              ),
            })}
            hasNewActivity={"hasNewActivity" as const}
            itemType={"timeline" as const}
            name={
              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  defaultcss.__wab_text,
                  sty.text__fPdD,
                  {
                    [sty.text__isPublic__fPdDYwyIq]: hasVariant(
                      variants,
                      "isPublic",
                      "isPublic"
                    ),
                  }
                )}
              >
                {"Cool Startup Friends"}
              </div>
            }
          />
        </div>
      ) : null}
      {(hasVariant(variants, "isPublic", "isPublic") ? true : false) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"itemContainer2"}
          data-plasmic-override={overrides.itemContainer2}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.itemContainer2,
            {
              [sty.itemContainer2__isPublic]: hasVariant(
                variants,
                "isPublic",
                "isPublic"
              ),
            }
          )}
        >
          {false ? (
            <div
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__qDvH0
              )}
            >
              {false ? (
                <svg
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.svg__g8Bxr
                  )}
                  role={"img"}
                />
              ) : null}
            </div>
          ) : null}

          <IconButton
            data-plasmic-name={"icon"}
            data-plasmic-override={overrides.icon}
            className={classNames("__wab_instance", sty.icon, {
              [sty.icon__isPublic]: hasVariant(
                variants,
                "isPublic",
                "isPublic"
              ),
            })}
          >
            <p.PlasmicIcon
              PlasmicIconType={
                hasVariant(variants, "isPublic", "isPublic")
                  ? LockIconsvgIcon
                  : IconHashIcon
              }
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.svg__d4BHp,
                {
                  [sty.svg__isPublic__d4BHpYwyIq]: hasVariant(
                    variants,
                    "isPublic",
                    "isPublic"
                  ),
                }
              )}
              role={"img"}
            />
          </IconButton>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.freeBox__muwKg,
              {
                [sty.freeBox__isPublic__muwKgYwyIq]: hasVariant(
                  variants,
                  "isPublic",
                  "isPublic"
                ),
              }
            )}
          >
            {(hasVariant(variants, "isPublic", "isPublic") ? true : false) ? (
              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox___4CYes,
                  {
                    [sty.freeBox__isPublic___4CYesYwyIq]: hasVariant(
                      variants,
                      "isPublic",
                      "isPublic"
                    ),
                  }
                )}
              />
            ) : null}
          </p.Stack>

          {false ? (
            <Dropdown
              className={classNames("__wab_instance", sty.dropdown__yc39)}
              rename2={"Edit Timeline"}
            />
          ) : null}
        </p.Stack>
      ) : null}
      {(hasVariant(variants, "isPublic", "isPublic") ? true : false) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"itemContainer22"}
          data-plasmic-override={overrides.itemContainer22}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.itemContainer22,
            {
              [sty.itemContainer22__isPublic]: hasVariant(
                variants,
                "isPublic",
                "isPublic"
              ),
            }
          )}
        >
          {false ? (
            <div
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox___8BmYf
              )}
            >
              {false ? (
                <svg
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.svg__vtleO
                  )}
                  role={"img"}
                />
              ) : null}
            </div>
          ) : null}

          <IconButton
            data-plasmic-name={"icon2"}
            data-plasmic-override={overrides.icon2}
            className={classNames("__wab_instance", sty.icon2, {
              [sty.icon2__isPublic]: hasVariant(
                variants,
                "isPublic",
                "isPublic"
              ),
            })}
          >
            <p.PlasmicIcon
              PlasmicIconType={
                hasVariant(variants, "isPublic", "isPublic")
                  ? LockIconsvgIcon
                  : IconHashIcon
              }
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.svg__lNyW,
                {
                  [sty.svg__isPublic__lNyWYwyIq]: hasVariant(
                    variants,
                    "isPublic",
                    "isPublic"
                  ),
                }
              )}
              role={"img"}
            />
          </IconButton>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.freeBox__e2Uwa,
              {
                [sty.freeBox__isPublic__e2UwaYwyIq]: hasVariant(
                  variants,
                  "isPublic",
                  "isPublic"
                ),
              }
            )}
          >
            {(hasVariant(variants, "isPublic", "isPublic") ? true : false) ? (
              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__v4P01,
                  {
                    [sty.freeBox__isPublic__v4P01YwyIq]: hasVariant(
                      variants,
                      "isPublic",
                      "isPublic"
                    ),
                  }
                )}
              />
            ) : null}
          </p.Stack>

          {false ? (
            <Dropdown
              className={classNames("__wab_instance", sty.dropdown__xCvLh)}
              rename2={"Edit Timeline"}
            />
          ) : null}
        </p.Stack>
      ) : null}
      {(hasVariant(variants, "isPublic", "isPublic") ? true : false) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"itemContainer222"}
          data-plasmic-override={overrides.itemContainer222}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.itemContainer222,
            {
              [sty.itemContainer222__isPublic]: hasVariant(
                variants,
                "isPublic",
                "isPublic"
              ),
            }
          )}
        >
          {false ? (
            <div
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__rjyq
              )}
            >
              {false ? (
                <svg
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.svg__lo3H
                  )}
                  role={"img"}
                />
              ) : null}
            </div>
          ) : null}

          <IconButton
            data-plasmic-name={"icon22"}
            data-plasmic-override={overrides.icon22}
            className={classNames("__wab_instance", sty.icon22, {
              [sty.icon22__isPublic]: hasVariant(
                variants,
                "isPublic",
                "isPublic"
              ),
            })}
          >
            <p.PlasmicIcon
              PlasmicIconType={
                hasVariant(variants, "isPublic", "isPublic")
                  ? LockIconsvgIcon
                  : IconHashIcon
              }
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.svg__ssKf,
                {
                  [sty.svg__isPublic__ssKfYwyIq]: hasVariant(
                    variants,
                    "isPublic",
                    "isPublic"
                  ),
                }
              )}
              role={"img"}
            />
          </IconButton>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.freeBox__ulWg4,
              {
                [sty.freeBox__isPublic__ulWg4YwyIq]: hasVariant(
                  variants,
                  "isPublic",
                  "isPublic"
                ),
              }
            )}
          >
            {(hasVariant(variants, "isPublic", "isPublic") ? true : false) ? (
              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__my23,
                  {
                    [sty.freeBox__isPublic__my23YwyIq]: hasVariant(
                      variants,
                      "isPublic",
                      "isPublic"
                    ),
                  }
                )}
              />
            ) : null}
          </p.Stack>

          {false ? (
            <Dropdown
              className={classNames("__wab_instance", sty.dropdown__gPf5P)}
              rename2={"Edit Timeline"}
            />
          ) : null}
        </p.Stack>
      ) : null}
      {(
        hasVariant(variants, "isOwner", "isOwner")
          ? true
          : hasVariant(variants, "isCollapsed", "isCollapsed")
          ? true
          : false
      ) ? (
        <SidebarItem
          data-plasmic-name={"newTimeline"}
          data-plasmic-override={overrides.newTimeline}
          className={classNames("__wab_instance", sty.newTimeline, {
            [sty.newTimeline__isCollapsed]: hasVariant(
              variants,
              "isCollapsed",
              "isCollapsed"
            ),
            [sty.newTimeline__isOwner]: hasVariant(
              variants,
              "isOwner",
              "isOwner"
            ),
            [sty.newTimeline__isPublic]: hasVariant(
              variants,
              "isPublic",
              "isPublic"
            ),
          })}
          isVisible={
            hasVariant(variants, "isOwner", "isOwner") && triggers.hover_root
              ? ("isVisible" as const)
              : undefined
          }
          itemType={"createTimeline" as const}
          name={
            <div
              className={classNames(
                defaultcss.all,
                projectcss.all,
                defaultcss.__wab_text,
                sty.text__f9Ow1
              )}
            >
              {"New Timeline"}
            </div>
          }
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "venture",
    "itemContainer",
    "sidebarItem",
    "itemContainer2",
    "icon",
    "itemContainer22",
    "icon2",
    "itemContainer222",
    "icon22",
    "newTimeline",
  ],
  venture: ["venture"],
  itemContainer: ["itemContainer", "sidebarItem"],
  sidebarItem: ["sidebarItem"],
  itemContainer2: ["itemContainer2", "icon"],
  icon: ["icon"],
  itemContainer22: ["itemContainer22", "icon2"],
  icon2: ["icon2"],
  itemContainer222: ["itemContainer222", "icon22"],
  icon22: ["icon22"],
  newTimeline: ["newTimeline"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  venture: typeof SidebarItem;
  itemContainer: "div";
  sidebarItem: typeof SidebarItem;
  itemContainer2: "div";
  icon: typeof IconButton;
  itemContainer22: "div";
  icon2: typeof IconButton;
  itemContainer222: "div";
  icon22: typeof IconButton;
  newTimeline: typeof SidebarItem;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSidebarItemGroup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSidebarItemGroup__VariantsArgs;
    args?: PlasmicSidebarItemGroup__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSidebarItemGroup__Fetches;
  } & Omit<PlasmicSidebarItemGroup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSidebarItemGroup__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSidebarItemGroup__ArgProps,
      internalVariantPropNames: PlasmicSidebarItemGroup__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicSidebarItemGroup__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSidebarItemGroup";
  } else {
    func.displayName = `PlasmicSidebarItemGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicSidebarItemGroup = Object.assign(
  // Top-level PlasmicSidebarItemGroup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    venture: makeNodeComponent("venture"),
    itemContainer: makeNodeComponent("itemContainer"),
    sidebarItem: makeNodeComponent("sidebarItem"),
    itemContainer2: makeNodeComponent("itemContainer2"),
    icon: makeNodeComponent("icon"),
    itemContainer22: makeNodeComponent("itemContainer22"),
    icon2: makeNodeComponent("icon2"),
    itemContainer222: makeNodeComponent("itemContainer222"),
    icon22: makeNodeComponent("icon22"),
    newTimeline: makeNodeComponent("newTimeline"),

    // Metadata about props expected for PlasmicSidebarItemGroup
    internalVariantProps: PlasmicSidebarItemGroup__VariantProps,
    internalArgProps: PlasmicSidebarItemGroup__ArgProps,
  }
);

export default PlasmicSidebarItemGroup;
/* prettier-ignore-end */
