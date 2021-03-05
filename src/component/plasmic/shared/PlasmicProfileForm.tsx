// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: _XzWccJtXuE
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
import PhotoAvatar from "../../photoavatar/index"; // plasmic-import: uaoIqTcPRC-/component
import InputText from "../../inputtext/index"; // plasmic-import: v0nNSTRV39/component
import Button from "../../button/index"; // plasmic-import: JU1t0P9pFY/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import * as sty from "./PlasmicProfileForm.module.css"; // plasmic-import: _XzWccJtXuE/css

import IconCloseIcon from "./icons/PlasmicIcon__IconClose"; // plasmic-import: v016HsKmfL/icon
import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon
import IconRightIcon from "./icons/PlasmicIcon__IconRight"; // plasmic-import: v822ZhrBq/icon

export type PlasmicProfileForm__VariantMembers = {
  editProfile: "editProfile";
};

export type PlasmicProfileForm__VariantsArgs = {
  editProfile?: SingleBooleanChoiceArg<"editProfile">;
};

type VariantPropType = keyof PlasmicProfileForm__VariantsArgs;
export const PlasmicProfileForm__VariantProps = new Array<VariantPropType>(
  "editProfile"
);

export type PlasmicProfileForm__ArgsType = {};
type ArgPropType = keyof PlasmicProfileForm__ArgsType;
export const PlasmicProfileForm__ArgProps = new Array<ArgPropType>();

export type PlasmicProfileForm__OverridesType = {
  form?: p.Flex<"form">;
  close?: p.Flex<typeof IconButton>;
  photoAvatar?: p.Flex<typeof PhotoAvatar>;
  link?: p.Flex<"a">;
  nameField?: p.Flex<typeof InputText>;
  jobField?: p.Flex<typeof InputText>;
  cancel?: p.Flex<typeof Button>;
  text2?: p.Flex<"div">;
  save?: p.Flex<typeof Button>;
  text22?: p.Flex<"div">;
};

export interface DefaultProfileFormProps {
  editProfile?: SingleBooleanChoiceArg<"editProfile">;
  className?: string;
}

