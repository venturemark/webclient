// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: jggPyChG2Zg
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
import Button from "../../button/index"; // plasmic-import: JU1t0P9pFY/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicEmptyState.module.css"; // plasmic-import: jggPyChG2Zg/css

import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon
import IconRightIcon from "./icons/PlasmicIcon__IconRight"; // plasmic-import: v822ZhrBq/icon

export type PlasmicEmptyState__VariantMembers = {
  variantType: "isVenture" | "isTimeline" | "isEmpty";
  isActive: "feed" | "settings" | "members" | "isNew";
};

export type PlasmicEmptyState__VariantsArgs = {
  variantType?: SingleChoiceArg<"isVenture" | "isTimeline" | "isEmpty">;
  isActive?: SingleChoiceArg<"feed" | "settings" | "members" | "isNew">;
};

type VariantPropType = keyof PlasmicEmptyState__VariantsArgs;
export const PlasmicEmptyState__VariantProps = new Array<VariantPropType>(
  "variantType",
  "isActive"
);

export type PlasmicEmptyState__ArgsType = {};
type ArgPropType = keyof PlasmicEmptyState__ArgsType;
export const PlasmicEmptyState__ArgProps = new Array<ArgPropType>();

export type PlasmicEmptyState__OverridesType = {
  root?: p.Flex<"div">;
  viewCreateVenture?: p.Flex<typeof Button>;
  text2?: p.Flex<"div">;
  viewCreateTimeline?: p.Flex<typeof Button>;
  text23?: p.Flex<"div">;
  viewJoinVenture?: p.Flex<typeof Button>;
  text22?: p.Flex<"div">;
};

export interface DefaultEmptyStateProps {
  variantType?: SingleChoiceArg<"isVenture" | "isTimeline" | "isEmpty">;
  isActive?: SingleChoiceArg<"feed" | "settings" | "members" | "isNew">;
  className?: string;
}

