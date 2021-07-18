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
import ProfileForm from "../../profileform/index"; // plasmic-import: _XzWccJtXuE/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicProfile.module.css"; // plasmic-import: XqXAODV8pg/css

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
  profileForm?: p.Flex<typeof ProfileForm>;
};

export interface DefaultProfileProps {
  className?: string;
}

function PlasmicProfile__RenderFunc(props: {
  variants: PlasmicProfile__VariantsArgs;
  args: PlasmicProfile__ArgsType;
  overrides: PlasmicProfile__OverridesType;
  dataFetches?: PlasmicProfile__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  });

  return (
    <React.Fragment>
      {}
      {}

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
          <div className={classNames(defaultcss.all, sty.freeBox__ebv0I)}>
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <div className={classNames(defaultcss.all, sty.freeBox__pMmw)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__ibtro)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__qLx8X)}
                >
                  <div
                    className={classNames(defaultcss.all, sty.freeBox__x6LVc)}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox__qDcm3
                      )}
                    >
                      {"Let’s finish"}
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox__hUGd0
                      )}
                    >
                      {"creating your account."}
                    </div>
                  </div>

                  {false ? (
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox__xRb1Y
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      }
                    </div>
                  ) : null}
                </p.Stack>

                <ProfileForm
                  data-plasmic-name={"profileForm"}
                  data-plasmic-override={overrides.profileForm}
                  className={classNames("__wab_instance", sty.profileForm)}
                />
              </p.Stack>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "profileForm"],
  header: ["header"],
  profileForm: ["profileForm"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  profileForm: typeof ProfileForm;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProfile__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProfile__VariantsArgs;
    args?: PlasmicProfile__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicProfile__Fetches;
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

    const { dataFetches } = props;

    return PlasmicProfile__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
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
    profileForm: makeNodeComponent("profileForm"),

    // Metadata about props expected for PlasmicProfile
    internalVariantProps: PlasmicProfile__VariantProps,
    internalArgProps: PlasmicProfile__ArgProps,
  }
);

export default PlasmicProfile;
/* prettier-ignore-end */
