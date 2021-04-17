// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: q3VnCwfx25w
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
import PhotoAvatar from "../../photoavatar/index"; // plasmic-import: uaoIqTcPRC-/component
import Dropdown from "../../dropdown/index"; // plasmic-import: Umq3CDOCIR/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicReplyContent.module.css"; // plasmic-import: q3VnCwfx25w/css

import IconDotMenuIcon from "./icons/PlasmicIcon__IconDotMenu"; // plasmic-import: Dz069s-rE/icon

export type PlasmicReplyContent__VariantMembers = {
  state: "isUser";
  isUserOnClick: "isUserOnClick";
};

export type PlasmicReplyContent__VariantsArgs = {
  state?: SingleChoiceArg<"isUser">;
  isUserOnClick?: SingleBooleanChoiceArg<"isUserOnClick">;
};

type VariantPropType = keyof PlasmicReplyContent__VariantsArgs;
export const PlasmicReplyContent__VariantProps = new Array<VariantPropType>(
  "state",
  "isUserOnClick"
);

export type PlasmicReplyContent__ArgsType = {
  userName?: React.ReactNode;
  text?: React.ReactNode;
  date?: React.ReactNode;
};

type ArgPropType = keyof PlasmicReplyContent__ArgsType;
export const PlasmicReplyContent__ArgProps = new Array<ArgPropType>(
  "userName",
  "text",
  "date"
);

export type PlasmicReplyContent__OverridesType = {
  root?: p.Flex<"div">;
  editorContainer?: p.Flex<"div">;
  photoAvatar?: p.Flex<typeof PhotoAvatar>;
  userName?: p.Flex<"span">;
  span?: p.Flex<"span">;
  date?: p.Flex<"span">;
  iconMenu?: p.Flex<"button">;
  svg?: p.Flex<"svg">;
  dropdown?: p.Flex<typeof Dropdown>;
  deleteOption?: p.Flex<"div">;
};

export interface DefaultReplyContentProps {
  userName?: React.ReactNode;
  text?: React.ReactNode;
  date?: React.ReactNode;
  state?: SingleChoiceArg<"isUser">;
  isUserOnClick?: SingleBooleanChoiceArg<"isUserOnClick">;
  className?: string;
}

