// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: Q9Z-qP9n2Q
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
import InputToggleButton from "../../inputtogglebutton/index"; // plasmic-import: 0x0YjULkfHN/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicRadioGroup.module.css"; // plasmic-import: Q9Z-qP9n2Q/css

export type PlasmicRadioGroup__VariantMembers = {
  hasLabel: "hasLabel";
  isHorizontal: "isHorizontal";
};

export type PlasmicRadioGroup__VariantsArgs = {
  hasLabel?: SingleBooleanChoiceArg<"hasLabel">;
  isHorizontal?: SingleBooleanChoiceArg<"isHorizontal">;
};

type VariantPropType = keyof PlasmicRadioGroup__VariantsArgs;
export const PlasmicRadioGroup__VariantProps = new Array<VariantPropType>(
  "hasLabel",
  "isHorizontal"
);

export type PlasmicRadioGroup__ArgsType = {
  label3?: React.ReactNode;
};

type ArgPropType = keyof PlasmicRadioGroup__ArgsType;
export const PlasmicRadioGroup__ArgProps = new Array<ArgPropType>("label3");

export type PlasmicRadioGroup__OverridesType = {
  root?: p.Flex<"div">;
  labelContainer?: p.Flex<"label">;
  _private?: p.Flex<typeof InputToggleButton>;
  members?: p.Flex<typeof InputToggleButton>;
  _public?: p.Flex<typeof InputToggleButton>;
};

export interface DefaultRadioGroupProps {
  label3?: React.ReactNode;
  hasLabel?: SingleBooleanChoiceArg<"hasLabel">;
  isHorizontal?: SingleBooleanChoiceArg<"isHorizontal">;
  className?: string;
}

function PlasmicRadioGroup__RenderFunc(props: {
  variants: PlasmicRadioGroup__VariantsArgs;
  args: PlasmicRadioGroup__ArgsType;
  overrides: PlasmicRadioGroup__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {(hasVariant(variants, "hasLabel", "hasLabel") ? true : false) ? (
        <label
          data-plasmic-name={"labelContainer"}
          data-plasmic-override={overrides.labelContainer}
          className={classNames(defaultcss.all, sty.labelContainer, {
            [sty.labelContainer__hasLabel]: hasVariant(
              variants,
              "hasLabel",
              "hasLabel"
            ),
          })}
        >
          <p.PlasmicSlot
            defaultContents={"Visibility"}
            value={args.label3}
            className={classNames(sty.slotLabel3)}
          />
        </label>
      ) : null}

      <div className={classNames(defaultcss.all, sty.box__zgeS0)}>
        <InputToggleButton
          data-plasmic-name={"_private"}
          data-plasmic-override={overrides._private}
          label3={"Private"}
          position={"top" as const}
          selected={"selected" as const}
        >
          {"Only admins and members invited by you can see this timeline. "}
        </InputToggleButton>

        <InputToggleButton
          data-plasmic-name={"members"}
          data-plasmic-override={overrides.members}
          className={classNames("__wab_instance", sty.members)}
          label3={"Members"}
          position={"middle" as const}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box___2IwyL
            )}
          >
            {
              "Members from this venture will automatically be invited to this timeline."
            }
          </div>
        </InputToggleButton>

        <InputToggleButton
          data-plasmic-name={"_public"}
          data-plasmic-override={overrides._public}
          className={classNames("__wab_instance", sty._public)}
          label3={"Public"}
          position={"bottom" as const}
        >
          {"Anyone with the venture domain can see this timeline."}
        </InputToggleButton>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "labelContainer", "_private", "members", "_public"],
  labelContainer: ["labelContainer"],
  _private: ["_private"],
  members: ["members"],
  _public: ["_public"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  labelContainer: "label";
  _private: typeof InputToggleButton;
  members: typeof InputToggleButton;
  _public: typeof InputToggleButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRadioGroup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicRadioGroup__VariantsArgs;
  args?: PlasmicRadioGroup__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicRadioGroup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicRadioGroup__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicRadioGroup__ArgProps,
      internalVariantPropNames: PlasmicRadioGroup__VariantProps,
    });

    return PlasmicRadioGroup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRadioGroup";
  } else {
    func.displayName = `PlasmicRadioGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicRadioGroup = Object.assign(
  // Top-level PlasmicRadioGroup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    labelContainer: makeNodeComponent("labelContainer"),
    _private: makeNodeComponent("_private"),
    members: makeNodeComponent("members"),
    _public: makeNodeComponent("_public"),

    // Metadata about props expected for PlasmicRadioGroup
    internalVariantProps: PlasmicRadioGroup__VariantProps,
    internalArgProps: PlasmicRadioGroup__ArgProps,
  }
);

export default PlasmicRadioGroup;
/* prettier-ignore-end */
