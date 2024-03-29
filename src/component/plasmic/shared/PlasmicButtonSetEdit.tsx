// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: pMqUN0f4G_a
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

import { useScreenVariants as useScreenVariantsszbTUtTUfDw81Pi } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicButtonSetEdit.module.css"; // plasmic-import: pMqUN0f4G_a/css

import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon
import IconRightIcon from "./icons/PlasmicIcon__IconRight"; // plasmic-import: v822ZhrBq/icon

export type PlasmicButtonSetEdit__VariantMembers = {
  variantState: "isEdit";
};

export type PlasmicButtonSetEdit__VariantsArgs = {
  variantState?: SingleChoiceArg<"isEdit">;
};

type VariantPropType = keyof PlasmicButtonSetEdit__VariantsArgs;
export const PlasmicButtonSetEdit__VariantProps = new Array<VariantPropType>(
  "variantState"
);

export type PlasmicButtonSetEdit__ArgsType = {};
type ArgPropType = keyof PlasmicButtonSetEdit__ArgsType;
export const PlasmicButtonSetEdit__ArgProps = new Array<ArgPropType>();

export type PlasmicButtonSetEdit__OverridesType = {
  root?: p.Flex<"div">;
  _delete?: p.Flex<typeof Button>;
  text222?: p.Flex<"div">;
  cancel?: p.Flex<typeof Button>;
  text22?: p.Flex<"div">;
  save?: p.Flex<typeof Button>;
  text2?: p.Flex<"div">;
};

export interface DefaultButtonSetEditProps {
  variantState?: SingleChoiceArg<"isEdit">;
  className?: string;
}

