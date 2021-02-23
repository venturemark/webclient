// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: 1E73LSzV2l
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
import IconButton from "../../iconbutton/index"; // plasmic-import: UIpuE7M1YY/component
import ContentPost from "../../contentpost/index"; // plasmic-import: A1UjtYt6k0/component
import ReplyContent from "../../replycontent/index"; // plasmic-import: q3VnCwfx25w/component
import ReplyInput from "../../replyinput/index"; // plasmic-import: PE9pgtdNju/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicPostDetails.module.css"; // plasmic-import: 1E73LSzV2l/css

import IconCloseIcon from "./icons/PlasmicIcon__IconClose"; // plasmic-import: v016HsKmfL/icon

export type PlasmicPostDetails__VariantMembers = {};

export type PlasmicPostDetails__VariantsArgs = {};
type VariantPropType = keyof PlasmicPostDetails__VariantsArgs;
export const PlasmicPostDetails__VariantProps = new Array<VariantPropType>();

export type PlasmicPostDetails__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPostDetails__ArgsType;
export const PlasmicPostDetails__ArgProps = new Array<ArgPropType>("children");

export type PlasmicPostDetails__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"div">;
  iconButton?: p.Flex<typeof IconButton>;
  svg?: p.Flex<"svg">;
  replyContainer?: p.Flex<"div">;
  contentPost?: p.Flex<typeof ContentPost>;
  userName3?: p.Flex<"span">;
  span?: p.Flex<"span">;
  date3?: p.Flex<"span">;
  userName?: p.Flex<"span">;
  date?: p.Flex<"span">;
  userName2?: p.Flex<"span">;
  date2?: p.Flex<"span">;
  userName22?: p.Flex<"span">;
  date22?: p.Flex<"span">;
  userName222?: p.Flex<"span">;
  date222?: p.Flex<"span">;
  replyInput?: p.Flex<typeof ReplyInput>;
};