function PlasmicProfileForm__RenderFunc(props: {
  variants: PlasmicProfileForm__VariantsArgs;
  args: PlasmicProfileForm__ArgsType;
  overrides: PlasmicProfileForm__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <form
      data-plasmic-name={"form"}
      data-plasmic-override={overrides.form}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.form, {
        [sty.form__editProfile]: hasVariant(
          variants,
          "editProfile",
          "editProfile"
        ),
      })}
    >
      {(hasVariant(variants, "editProfile", "editProfile") ? true : false) ? (
        <div
          className={classNames(defaultcss.all, sty.box__ytyPi, {
            [sty.box__editProfile__ytyPiOylNj]: hasVariant(
              variants,
              "editProfile",
              "editProfile"
            ),
          })}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box___55LI4,
              {
                [sty.box__editProfile___55LI4OylNj]: hasVariant(
                  variants,
                  "editProfile",
                  "editProfile"
                ),
              }
            )}
          >
            {"Edit Profile"}
          </div>

          <IconButton
            data-plasmic-name={"close"}
            data-plasmic-override={overrides.close}
            className={classNames("__wab_instance", sty.close, {
              [sty.close__editProfile]: hasVariant(
                variants,
                "editProfile",
                "editProfile"
              ),
            })}
          >
            <IconCloseIcon
              className={classNames(defaultcss.all, sty.svg__p2Fm6)}
              role={"img"}
            />
          </IconButton>
        </div>
      ) : null}
      {(hasVariant(variants, "editProfile", "editProfile") ? true : false) ? (
        <div
          className={classNames(defaultcss.all, sty.box__lhTso, {
            [sty.box__editProfile__lhTsoOylNj]: hasVariant(
              variants,
              "editProfile",
              "editProfile"
            ),
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__khj8R)}
          >
            <PhotoAvatar
              data-plasmic-name={"photoAvatar"}
              data-plasmic-override={overrides.photoAvatar}
              variant={["isLarge"]}
            />

            <a
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link,
                {
                  [sty.link__editProfile]: hasVariant(
                    variants,
                    "editProfile",
                    "editProfile"
                  ),
                }
              )}
            >
              {hasVariant(variants, "editProfile", "editProfile")
                ? "Remove Photo"
                : "Upload Photo"}
            </a>
          </p.Stack>
        </div>
      ) : null}

      <InputText
        data-plasmic-name={"nameField"}
        data-plasmic-override={overrides.nameField}
        className={classNames("__wab_instance", sty.nameField)}
        hasLabel={"hasLabel" as const}
        label={"Full Name"}
      >
        {"This will be used as your display name"}
      </InputText>

      <InputText
        data-plasmic-name={"jobField"}
        data-plasmic-override={overrides.jobField}
        className={classNames("__wab_instance", sty.jobField, {
          [sty.jobField__editProfile]: hasVariant(
            variants,
            "editProfile",
            "editProfile"
          ),
        })}
        hasLabel={"hasLabel" as const}
        hasTextHelper={"hasTextHelper" as const}
        label={"What I Do"}
      >
        {"Let people know what you do"}
      </InputText>

      {(hasVariant(variants, "editProfile", "editProfile") ? true : true) ? (
        <p.Stack
          as={"div"}
          hasGap={
            hasVariant(variants, "editProfile", "editProfile") ? true : false
          }
          className={classNames(defaultcss.all, sty.box__z9Te4, {
            [sty.box__editProfile__z9Te4OylNj]: hasVariant(
              variants,
              "editProfile",
              "editProfile"
            ),
          })}
        >
          <Button
            data-plasmic-name={"cancel"}
            data-plasmic-override={overrides.cancel}
            buttonStyle={
              hasVariant(variants, "editProfile", "editProfile")
                ? ("secondaryPurple" as const)
                : ("primaryPurple" as const)
            }
            count={"1"}
            slot={
              <IconPlusIcon
                className={classNames(defaultcss.all, sty.svg__dVu44)}
                role={"img"}
              />
            }
            text2={
              <div
                data-plasmic-name={"text2"}
                data-plasmic-override={overrides.text2}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text2,
                  {
                    [sty.text2__editProfile]: hasVariant(
                      variants,
                      "editProfile",
                      "editProfile"
                    ),
                  }
                )}
              >
                {hasVariant(variants, "editProfile", "editProfile")
                  ? "Cancel"
                  : "Complete"}
              </div>
            }
          >
            <IconRightIcon
              className={classNames(defaultcss.all, sty.svg__sv8Ps)}
              role={"img"}
            />
          </Button>

          {(
            hasVariant(variants, "editProfile", "editProfile") ? true : false
          ) ? (
            <Button
              data-plasmic-name={"save"}
              data-plasmic-override={overrides.save}
              buttonStyle={"primaryPurple" as const}
              className={classNames("__wab_instance", sty.save, {
                [sty.save__editProfile]: hasVariant(
                  variants,
                  "editProfile",
                  "editProfile"
                ),
              })}
              count={"1"}
              slot={
                <IconPlusIcon
                  className={classNames(defaultcss.all, sty.svg__dsa3)}
                  role={"img"}
                />
              }
              text2={
                <div
                  data-plasmic-name={"text22"}
                  data-plasmic-override={overrides.text22}
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text22,
                    {
                      [sty.text22__editProfile]: hasVariant(
                        variants,
                        "editProfile",
                        "editProfile"
                      ),
                    }
                  )}
                >
                  {hasVariant(variants, "editProfile", "editProfile")
                    ? "Save"
                    : "Complete"}
                </div>
              }
            >
              <IconRightIcon
                className={classNames(defaultcss.all, sty.svg__sweNz)}
                role={"img"}
              />
            </Button>
          ) : null}
        </p.Stack>
      ) : null}
    </form>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  form: [
    "form",
    "close",
    "photoAvatar",
    "link",
    "nameField",
    "jobField",
    "cancel",
    "text2",
    "save",
    "text22",
  ],
  close: ["close"],
  photoAvatar: ["photoAvatar"],
  link: ["link"],
  nameField: ["nameField"],
  jobField: ["jobField"],
  cancel: ["cancel", "text2"],
  text2: ["text2"],
  save: ["save", "text22"],
  text22: ["text22"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  form: "form";
  close: typeof IconButton;
  photoAvatar: typeof PhotoAvatar;
  link: "a";
  nameField: typeof InputText;
  jobField: typeof InputText;
  cancel: typeof Button;
  text2: "div";
  save: typeof Button;
  text22: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProfileForm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicProfileForm__VariantsArgs;
  args?: PlasmicProfileForm__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicProfileForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicProfileForm__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicProfileForm__ArgProps,
      internalVariantPropNames: PlasmicProfileForm__VariantProps,
    });

    return PlasmicProfileForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "form") {
    func.displayName = "PlasmicProfileForm";
  } else {
    func.displayName = `PlasmicProfileForm.${nodeName}`;
  }
  return func;
}

export const PlasmicProfileForm = Object.assign(
  // Top-level PlasmicProfileForm renders the root element
  makeNodeComponent("form"),
  {
    // Helper components rendering sub-elements
    close: makeNodeComponent("close"),
    photoAvatar: makeNodeComponent("photoAvatar"),
    link: makeNodeComponent("link"),
    nameField: makeNodeComponent("nameField"),
    jobField: makeNodeComponent("jobField"),
    cancel: makeNodeComponent("cancel"),
    text2: makeNodeComponent("text2"),
    save: makeNodeComponent("save"),
    text22: makeNodeComponent("text22"),

    // Metadata about props expected for PlasmicProfileForm
    internalVariantProps: PlasmicProfileForm__VariantProps,
    internalArgProps: PlasmicProfileForm__ArgProps,
  }
);

export default PlasmicProfileForm;
/* prettier-ignore-end */
