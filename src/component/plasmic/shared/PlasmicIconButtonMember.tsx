// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: ZhI9zuyxBT
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
import sty from "./PlasmicIconButtonMember.module.css"; // plasmic-import: ZhI9zuyxBT/css

import IconMemberIcon from "./icons/PlasmicIcon__IconMember"; // plasmic-import: Vx3fG4Fxc/icon

export type PlasmicIconButtonMember__VariantMembers = {
  isActive: "isActive";
};

export type PlasmicIconButtonMember__VariantsArgs = {
  isActive?: SingleBooleanChoiceArg<"isActive">;
};

type VariantPropType = keyof PlasmicIconButtonMember__VariantsArgs;
export const PlasmicIconButtonMember__VariantProps = new Array<VariantPropType>(
  "isActive"
);

export type PlasmicIconButtonMember__ArgsType = {
  memberCount?: React.ReactNode;
};

type ArgPropType = keyof PlasmicIconButtonMember__ArgsType;
export const PlasmicIconButtonMember__ArgProps = new Array<ArgPropType>(
  "memberCount"
);

export type PlasmicIconButtonMember__OverridesType = {
  root?: p.Flex<"div">;
  container?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  background?: p.Flex<"div">;
};

export interface DefaultIconButtonMemberProps {
  memberCount?: React.ReactNode;
  isActive?: SingleBooleanChoiceArg<"isActive">;
  className?: string;
}

function PlasmicIconButtonMember__RenderFunc(props: {
  variants: PlasmicIconButtonMember__VariantsArgs;
  args: PlasmicIconButtonMember__ArgsType;
  overrides: PlasmicIconButtonMember__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__isActive]: hasVariant(variants, "isActive", "isActive"),
      })}
    >
      <div
        data-plasmic-name={"container"}
        data-plasmic-override={overrides.container}
        className={classNames(defaultcss.all, sty.container, {
          [sty.container__isActive]: hasVariant(
            variants,
            "isActive",
            "isActive"
          ),
        })}
      >
        <div className={classNames(defaultcss.all, sty.box__op1Qu)}>
          <IconMemberIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, sty.svg)}
            role={"img"}
          />
        </div>

        <div
          data-plasmic-name={"background"}
          data-plasmic-override={overrides.background}
          className={classNames(defaultcss.all, sty.background)}
        >
          <div className={classNames(defaultcss.all, sty.box__ysBge)}>
            <p.PlasmicSlot
              defaultContents={"+"}
              value={args.memberCount}
              className={classNames(sty.slotMemberCount)}
            />
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "container", "svg", "background"],
  container: ["container", "svg", "background"],
  svg: ["svg"],
  background: ["background"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  container: "div";
  svg: "svg";
  background: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIconButtonMember__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicIconButtonMember__VariantsArgs;
  args?: PlasmicIconButtonMember__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicIconButtonMember__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicIconButtonMember__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicIconButtonMember__ArgProps,
      internalVariantPropNames: PlasmicIconButtonMember__VariantProps,
    });

    return PlasmicIconButtonMember__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIconButtonMember";
  } else {
    func.displayName = `PlasmicIconButtonMember.${nodeName}`;
  }
  return func;
}

export const PlasmicIconButtonMember = Object.assign(
  // Top-level PlasmicIconButtonMember renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    container: makeNodeComponent("container"),
    svg: makeNodeComponent("svg"),
    background: makeNodeComponent("background"),

    // Metadata about props expected for PlasmicIconButtonMember
    internalVariantProps: PlasmicIconButtonMember__VariantProps,
    internalArgProps: PlasmicIconButtonMember__ArgProps,
  }
);

export default PlasmicIconButtonMember;
/* prettier-ignore-end */
