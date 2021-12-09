// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: X8H70YUTyF
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
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicErrorMessage.module.css"; // plasmic-import: X8H70YUTyF/css

import IconCautionIcon from "./icons/PlasmicIcon__IconCaution"; // plasmic-import: 9xu35mhQf/icon

export type PlasmicErrorMessage__VariantMembers = {};

export type PlasmicErrorMessage__VariantsArgs = {};
type VariantPropType = keyof PlasmicErrorMessage__VariantsArgs;
export const PlasmicErrorMessage__VariantProps = new Array<VariantPropType>();

export type PlasmicErrorMessage__ArgsType = {
  message?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicErrorMessage__ArgsType;
export const PlasmicErrorMessage__ArgProps = new Array<ArgPropType>(
  "message",
  "children"
);

export type PlasmicErrorMessage__OverridesType = {
  root?: p.Flex<"div">;
  container?: p.Flex<"div">;
};

export interface DefaultErrorMessageProps {
  message?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

function PlasmicErrorMessage__RenderFunc(props: {
  variants: PlasmicErrorMessage__VariantsArgs;
  args: PlasmicErrorMessage__ArgsType;
  overrides: PlasmicErrorMessage__OverridesType;
  dataFetches?: PlasmicErrorMessage__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

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
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"container"}
        data-plasmic-override={overrides.container}
        hasGap={true}
        className={classNames(defaultcss.all, projectcss.all, sty.container)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <IconCautionIcon
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.svg__eqR5W
              )}
              role={"img"}
            />
          ),

          value: args.children,
          className: classNames(sty.slotTargetChildren),
        })}

        {p.renderPlasmicSlot({
          defaultContents: "Error message",
          value: args.message,
          className: classNames(sty.slotTargetMessage),
        })}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "container"],
  container: ["container"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  container: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicErrorMessage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicErrorMessage__VariantsArgs;
    args?: PlasmicErrorMessage__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicErrorMessage__Fetches;
  } & Omit<PlasmicErrorMessage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicErrorMessage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicErrorMessage__ArgProps,
      internalVariantPropNames: PlasmicErrorMessage__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicErrorMessage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicErrorMessage";
  } else {
    func.displayName = `PlasmicErrorMessage.${nodeName}`;
  }
  return func;
}

export const PlasmicErrorMessage = Object.assign(
  // Top-level PlasmicErrorMessage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    container: makeNodeComponent("container"),

    // Metadata about props expected for PlasmicErrorMessage
    internalVariantProps: PlasmicErrorMessage__VariantProps,
    internalArgProps: PlasmicErrorMessage__ArgProps,
  }
);

export default PlasmicErrorMessage;
/* prettier-ignore-end */
