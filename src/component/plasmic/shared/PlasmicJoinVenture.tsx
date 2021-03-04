// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: I7lcqILO9Y
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
import Button from "../../button/index"; // plasmic-import: JU1t0P9pFY/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicJoinVenture.module.css"; // plasmic-import: I7lcqILO9Y/css

import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon
import IconRightIcon from "./icons/PlasmicIcon__IconRight"; // plasmic-import: v822ZhrBq/icon

export type PlasmicJoinVenture__VariantMembers = {};

export type PlasmicJoinVenture__VariantsArgs = {};
type VariantPropType = keyof PlasmicJoinVenture__VariantsArgs;
export const PlasmicJoinVenture__VariantProps = new Array<VariantPropType>();

export type PlasmicJoinVenture__ArgsType = {};
type ArgPropType = keyof PlasmicJoinVenture__ArgsType;
export const PlasmicJoinVenture__ArgProps = new Array<ArgPropType>();

export type PlasmicJoinVenture__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  span?: p.Flex<"span">;
  p?: p.Flex<"p">;
  viewCreateVenture?: p.Flex<typeof Button>;
  text2?: p.Flex<"div">;
};

export interface DefaultJoinVentureProps {
  className?: string;
}

function PlasmicJoinVenture__RenderFunc(props: {
  variants: PlasmicJoinVenture__VariantsArgs;
  args: PlasmicJoinVenture__ArgsType;
  overrides: PlasmicJoinVenture__OverridesType;
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
          <div className={classNames(defaultcss.all, sty.box___2Z8)}>
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <div className={classNames(defaultcss.all, sty.box__lHnLh)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__sMn2A)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box__uwKvi)}
                >
                  <div className={classNames(defaultcss.all, sty.box__hRcye)}>
                    <h2
                      className={classNames(
                        defaultcss.h2,
                        defaultcss.__wab_text,
                        sty.h2___608W3
                      )}
                    >
                      {"Join "}
                    </h2>

                    <span
                      data-plasmic-name={"span"}
                      data-plasmic-override={overrides.span}
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.span
                      )}
                    >
                      {"BaronFig"}
                    </span>

                    <h2
                      className={classNames(
                        defaultcss.h2,
                        defaultcss.__wab_text,
                        sty.h2__vnLD
                      )}
                    >
                      {"on Venturemark"}
                    </h2>
                  </div>

                  <p
                    data-plasmic-name={"p"}
                    data-plasmic-override={overrides.p}
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.p
                    )}
                  >
                    {
                      "You have been invited to be part of this venture. Join this venture to stay up to date with updates."
                    }
                  </p>

                  <Button
                    data-plasmic-name={"viewCreateVenture"}
                    data-plasmic-override={overrides.viewCreateVenture}
                    buttonFeatures={
                      hasVariant(globalVariants, "screen", "mobile")
                        ? []
                        : ["nonFullWidth"]
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.viewCreateVenture
                    )}
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
                        {"Join Now"}
                      </div>
                    }
                  />
                </p.Stack>
              </p.Stack>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "span", "p", "viewCreateVenture", "text2"],
  header: ["header"],
  span: ["span"],
  p: ["p"],
  viewCreateVenture: ["viewCreateVenture", "text2"],
  text2: ["text2"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  span: "span";
  p: "p";
  viewCreateVenture: typeof Button;
  text2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicJoinVenture__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicJoinVenture__VariantsArgs;
  args?: PlasmicJoinVenture__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicJoinVenture__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicJoinVenture__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicJoinVenture__ArgProps,
      internalVariantPropNames: PlasmicJoinVenture__VariantProps,
    });

    return PlasmicJoinVenture__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicJoinVenture";
  } else {
    func.displayName = `PlasmicJoinVenture.${nodeName}`;
  }
  return func;
}

export const PlasmicJoinVenture = Object.assign(
  // Top-level PlasmicJoinVenture renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    span: makeNodeComponent("span"),
    p: makeNodeComponent("p"),
    viewCreateVenture: makeNodeComponent("viewCreateVenture"),
    text2: makeNodeComponent("text2"),

    // Metadata about props expected for PlasmicJoinVenture
    internalVariantProps: PlasmicJoinVenture__VariantProps,
    internalArgProps: PlasmicJoinVenture__ArgProps,
  }
);

export default PlasmicJoinVenture;
/* prettier-ignore-end */