export interface DefaultPostDetailsProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicPostDetails__RenderFunc(props: {
  variants: PlasmicPostDetails__VariantsArgs;
  args: PlasmicPostDetails__ArgsType;
  overrides: PlasmicPostDetails__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {true ? (
        <div
          data-plasmic-name={"box"}
          data-plasmic-override={overrides.box}
          className={classNames(defaultcss.all, sty.box)}
        >
          <p.PlasmicSlot
            defaultContents={"Post Details"}
            value={args.children}
            className={classNames(sty.slotChildren)}
          />

          <IconButton
            data-plasmic-name={"iconButton"}
            data-plasmic-override={overrides.iconButton}
            className={classNames("__wab_instance", sty.iconButton)}
            iconSize={"large" as const}
          >
            <IconCloseIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(defaultcss.all, sty.svg)}
              role={"img"}
            />
          </IconButton>
        </div>
      ) : null}

      <div
        data-plasmic-name={"replyContainer"}
        data-plasmic-override={overrides.replyContainer}
        className={classNames(defaultcss.all, sty.replyContainer)}
      >
        <ContentPost
          data-plasmic-name={"contentPost"}
          data-plasmic-override={overrides.contentPost}
          className={classNames("__wab_instance", sty.contentPost)}
          date={
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
                data-plasmic-name={"date3"}
                data-plasmic-override={overrides.date3}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.date3
                )}
              >
                {"3 hours ago"}
              </span>
            </React.Fragment>
          }
          state={["isPostDetails"]}
          userInitials={"KO"}
          userName={
            <span
              data-plasmic-name={"userName3"}
              data-plasmic-override={overrides.userName3}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.userName3
              )}
            >
              <span>
                <span style={{ fontWeight: 700 }}>{"The Rock"}</span>
              </span>
            </span>
          }
        />

        <ReplyContent
          date={
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
          text={
            "Lorem ipsum #dolor sit amet, consectetur adipiscing elit. Nam mollis varius ex. In ornare #scelerisque ex, ut 35 ullamcorper dui suscipit id. Mauris #maximus congue ante, sed varius"
          }
          userName={
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
        />

        <ReplyContent
          date={
            <span
              data-plasmic-name={"date2"}
              data-plasmic-override={overrides.date2}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.date2
              )}
            >
              {"3 hours ago"}
            </span>
          }
          text={
            "Lorem ipsum #dolor sit amet, consectetur adipiscing elit. Nam mollis varius ex. In ornare #scelerisque ex, ut 35 ullamcorper dui suscipit id. Mauris #maximus congue ante, sed varius"
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
                <span style={{ fontWeight: 700 }}>{"The Rock"}</span>
              </span>
            </span>
          }
        />

        <ReplyContent
          date={
            <span
              data-plasmic-name={"date22"}
              data-plasmic-override={overrides.date22}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.date22
              )}
            >
              {"3 hours ago"}
            </span>
          }
          text={
            "Lorem ipsum #dolor sit amet, consectetur adipiscing elit. Nam mollis varius ex. In ornare #scelerisque ex, ut 35 ullamcorper dui suscipit id. Mauris #maximus congue ante, sed varius"
          }
          userName={
            <span
              data-plasmic-name={"userName22"}
              data-plasmic-override={overrides.userName22}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.userName22
              )}
            >
              <span>
                <span style={{ fontWeight: 700 }}>{"The Rock"}</span>
              </span>
            </span>
          }
        />

        <ReplyContent
          date={
            <span
              data-plasmic-name={"date222"}
              data-plasmic-override={overrides.date222}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.date222
              )}
            >
              {"3 hours ago"}
            </span>
          }
          text={
            "Lorem ipsum #dolor sit amet, consectetur adipiscing elit. Nam mollis varius ex. In ornare #scelerisque ex, ut 35 ullamcorper dui suscipit id. Mauris #maximus congue ante, sed varius"
          }
          userName={
            <span
              data-plasmic-name={"userName222"}
              data-plasmic-override={overrides.userName222}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.userName222
              )}
            >
              <span>
                <span style={{ fontWeight: 700 }}>{"The Rock"}</span>
              </span>
            </span>
          }
        />
      </div>

      <ReplyInput
        data-plasmic-name={"replyInput"}
        data-plasmic-override={overrides.replyInput}
        className={classNames("__wab_instance", sty.replyInput)}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "box",
    "iconButton",
    "svg",
    "replyContainer",
    "contentPost",
    "userName3",
    "span",
    "date3",
    "userName",
    "date",
    "userName2",
    "date2",
    "userName22",
    "date22",
    "userName222",
    "date222",
    "replyInput",
  ],
  box: ["box", "iconButton", "svg"],
  iconButton: ["iconButton", "svg"],
  svg: ["svg"],
  replyContainer: [
    "replyContainer",
    "contentPost",
    "userName3",
    "span",
    "date3",
    "userName",
    "date",
    "userName2",
    "date2",
    "userName22",
    "date22",
    "userName222",
    "date222",
  ],
  contentPost: ["contentPost", "userName3", "span", "date3"],
  userName3: ["userName3"],
  span: ["span"],
  date3: ["date3"],
  userName: ["userName"],
  date: ["date"],
  userName2: ["userName2"],
  date2: ["date2"],
  userName22: ["userName22"],
  date22: ["date22"],
  userName222: ["userName222"],
  date222: ["date222"],
  replyInput: ["replyInput"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  box: "div";
  iconButton: typeof IconButton;
  svg: "svg";
  replyContainer: "div";
  contentPost: typeof ContentPost;
  userName3: "span";
  span: "span";
  date3: "span";
  userName: "span";
  date: "span";
  userName2: "span";
  date2: "span";
  userName22: "span";
  date22: "span";
  userName222: "span";
  date222: "span";
  replyInput: typeof ReplyInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPostDetails__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicPostDetails__VariantsArgs;
  args?: PlasmicPostDetails__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicPostDetails__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicPostDetails__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPostDetails__ArgProps,
      internalVariantPropNames: PlasmicPostDetails__VariantProps,
    });

    return PlasmicPostDetails__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPostDetails";
  } else {
    func.displayName = `PlasmicPostDetails.${nodeName}`;
  }
  return func;
}

export const PlasmicPostDetails = Object.assign(
  // Top-level PlasmicPostDetails renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),
    iconButton: makeNodeComponent("iconButton"),
    svg: makeNodeComponent("svg"),
    replyContainer: makeNodeComponent("replyContainer"),
    contentPost: makeNodeComponent("contentPost"),
    userName3: makeNodeComponent("userName3"),
    span: makeNodeComponent("span"),
    date3: makeNodeComponent("date3"),
    userName: makeNodeComponent("userName"),
    date: makeNodeComponent("date"),
    userName2: makeNodeComponent("userName2"),
    date2: makeNodeComponent("date2"),
    userName22: makeNodeComponent("userName22"),
    date22: makeNodeComponent("date22"),
    userName222: makeNodeComponent("userName222"),
    date222: makeNodeComponent("date222"),
    replyInput: makeNodeComponent("replyInput"),

    // Metadata about props expected for PlasmicPostDetails
    internalVariantProps: PlasmicPostDetails__VariantProps,
    internalArgProps: PlasmicPostDetails__ArgProps,
  }
);

export default PlasmicPostDetails;
/* prettier-ignore-end */
