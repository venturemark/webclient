// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: eUnRsS9UXR
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
import Tags from "../../tags/index"; // plasmic-import: 0wz8hGqZgNQ/component
import Button from "../../button/index"; // plasmic-import: JU1t0P9pFY/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicActionBar.module.css"; // plasmic-import: eUnRsS9UXR/css

import IconCloseIcon from "./icons/PlasmicIcon__IconClose"; // plasmic-import: v016HsKmfL/icon
import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon
import IconSend2Icon from "./icons/PlasmicIcon__IconSend2"; // plasmic-import: Iea8iz1ew/icon

export type PlasmicActionBar__VariantMembers = {
  error: "hasError";
  text: "hasText";
  isActive: "isActive";
  timelineSelected: "timelineSelected";
};

export type PlasmicActionBar__VariantsArgs = {
  error?: MultiChoiceArg<"hasError">;
  text?: MultiChoiceArg<"hasText">;
  isActive?: SingleBooleanChoiceArg<"isActive">;
  timelineSelected?: SingleBooleanChoiceArg<"timelineSelected">;
};

type VariantPropType = keyof PlasmicActionBar__VariantsArgs;
export const PlasmicActionBar__VariantProps = new Array<VariantPropType>(
  "error",
  "text",
  "isActive",
  "timelineSelected"
);

