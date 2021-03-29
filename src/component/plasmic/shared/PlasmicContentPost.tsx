// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: A1UjtYt6k0
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
import PhotoAvatar from "../../photoavatar/index"; // plasmic-import: uaoIqTcPRC-/component
import TimelineLink from "../../timelinelink/index"; // plasmic-import: PGPJmONwto/component
import Button from "../../button/index"; // plasmic-import: JU1t0P9pFY/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicContentPost.module.css"; // plasmic-import: A1UjtYt6k0/css

import IconDotMenuIcon from "./icons/PlasmicIcon__IconDotMenu"; // plasmic-import: Dz069s-rE/icon
import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon
import IconRightIcon from "./icons/PlasmicIcon__IconRight"; // plasmic-import: v822ZhrBq/icon

export type PlasmicContentPost__VariantMembers = {
  state: "isUser" | "isPostDetails";
  isUserOnClick: "isUserOnClick";
};

export type PlasmicContentPost__VariantsArgs = {
  state?: MultiChoiceArg<"isUser" | "isPostDetails">;
  isUserOnClick?: SingleBooleanChoiceArg<"isUserOnClick">;
};

type VariantPropType = keyof PlasmicContentPost__VariantsArgs;
export const PlasmicContentPost__VariantProps = new Array<VariantPropType>(
  "state",
  "isUserOnClick"
);

