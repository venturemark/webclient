// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: FsY3j3NYte
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
import TextInput from "../../TextInput"; // plasmic-import: v0nNSTRV39/component
import Button from "../../Button"; // plasmic-import: JU1t0P9pFY/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicModal.module.css"; // plasmic-import: FsY3j3NYte/css

export type PlasmicModal__VariantMembers = {};

export type PlasmicModal__VariantsArgs = {};
type VariantPropType = keyof PlasmicModal__VariantsArgs;
export const PlasmicModal__VariantProps = new Array<VariantPropType>();

export type PlasmicModal__ArgsType = {
  organizationDescription?: React.ReactNode;
  organizationName?: React.ReactNode;
};

type ArgPropType = keyof PlasmicModal__ArgsType;
export const PlasmicModal__ArgProps = new Array<ArgPropType>(
  "organizationDescription",
  "organizationName"
);

export type PlasmicModal__OverridesType = {
  root?: p.Flex<"div">;
  group64?: p.Flex<"div">;
  rectangle587?: p.Flex<"div">;
  ellipse2?: p.Flex<"div">;
  welcomeForm?: p.Flex<"form">;
  selectUserContainer?: p.Flex<"div">;
  selectUserInput?: p.Flex<typeof TextInput>;
  label?: p.Flex<"label">;
  selectUserButton?: p.Flex<typeof Button>;
  ventureMark?: p.Flex<"div">;
};

export interface DefaultModalProps {
  organizationDescription?: React.ReactNode;
  organizationName?: React.ReactNode;
  className?: string;
}

function PlasmicModal__RenderFunc(props: {
  variants: PlasmicModal__VariantsArgs;
  args: PlasmicModal__ArgsType;
  overrides: PlasmicModal__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"group64"}
        data-plasmic-override={overrides.group64}
        className={classNames(defaultcss.all, sty.group64)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"rectangle587"}
          data-plasmic-override={overrides.rectangle587}
          hasGap={true}
          className={classNames(defaultcss.all, sty.rectangle587)}
        >
          <div
            data-plasmic-name={"ellipse2"}
            data-plasmic-override={overrides.ellipse2}
            className={classNames(defaultcss.all, sty.ellipse2)}
          />

          <div className={classNames(defaultcss.all, sty.box__budGd)}>
            <p.PlasmicSlot
              defaultContents={"First Round Capital"}
              value={args.organizationName}
              className={classNames(sty.slotOrganizationName)}
            />
          </div>
        </p.Stack>

        <p.Stack
          as={"form"}
          data-plasmic-name={"welcomeForm"}
          data-plasmic-override={overrides.welcomeForm}
          hasGap={true}
          className={classNames(defaultcss.all, sty.welcomeForm)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__u42Cd)}
          >
            <div
              data-plasmic-name={"selectUserContainer"}
              data-plasmic-override={overrides.selectUserContainer}
              className={classNames(defaultcss.all, sty.selectUserContainer)}
            >
              <TextInput
                data-plasmic-name={"selectUserInput"}
                data-plasmic-override={overrides.selectUserInput}
                label={
                  <label
                    data-plasmic-name={"label"}
                    data-plasmic-override={overrides.label}
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.label
                    )}
                  >
                    {"Search your organization"}
                  </label>
                }
              />
            </div>

            <Button
              data-plasmic-name={"selectUserButton"}
              data-plasmic-override={overrides.selectUserButton}
              className={classNames("__wab_instance", sty.selectUserButton)}
              text={"Enter"}
            />
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__koqyt)}
          >
            <div className={classNames(defaultcss.all, sty.box__oiIyK)}>
              <p.PlasmicSlot
                defaultContents={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec volutpat magna."
                }
                value={args.organizationDescription}
                className={classNames(sty.slotOrganizationDescription)}
              />
            </div>

            <div
              data-plasmic-name={"ventureMark"}
              data-plasmic-override={overrides.ventureMark}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.ventureMark
              )}
            >
              {"VENTUREMARK"}
            </div>
          </p.Stack>
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "group64",
    "rectangle587",
    "ellipse2",
    "welcomeForm",
    "selectUserContainer",
    "selectUserInput",
    "label",
    "selectUserButton",
    "ventureMark",
  ],
  group64: [
    "group64",
    "rectangle587",
    "ellipse2",
    "welcomeForm",
    "selectUserContainer",
    "selectUserInput",
    "label",
    "selectUserButton",
    "ventureMark",
  ],
  rectangle587: ["rectangle587", "ellipse2"],
  ellipse2: ["ellipse2"],
  welcomeForm: [
    "welcomeForm",
    "selectUserContainer",
    "selectUserInput",
    "label",
    "selectUserButton",
    "ventureMark",
  ],
  selectUserContainer: ["selectUserContainer", "selectUserInput", "label"],
  selectUserInput: ["selectUserInput", "label"],
  label: ["label"],
  selectUserButton: ["selectUserButton"],
  ventureMark: ["ventureMark"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  group64: "div";
  rectangle587: "div";
  ellipse2: "div";
  welcomeForm: "form";
  selectUserContainer: "div";
  selectUserInput: typeof TextInput;
  label: "label";
  selectUserButton: typeof Button;
  ventureMark: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicModal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicModal__VariantsArgs;
  args?: PlasmicModal__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicModal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicModal__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicModal__ArgProps,
      internalVariantPropNames: PlasmicModal__VariantProps,
    });

    return PlasmicModal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicModal";
  } else {
    func.displayName = `PlasmicModal.${nodeName}`;
  }
  return func;
}

export const PlasmicModal = Object.assign(
  // Top-level PlasmicModal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    group64: makeNodeComponent("group64"),
    rectangle587: makeNodeComponent("rectangle587"),
    ellipse2: makeNodeComponent("ellipse2"),
    welcomeForm: makeNodeComponent("welcomeForm"),
    selectUserContainer: makeNodeComponent("selectUserContainer"),
    selectUserInput: makeNodeComponent("selectUserInput"),
    label: makeNodeComponent("label"),
    selectUserButton: makeNodeComponent("selectUserButton"),
    ventureMark: makeNodeComponent("ventureMark"),

    // Metadata about props expected for PlasmicModal
    internalVariantProps: PlasmicModal__VariantProps,
    internalArgProps: PlasmicModal__ArgProps,
  }
);

export default PlasmicModal;
/* prettier-ignore-end */
