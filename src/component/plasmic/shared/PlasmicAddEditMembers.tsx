// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: 3NTlJO7oDpw
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
import InputText from "../../inputtext/index"; // plasmic-import: v0nNSTRV39/component
import Button from "../../button/index"; // plasmic-import: JU1t0P9pFY/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicAddEditMembers.module.css"; // plasmic-import: 3NTlJO7oDpw/css

import IconLinkIcon from "./icons/PlasmicIcon__IconLink"; // plasmic-import: 0QuxgUi0r/icon
import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon
import IconRightIcon from "./icons/PlasmicIcon__IconRight"; // plasmic-import: v822ZhrBq/icon

export type PlasmicAddEditMembers__VariantMembers = {};

export type PlasmicAddEditMembers__VariantsArgs = {};
type VariantPropType = keyof PlasmicAddEditMembers__VariantsArgs;
export const PlasmicAddEditMembers__VariantProps = new Array<VariantPropType>();

export type PlasmicAddEditMembers__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicAddEditMembers__ArgsType;
export const PlasmicAddEditMembers__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicAddEditMembers__OverridesType = {
  root?: p.Flex<"div">;
  inputText?: p.Flex<typeof InputText>;
  button?: p.Flex<typeof Button>;
  text2?: p.Flex<"div">;
};

export interface DefaultAddEditMembersProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  className?: string;
}

function PlasmicAddEditMembers__RenderFunc(props: {
  variants: PlasmicAddEditMembers__VariantsArgs;
  args: PlasmicAddEditMembers__ArgsType;
  overrides: PlasmicAddEditMembers__OverridesType;
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
      <div className={classNames(defaultcss.all, sty.box__sLr04)}>
        <p.PlasmicSlot
          defaultContents={"Venture Members"}
          value={args.children}
          className={classNames(sty.slotChildren)}
        />

        <p.PlasmicSlot
          defaultContents={
            "Enter their email to invite and add them to this organization."
          }
          value={args.slot}
        />
      </div>

      <div className={classNames(defaultcss.all, sty.box__mpPUs)}>
        <InputText
          data-plasmic-name={"inputText"}
          data-plasmic-override={overrides.inputText}
          label={"Invite a member by email"}
        >
          {"Text Helper Description"}
        </InputText>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__cL4Gx)}
        >
          <IconLinkIcon
            className={classNames(defaultcss.all, sty.svg__opzJ7)}
            role={"img"}
          />

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box___77FNr
            )}
          >
            {"Copy Invite Link"}
          </div>
        </p.Stack>
      </div>

      <div className={classNames(defaultcss.all, sty.box__guHgU)}>
        <p.PlasmicSlot
          defaultContents={"Current Members"}
          value={args.slot2}
          className={classNames(sty.slotSlot2)}
        />
      </div>

      <div className={classNames(defaultcss.all, sty.box___1CNd9)}>
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          buttonStyle={"primaryPurple" as const}
          count={"1"}
          slot={
            <IconPlusIcon
              className={classNames(defaultcss.all, sty.svg__qlkG3)}
              role={"img"}
            />
          }
          text2={
            <div
              data-plasmic-name={"text2"}
              data-plasmic-override={overrides.text2}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text2
              )}
            >
              {"Create"}
            </div>
          }
        >
          <IconRightIcon
            className={classNames(defaultcss.all, sty.svg__zn1XH)}
            role={"img"}
          />
        </Button>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "inputText", "button", "text2"],
  inputText: ["inputText"],
  button: ["button", "text2"],
  text2: ["text2"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  inputText: typeof InputText;
  button: typeof Button;
  text2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAddEditMembers__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicAddEditMembers__VariantsArgs;
  args?: PlasmicAddEditMembers__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicAddEditMembers__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicAddEditMembers__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAddEditMembers__ArgProps,
      internalVariantPropNames: PlasmicAddEditMembers__VariantProps,
    });

    return PlasmicAddEditMembers__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAddEditMembers";
  } else {
    func.displayName = `PlasmicAddEditMembers.${nodeName}`;
  }
  return func;
}

export const PlasmicAddEditMembers = Object.assign(
  // Top-level PlasmicAddEditMembers renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    inputText: makeNodeComponent("inputText"),
    button: makeNodeComponent("button"),
    text2: makeNodeComponent("text2"),

    // Metadata about props expected for PlasmicAddEditMembers
    internalVariantProps: PlasmicAddEditMembers__VariantProps,
    internalArgProps: PlasmicAddEditMembers__ArgProps,
  }
);

export default PlasmicAddEditMembers;
/* prettier-ignore-end */
