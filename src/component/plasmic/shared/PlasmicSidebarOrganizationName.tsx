// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: pJJQRCyJQM
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

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicSidebarOrganizationName.module.css"; // plasmic-import: pJJQRCyJQM/css

import IconAddIcon from "./icons/PlasmicIcon__IconAdd"; // plasmic-import: gg_6iBfcsu/icon

export type PlasmicSidebarOrganizationName__VariantMembers = {};
export type PlasmicSidebarOrganizationName__VariantsArgs = {};
type VariantPropType = keyof PlasmicSidebarOrganizationName__VariantsArgs;
export const PlasmicSidebarOrganizationName__VariantProps = new Array<VariantPropType>();

export type PlasmicSidebarOrganizationName__ArgsType = {
  organizationName?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSidebarOrganizationName__ArgsType;
export const PlasmicSidebarOrganizationName__ArgProps = new Array<ArgPropType>(
  "organizationName"
);

export type PlasmicSidebarOrganizationName__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"div">;
  showAddTimeline?: p.Flex<"svg">;
};

export interface DefaultSidebarOrganizationNameProps {
  organizationName?: React.ReactNode;
  className?: string;
}

function PlasmicSidebarOrganizationName__RenderFunc(props: {
  variants: PlasmicSidebarOrganizationName__VariantsArgs;
  args: PlasmicSidebarOrganizationName__ArgsType;
  overrides: PlasmicSidebarOrganizationName__OverridesType;
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
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, sty.box)}
      >
        <p.PlasmicSlot
          defaultContents={"Baron Fig"}
          value={args.organizationName}
          className={classNames(sty.slotOrganizationName)}
        />
      </div>

      {(triggers.hover_root ? true : false) ? (
        <IconAddIcon
          data-plasmic-name={"showAddTimeline"}
          data-plasmic-override={overrides.showAddTimeline}
          className={classNames(defaultcss.all, sty.showAddTimeline)}
          role={"img"}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "box", "showAddTimeline"],
  box: ["box"],
  showAddTimeline: ["showAddTimeline"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  box: "div";
  showAddTimeline: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSidebarOrganizationName__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSidebarOrganizationName__VariantsArgs;
    args?: PlasmicSidebarOrganizationName__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<
    // Specify variants directly as props
    PlasmicSidebarOrganizationName__VariantsArgs,
    ReservedPropsType
  > &
    // Specify args directly as props
    Omit<PlasmicSidebarOrganizationName__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSidebarOrganizationName__ArgProps,
      internalVariantPropNames: PlasmicSidebarOrganizationName__VariantProps,
    });

    return PlasmicSidebarOrganizationName__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSidebarOrganizationName";
  } else {
    func.displayName = `PlasmicSidebarOrganizationName.${nodeName}`;
  }
  return func;
}

export const PlasmicSidebarOrganizationName = Object.assign(
  // Top-level PlasmicSidebarOrganizationName renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),
    showAddTimeline: makeNodeComponent("showAddTimeline"),

    // Metadata about props expected for PlasmicSidebarOrganizationName
    internalVariantProps: PlasmicSidebarOrganizationName__VariantProps,
    internalArgProps: PlasmicSidebarOrganizationName__ArgProps,
  }
);

export default PlasmicSidebarOrganizationName;
/* prettier-ignore-end */
