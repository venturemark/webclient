// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: XqXAODV8pg
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
import Header from "../../header/index"; // plasmic-import: MkyvVOg5Ik/component
import InputText from "../../inputtext/index"; // plasmic-import: v0nNSTRV39/component
import Button from "../../button/index"; // plasmic-import: JU1t0P9pFY/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicProfile.module.css"; // plasmic-import: XqXAODV8pg/css

import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon
import IconRightIcon from "./icons/PlasmicIcon__IconRight"; // plasmic-import: v822ZhrBq/icon

export type PlasmicProfile__VariantMembers = {};

export type PlasmicProfile__VariantsArgs = {};
type VariantPropType = keyof PlasmicProfile__VariantsArgs;
export const PlasmicProfile__VariantProps = new Array<VariantPropType>();

export type PlasmicProfile__ArgsType = {};
type ArgPropType = keyof PlasmicProfile__ArgsType;
export const PlasmicProfile__ArgProps = new Array<ArgPropType>();

export type PlasmicProfile__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  form?: p.Flex<"form">;
  nameField?: p.Flex<typeof InputText>;
  jobField?: p.Flex<typeof InputText>;
  completeProfile?: p.Flex<typeof Button>;
};

export interface DefaultProfileProps {
  className?: string;
}

function PlasmicProfile__RenderFunc(props: {
  variants: PlasmicProfile__VariantsArgs;
  args: PlasmicProfile__ArgsType;
  overrides: PlasmicProfile__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  });

  return (
    <React.Fragment>
      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div className={classNames(defaultcss.all, sty.box__ebv0I)}>
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <div className={classNames(defaultcss.all, sty.box__pMmw)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__ibtro)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box__qLx8X)}
                >
                  <div className={classNames(defaultcss.all, sty.box__x6LVc)}>
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__qDcm3
                      )}
                    >
                      {"Let’s finish"}
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__hUGd0
                      )}
                    >
                      {"creating your account."}
                    </div>
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__xRb1Y
                    )}
                  >
                    {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                  </div>
                </p.Stack>

                <form
                  data-plasmic-name={"form"}
                  data-plasmic-override={overrides.form}
                  className={classNames(defaultcss.all, sty.form)}
                >
                  <InputText
                    data-plasmic-name={"nameField"}
                    data-plasmic-override={overrides.nameField}
                    className={classNames("__wab_instance", sty.nameField)}
                    label={"Full Name"}
                  >
                    {"This will be used as your display name"}
                  </InputText>

                  <InputText
                    data-plasmic-name={"jobField"}
                    data-plasmic-override={overrides.jobField}
                    className={classNames("__wab_instance", sty.jobField)}
                    hasTextHelper={"hasTextHelper" as const}
                    label={"What I Do"}
                  >
                    {"Let people know what you do"}
                  </InputText>

                  <Button
                    data-plasmic-name={"completeProfile"}
                    data-plasmic-override={overrides.completeProfile}
                    buttonStyle={"primaryPurple" as const}
                    className={classNames(
                      "__wab_instance",
                      sty.completeProfile
                    )}
                    count={"1"}
                    slot={
                      <IconPlusIcon
                        className={classNames(defaultcss.all, sty.svg__l7TnU)}
                        role={"img"}
                      />
                    }
                    text2={"Complete"}
                  >
                    <IconRightIcon
                      className={classNames(defaultcss.all, sty.svg__hjzAx)}
                      role={"img"}
                    />
                  </Button>
                </form>
              </p.Stack>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "form", "nameField", "jobField", "completeProfile"],
  header: ["header"],
  form: ["form", "nameField", "jobField", "completeProfile"],
  nameField: ["nameField"],
  jobField: ["jobField"],
  completeProfile: ["completeProfile"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  form: "form";
  nameField: typeof InputText;
  jobField: typeof InputText;
  completeProfile: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProfile__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicProfile__VariantsArgs;
  args?: PlasmicProfile__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicProfile__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicProfile__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicProfile__ArgProps,
      internalVariantPropNames: PlasmicProfile__VariantProps,
    });

    return PlasmicProfile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProfile";
  } else {
    func.displayName = `PlasmicProfile.${nodeName}`;
  }
  return func;
}

export const PlasmicProfile = Object.assign(
  // Top-level PlasmicProfile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    form: makeNodeComponent("form"),
    nameField: makeNodeComponent("nameField"),
    jobField: makeNodeComponent("jobField"),
    completeProfile: makeNodeComponent("completeProfile"),

    // Metadata about props expected for PlasmicProfile
    internalVariantProps: PlasmicProfile__VariantProps,
    internalArgProps: PlasmicProfile__ArgProps,
  }
);

export default PlasmicProfile;
/* prettier-ignore-end */
