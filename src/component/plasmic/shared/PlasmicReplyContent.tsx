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
import Dropdown from "../../dropdown/index"; // plasmic-import: Umq3CDOCIR/component
import ReplyInput from "../../replyinput/index"; // plasmic-import: PE9pgtdNju/component
import ReplyContentSecond from "../../replycontentsecond/index"; // plasmic-import: 97K6RSBlPOz/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicReplyContent.module.css"; // plasmic-import: q3VnCwfx25w/css

import IconDotMenuIcon from "./icons/PlasmicIcon__IconDotMenu"; // plasmic-import: Dz069s-rE/icon

export type PlasmicReplyContent__VariantMembers = {
  state: "isReply" | "isUser";
};

export type PlasmicReplyContent__VariantsArgs = {
  state?: SingleChoiceArg<"isReply" | "isUser">;
};

type VariantPropType = keyof PlasmicReplyContent__VariantsArgs;
export const PlasmicReplyContent__VariantProps = new Array<VariantPropType>(
  "state"
);

export type PlasmicReplyContent__ArgsType = {
  userName?: React.ReactNode;
  text?: React.ReactNode;
  textContainer2?: React.ReactNode;
  date?: React.ReactNode;
};

type ArgPropType = keyof PlasmicReplyContent__ArgsType;
export const PlasmicReplyContent__ArgProps = new Array<ArgPropType>(
  "userName",
  "text",
  "textContainer2",
  "date"
);

export type PlasmicReplyContent__OverridesType = {
  root?: p.Flex<"div">;
  editorContainer?: p.Flex<"div">;
  userName?: p.Flex<"span">;
  span?: p.Flex<"span">;
  button?: p.Flex<"button">;
  svg?: p.Flex<"svg">;
  dropdown?: p.Flex<typeof Dropdown>;
  replyButton?: p.Flex<"button">;
  replyInput?: p.Flex<typeof ReplyInput>;
  repliesContainer?: p.Flex<"div">;
  replyContentSecond?: p.Flex<typeof ReplyContentSecond>;
  userName2?: p.Flex<"span">;
};

export interface DefaultReplyContentProps {
  userName?: React.ReactNode;
  text?: React.ReactNode;
  textContainer2?: React.ReactNode;
  date?: React.ReactNode;
  state?: SingleChoiceArg<"isReply" | "isUser">;
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
          <div className={classNames(defaultcss.all, sty.box__dc4F)} />

