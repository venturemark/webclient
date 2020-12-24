// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: Ey_MwfntCV
import * as React from "react";

import {
  hasVariant,
  classNames,
  Flex,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  PlasmicIcon,
  PlasmicLink,
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
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import IconButton from "../../iconbutton/index"; // plasmic-import: odPjbfT2kyJgB_S/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicActionsColumn.module.css"; // plasmic-import: Ey_MwfntCV/css

import IconSendIcon from "./icons/PlasmicIcon__IconSend"; // plasmic-import: oiAgf-ezpQ/icon

export type PlasmicActionsColumn__VariantMembers = {
  content: "hasContent";
  number: "hasNumber";
};

export type PlasmicActionsColumn__VariantsArgs = {
  content?: MultiChoiceArg<"hasContent">;
  number?: SingleChoiceArg<"hasNumber">;
};

type VariantPropType = keyof PlasmicActionsColumn__VariantsArgs;
export const PlasmicActionsColumn__VariantProps = new Array<VariantPropType>(
  "content",
  "number"
);

export type PlasmicActionsColumn__ArgsType = {
  numberValue?: React.ReactNode;
};

type ArgPropType = keyof PlasmicActionsColumn__ArgsType;
export const PlasmicActionsColumn__ArgProps = new Array<ArgPropType>(
  "numberValue"
);

export type PlasmicActionsColumn__OverridesType = {
  updateActionContainer?: Flex<"div">;
  sendButton?: Flex<typeof IconButton>;
  startIcon?: Flex<"svg">;
  box?: Flex<"div">;
};

export interface DefaultActionsColumnProps {
  numberValue?: React.ReactNode;
  content?: MultiChoiceArg<"hasContent">;
  number?: SingleChoiceArg<"hasNumber">;
  className?: string;
}

function PlasmicActionsColumn__RenderFunc(props: {
  variants: PlasmicActionsColumn__VariantsArgs;
  args: PlasmicActionsColumn__ArgsType;
  overrides: PlasmicActionsColumn__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <Stack
      as={"div"}
      data-plasmic-name={"updateActionContainer"}
      data-plasmic-override={overrides.updateActionContainer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        sty.updateActionContainer,
        projectcss.root_reset,
        defaultcss.all,
        {
          [sty.updateActionContainer__content_hasContent]: hasVariant(
            variants,
            "content",
            "hasContent"
          ),

          [sty.updateActionContainer__content_hasContent_number_hasNumber]:
            hasVariant(variants, "content", "hasContent") &&
            hasVariant(variants, "number", "hasNumber"),
          [sty.updateActionContainer__number_hasNumber]: hasVariant(
            variants,
            "number",
            "hasNumber"
          ),
        }
      )}
    >
      {(hasVariant(variants, "content", "hasContent") ? true : false) ? (
        <IconButton
          data-plasmic-name={"sendButton"}
          data-plasmic-override={overrides.sendButton}
          className={classNames(sty.sendButton, "__wab_instance", {
            [sty.sendButton__content_hasContent]: hasVariant(
              variants,
              "content",
              "hasContent"
            ),

            [sty.sendButton__content_hasContent_number_hasNumber]:
              hasVariant(variants, "content", "hasContent") &&
              hasVariant(variants, "number", "hasNumber"),
          })}
          startIcon={
            <IconSendIcon
              data-plasmic-name={"startIcon"}
              data-plasmic-override={overrides.startIcon}
              className={classNames(sty.startIcon, defaultcss.all)}
              role={"img"}
            />
          }
          withIcons={["start"]}
        />
      ) : null}
      {(hasVariant(variants, "number", "hasNumber") ? true : false) ? (
        <div
          data-plasmic-name={"box"}
          data-plasmic-override={overrides.box}
          className={classNames(sty.box, defaultcss.all, {
            [sty.box__content_hasContent]: hasVariant(
              variants,
              "content",
              "hasContent"
            ),

            [sty.box__number_hasNumber]: hasVariant(
              variants,
              "number",
              "hasNumber"
            ),

            [sty.box__number_hasNumber_content_hasContent]:
              hasVariant(variants, "number", "hasNumber") &&
              hasVariant(variants, "content", "hasContent"),
          })}
        >
          <PlasmicSlot
            defaultContents={"4555"}
            value={args.numberValue}
            className={classNames(sty.slotNumberValue, {
              [sty.slotNumberValue__content_hasContent_number_hasNumber]:
                hasVariant(variants, "content", "hasContent") &&
                hasVariant(variants, "number", "hasNumber"),
            })}
          />
        </div>
      ) : null}
    </Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  updateActionContainer: [
    "updateActionContainer",
    "sendButton",
    "startIcon",
    "box",
  ],

  sendButton: ["sendButton", "startIcon"],
  startIcon: ["startIcon"],
  box: ["box"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  updateActionContainer: "div";
  sendButton: typeof IconButton;
  startIcon: "svg";
  box: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActionsColumn__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicActionsColumn__VariantsArgs;
    args?: PlasmicActionsColumn__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicActionsColumn__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicActionsColumn__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicActionsColumn__ArgProps,
      internalVariantPropNames: PlasmicActionsColumn__VariantProps,
    });

    return PlasmicActionsColumn__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "updateActionContainer") {
    func.displayName = "PlasmicActionsColumn";
  } else {
    func.displayName = `PlasmicActionsColumn.${nodeName}`;
  }
  return func;
}

export const PlasmicActionsColumn = Object.assign(
  // Top-level PlasmicActionsColumn renders the root element
  makeNodeComponent("updateActionContainer"),
  {
    // Helper components rendering sub-elements
    sendButton: makeNodeComponent("sendButton"),
    startIcon: makeNodeComponent("startIcon"),
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicActionsColumn
    internalVariantProps: PlasmicActionsColumn__VariantProps,
    internalArgProps: PlasmicActionsColumn__ArgProps,
  }
);

export default PlasmicActionsColumn;
/* prettier-ignore-end */