function PlasmicReplyContent__RenderFunc(props: {
  variants: PlasmicReplyContent__VariantsArgs;
  args: PlasmicReplyContent__ArgsType;
  overrides: PlasmicReplyContent__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const [isRootActive, triggerRootActiveProps] = useTrigger("usePressed", {});
  const triggers = {
    active_root: isRootActive,
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      data-plasmic-trigger-props={[triggerRootActiveProps]}
    >
      <div
        data-plasmic-name={"editorContainer"}
        data-plasmic-override={overrides.editorContainer}
        className={classNames(defaultcss.all, sty.editorContainer, {
          [sty.editorContainer__isUserOnClick]: hasVariant(
            variants,
            "isUserOnClick",
            "isUserOnClick"
          ),
          [sty.editorContainer__isUserOnClick_state_isUser]:
            hasVariant(variants, "isUserOnClick", "isUserOnClick") &&
            hasVariant(variants, "state", "isUser"),
          [sty.editorContainer__state_isUser]: hasVariant(
            variants,
            "state",
            "isUser"
          ),
        })}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__cyQ9E)}
        >
          <PhotoAvatar
            data-plasmic-name={"photoAvatar"}
            data-plasmic-override={overrides.photoAvatar}
            className={classNames("__wab_instance", sty.photoAvatar)}
          />

          <div className={classNames(defaultcss.all, sty.box___0YC8Z)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__rqpD, {
                [sty.box__state_isUser__rqpDFEdPi]: hasVariant(
                  variants,
                  "state",
                  "isUser"
                ),
              })}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__iU0A, {
                  [sty.box__state_isUser__iU0AfEdPi]: hasVariant(
                    variants,
                    "state",
                    "isUser"
                  ),
                })}
              >
                <div className={classNames(defaultcss.all, sty.box__cAoxI)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.box__oKSfs)}
                  >
                    <p.PlasmicSlot
                      defaultContents={
                        <span
                          data-plasmic-name={"userName"}
                          data-plasmic-override={overrides.userName}
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.userName
                          )}
                        >
                          <span>
                            <span style={{ fontWeight: 700 }}>
                              {"asdasdasdasd "}
                            </span>
                          </span>
                        </span>
                      }
                      value={args.userName}
                      className={classNames(sty.slotUserName)}
                    />

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.box__wfm2A)}
                    >
                      <span
                        data-plasmic-name={"span"}
                        data-plasmic-override={overrides.span}
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.span
                        )}
                      >
                        {"•"}
                      </span>

                      <p.PlasmicSlot
                        defaultContents={
                          <span
                            data-plasmic-name={"date"}
                            data-plasmic-override={overrides.date}
                            className={classNames(
                              defaultcss.all,
                              defaultcss.__wab_text,
                              sty.date
                            )}
                          >
                            {"3 hours ago"}
                          </span>
                        }
                        value={args.date}
                        className={classNames(sty.slotDate)}
                      />
                    </p.Stack>
                  </p.Stack>
                </div>

                {(hasVariant(variants, "state", "isUser") ? true : false) ? (
                  <div
                    className={classNames(defaultcss.all, sty.box___2Fduc, {
                      [sty.box__state_isUser___2FducFEdPi]: hasVariant(
                        variants,
                        "state",
                        "isUser"
                      ),
                    })}
                  >
                    <button
                      data-plasmic-name={"iconMenu"}
                      data-plasmic-override={overrides.iconMenu}
                      className={classNames(defaultcss.button, sty.iconMenu)}
                    >
                      <IconDotMenuIcon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        className={classNames(defaultcss.all, sty.svg, {
                          [sty.svg__isUserOnClick_state_isUser]:
                            hasVariant(
                              variants,
                              "isUserOnClick",
                              "isUserOnClick"
                            ) && hasVariant(variants, "state", "isUser"),
                          [sty.svg__state_isUser]: hasVariant(
                            variants,
                            "state",
                            "isUser"
                          ),
                        })}
                        role={"img"}
                      />

                      {(
                        triggers.active_root
                          ? true
                          : hasVariant(
                              variants,
                              "isUserOnClick",
                              "isUserOnClick"
                            ) && hasVariant(variants, "state", "isUser")
                          ? true
                          : false
                      ) ? (
                        <Dropdown
                          data-plasmic-name={"dropdown"}
                          data-plasmic-override={overrides.dropdown}
                          className={classNames(
                            "__wab_instance",
                            sty.dropdown,
                            {
                              [sty.dropdown__isUserOnClick]: hasVariant(
                                variants,
                                "isUserOnClick",
                                "isUserOnClick"
                              ),
                              [sty.dropdown__isUserOnClick_state_isUser]:
                                hasVariant(
                                  variants,
                                  "isUserOnClick",
                                  "isUserOnClick"
                                ) && hasVariant(variants, "state", "isUser"),
                              [sty.dropdown__state_isUser]: hasVariant(
                                variants,
                                "state",
                                "isUser"
                              ),
                            }
                          )}
                          rename2={
                            <div
                              data-plasmic-name={"deleteOption"}
                              data-plasmic-override={overrides.deleteOption}
                              className={classNames(
                                defaultcss.all,
                                defaultcss.__wab_text,
                                sty.deleteOption,
                                {
                                  [sty.deleteOption__isUserOnClick_state_isUser]:
                                    hasVariant(
                                      variants,
                                      "isUserOnClick",
                                      "isUserOnClick"
                                    ) &&
                                    hasVariant(variants, "state", "isUser"),
                                  [sty.deleteOption__state_isUser]: hasVariant(
                                    variants,
                                    "state",
                                    "isUser"
                                  ),
                                }
                              )}
                            >
                              {hasVariant(
                                variants,
                                "isUserOnClick",
                                "isUserOnClick"
                              ) && hasVariant(variants, "state", "isUser")
                                ? "Delete"
                                : "Archive"}
                            </div>
                          }
                        />
                      ) : null}
                    </button>
                  </div>
                ) : null}
              </p.Stack>

              <div className={classNames(defaultcss.all, sty.box__wE4D)}>
                <div className={classNames(defaultcss.all, sty.box__ly8Vh)}>
                  <p.PlasmicSlot
                    defaultContents={
                      "Lorem ipsum #dolor sit amet, consectetur adipiscing elit. Nam mollis varius ex. In ornare #scelerisque ex, ut 35 ullamcorper dui suscipit id. Mauris #maximus congue ante, sed varius"
                    }
                    value={args.text}
                    className={classNames(sty.slotText)}
                  />
                </div>
              </div>
            </p.Stack>
          </div>
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "editorContainer",
    "photoAvatar",
    "userName",
    "span",
    "date",
    "iconMenu",
    "svg",
    "dropdown",
    "deleteOption",
  ],
  editorContainer: [
    "editorContainer",
    "photoAvatar",
    "userName",
    "span",
    "date",
    "iconMenu",
    "svg",
    "dropdown",
    "deleteOption",
  ],
  photoAvatar: ["photoAvatar"],
  userName: ["userName"],
  span: ["span"],
  date: ["date"],
  iconMenu: ["iconMenu", "svg", "dropdown", "deleteOption"],
  svg: ["svg"],
  dropdown: ["dropdown", "deleteOption"],
  deleteOption: ["deleteOption"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  editorContainer: "div";
  photoAvatar: typeof PhotoAvatar;
  userName: "span";
  span: "span";
  date: "span";
  iconMenu: "button";
  svg: "svg";
  dropdown: typeof Dropdown;
  deleteOption: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReplyContent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicReplyContent__VariantsArgs;
  args?: PlasmicReplyContent__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicReplyContent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicReplyContent__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicReplyContent__ArgProps,
      internalVariantPropNames: PlasmicReplyContent__VariantProps,
    });

    return PlasmicReplyContent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicReplyContent";
  } else {
    func.displayName = `PlasmicReplyContent.${nodeName}`;
  }
  return func;
}

export const PlasmicReplyContent = Object.assign(
  // Top-level PlasmicReplyContent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    editorContainer: makeNodeComponent("editorContainer"),
    photoAvatar: makeNodeComponent("photoAvatar"),
    userName: makeNodeComponent("userName"),
    span: makeNodeComponent("span"),
    date: makeNodeComponent("date"),
    iconMenu: makeNodeComponent("iconMenu"),
    svg: makeNodeComponent("svg"),
    dropdown: makeNodeComponent("dropdown"),
    deleteOption: makeNodeComponent("deleteOption"),

    // Metadata about props expected for PlasmicReplyContent
    internalVariantProps: PlasmicReplyContent__VariantProps,
    internalArgProps: PlasmicReplyContent__ArgProps,
  }
);

export default PlasmicReplyContent;
/* prettier-ignore-end */