          <div className={classNames(defaultcss.all, sty.box___0YC8Z)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__rqpD, {
                [sty.box__state_isReply__rqpDD0Pzv]: hasVariant(
                  variants,
                  "state",
                  "isReply"
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
                <div
                  className={classNames(defaultcss.all, sty.box__cAoxI, {
                    [sty.box__state_isReply__cAoxId0Pzv]: hasVariant(
                      variants,
                      "state",
                      "isReply"
                    ),
                  })}
                >
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
                              {"The Rock"}
                            </span>
                          </span>
                        </span>
                      }
                      value={args.userName}
                      className={classNames(sty.slotUserName)}
                    />

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
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.span___4NLge
                          )}
                        >
                          {"3 hours ago"}
                        </span>
                      }
                      value={args.date}
                    />
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
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames(defaultcss.button, sty.button)}
                    >
                      <IconDotMenuIcon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        className={classNames(defaultcss.all, sty.svg, {
                          [sty.svg__state_isUser]: hasVariant(
                            variants,
                            "state",
                            "isUser"
                          ),
                        })}
                        role={"img"}
                      />

                      {(triggers.active_root ? true : false) ? (
                        <Dropdown
                          data-plasmic-name={"dropdown"}
                          data-plasmic-override={overrides.dropdown}
                          className={classNames("__wab_instance", sty.dropdown)}
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

              <button
                data-plasmic-name={"replyButton"}
                data-plasmic-override={overrides.replyButton}
                className={classNames(
                  defaultcss.button,
                  defaultcss.__wab_text,
                  sty.replyButton
                )}
              >
                {"Reply"}
              </button>

              {(hasVariant(variants, "state", "isReply") ? true : false) ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box__w4TSo, {
                    [sty.box__state_isReply__w4TSoD0Pzv]: hasVariant(
                      variants,
                      "state",
                      "isReply"
                    ),
                  })}
                >
                  {(hasVariant(variants, "state", "isReply") ? true : false) ? (
                    <ReplyInput
                      data-plasmic-name={"replyInput"}
                      data-plasmic-override={overrides.replyInput}
                      className={classNames("__wab_instance", sty.replyInput, {
                        [sty.replyInput__state_isReply]: hasVariant(
                          variants,
                          "state",
                          "isReply"
                        ),
                      })}
                    />
                  ) : null}

                  <div
                    data-plasmic-name={"repliesContainer"}
                    data-plasmic-override={overrides.repliesContainer}
                    className={classNames(defaultcss.all, sty.repliesContainer)}
                  >
                    {(
                      hasVariant(variants, "state", "isReply") ? true : false
                    ) ? (
                      <ReplyContentSecond
                        data-plasmic-name={"replyContentSecond"}
                        data-plasmic-override={overrides.replyContentSecond}
                        date={
                          <span
                            className={classNames(
                              defaultcss.all,
                              defaultcss.__wab_text,
                              sty.span__ik8Gc
                            )}
                          >
                            {"3 hours ago"}
                          </span>
                        }
                        textContainer={
                          <p.PlasmicSlot
                            defaultContents={
                              "Lorem ipsum #dolor sit amet, consectetur adipiscing elit. Nam mo"
                            }
                            value={args.textContainer2}
                          />
                        }
                        userName={
                          <span
                            data-plasmic-name={"userName2"}
                            data-plasmic-override={overrides.userName2}
                            className={classNames(
                              defaultcss.all,
                              defaultcss.__wab_text,
                              sty.userName2
                            )}
                          >
                            <span>
                              <span style={{ fontWeight: 700 }}>
                                {"The Rock"}
                              </span>
                            </span>
                          </span>
                        }
                      />
                    ) : null}
                  </div>
                </p.Stack>
              ) : null}
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
    "userName",
    "span",
    "button",
    "svg",
    "dropdown",
    "replyButton",
    "replyInput",
    "repliesContainer",
    "replyContentSecond",
    "userName2",
  ],

  editorContainer: [
    "editorContainer",
    "userName",
    "span",
    "button",
    "svg",
    "dropdown",
    "replyButton",
    "replyInput",
    "repliesContainer",
    "replyContentSecond",
    "userName2",
  ],

  userName: ["userName"],
  span: ["span"],
  button: ["button", "svg", "dropdown"],
  svg: ["svg"],
  dropdown: ["dropdown"],
  replyButton: ["replyButton"],
  replyInput: ["replyInput"],
  repliesContainer: ["repliesContainer", "replyContentSecond", "userName2"],
  replyContentSecond: ["replyContentSecond", "userName2"],
  userName2: ["userName2"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  editorContainer: "div";
  userName: "span";
  span: "span";
  button: "button";
  svg: "svg";
  dropdown: typeof Dropdown;
  replyButton: "button";
  replyInput: typeof ReplyInput;
  repliesContainer: "div";
  replyContentSecond: typeof ReplyContentSecond;
  userName2: "span";
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
    userName: makeNodeComponent("userName"),
    span: makeNodeComponent("span"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    dropdown: makeNodeComponent("dropdown"),
    replyButton: makeNodeComponent("replyButton"),
    replyInput: makeNodeComponent("replyInput"),
    repliesContainer: makeNodeComponent("repliesContainer"),
    replyContentSecond: makeNodeComponent("replyContentSecond"),
    userName2: makeNodeComponent("userName2"),

    // Metadata about props expected for PlasmicReplyContent
    internalVariantProps: PlasmicReplyContent__VariantProps,
    internalArgProps: PlasmicReplyContent__ArgProps,
  }
);

export default PlasmicReplyContent;
/* prettier-ignore-end */