export type PlasmicActionBar__ArgsType = {
  userInitials?: React.ReactNode;
  slot?: React.ReactNode;
  text2?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicActionBar__ArgsType;
export const PlasmicActionBar__ArgProps = new Array<ArgPropType>(
  "userInitials",
  "slot",
  "text2",
  "children"
);

export type PlasmicActionBar__OverridesType = {
  root?: p.Flex<"div">;
  photoAvatar?: p.Flex<typeof PhotoAvatar>;
  editorContainer?: p.Flex<"div">;
  textContainer?: p.Flex<"textarea">;
  textContainer2?: p.Flex<"textarea">;
  text24?: p.Flex<"div">;
  add?: p.Flex<typeof Tags>;
  container?: p.Flex<"div">;
  selectedItemsContainer?: p.Flex<"div">;
};

export interface DefaultActionBarProps {
  userInitials?: React.ReactNode;
  slot?: React.ReactNode;
  text2?: React.ReactNode;
  children?: React.ReactNode;
  error?: MultiChoiceArg<"hasError">;
  text?: MultiChoiceArg<"hasText">;
  isActive?: SingleBooleanChoiceArg<"isActive">;
  timelineSelected?: SingleBooleanChoiceArg<"timelineSelected">;
  className?: string;
}

function PlasmicActionBar__RenderFunc(props: {
  variants: PlasmicActionBar__VariantsArgs;
  args: PlasmicActionBar__ArgsType;
  overrides: PlasmicActionBar__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__error_hasError]: hasVariant(variants, "error", "hasError"),
        [sty.root__isActive]: hasVariant(variants, "isActive", "isActive"),
        [sty.root__isActive_error_hasError]:
          hasVariant(variants, "isActive", "isActive") &&
          hasVariant(variants, "error", "hasError"),
        [sty.root__text_hasText]: hasVariant(variants, "text", "hasText"),
        [sty.root__text_hasText_error_hasError]:
          hasVariant(variants, "text", "hasText") &&
          hasVariant(variants, "error", "hasError"),
        [sty.root__timelineSelected]: hasVariant(
          variants,
          "timelineSelected",
          "timelineSelected"
        ),
      })}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__zG8Do, {
          [sty.box__error_hasError__zG8DoxYqMt]: hasVariant(
            variants,
            "error",
            "hasError"
          ),
          [sty.box__isActive__zG8DovjQpn]: hasVariant(
            variants,
            "isActive",
            "isActive"
          ),
          [sty.box__timelineSelected__zG8Do75BwG]: hasVariant(
            variants,
            "timelineSelected",
            "timelineSelected"
          ),
          [sty.box__timelineSelected_isActive__zG8Do75BwGVjQpn]:
            hasVariant(variants, "timelineSelected", "timelineSelected") &&
            hasVariant(variants, "isActive", "isActive"),
        })}
      >
        <div
          className={classNames(defaultcss.all, sty.box__vJy6G, {
            [sty.box__isActive__vJy6GvjQpn]: hasVariant(
              variants,
              "isActive",
              "isActive"
            ),
            [sty.box__timelineSelected__vJy6G75BwG]: hasVariant(
              variants,
              "timelineSelected",
              "timelineSelected"
            ),
          })}
        >
          <PhotoAvatar
            data-plasmic-name={"photoAvatar"}
            data-plasmic-override={overrides.photoAvatar}
            className={classNames("__wab_instance", sty.photoAvatar, {
              [sty.photoAvatar__isActive]: hasVariant(
                variants,
                "isActive",
                "isActive"
              ),
              [sty.photoAvatar__timelineSelected]: hasVariant(
                variants,
                "timelineSelected",
                "timelineSelected"
              ),
              [sty.photoAvatar__timelineSelected_isActive]:
                hasVariant(variants, "timelineSelected", "timelineSelected") &&
                hasVariant(variants, "isActive", "isActive"),
            })}
            userInitials={
              <p.PlasmicSlot defaultContents={"KO"} value={args.userInitials} />
            }
          />

          <div
            data-plasmic-name={"editorContainer"}
            data-plasmic-override={overrides.editorContainer}
            className={classNames(defaultcss.all, sty.editorContainer, {
              [sty.editorContainer__error_hasError]: hasVariant(
                variants,
                "error",
                "hasError"
              ),
              [sty.editorContainer__isActive]: hasVariant(
                variants,
                "isActive",
                "isActive"
              ),
              [sty.editorContainer__text_hasText_error_hasError]:
                hasVariant(variants, "text", "hasText") &&
                hasVariant(variants, "error", "hasError"),
              [sty.editorContainer__timelineSelected]: hasVariant(
                variants,
                "timelineSelected",
                "timelineSelected"
              ),
            })}
          >
            <textarea
              data-plasmic-name={"textContainer"}
              data-plasmic-override={overrides.textContainer}
              className={classNames(defaultcss.textarea, sty.textContainer, {
                [sty.textContainer__isActive]: hasVariant(
                  variants,
                  "isActive",
                  "isActive"
                ),
                [sty.textContainer__timelineSelected]: hasVariant(
                  variants,
                  "timelineSelected",
                  "timelineSelected"
                ),
              })}
              placeholder={"Write your update..." as const}
            />

            {(hasVariant(variants, "isActive", "isActive") ? true : false) ? (
              <textarea
                data-plasmic-name={"textContainer2"}
                data-plasmic-override={overrides.textContainer2}
                className={classNames(defaultcss.textarea, sty.textContainer2, {
                  [sty.textContainer2__isActive]: hasVariant(
                    variants,
                    "isActive",
                    "isActive"
                  ),
                  [sty.textContainer2__timelineSelected]: hasVariant(
                    variants,
                    "timelineSelected",
                    "timelineSelected"
                  ),
                })}
                placeholder={
                  hasVariant(variants, "isActive", "isActive")
                    ? ("Description..." as const)
                    : ("Write a paragraph" as const)
                }
              />
            ) : null}
            {(hasVariant(variants, "isActive", "isActive") ? true : false) ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__mQqJf, {
                  [sty.box__isActive__mQqJfvjQpn]: hasVariant(
                    variants,
                    "isActive",
                    "isActive"
                  ),
                  [sty.box__timelineSelected__mQqJf75BwG]: hasVariant(
                    variants,
                    "timelineSelected",
                    "timelineSelected"
                  ),
                  [sty.box__timelineSelected_isActive__mQqJf75BwGVjQpn]:
                    hasVariant(
                      variants,
                      "timelineSelected",
                      "timelineSelected"
                    ) && hasVariant(variants, "isActive", "isActive"),
                })}
              >
                {(
                  hasVariant(variants, "isActive", "isActive")
                    ? true
                    : hasVariant(globalVariants, "screen", "mobile")
                    ? false
                    : true
                ) ? (
                  <div
                    data-plasmic-name={"text24"}
                    data-plasmic-override={overrides.text24}
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text24,
                      {
                        [sty.text24__isActive]: hasVariant(
                          variants,
                          "isActive",
                          "isActive"
                        ),
                      }
                    )}
                  >
                    {"Post to: "}
                  </div>
                ) : null}

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box__bxEbl, {
                    [sty.box__isActive__bxEblvjQpn]: hasVariant(
                      variants,
                      "isActive",
                      "isActive"
                    ),
                  })}
                >
                  {(
                    hasVariant(variants, "isActive", "isActive") ? true : false
                  ) ? (
                    <p.Stack
                      as={"div"}
                      hasGap={
                        hasVariant(variants, "isActive", "isActive")
                          ? true
                          : false
                      }
                      className={classNames(defaultcss.all, sty.box__iriP, {
                        [sty.box__isActive__iriPvjQpn]: hasVariant(
                          variants,
                          "isActive",
                          "isActive"
                        ),
                      })}
                    >
                      <Tags buttonFeatures={["icon", "hasText"]} text2={"Wins"}>
                        <IconCloseIcon
                          className={classNames(defaultcss.all, sty.svg__dVcAh)}
                          role={"img"}
                        />
                      </Tags>

                      <Tags
                        data-plasmic-name={"add"}
                        data-plasmic-override={overrides.add}
                        buttonFeatures={["icon"]}
                        buttonStyle={"secondaryGreen" as const}
                        className={classNames("__wab_instance", sty.add, {
                          [sty.add__isActive]: hasVariant(
                            variants,
                            "isActive",
                            "isActive"
                          ),
                        })}
                        text2={"Wins"}
                      >
                        <IconPlusIcon
                          className={classNames(defaultcss.all, sty.svg__aaXl8)}
                          role={"img"}
                        />
                      </Tags>
                    </p.Stack>
                  ) : null}
                </p.Stack>

                <Button
                  buttonFeatures={[]}
                  buttonStyle={"primaryPurple" as const}
                  className={classNames("__wab_instance", sty.button__nAd4W, {
                    [sty.button__isActive__nAd4WvjQpn]: hasVariant(
                      variants,
                      "isActive",
                      "isActive"
                    ),
                  })}
                  count={"1"}
                  slot={
                    <IconPlusIcon
                      className={classNames(defaultcss.all, sty.svg__orOwz)}
                      role={"img"}
                    />
                  }
                  text2={"Post"}
                >
                  <IconSend2Icon
                    className={classNames(defaultcss.all, sty.svg__ljFz)}
                    role={"img"}
                  />
                </Button>

                {(
                  hasVariant(variants, "timelineSelected", "timelineSelected")
                    ? true
                    : false
                ) ? (
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"container"}
                    data-plasmic-override={overrides.container}
                    hasGap={
                      hasVariant(
                        variants,
                        "timelineSelected",
                        "timelineSelected"
                      ) ||
                      (hasVariant(variants, "isActive", "isActive") &&
                        hasVariant(
                          variants,
                          "timelineSelected",
                          "timelineSelected"
                        ))
                        ? true
                        : false
                    }
                    className={classNames(defaultcss.all, sty.container, {
                      [sty.container__isActive]: hasVariant(
                        variants,
                        "isActive",
                        "isActive"
                      ),
                      [sty.container__isActive_timelineSelected]:
                        hasVariant(variants, "isActive", "isActive") &&
                        hasVariant(
                          variants,
                          "timelineSelected",
                          "timelineSelected"
                        ),
                      [sty.container__timelineSelected]: hasVariant(
                        variants,
                        "timelineSelected",
                        "timelineSelected"
                      ),
                    })}
                  >
                    {(
                      hasVariant(variants, "isActive", "isActive") &&
                      hasVariant(
                        variants,
                        "timelineSelected",
                        "timelineSelected"
                      )
                        ? true
                        : false
                    ) ? (
                      <div
                        data-plasmic-name={"selectedItemsContainer"}
                        data-plasmic-override={overrides.selectedItemsContainer}
                        className={classNames(
                          defaultcss.all,
                          sty.selectedItemsContainer,
                          {
                            [sty.selectedItemsContainer__isActive_timelineSelected]:
                              hasVariant(variants, "isActive", "isActive") &&
                              hasVariant(
                                variants,
                                "timelineSelected",
                                "timelineSelected"
                              ),
                          }
                        )}
                      >
                        {(
                          hasVariant(variants, "isActive", "isActive") &&
                          hasVariant(
                            variants,
                            "timelineSelected",
                            "timelineSelected"
                          )
                            ? false
                            : false
                        ) ? (
                          <Tags
                            className={classNames(
                              "__wab_instance",
                              sty.tags___81EIe,
                              {
                                [sty.tags__isActive_timelineSelected___81EIevjQpn75BwG]:
                                  hasVariant(
                                    variants,
                                    "isActive",
                                    "isActive"
                                  ) &&
                                  hasVariant(
                                    variants,
                                    "timelineSelected",
                                    "timelineSelected"
                                  ),
                              }
                            )}
                            text2={"Tag Name"}
                          >
                            <IconCloseIcon
                              className={classNames(
                                defaultcss.all,
                                sty.svg__hwNLe
                              )}
                              role={"img"}
                            />
                          </Tags>
                        ) : null}
                        {(
                          hasVariant(variants, "isActive", "isActive") &&
                          hasVariant(
                            variants,
                            "timelineSelected",
                            "timelineSelected"
                          )
                            ? true
                            : false
                        ) ? (
                          <button
                            className={classNames(
                              defaultcss.button,
                              sty.button__p5MKq,
                              {
                                [sty.button__isActive_timelineSelected__p5MKqvjQpn75BwG]:
                                  hasVariant(
                                    variants,
                                    "isActive",
                                    "isActive"
                                  ) &&
                                  hasVariant(
                                    variants,
                                    "timelineSelected",
                                    "timelineSelected"
                                  ),
                              }
                            )}
                          >
                            <p.Stack
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                defaultcss.all,
                                sty.box__kBcf
                              )}
                            >
                              {(
                                hasVariant(variants, "isActive", "isActive") &&
                                hasVariant(
                                  variants,
                                  "timelineSelected",
                                  "timelineSelected"
                                )
                                  ? false
                                  : true
                              ) ? (
                                <p.PlasmicSlot
                                  defaultContents={
                                    <IconPlusIcon
                                      className={classNames(
                                        defaultcss.all,
                                        sty.svg__niToo
                                      )}
                                      role={"img"}
                                    />
                                  }
                                  value={args.slot}
                                />
                              ) : null}
                              <p.PlasmicSlot
                                defaultContents={"Metric"}
                                value={args.text2}
                                className={classNames(sty.slotText2, {
                                  [sty.slotText2__isActive_timelineSelected]:
                                    hasVariant(
                                      variants,
                                      "isActive",
                                      "isActive"
                                    ) &&
                                    hasVariant(
                                      variants,
                                      "timelineSelected",
                                      "timelineSelected"
                                    ),
                                })}
                              />
                              <p.PlasmicSlot
                                defaultContents={
                                  <IconCloseIcon
                                    className={classNames(
                                      defaultcss.all,
                                      sty.svg__kMNxX
                                    )}
                                    role={"img"}
                                  />
                                }
                                value={args.children}
                                className={classNames(sty.slotChildren)}
                              />
                            </p.Stack>
                          </button>
                        ) : null}
                      </div>
                    ) : null}
                  </p.Stack>
                ) : null}
              </p.Stack>
            ) : null}
          </div>
        </div>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "photoAvatar",
    "editorContainer",
    "textContainer",
    "textContainer2",
    "text24",
    "add",
    "container",
    "selectedItemsContainer",
  ],
  photoAvatar: ["photoAvatar"],
  editorContainer: [
    "editorContainer",
    "textContainer",
    "textContainer2",
    "text24",
    "add",
    "container",
    "selectedItemsContainer",
  ],
  textContainer: ["textContainer"],
  textContainer2: ["textContainer2"],
  text24: ["text24"],
  add: ["add"],
  container: ["container", "selectedItemsContainer"],
  selectedItemsContainer: ["selectedItemsContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  photoAvatar: typeof PhotoAvatar;
  editorContainer: "div";
  textContainer: "textarea";
  textContainer2: "textarea";
  text24: "div";
  add: typeof Tags;
  container: "div";
  selectedItemsContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActionBar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicActionBar__VariantsArgs;
  args?: PlasmicActionBar__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicActionBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicActionBar__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicActionBar__ArgProps,
      internalVariantPropNames: PlasmicActionBar__VariantProps,
    });

    return PlasmicActionBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicActionBar";
  } else {
    func.displayName = `PlasmicActionBar.${nodeName}`;
  }
  return func;
}

export const PlasmicActionBar = Object.assign(
  // Top-level PlasmicActionBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    photoAvatar: makeNodeComponent("photoAvatar"),
    editorContainer: makeNodeComponent("editorContainer"),
    textContainer: makeNodeComponent("textContainer"),
    textContainer2: makeNodeComponent("textContainer2"),
    text24: makeNodeComponent("text24"),
    add: makeNodeComponent("add"),
    container: makeNodeComponent("container"),
    selectedItemsContainer: makeNodeComponent("selectedItemsContainer"),

    // Metadata about props expected for PlasmicActionBar
    internalVariantProps: PlasmicActionBar__VariantProps,
    internalArgProps: PlasmicActionBar__ArgProps,
  }
);

export default PlasmicActionBar;
/* prettier-ignore-end */