export type PlasmicContentPost__ArgsType = {
  userName?: React.ReactNode;
  date?: React.ReactNode;
  userInitials?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicContentPost__ArgsType;
export const PlasmicContentPost__ArgProps = new Array<ArgPropType>(
  "userName",
  "date",
  "userInitials",
  "children"
);

export type PlasmicContentPost__OverridesType = {
  root?: p.Flex<"div">;
  editorContainer?: p.Flex<"div">;
  textContainer2?: p.Flex<"div">;
  title?: p.Flex<"div">;
  description?: p.Flex<"div">;
  iconMenu?: p.Flex<"svg">;
  dropdown?: p.Flex<typeof Dropdown>;
  photoAvatar?: p.Flex<typeof PhotoAvatar>;
  userName?: p.Flex<"span">;
  span?: p.Flex<"span">;
  date?: p.Flex<"span">;
  timelineNamesContainer?: p.Flex<"div">;
  timelineLink?: p.Flex<typeof TimelineLink>;
  viewReplies?: p.Flex<typeof Button>;
};

export interface DefaultContentPostProps {
  userName?: React.ReactNode;
  date?: React.ReactNode;
  userInitials?: React.ReactNode;
  children?: React.ReactNode;
  state?: MultiChoiceArg<"isUser" | "isPostDetails">;
  isUserOnClick?: SingleBooleanChoiceArg<"isUserOnClick">;
  className?: string;
}

function PlasmicContentPost__RenderFunc(props: {
  variants: PlasmicContentPost__VariantsArgs;
  args: PlasmicContentPost__ArgsType;
  overrides: PlasmicContentPost__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover,
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__state_isPostDetails]: hasVariant(
          variants,
          "state",
          "isPostDetails"
        ),
        [sty.root__state_isUser]: hasVariant(variants, "state", "isUser"),
      })}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <div
        data-plasmic-name={"editorContainer"}
        data-plasmic-override={overrides.editorContainer}
        className={classNames(defaultcss.all, sty.editorContainer, {
          [sty.editorContainer__isUserOnClick_state_isUser]:
            hasVariant(variants, "isUserOnClick", "isUserOnClick") &&
            hasVariant(variants, "state", "isUser"),
          [sty.editorContainer__state_isPostDetails]: hasVariant(
            variants,
            "state",
            "isPostDetails"
          ),
          [sty.editorContainer__state_isUser]: hasVariant(
            variants,
            "state",
            "isUser"
          ),
        })}
      >
        <div className={classNames(defaultcss.all, sty.box__z3Q65)}>
          <p.Stack
            as={"div"}
            data-plasmic-name={"textContainer2"}
            data-plasmic-override={overrides.textContainer2}
            hasGap={true}
            className={classNames(defaultcss.all, sty.textContainer2)}
          >
            <div
              data-plasmic-name={"title"}
              data-plasmic-override={overrides.title}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.title,
                {
                  [sty.title__state_isPostDetails]: hasVariant(
                    variants,
                    "state",
                    "isPostDetails"
                  ),
                }
              )}
            >
              {
                "Lorem ipsumNam mollis varius ex. In ornare #scelerisque ex, ut ullamcorper dui "
              }
            </div>

            <div
              data-plasmic-name={"description"}
              data-plasmic-override={overrides.description}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.description,
                {
                  [sty.description__state_isPostDetails]: hasVariant(
                    variants,
                    "state",
                    "isPostDetails"
                  ),
                }
              )}
            >
              {
                "Lorem ipsum #dolor sit amet, consectetur adipiscing elit. Nam mollis varius ex. In ornare #scelerisque ex, ut 35 ullamcorper dui suscipit id. Mauris #maximus congue ante, sed varius"
              }
            </div>
          </p.Stack>

          {(hasVariant(variants, "state", "isUser") ? true : false) ? (
            <div
              className={classNames(defaultcss.all, sty.box__vVNrv, {
                [sty.box__state_isUser__vVNrvU0Xnn]: hasVariant(
                  variants,
                  "state",
                  "isUser"
                ),
              })}
            >
              <IconDotMenuIcon
                data-plasmic-name={"iconMenu"}
                data-plasmic-override={overrides.iconMenu}
                className={classNames(defaultcss.all, sty.iconMenu, {
                  [sty.iconMenu__state_isUser]: hasVariant(
                    variants,
                    "state",
                    "isUser"
                  ),
                })}
                role={"img"}
              />

              {(
                hasVariant(variants, "state", "isUser") && triggers.hover_root
                  ? false
                  : hasVariant(variants, "isUserOnClick", "isUserOnClick")
                  ? true
                  : false
              ) ? (
                <Dropdown
                  data-plasmic-name={"dropdown"}
                  data-plasmic-override={overrides.dropdown}
                  className={classNames("__wab_instance", sty.dropdown, {
                    [sty.dropdown__isUserOnClick]: hasVariant(
                      variants,
                      "isUserOnClick",
                      "isUserOnClick"
                    ),
                    [sty.dropdown__isUserOnClick_state_isUser]:
                      hasVariant(variants, "isUserOnClick", "isUserOnClick") &&
                      hasVariant(variants, "state", "isUser"),
                    [sty.dropdown__state_isUser]: hasVariant(
                      variants,
                      "state",
                      "isUser"
                    ),
                  })}
                />
              ) : null}
            </div>
          ) : null}
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__ehjLr, {
            [sty.box__state_isPostDetails__ehjLrNeiX5]: hasVariant(
              variants,
              "state",
              "isPostDetails"
            ),
            [sty.box__state_isUser__ehjLrU0Xnn]: hasVariant(
              variants,
              "state",
              "isUser"
            ),
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__kyNpO, {
              [sty.box__state_isUser_isUserOnClick__kyNpOu0XnnG87Sf]:
                hasVariant(variants, "state", "isUser") &&
                hasVariant(variants, "isUserOnClick", "isUserOnClick"),
            })}
          >
            <PhotoAvatar
              data-plasmic-name={"photoAvatar"}
              data-plasmic-override={overrides.photoAvatar}
              className={classNames("__wab_instance", sty.photoAvatar)}
              userInitials={
                <p.PlasmicSlot
                  defaultContents={"KO"}
                  value={args.userInitials}
                />
              }
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__mkSty)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__fjL5B, {
                  [sty.box__state_isUser__fjL5Bu0Xnn]: hasVariant(
                    variants,
                    "state",
                    "isUser"
                  ),
                })}
              >
                <div className={classNames(defaultcss.all, sty.box__nwWG)}>
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
                          <span style={{ fontWeight: 700 }}>{"The Rock"}</span>
                        </span>
                      </span>
                    }
                    value={args.userName}
                    className={classNames(sty.slotUserName)}
                  />
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box__wDBh5)}
                >
                  <p.PlasmicSlot
                    defaultContents={
                      <React.Fragment>
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
                      </React.Fragment>
                    }
                    value={args.date}
                    className={classNames(sty.slotDate)}
                  />
                </p.Stack>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__vvzri, {
                  [sty.box__state_isUser_isUserOnClick__vvzriu0XnnG87Sf]:
                    hasVariant(variants, "state", "isUser") &&
                    hasVariant(variants, "isUserOnClick", "isUserOnClick"),
                })}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"timelineNamesContainer"}
                  data-plasmic-override={overrides.timelineNamesContainer}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    sty.timelineNamesContainer,
                    {
                      [sty.timelineNamesContainer__state_isUser_isUserOnClick]:
                        hasVariant(variants, "state", "isUser") &&
                        hasVariant(variants, "isUserOnClick", "isUserOnClick"),
                    }
                  )}
                >
                  <TimelineLink
                    data-plasmic-name={"timelineLink"}
                    data-plasmic-override={overrides.timelineLink}
                    className={classNames("__wab_instance", sty.timelineLink, {
                      [sty.timelineLink__state_isUser_isUserOnClick]:
                        hasVariant(variants, "state", "isUser") &&
                        hasVariant(variants, "isUserOnClick", "isUserOnClick"),
                    })}
                    name={
                      <p.PlasmicSlot
                        defaultContents={"Wins"}
                        value={args.children}
                        className={classNames(sty.slotChildren)}
                      />
                    }
                  />
                </p.Stack>
              </p.Stack>
            </p.Stack>
          </p.Stack>

          {(hasVariant(variants, "state", "isPostDetails") ? false : true) ? (
            <div
              className={classNames(defaultcss.all, sty.box__iRFwS, {
                [sty.box__state_isPostDetails__iRFwSNeiX5]: hasVariant(
                  variants,
                  "state",
                  "isPostDetails"
                ),
              })}
            >
              <Button
                data-plasmic-name={"viewReplies"}
                data-plasmic-override={overrides.viewReplies}
                buttonFeatures={["isRounded", "showEndIcon", "showCount"]}
                buttonStyle={"secondaryPurple" as const}
                className={classNames("__wab_instance", sty.viewReplies, {
                  [sty.viewReplies__state_isUser_isUserOnClick]:
                    hasVariant(variants, "state", "isUser") &&
                    hasVariant(variants, "isUserOnClick", "isUserOnClick"),
                })}
                count={"1"}
                slot={
                  <IconPlusIcon
                    className={classNames(defaultcss.all, sty.svg__w2QpP)}
                    role={"img"}
                  />
                }
                text2={"Replies"}
              >
                <IconRightIcon
                  className={classNames(defaultcss.all, sty.svg__i90Xz)}
                  role={"img"}
                />
              </Button>
            </div>
          ) : null}
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "editorContainer",
    "textContainer2",
    "title",
    "description",
    "iconMenu",
    "dropdown",
    "photoAvatar",
    "userName",
    "span",
    "date",
    "timelineNamesContainer",
    "timelineLink",
    "viewReplies",
  ],
  editorContainer: [
    "editorContainer",
    "textContainer2",
    "title",
    "description",
    "iconMenu",
    "dropdown",
    "photoAvatar",
    "userName",
    "span",
    "date",
    "timelineNamesContainer",
    "timelineLink",
    "viewReplies",
  ],
  textContainer2: ["textContainer2", "title", "description"],
  title: ["title"],
  description: ["description"],
  iconMenu: ["iconMenu"],
  dropdown: ["dropdown"],
  photoAvatar: ["photoAvatar"],
  userName: ["userName"],
  span: ["span"],
  date: ["date"],
  timelineNamesContainer: ["timelineNamesContainer", "timelineLink"],
  timelineLink: ["timelineLink"],
  viewReplies: ["viewReplies"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  editorContainer: "div";
  textContainer2: "div";
  title: "div";
  description: "div";
  iconMenu: "svg";
  dropdown: typeof Dropdown;
  photoAvatar: typeof PhotoAvatar;
  userName: "span";
  span: "span";
  date: "span";
  timelineNamesContainer: "div";
  timelineLink: typeof TimelineLink;
  viewReplies: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContentPost__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicContentPost__VariantsArgs;
  args?: PlasmicContentPost__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicContentPost__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicContentPost__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicContentPost__ArgProps,
      internalVariantPropNames: PlasmicContentPost__VariantProps,
    });

    return PlasmicContentPost__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContentPost";
  } else {
    func.displayName = `PlasmicContentPost.${nodeName}`;
  }
  return func;
}

export const PlasmicContentPost = Object.assign(
  // Top-level PlasmicContentPost renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    editorContainer: makeNodeComponent("editorContainer"),
    textContainer2: makeNodeComponent("textContainer2"),
    title: makeNodeComponent("title"),
    description: makeNodeComponent("description"),
    iconMenu: makeNodeComponent("iconMenu"),
    dropdown: makeNodeComponent("dropdown"),
    photoAvatar: makeNodeComponent("photoAvatar"),
    userName: makeNodeComponent("userName"),
    span: makeNodeComponent("span"),
    date: makeNodeComponent("date"),
    timelineNamesContainer: makeNodeComponent("timelineNamesContainer"),
    timelineLink: makeNodeComponent("timelineLink"),
    viewReplies: makeNodeComponent("viewReplies"),

    // Metadata about props expected for PlasmicContentPost
    internalVariantProps: PlasmicContentPost__VariantProps,
    internalArgProps: PlasmicContentPost__ArgProps,
  }
);

export default PlasmicContentPost;
/* prettier-ignore-end */