function PlasmicButtonSetEdit__RenderFunc(props: {
  variants: PlasmicButtonSetEdit__VariantsArgs;
  args: PlasmicButtonSetEdit__ArgsType;
  overrides: PlasmicButtonSetEdit__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsszbTUtTUfDw81Pi(),
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.rootvariantState_isEdit]: hasVariant(
          variants,
          "variantState",
          "isEdit"
        ),
      })}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__wbTrP, {
          [sty.freeBoxvariantState_isEdit__wbTrPtAumS]: hasVariant(
            variants,
            "variantState",
            "isEdit"
          ),
        })}
      >
        {(hasVariant(variants, "variantState", "isEdit") ? true : false) ? (
          <Button
            data-plasmic-name={"_delete"}
            data-plasmic-override={overrides._delete}
            buttonFeatures={
              hasVariant(globalVariants, "screen", "mobile") ? [] : undefined
            }
            buttonStyle={
              hasVariant(variants, "variantState", "isEdit")
                ? ("danger" as const)
                : ("primaryPurple" as const)
            }
            className={classNames("__wab_instance")}
            count={"1"}
            slot={
              <IconPlusIcon
                className={classNames(projectcss.all, sty.svg__xHKz)}
                role={"img"}
              />
            }
            text2={
              <div
                data-plasmic-name={"text222"}
                data-plasmic-override={overrides.text222}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text222,
                  {
                    [sty.text222variantState_isEdit]: hasVariant(
                      variants,
                      "variantState",
                      "isEdit"
                    ),
                  }
                )}
              >
                {hasVariant(variants, "variantState", "isEdit")
                  ? "Delete"
                  : "Create"}
              </div>
            }
          >
            <IconRightIcon
              className={classNames(projectcss.all, sty.svg__s1LOr)}
              role={"img"}
            />
          </Button>
        ) : null}
      </div>

      {(hasVariant(variants, "variantState", "isEdit") ? true : true) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___0SmAy, {
            [sty.freeBoxvariantState_isEdit___0SmAYtAumS]: hasVariant(
              variants,
              "variantState",
              "isEdit"
            ),
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__blR7J, {
              [sty.freeBoxvariantState_isEdit__blR7JtAumS]: hasVariant(
                variants,
                "variantState",
                "isEdit"
              ),
            })}
          >
            {(hasVariant(variants, "variantState", "isEdit") ? true : true) ? (
              <Button
                data-plasmic-name={"cancel"}
                data-plasmic-override={overrides.cancel}
                buttonFeatures={
                  hasVariant(globalVariants, "screen", "mobile")
                    ? []
                    : undefined
                }
                buttonStyle={
                  hasVariant(variants, "variantState", "isEdit")
                    ? ("secondaryPurple" as const)
                    : ("secondaryPurple" as const)
                }
                className={classNames("__wab_instance")}
                count={"1"}
                slot={
                  <IconPlusIcon
                    className={classNames(projectcss.all, sty.svg___9S6H3)}
                    role={"img"}
                  />
                }
                text2={
                  <div
                    data-plasmic-name={"text22"}
                    data-plasmic-override={overrides.text22}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text22,
                      {
                        [sty.text22variantState_isEdit]: hasVariant(
                          variants,
                          "variantState",
                          "isEdit"
                        ),
                      }
                    )}
                  >
                    {hasVariant(variants, "variantState", "isEdit")
                      ? "Cancel"
                      : "Cancel"}
                  </div>
                }
              >
                <IconRightIcon
                  className={classNames(projectcss.all, sty.svg__obcJ3)}
                  role={"img"}
                />
              </Button>
            ) : null}
          </div>

          <Button
            data-plasmic-name={"save"}
            data-plasmic-override={overrides.save}
            buttonFeatures={
              hasVariant(globalVariants, "screen", "mobile") ? [] : []
            }
            buttonStyle={
              hasVariant(variants, "variantState", "isEdit")
                ? ("primaryPurple" as const)
                : ("primaryPurple" as const)
            }
            className={classNames("__wab_instance")}
            count={"1"}
            slot={
              <IconPlusIcon
                className={classNames(projectcss.all, sty.svg__gmFuI)}
                role={"img"}
              />
            }
            text2={
              <div
                data-plasmic-name={"text2"}
                data-plasmic-override={overrides.text2}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text2,
                  {
                    [sty.text2variantState_isEdit]: hasVariant(
                      variants,
                      "variantState",
                      "isEdit"
                    ),
                  }
                )}
              >
                {hasVariant(variants, "variantState", "isEdit")
                  ? "Save"
                  : "Create"}
              </div>
            }
          >
            <IconRightIcon
              className={classNames(projectcss.all, sty.svg__ijp8A)}
              role={"img"}
            />
          </Button>
        </p.Stack>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "_delete", "text222", "cancel", "text22", "save", "text2"],
  _delete: ["_delete", "text222"],
  text222: ["text222"],
  cancel: ["cancel", "text22"],
  text22: ["text22"],
  save: ["save", "text2"],
  text2: ["text2"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  _delete: typeof Button;
  text222: "div";
  cancel: typeof Button;
  text22: "div";
  save: typeof Button;
  text2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButtonSetEdit__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButtonSetEdit__VariantsArgs;
    args?: PlasmicButtonSetEdit__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButtonSetEdit__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButtonSetEdit__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicButtonSetEdit__ArgProps,
      internalVariantPropNames: PlasmicButtonSetEdit__VariantProps,
    });

    return PlasmicButtonSetEdit__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonSetEdit";
  } else {
    func.displayName = `PlasmicButtonSetEdit.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonSetEdit = Object.assign(
  // Top-level PlasmicButtonSetEdit renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    _delete: makeNodeComponent("_delete"),
    text222: makeNodeComponent("text222"),
    cancel: makeNodeComponent("cancel"),
    text22: makeNodeComponent("text22"),
    save: makeNodeComponent("save"),
    text2: makeNodeComponent("text2"),

    // Metadata about props expected for PlasmicButtonSetEdit
    internalVariantProps: PlasmicButtonSetEdit__VariantProps,
    internalArgProps: PlasmicButtonSetEdit__ArgProps,
  }
);

export default PlasmicButtonSetEdit;
/* prettier-ignore-end */