function PlasmicEmptyState__RenderFunc(props: {
  variants: PlasmicEmptyState__VariantsArgs;
  args: PlasmicEmptyState__ArgsType;
  overrides: PlasmicEmptyState__OverridesType;
  dataFetches?: PlasmicEmptyState__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  });

  return (
    (
      hasVariant(variants, "isActive", "members") &&
      hasVariant(variants, "variantType", "isEmpty")
        ? false
        : hasVariant(variants, "isActive", "isNew") &&
          hasVariant(variants, "variantType", "isVenture")
        ? false
        : hasVariant(variants, "variantType", "isEmpty") &&
          hasVariant(variants, "isActive", "settings")
        ? false
        : hasVariant(variants, "variantType", "isEmpty")
        ? true
        : true
    ) ? (
      <p.Stack
        as={"div"}
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        hasGap={
          hasVariant(variants, "variantType", "isEmpty") ||
          (hasVariant(variants, "variantType", "isEmpty") &&
            hasVariant(variants, "isActive", "settings")) ||
          (hasVariant(variants, "isActive", "members") &&
            hasVariant(variants, "variantType", "isEmpty"))
            ? true
            : false
        }
        className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
          [sty.root__isActive_isNew_variantType_isVenture]:
            hasVariant(variants, "isActive", "isNew") &&
            hasVariant(variants, "variantType", "isVenture"),
          [sty.root__isActive_members_variantType_isEmpty]:
            hasVariant(variants, "isActive", "members") &&
            hasVariant(variants, "variantType", "isEmpty"),
          [sty.root__variantType_isEmpty]: hasVariant(
            variants,
            "variantType",
            "isEmpty"
          ),
          [sty.root__variantType_isEmpty_isActive_settings]:
            hasVariant(variants, "variantType", "isEmpty") &&
            hasVariant(variants, "isActive", "settings"),
        })}
      >
        {(
          hasVariant(variants, "isActive", "isNew") &&
          hasVariant(variants, "variantType", "isEmpty")
            ? false
            : hasVariant(variants, "variantType", "isEmpty")
            ? true
            : false
        ) ? (
          <p.Stack
            as={"div"}
            hasGap={
              hasVariant(variants, "variantType", "isEmpty") ||
              (hasVariant(variants, "isActive", "isNew") &&
                hasVariant(variants, "variantType", "isEmpty"))
                ? true
                : false
            }
            className={classNames(defaultcss.all, sty.box___2ILiu, {
              [sty.box__isActive_isNew_variantType_isEmpty___2ILiuTn7O1Hwthy]:
                hasVariant(variants, "isActive", "isNew") &&
                hasVariant(variants, "variantType", "isEmpty"),
              [sty.box__variantType_isEmpty___2ILiuHwthy]: hasVariant(
                variants,
                "variantType",
                "isEmpty"
              ),
            })}
          >
            {(
              hasVariant(variants, "isActive", "isNew") &&
              hasVariant(variants, "variantType", "isEmpty")
                ? false
                : hasVariant(variants, "variantType", "isEmpty")
                ? true
                : false
            ) ? (
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__cvbvU,
                  {
                    [sty.box__isActive_isNew_variantType_isEmpty__cvbvUtn7O1Hwthy]:
                      hasVariant(variants, "isActive", "isNew") &&
                      hasVariant(variants, "variantType", "isEmpty"),
                    [sty.box__variantType_isEmpty__cvbvUhwthy]: hasVariant(
                      variants,
                      "variantType",
                      "isEmpty"
                    ),
                  }
                )}
              >
                {hasVariant(variants, "variantType", "isEmpty")
                  ? "Begin with a Venture"
                  : "Enter some text"}
              </div>
            ) : null}
            {(
              hasVariant(variants, "variantType", "isEmpty") ? false : false
            ) ? (
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__qxWsf,
                  {
                    [sty.box__variantType_isEmpty__qxWsfHwthy]: hasVariant(
                      variants,
                      "variantType",
                      "isEmpty"
                    ),
                  }
                )}
              >
                {hasVariant(variants, "variantType", "isEmpty")
                  ? "Venture"
                  : "Enter some text"}
              </div>
            ) : null}
            {(
              hasVariant(variants, "variantType", "isEmpty") ? false : false
            ) ? (
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__eBmr,
                  {
                    [sty.box__variantType_isEmpty__eBmrHwthy]: hasVariant(
                      variants,
                      "variantType",
                      "isEmpty"
                    ),
                  }
                )}
              >
                {hasVariant(variants, "variantType", "isEmpty")
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac nisl nec elit sagittis aliquet ac imperdiet justo. Pellentesque blandit imperdiet elit vel convallis. "
                  : "A venture is a "}
              </div>
            ) : null}
          </p.Stack>
        ) : null}
        {(hasVariant(variants, "variantType", "isEmpty") ? true : false) ? (
          <p.Stack
            as={"div"}
            hasGap={
              hasVariant(variants, "variantType", "isEmpty") ||
              (hasVariant(variants, "isActive", "isNew") &&
                hasVariant(variants, "variantType", "isEmpty"))
                ? true
                : false
            }
            className={classNames(defaultcss.all, sty.box__xLwhc, {
              [sty.box__isActive_isNew_variantType_isEmpty__xLwhcTn7O1Hwthy]:
                hasVariant(variants, "isActive", "isNew") &&
                hasVariant(variants, "variantType", "isEmpty"),
              [sty.box__variantType_isEmpty__xLwhcHwthy]: hasVariant(
                variants,
                "variantType",
                "isEmpty"
              ),
            })}
          >
            {(hasVariant(variants, "variantType", "isEmpty") ? true : false) ? (
              <p.Stack
                as={"div"}
                hasGap={
                  hasVariant(variants, "variantType", "isEmpty") &&
                  hasVariant(globalVariants, "screen", "mobile")
                    ? true
                    : false
                }
                className={classNames(defaultcss.all, sty.box__rHe6S, {
                  [sty.box__isActive_isNew_variantType_isEmpty__rHe6STn7O1Hwthy]:
                    hasVariant(variants, "isActive", "isNew") &&
                    hasVariant(variants, "variantType", "isEmpty"),
                  [sty.box__variantType_isEmpty__rHe6SHwthy]: hasVariant(
                    variants,
                    "variantType",
                    "isEmpty"
                  ),
                })}
              >
                {(
                  hasVariant(variants, "variantType", "isEmpty") ? true : false
                ) ? (
                  <p.Stack
                    as={"div"}
                    hasGap={
                      hasVariant(variants, "variantType", "isEmpty")
                        ? true
                        : false
                    }
                    className={classNames(defaultcss.all, sty.box__qYFj1, {
                      [sty.box__variantType_isEmpty__qYFj1Hwthy]: hasVariant(
                        variants,
                        "variantType",
                        "isEmpty"
                      ),
                    })}
                  >
                    {(
                      hasVariant(variants, "variantType", "isEmpty")
                        ? true
                        : false
                    ) ? (
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__nMlNv,
                          {
                            [sty.box__isActive_isNew_variantType_isEmpty__nMlNvTn7O1Hwthy]:
                              hasVariant(variants, "isActive", "isNew") &&
                              hasVariant(variants, "variantType", "isEmpty"),
                            [sty.box__variantType_isEmpty__nMlNvHwthy]:
                              hasVariant(variants, "variantType", "isEmpty"),
                          }
                        )}
                      >
                        {hasVariant(variants, "isActive", "isNew") &&
                        hasVariant(variants, "variantType", "isEmpty")
                          ? "Start by adding a new timeline"
                          : hasVariant(variants, "variantType", "isEmpty")
                          ? "Create a new venture"
                          : "Start a new venture"}
                      </div>
                    ) : null}
                    {(
                      hasVariant(variants, "variantType", "isEmpty")
                        ? true
                        : false
                    ) ? (
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__tVef,
                          {
                            [sty.box__isActive_isNew_variantType_isEmpty__tVefTn7O1Hwthy]:
                              hasVariant(variants, "isActive", "isNew") &&
                              hasVariant(variants, "variantType", "isEmpty"),
                            [sty.box__variantType_isEmpty__tVefHwthy]:
                              hasVariant(variants, "variantType", "isEmpty"),
                          }
                        )}
                      >
                        {hasVariant(variants, "isActive", "isNew") &&
                        hasVariant(variants, "variantType", "isEmpty")
                          ? "Organize your stories for specific audiences with timelines."
                          : hasVariant(variants, "variantType", "isEmpty")
                          ? "Get your company or organization on Venturemark."
                          : "Use timelines to organize stories for your group of audiences."}
                      </div>
                    ) : null}
                  </p.Stack>
                ) : null}
                {(
                  hasVariant(variants, "isActive", "isNew") &&
                  hasVariant(variants, "variantType", "isEmpty")
                    ? false
                    : hasVariant(variants, "variantType", "isEmpty")
                    ? true
                    : false
                ) ? (
                  <Button
                    data-plasmic-name={"viewCreateVenture"}
                    data-plasmic-override={overrides.viewCreateVenture}
                    buttonFeatures={
                      hasVariant(variants, "variantType", "isEmpty") &&
                      hasVariant(globalVariants, "screen", "mobile")
                        ? []
                        : hasVariant(variants, "variantType", "isEmpty")
                        ? ["nonFullWidth"]
                        : []
                    }
                    buttonStyle={
                      hasVariant(variants, "variantType", "isEmpty")
                        ? ("primaryPurple" as const)
                        : undefined
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.viewCreateVenture,
                      {
                        [sty.viewCreateVenture__isActive_isNew_variantType_isEmpty]:
                          hasVariant(variants, "isActive", "isNew") &&
                          hasVariant(variants, "variantType", "isEmpty"),
                        [sty.viewCreateVenture__variantType_isEmpty]:
                          hasVariant(variants, "variantType", "isEmpty"),
                      }
                    )}
                    text2={
                      <div
                        data-plasmic-name={"text2"}
                        data-plasmic-override={overrides.text2}
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text2,
                          {
                            [sty.text2__isActive_isNew_variantType_isEmpty]:
                              hasVariant(variants, "isActive", "isNew") &&
                              hasVariant(variants, "variantType", "isEmpty"),
                            [sty.text2__variantType_isEmpty]: hasVariant(
                              variants,
                              "variantType",
                              "isEmpty"
                            ),
                          }
                        )}
                      >
                        {hasVariant(variants, "isActive", "isNew") &&
                        hasVariant(variants, "variantType", "isEmpty")
                          ? "Create Timeline"
                          : hasVariant(variants, "variantType", "isEmpty")
                          ? "Create"
                          : "Begin"}
                      </div>
                    }
                  />
                ) : null}
                {(
                  hasVariant(variants, "isActive", "isNew") &&
                  hasVariant(variants, "variantType", "isEmpty")
                    ? true
                    : hasVariant(variants, "variantType", "isEmpty")
                    ? false
                    : false
                ) ? (
                  <Button
                    data-plasmic-name={"viewCreateTimeline"}
                    data-plasmic-override={overrides.viewCreateTimeline}
                    buttonFeatures={
                      hasVariant(variants, "variantType", "isEmpty") &&
                      hasVariant(globalVariants, "screen", "mobile")
                        ? []
                        : hasVariant(variants, "variantType", "isEmpty")
                        ? ["nonFullWidth"]
                        : []
                    }
                    buttonStyle={
                      hasVariant(variants, "variantType", "isEmpty")
                        ? ("primaryPurple" as const)
                        : undefined
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.viewCreateTimeline,
                      {
                        [sty.viewCreateTimeline__isActive_isNew_variantType_isEmpty]:
                          hasVariant(variants, "isActive", "isNew") &&
                          hasVariant(variants, "variantType", "isEmpty"),
                        [sty.viewCreateTimeline__variantType_isEmpty]:
                          hasVariant(variants, "variantType", "isEmpty"),
                      }
                    )}
                    text2={
                      <div
                        data-plasmic-name={"text23"}
                        data-plasmic-override={overrides.text23}
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text23,
                          {
                            [sty.text23__isActive_isNew_variantType_isEmpty]:
                              hasVariant(variants, "isActive", "isNew") &&
                              hasVariant(variants, "variantType", "isEmpty"),
                            [sty.text23__variantType_isEmpty]: hasVariant(
                              variants,
                              "variantType",
                              "isEmpty"
                            ),
                          }
                        )}
                      >
                        {hasVariant(variants, "isActive", "isNew") &&
                        hasVariant(variants, "variantType", "isEmpty")
                          ? "Create Timeline"
                          : hasVariant(variants, "variantType", "isEmpty")
                          ? "Create"
                          : "Begin"}
                      </div>
                    }
                  />
                ) : null}
              </p.Stack>
            ) : null}
            {(hasVariant(variants, "variantType", "isEmpty") ? false : true) ? (
              <p.Stack
                as={"div"}
                hasGap={
                  hasVariant(variants, "variantType", "isEmpty") &&
                  hasVariant(globalVariants, "screen", "mobile")
                    ? true
                    : false
                }
                className={classNames(defaultcss.all, sty.box___77Ib2, {
                  [sty.box__variantType_isEmpty___77Ib2Hwthy]: hasVariant(
                    variants,
                    "variantType",
                    "isEmpty"
                  ),
                })}
              >
                {(
                  hasVariant(variants, "variantType", "isEmpty") ? true : false
                ) ? (
                  <p.Stack
                    as={"div"}
                    hasGap={
                      hasVariant(variants, "variantType", "isEmpty")
                        ? true
                        : false
                    }
                    className={classNames(defaultcss.all, sty.box__rfS5, {
                      [sty.box__variantType_isEmpty__rfS5Hwthy]: hasVariant(
                        variants,
                        "variantType",
                        "isEmpty"
                      ),
                    })}
                  >
                    {(
                      hasVariant(variants, "variantType", "isEmpty")
                        ? true
                        : false
                    ) ? (
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__nuDvx,
                          {
                            [sty.box__variantType_isEmpty__nuDvxHwthy]:
                              hasVariant(variants, "variantType", "isEmpty"),
                          }
                        )}
                      >
                        {hasVariant(variants, "variantType", "isEmpty")
                          ? "Create a new venture"
                          : "Join an existing venture"}
                      </div>
                    ) : null}
                    {(
                      hasVariant(variants, "variantType", "isEmpty")
                        ? true
                        : false
                    ) ? (
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__s7JUk,
                          {
                            [sty.box__variantType_isEmpty__s7JUkHwthy]:
                              hasVariant(variants, "variantType", "isEmpty"),
                          }
                        )}
                      >
                        {hasVariant(variants, "variantType", "isEmpty")
                          ? "Get your company or organization on Venturemark."
                          : "Join or sign into an existing organization"}
                      </div>
                    ) : null}
                  </p.Stack>
                ) : null}
                {(
                  hasVariant(variants, "variantType", "isEmpty") ? true : false
                ) ? (
                  <Button
                    data-plasmic-name={"viewJoinVenture"}
                    data-plasmic-override={overrides.viewJoinVenture}
                    buttonFeatures={
                      hasVariant(variants, "variantType", "isEmpty") &&
                      hasVariant(globalVariants, "screen", "mobile")
                        ? []
                        : hasVariant(variants, "variantType", "isEmpty")
                        ? ["nonFullWidth"]
                        : undefined
                    }
                    buttonStyle={
                      hasVariant(variants, "variantType", "isEmpty")
                        ? ("primaryPurple" as const)
                        : undefined
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.viewJoinVenture,
                      {
                        [sty.viewJoinVenture__variantType_isEmpty]: hasVariant(
                          variants,
                          "variantType",
                          "isEmpty"
                        ),
                      }
                    )}
                    text2={
                      <div
                        data-plasmic-name={"text22"}
                        data-plasmic-override={overrides.text22}
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text22,
                          {
                            [sty.text22__variantType_isEmpty]: hasVariant(
                              variants,
                              "variantType",
                              "isEmpty"
                            ),
                          }
                        )}
                      >
                        {hasVariant(variants, "variantType", "isEmpty")
                          ? "Join"
                          : "Button"}
                      </div>
                    }
                  />
                ) : null}
              </p.Stack>
            ) : null}
          </p.Stack>
        ) : null}
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "viewCreateVenture",
    "text2",
    "viewCreateTimeline",
    "text23",
    "viewJoinVenture",
    "text22",
  ],
  viewCreateVenture: ["viewCreateVenture", "text2"],
  text2: ["text2"],
  viewCreateTimeline: ["viewCreateTimeline", "text23"],
  text23: ["text23"],
  viewJoinVenture: ["viewJoinVenture", "text22"],
  text22: ["text22"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  viewCreateVenture: typeof Button;
  text2: "div";
  viewCreateTimeline: typeof Button;
  text23: "div";
  viewJoinVenture: typeof Button;
  text22: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEmptyState__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEmptyState__VariantsArgs;
    args?: PlasmicEmptyState__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicEmptyState__Fetches;
  } & Omit<PlasmicEmptyState__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicEmptyState__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicEmptyState__ArgProps,
      internalVariantPropNames: PlasmicEmptyState__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicEmptyState__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEmptyState";
  } else {
    func.displayName = `PlasmicEmptyState.${nodeName}`;
  }
  return func;
}

export const PlasmicEmptyState = Object.assign(
  // Top-level PlasmicEmptyState renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    viewCreateVenture: makeNodeComponent("viewCreateVenture"),
    text2: makeNodeComponent("text2"),
    viewCreateTimeline: makeNodeComponent("viewCreateTimeline"),
    text23: makeNodeComponent("text23"),
    viewJoinVenture: makeNodeComponent("viewJoinVenture"),
    text22: makeNodeComponent("text22"),

    // Metadata about props expected for PlasmicEmptyState
    internalVariantProps: PlasmicEmptyState__VariantProps,
    internalArgProps: PlasmicEmptyState__ArgProps,
  }
);

export default PlasmicEmptyState;
/* prettier-ignore-end */
