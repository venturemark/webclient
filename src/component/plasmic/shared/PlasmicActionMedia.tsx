// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: ja2kJswbaeG
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicActionMedia.module.css"; // plasmic-import: ja2kJswbaeG/css

import IconCloseIcon from "./icons/PlasmicIcon__IconClose"; // plasmic-import: v016HsKmfL/icon

export type PlasmicActionMedia__VariantMembers = {
  isEdit: "isEdit";
};

export type PlasmicActionMedia__VariantsArgs = {
  isEdit?: SingleBooleanChoiceArg<"isEdit">;
};

type VariantPropType = keyof PlasmicActionMedia__VariantsArgs;
export const PlasmicActionMedia__VariantProps = new Array<VariantPropType>(
  "isEdit"
);

export type PlasmicActionMedia__ArgsType = {};
type ArgPropType = keyof PlasmicActionMedia__ArgsType;
export const PlasmicActionMedia__ArgProps = new Array<ArgPropType>();

export type PlasmicActionMedia__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  imgHolder?: p.Flex<typeof p.PlasmicImg>;
  closeButton?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultActionMediaProps {
  isEdit?: SingleBooleanChoiceArg<"isEdit">;
  className?: string;
}

function PlasmicActionMedia__RenderFunc(props: {
  variants: PlasmicActionMedia__VariantsArgs;
  args: PlasmicActionMedia__ArgsType;
  overrides: PlasmicActionMedia__OverridesType;
  dataFetches?: PlasmicActionMedia__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    true ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <p.PlasmicImg
            data-plasmic-name={"imgHolder"}
            data-plasmic-override={overrides.imgHolder}
            alt={""}
            className={classNames(sty.imgHolder)}
            displayHeight={"100%" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            loading={"lazy" as const}
            src={{
              src: "https://site-assets.plasmic.app/3eb517c2f410b0cd43b35dcdb1f632ef.svg",
              fullWidth: 145,
              fullHeight: 150,
              aspectRatio: 0.96518,
            }}
          />
        </div>

        {(hasVariant(variants, "isEdit", "isEdit") ? true : true) ? (
          <div
            data-plasmic-name={"closeButton"}
            data-plasmic-override={overrides.closeButton}
            className={classNames(projectcss.all, sty.closeButton, {
              [sty.closeButton__isEdit]: hasVariant(
                variants,
                "isEdit",
                "isEdit"
              ),
            })}
          >
            <IconCloseIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          </div>
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "imgHolder", "closeButton", "svg"],
  freeBox: ["freeBox", "imgHolder"],
  imgHolder: ["imgHolder"],
  closeButton: ["closeButton", "svg"],
  svg: ["svg"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  imgHolder: typeof p.PlasmicImg;
  closeButton: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActionMedia__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicActionMedia__VariantsArgs;
    args?: PlasmicActionMedia__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicActionMedia__Fetches;
  } & Omit<PlasmicActionMedia__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicActionMedia__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicActionMedia__ArgProps,
      internalVariantPropNames: PlasmicActionMedia__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicActionMedia__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicActionMedia";
  } else {
    func.displayName = `PlasmicActionMedia.${nodeName}`;
  }
  return func;
}

export const PlasmicActionMedia = Object.assign(
  // Top-level PlasmicActionMedia renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    imgHolder: makeNodeComponent("imgHolder"),
    closeButton: makeNodeComponent("closeButton"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicActionMedia
    internalVariantProps: PlasmicActionMedia__VariantProps,
    internalArgProps: PlasmicActionMedia__ArgProps,
  }
);

export default PlasmicActionMedia;
/* prettier-ignore-end */
