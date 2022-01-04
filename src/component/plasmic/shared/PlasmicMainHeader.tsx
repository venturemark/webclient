// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: LRwT0lHdps
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
import IconButtonMember from "../../iconbuttonmember/index"; // plasmic-import: ZhI9zuyxBT/component

import { useScreenVariants as useScreenVariantsszbTUtTUfDw81Pi } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicMainHeader.module.css"; // plasmic-import: LRwT0lHdps/css

import IconExternalLinkIcon from "./icons/PlasmicIcon__IconExternalLink"; // plasmic-import: BDHiWdSyk/icon
import IconFeedIcon from "./icons/PlasmicIcon__IconFeed"; // plasmic-import: gkIqWTG_m/icon
import InfosvgIcon from "./icons/PlasmicIcon__Infosvg"; // plasmic-import: goVw5oohlB/icon

export type PlasmicMainHeader__VariantMembers = {
  headerStyles: "timelineHeader" | "ventureHeader" | "onboardingHeader";
  isActive: "feed" | "members" | "settings" | "unnamedVariant";
  showVentureDescription: "showVentureDescription";
  isOnboarding: "isOnboarding";
  isPublic: "isPublic";
};

export type PlasmicMainHeader__VariantsArgs = {
  headerStyles?: SingleChoiceArg<
    "timelineHeader" | "ventureHeader" | "onboardingHeader"
  >;
  isActive?: SingleChoiceArg<
    "feed" | "members" | "settings" | "unnamedVariant"
  >;
  showVentureDescription?: SingleBooleanChoiceArg<"showVentureDescription">;
  isOnboarding?: SingleBooleanChoiceArg<"isOnboarding">;
  isPublic?: SingleBooleanChoiceArg<"isPublic">;
};

type VariantPropType = keyof PlasmicMainHeader__VariantsArgs;
export const PlasmicMainHeader__VariantProps = new Array<VariantPropType>(
  "headerStyles",
  "isActive",
  "showVentureDescription",
  "isOnboarding",
  "isPublic"
);

export type PlasmicMainHeader__ArgsType = {
  timelineDescription?: React.ReactNode;
  timelineName?: React.ReactNode;
  ventureName?: React.ReactNode;
  ventureDescription?: React.ReactNode;
};

type ArgPropType = keyof PlasmicMainHeader__ArgsType;
export const PlasmicMainHeader__ArgProps = new Array<ArgPropType>(
  "timelineDescription",
  "timelineName",
  "ventureName",
  "ventureDescription"
);

export type PlasmicMainHeader__OverridesType = {
  container?: p.Flex<"div">;
  breadcrumbLogo?: p.Flex<typeof p.PlasmicImg>;
  iconContainer?: p.Flex<"div">;
  viewHome?: p.Flex<typeof IconButton>;
  viewMembers?: p.Flex<typeof IconButtonMember>;
  viewSettings?: p.Flex<typeof IconButton>;
};

export interface DefaultMainHeaderProps {
  timelineDescription?: React.ReactNode;
  timelineName?: React.ReactNode;
  ventureName?: React.ReactNode;
  ventureDescription?: React.ReactNode;
  headerStyles?: SingleChoiceArg<
    "timelineHeader" | "ventureHeader" | "onboardingHeader"
  >;
  isActive?: SingleChoiceArg<
    "feed" | "members" | "settings" | "unnamedVariant"
  >;
  showVentureDescription?: SingleBooleanChoiceArg<"showVentureDescription">;
  isOnboarding?: SingleBooleanChoiceArg<"isOnboarding">;
  isPublic?: SingleBooleanChoiceArg<"isPublic">;
  className?: string;
}

function PlasmicMainHeader__RenderFunc(props: {
  variants: PlasmicMainHeader__VariantsArgs;
  args: PlasmicMainHeader__ArgsType;
  overrides: PlasmicMainHeader__OverridesType;
  dataFetches?: PlasmicMainHeader__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsszbTUtTUfDw81Pi(),
  });

  return (
    true ? (
      <div
        data-plasmic-name={"container"}
        data-plasmic-override={overrides.container}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          sty.container,
          {
            [sty.container__headerStyles_onboardingHeader]: hasVariant(
              variants,
              "headerStyles",
              "onboardingHeader"
            ),
            [sty.container__headerStyles_timelineHeader]: hasVariant(
              variants,
              "headerStyles",
              "timelineHeader"
            ),
            [sty.container__headerStyles_ventureHeader]: hasVariant(
              variants,
              "headerStyles",
              "ventureHeader"
            ),
            [sty.container__isActive_feed]: hasVariant(
              variants,
              "isActive",
              "feed"
            ),
          }
        )}
      >
        {(
          hasVariant(variants, "headerStyles", "onboardingHeader") ? true : true
        ) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___3Xg51, {
              [sty.freeBox__headerStyles_onboardingHeader___3Xg51K3Tru]:
                hasVariant(variants, "headerStyles", "onboardingHeader"),
              [sty.freeBox__headerStyles_timelineHeader___3Xg51Rxxpi]:
                hasVariant(variants, "headerStyles", "timelineHeader"),
              [sty.freeBox__headerStyles_ventureHeader___3Xg51NMQ9]: hasVariant(
                variants,
                "headerStyles",
                "ventureHeader"
              ),
            })}
          >
            {(
              hasVariant(variants, "headerStyles", "onboardingHeader")
                ? true
                : true
            ) ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__sDNfz, {
                  [sty.freeBox__headerStyles_onboardingHeader__sDNfzk3Tru]:
                    hasVariant(variants, "headerStyles", "onboardingHeader"),
                  [sty.freeBox__headerStyles_timelineHeader__sDNfzRxxpi]:
                    hasVariant(variants, "headerStyles", "timelineHeader"),
                  [sty.freeBox__headerStyles_ventureHeader__sDNfzNMQ9]:
                    hasVariant(variants, "headerStyles", "ventureHeader"),
                })}
              >
                {(
                  hasVariant(variants, "headerStyles", "onboardingHeader")
                    ? true
                    : hasVariant(variants, "headerStyles", "ventureHeader")
                    ? false
                    : true
                ) ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__yHtqj, {
                      [sty.freeBox__headerStyles_onboardingHeader__yHtqJk3Tru]:
                        hasVariant(
                          variants,
                          "headerStyles",
                          "onboardingHeader"
                        ),
                      [sty.freeBox__headerStyles_timelineHeader__yHtqjRxxpi]:
                        hasVariant(variants, "headerStyles", "timelineHeader"),
                      [sty.freeBox__headerStyles_ventureHeader__yHtqjnMQ9]:
                        hasVariant(variants, "headerStyles", "ventureHeader"),
                    })}
                  >
                    {(
                      hasVariant(variants, "headerStyles", "onboardingHeader")
                        ? false
                        : true
                    )
                      ? p.renderPlasmicSlot({
                          defaultContents: "Wins",
                          value: args.timelineName,
                          className: classNames(sty.slotTargetTimelineName, {
                            [sty.slotTargetTimelineName__headerStyles_onboardingHeader]:
                              hasVariant(
                                variants,
                                "headerStyles",
                                "onboardingHeader"
                              ),
                            [sty.slotTargetTimelineName__headerStyles_timelineHeader]:
                              hasVariant(
                                variants,
                                "headerStyles",
                                "timelineHeader"
                              ),
                            [sty.slotTargetTimelineName__headerStyles_ventureHeader]:
                              hasVariant(
                                variants,
                                "headerStyles",
                                "ventureHeader"
                              ),
                          }),
                        })
                      : null}
                    {(
                      hasVariant(variants, "headerStyles", "onboardingHeader")
                        ? true
                        : true
                    ) ? (
                      <p.PlasmicImg
                        data-plasmic-name={"breadcrumbLogo"}
                        data-plasmic-override={overrides.breadcrumbLogo}
                        alt={""}
                        className={classNames(sty.breadcrumbLogo, {
                          [sty.breadcrumbLogo__headerStyles_onboardingHeader]:
                            hasVariant(
                              variants,
                              "headerStyles",
                              "onboardingHeader"
                            ),
                        })}
                        displayHeight={"35px" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"none" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"auto" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxOTMgMzYiPgogIDxwYXRoIGQ9Ik00My4wMTYgMTMuNjQ4Yy40MzItLjY0IDEuMDI0LTEuMTYgMS43NzYtMS41Ni43NjgtLjQgMS42NC0uNiAyLjYxNi0uNiAxLjEzNiAwIDIuMTYuMjggMy4wNzIuODQuOTI4LjU2IDEuNjU2IDEuMzYgMi4xODQgMi40LjU0NCAxLjAyNC44MTYgMi4yMTYuODE2IDMuNTc2IDAgMS4zNi0uMjcyIDIuNTY4LS44MTYgMy42MjQtLjUyOCAxLjA0LTEuMjU2IDEuODQ4LTIuMTg0IDIuNDI0LS45MTIuNTc2LTEuOTM2Ljg2NC0zLjA3Mi44NjQtLjk5MiAwLTEuODY0LS4xOTItMi42MTYtLjU3Ni0uNzM2LS40LTEuMzI4LS45MTItMS43NzYtMS41MzZWMjVoLTMuMzZWNy4yNGgzLjM2djYuNDA4em03LjAzMiA0LjY1NmMwLS44LS4xNjgtMS40ODgtLjUwNC0yLjA2NC0uMzItLjU5Mi0uNzUyLTEuMDQtMS4yOTYtMS4zNDRhMy40MDMgMy40MDMgMCAwMC0xLjcyOC0uNDU2Yy0uNjA4IDAtMS4xODQuMTYtMS43MjguNDgtLjUyOC4zMDQtLjk2Ljc1Mi0xLjI5NiAxLjM0NC0uMzIuNTkyLS40OCAxLjI4OC0uNDggMi4wODhzLjE2IDEuNDk2LjQ4IDIuMDg4Yy4zMzYuNTkyLjc2OCAxLjA0OCAxLjI5NiAxLjM2OGEzLjQ5IDMuNDkgMCAwMDEuNzI4LjQ1NmMuNjI0IDAgMS4yLS4xNiAxLjcyOC0uNDhhMy40NSAzLjQ1IDAgMDAxLjI5Ni0xLjM2OGMuMzM2LS41OTIuNTA0LTEuMjk2LjUwNC0yLjExMnptOS4yMzQtNC41MzZhNC43NTUgNC43NTUgMCAwMTEuNjgtMS42NTZjLjcwNC0uNCAxLjUwNC0uNiAyLjQtLjZ2My41MjhoLS44ODhjLTEuMDU2IDAtMS44NTYuMjQ4LTIuNC43NDQtLjUyOC40OTYtLjc5MiAxLjM2LS43OTIgMi41OTJWMjVoLTMuMzZWMTEuNzA0aDMuMzZ2Mi4wNjR6bTE4LjcwMyA0LjI5NmMwIC40OC0uMDMyLjkxMi0uMDk2IDEuMjk2aC05LjcyYy4wOC45Ni40MTYgMS43MTIgMS4wMDggMi4yNTYuNTkyLjU0NCAxLjMyLjgxNiAyLjE4NC44MTYgMS4yNDggMCAyLjEzNi0uNTM2IDIuNjY0LTEuNjA4aDMuNjI0Yy0uMzg0IDEuMjgtMS4xMiAyLjMzNi0yLjIwOCAzLjE2OC0xLjA4OC44MTYtMi40MjQgMS4yMjQtNC4wMDggMS4yMjQtMS4yOCAwLTIuNDMyLS4yOC0zLjQ1Ni0uODRhNi4xODIgNi4xODIgMCAwMS0yLjM3Ni0yLjQyNGMtLjU2LTEuMDQtLjg0LTIuMjQtLjg0LTMuNiAwLTEuMzc2LjI4LTIuNTg0Ljg0LTMuNjI0YTUuODYxIDUuODYxIDAgMDEyLjM1Mi0yLjRjMS4wMDgtLjU2IDIuMTY4LS44NCAzLjQ4LS44NCAxLjI2NCAwIDIuMzkyLjI3MiAzLjM4NC44MTZhNS42MyA1LjYzIDAgMDEyLjMyOCAyLjMyOGMuNTYuOTkyLjg0IDIuMTM2Ljg0IDMuNDMyem0tMy40OC0uOTZjLS4wMTYtLjg2NC0uMzI4LTEuNTUyLS45MzYtMi4wNjQtLjYwOC0uNTI4LTEuMzUyLS43OTItMi4yMzItLjc5Mi0uODMyIDAtMS41MzYuMjU2LTIuMTEyLjc2OC0uNTYuNDk2LS45MDQgMS4xOTItMS4wMzIgMi4wODhoNi4zMTJ6bTUuMDY4IDEuMmMwLTEuMzQ0LjI2NC0yLjUzNi43OTItMy41NzYuNTQ0LTEuMDQgMS4yNzItMS44NCAyLjE4NC0yLjQuOTI4LS41NiAxLjk2LS44NCAzLjA5Ni0uODQuOTkyIDAgMS44NTYuMiAyLjU5Mi42Ljc1Mi40IDEuMzUyLjkwNCAxLjggMS41MTJ2LTEuODk2aDMuMzg0VjI1aC0zLjM4NHYtMS45NDRjLS40MzIuNjI0LTEuMDMyIDEuMTQ0LTEuOCAxLjU2LS43NTIuNC0xLjYyNC42LTIuNjE2LjZhNS43MSA1LjcxIDAgMDEtMy4wNzItLjg2NGMtLjkxMi0uNTc2LTEuNjQtMS4zODQtMi4xODQtMi40MjQtLjUyOC0xLjA1Ni0uNzkyLTIuMjY0LS43OTItMy42MjR6bTEwLjQ2NC4wNDhjMC0uODE2LS4xNi0xLjUxMi0uNDgtMi4wODgtLjMyLS41OTItLjc1Mi0xLjA0LTEuMjk2LTEuMzQ0YTMuMzk3IDMuMzk3IDAgMDAtMS43NTItLjQ4Yy0uNjI0IDAtMS4yLjE1Mi0xLjcyOC40NTYtLjUyOC4zMDQtLjk2Ljc1Mi0xLjI5NiAxLjM0NC0uMzIuNTc2LS40OCAxLjI2NC0uNDggMi4wNjRzLjE2IDEuNTA0LjQ4IDIuMTEyYy4zMzYuNTkyLjc2OCAxLjA0OCAxLjI5NiAxLjM2OC41NDQuMzIgMS4xMi40OCAxLjcyOC40OC42MjQgMCAxLjIwOC0uMTUyIDEuNzUyLS40NTYuNTQ0LS4zMi45NzYtLjc2OCAxLjI5Ni0xLjM0NC4zMi0uNTkyLjQ4LTEuMjk2LjQ4LTIuMTEyem01LjgwMi0uMDQ4YzAtMS4zNDQuMjY0LTIuNTM2Ljc5Mi0zLjU3Ni41NDQtMS4wNCAxLjI4LTEuODQgMi4yMDgtMi40LjkyOC0uNTYgMS45Ni0uODQgMy4wOTYtLjg0YTUuNTUgNS41NSAwIDAxMi40NzIuNTc2Yy43ODQuMzY4IDEuNDA4Ljg2NCAxLjg3MiAxLjQ4OFY3LjI0aDMuNDA4VjI1aC0zLjQwOHYtMS45NjhjLS40MTYuNjU2LTEgMS4xODQtMS43NTIgMS41ODQtLjc1Mi40LTEuNjI0LjYtMi42MTYuNmE1LjcxMSA1LjcxMSAwIDAxLTMuMDcyLS44NjRjLS45MjgtLjU3Ni0xLjY2NC0xLjM4NC0yLjIwOC0yLjQyNC0uNTI4LTEuMDU2LS43OTItMi4yNjQtLjc5Mi0zLjYyNHptMTAuNDY0LjA0OGMwLS44MTYtLjE2LTEuNTEyLS40OC0yLjA4OC0uMzItLjU5Mi0uNzUyLTEuMDQtMS4yOTYtMS4zNDRhMy4zOTcgMy4zOTcgMCAwMC0xLjc1Mi0uNDhjLS42MjQgMC0xLjIuMTUyLTEuNzI4LjQ1Ni0uNTI4LjMwNC0uOTYuNzUyLTEuMjk2IDEuMzQ0LS4zMi41NzYtLjQ4IDEuMjY0LS40OCAyLjA2NHMuMTYgMS41MDQuNDggMi4xMTJjLjMzNi41OTIuNzY4IDEuMDQ4IDEuMjk2IDEuMzY4LjU0NC4zMiAxLjEyLjQ4IDEuNzI4LjQ4LjYyNCAwIDEuMjA4LS4xNTIgMS43NTItLjQ1Ni41NDQtLjMyLjk3Ni0uNzY4IDEuMjk2LTEuMzQ0LjMyLS41OTIuNDgtMS4yOTYuNDgtMi4xMTJ6bTUuODAxIDBjMC0xLjM3Ni4yODEtMi41NzYuODQxLTMuNi41Ni0xLjA0IDEuMzM2LTEuODQgMi4zMjgtMi40Ljk5Mi0uNTc2IDIuMTI4LS44NjQgMy40MDgtLjg2NCAxLjY0OCAwIDMuMDA4LjQxNiA0LjA4IDEuMjQ4IDEuMDg4LjgxNiAxLjgxNiAxLjk2OCAyLjE4NCAzLjQ1NmgtMy42MjRjLS4xOTItLjU3Ni0uNTItMS4wMjQtLjk4NC0xLjM0NC0uNDQ4LS4zMzYtMS4wMDgtLjUwNC0xLjY4LS41MDQtLjk2IDAtMS43Mi4zNTItMi4yOCAxLjA1Ni0uNTYuNjg4LS44NCAxLjY3Mi0uODQgMi45NTIgMCAxLjI2NC4yOCAyLjI0OC44NCAyLjk1Mi41Ni42ODggMS4zMiAxLjAzMiAyLjI4IDEuMDMyIDEuMzYgMCAyLjI0OC0uNjA4IDIuNjY0LTEuODI0aDMuNjI0Yy0uMzY4IDEuNDQtMS4wOTYgMi41ODQtMi4xODQgMy40MzItMS4wODguODQ4LTIuNDQ4IDEuMjcyLTQuMDggMS4yNzItMS4yOCAwLTIuNDE2LS4yOC0zLjQwOC0uODRhNi4xMDggNi4xMDggMCAwMS0yLjMyOC0yLjRjLS41Ni0xLjA0LS44NDEtMi4yNDgtLjg0MS0zLjYyNHptMTguNjYyLTQuNTg0YTQuNzU1IDQuNzU1IDAgMDExLjY4LTEuNjU2Yy43MDQtLjQgMS41MDQtLjYgMi40LS42djMuNTI4aC0uODg4Yy0xLjA1NiAwLTEuODU2LjI0OC0yLjQuNzQ0LS41MjguNDk2LS43OTIgMS4zNi0uNzkyIDIuNTkyVjI1aC0zLjM2VjExLjcwNGgzLjM2djIuMDY0em0xOC44OTUtMi4wNjRWMjVoLTMuMzg0di0xLjY4Yy0uNDMyLjU3Ni0xIDEuMDMyLTEuNzA0IDEuMzY4LS42ODguMzItMS40NC40OC0yLjI1Ni40OC0xLjA0IDAtMS45Ni0uMjE2LTIuNzYtLjY0OC0uOC0uNDQ4LTEuNDMyLTEuMDk2LTEuODk2LTEuOTQ0LS40NDgtLjg2NC0uNjcyLTEuODg4LS42NzItMy4wNzJ2LTcuOGgzLjM2djcuMzJjMCAxLjA1Ni4yNjQgMS44NzIuNzkyIDIuNDQ4LjUyOC41NiAxLjI0OC44NCAyLjE2Ljg0LjkyOCAwIDEuNjU2LS4yOCAyLjE4NC0uODQuNTI4LS41NzYuNzkyLTEuMzkyLjc5Mi0yLjQ0OHYtNy4zMmgzLjM4NHptMTkuODI3LS4xOTJjMS42MzIgMCAyLjk0NC41MDQgMy45MzYgMS41MTIgMS4wMDguOTkyIDEuNTEyIDIuMzg0IDEuNTEyIDQuMTc2VjI1aC0zLjM2di03LjM0NGMwLTEuMDQtLjI2NC0xLjgzMi0uNzkyLTIuMzc2LS41MjgtLjU2LTEuMjQ4LS44NC0yLjE2LS44NC0uOTEyIDAtMS42NC4yOC0yLjE4NC44NC0uNTI4LjU0NC0uNzkyIDEuMzM2LS43OTIgMi4zNzZWMjVoLTMuMzZ2LTcuMzQ0YzAtMS4wNC0uMjY0LTEuODMyLS43OTItMi4zNzYtLjUyOC0uNTYtMS4yNDgtLjg0LTIuMTYtLjg0LS45MjggMC0xLjY2NC4yOC0yLjIwOC44NC0uNTI4LjU0NC0uNzkyIDEuMzM2LS43OTIgMi4zNzZWMjVoLTMuMzZWMTEuNzA0aDMuMzZ2MS42MDhjLjQzMi0uNTYuOTg0LTEgMS42NTYtMS4zMi42ODgtLjMyIDEuNDQtLjQ4IDIuMjU2LS40OCAxLjA0IDAgMS45NjguMjI0IDIuNzg0LjY3MmE0LjU1IDQuNTUgMCAwMTEuODk2IDEuODcyYy40MzItLjc2OCAxLjA1Ni0xLjM4NCAxLjg3Mi0xLjg0OGE1LjQzIDUuNDMgMCAwMTIuNjg4LS42OTZ6bTExLjk5NyAyLjEzNmMuNDMyLS42NCAxLjAyNC0xLjE2IDEuNzc2LTEuNTYuNzY4LS40IDEuNjQtLjYgMi42MTYtLjYgMS4xMzYgMCAyLjE2LjI4IDMuMDcyLjg0LjkyOC41NiAxLjY1NiAxLjM2IDIuMTg0IDIuNC41NDQgMS4wMjQuODE2IDIuMjE2LjgxNiAzLjU3NiAwIDEuMzYtLjI3MiAyLjU2OC0uODE2IDMuNjI0LS41MjggMS4wNC0xLjI1NiAxLjg0OC0yLjE4NCAyLjQyNC0uOTEyLjU3Ni0xLjkzNi44NjQtMy4wNzIuODY0LS45OTIgMC0xLjg2NC0uMTkyLTIuNjE2LS41NzYtLjczNi0uNC0xLjMyOC0uOTEyLTEuNzc2LTEuNTM2VjI1aC0zLjM2VjcuMjRoMy4zNnY2LjQwOHptNy4wMzIgNC42NTZjMC0uOC0uMTY4LTEuNDg4LS41MDQtMi4wNjQtLjMyLS41OTItLjc1Mi0xLjA0LTEuMjk2LTEuMzQ0YTMuNDAzIDMuNDAzIDAgMDAtMS43MjgtLjQ1NmMtLjYwOCAwLTEuMTg0LjE2LTEuNzI4LjQ4LS41MjguMzA0LS45Ni43NTItMS4yOTYgMS4zNDQtLjMyLjU5Mi0uNDggMS4yODgtLjQ4IDIuMDg4cy4xNiAxLjQ5Ni40OCAyLjA4OGMuMzM2LjU5Mi43NjggMS4wNDggMS4yOTYgMS4zNjhhMy40OSAzLjQ5IDAgMDAxLjcyOC40NTZjLjYyNCAwIDEuMi0uMTYgMS43MjgtLjQ4YTMuNDUgMy40NSAwIDAwMS4yOTYtMS4zNjhjLjMzNi0uNTkyLjUwNC0xLjI5Ni41MDQtMi4xMTJ6IiBmaWxsPSIjMjUxQTNGIi8+CiAgPHBhdGggZD0iTTI1IDI4LjJWMTEuMzE3QTQuMTE3IDQuMTE3IDAgMDAyMC44ODMgNy4ydjBjLTEuOTMgMC0zLjYgMS4zNC00LjAyIDMuMjI0bC0zLjY1NSAxNi40NTNhMS42OSAxLjY5IDAgMDEtMS42NSAxLjMyM3YwYTEuNjkgMS42OSAwIDAxLTEuNjItMS4yMDRMNCA3LjIiIHN0cm9rZT0iIzI1MUEzRiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgPGNpcmNsZSBjeD0iNC41IiBjeT0iMTAuNSIgcj0iNC41IiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgNC41IDEwLjUpIiBmaWxsPSIjREQ2RjZGIi8+CiAgPGNpcmNsZSBjeD0iMjUiIGN5PSIyNCIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDI1IDI0KSIgZmlsbD0iI0Y3QjEyOSIgcj0iNiIvPgo8L3N2Zz4K",
                          fullWidth: 300,
                          fullHeight: 56,
                          aspectRatio: 5.361111,
                        }}
                      />
                    ) : null}
                  </p.Stack>
                ) : null}
                {(
                  hasVariant(variants, "headerStyles", "onboardingHeader")
                    ? true
                    : hasVariant(variants, "headerStyles", "ventureHeader")
                    ? true
                    : hasVariant(variants, "headerStyles", "timelineHeader")
                    ? true
                    : false
                ) ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___6YZlv, {
                      [sty.freeBox__headerStyles_onboardingHeader___6YZlVk3Tru]:
                        hasVariant(
                          variants,
                          "headerStyles",
                          "onboardingHeader"
                        ),
                      [sty.freeBox__headerStyles_timelineHeader___6YZlvRxxpi]:
                        hasVariant(variants, "headerStyles", "timelineHeader"),
                      [sty.freeBox__headerStyles_ventureHeader___6YZlvnMQ9]:
                        hasVariant(variants, "headerStyles", "ventureHeader"),
                    })}
                  >
                    {(
                      hasVariant(variants, "headerStyles", "onboardingHeader")
                        ? true
                        : hasVariant(variants, "headerStyles", "timelineHeader")
                        ? true
                        : false
                    ) ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__y7S0J,
                          {
                            [sty.text__headerStyles_onboardingHeader__y7S0Jk3Tru]:
                              hasVariant(
                                variants,
                                "headerStyles",
                                "onboardingHeader"
                              ),
                            [sty.text__headerStyles_timelineHeader__y7S0JRxxpi]:
                              hasVariant(
                                variants,
                                "headerStyles",
                                "timelineHeader"
                              ),
                            [sty.text__headerStyles_ventureHeader__y7S0JNMQ9]:
                              hasVariant(
                                variants,
                                "headerStyles",
                                "ventureHeader"
                              ),
                          }
                        )}
                      >
                        {hasVariant(variants, "headerStyles", "timelineHeader")
                          ? "@"
                          : "Enter some text"}
                      </div>
                    ) : null}
                    {(
                      hasVariant(variants, "headerStyles", "timelineHeader")
                        ? true
                        : true
                    )
                      ? p.renderPlasmicSlot({
                          defaultContents: (
                            <React.Fragment>
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__oBTp
                                )}
                              >
                                {"Adbloom"}
                              </div>

                              {false ? (
                                <IconButton
                                  className={classNames(
                                    "__wab_instance",
                                    sty.iconButton__buruf
                                  )}
                                  iconSize={"large" as const}
                                >
                                  <IconExternalLinkIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__vIuG
                                    )}
                                    role={"img"}
                                  />
                                </IconButton>
                              ) : null}
                            </React.Fragment>
                          ),
                          value: args.ventureName,
                          className: classNames(sty.slotTargetVentureName, {
                            [sty.slotTargetVentureName__headerStyles_timelineHeader]:
                              hasVariant(
                                variants,
                                "headerStyles",
                                "timelineHeader"
                              ),
                          }),
                        })
                      : null}
                  </p.Stack>
                ) : null}
                {(
                  hasVariant(
                    variants,
                    "showVentureDescription",
                    "showVentureDescription"
                  ) && hasVariant(variants, "headerStyles", "ventureHeader")
                    ? false
                    : hasVariant(
                        variants,
                        "showVentureDescription",
                        "showVentureDescription"
                      )
                    ? true
                    : hasVariant(variants, "headerStyles", "ventureHeader")
                    ? false
                    : hasVariant(variants, "headerStyles", "timelineHeader")
                    ? false
                    : hasVariant(globalVariants, "screen", "mobile")
                    ? false
                    : false
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__fohK2, {
                      [sty.freeBox__headerStyles_timelineHeader__fohK2Rxxpi]:
                        hasVariant(variants, "headerStyles", "timelineHeader"),
                      [sty.freeBox__headerStyles_ventureHeader__fohK2NMQ9]:
                        hasVariant(variants, "headerStyles", "ventureHeader"),
                      [sty.freeBox__showVentureDescription__fohK2CtI95]:
                        hasVariant(
                          variants,
                          "showVentureDescription",
                          "showVentureDescription"
                        ),
                      [sty.freeBox__showVentureDescription_headerStyles_ventureHeader__fohK2CtI95NMQ9]:
                        hasVariant(
                          variants,
                          "showVentureDescription",
                          "showVentureDescription"
                        ) &&
                        hasVariant(variants, "headerStyles", "ventureHeader"),
                    })}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      value: args.timelineDescription,
                      className: classNames(sty.slotTargetTimelineDescription, {
                        [sty.slotTargetTimelineDescription__headerStyles_timelineHeader]:
                          hasVariant(
                            variants,
                            "headerStyles",
                            "timelineHeader"
                          ),
                        [sty.slotTargetTimelineDescription__headerStyles_timelineHeader_showVentureDescription]:
                          hasVariant(
                            variants,
                            "headerStyles",
                            "timelineHeader"
                          ) &&
                          hasVariant(
                            variants,
                            "showVentureDescription",
                            "showVentureDescription"
                          ),
                        [sty.slotTargetTimelineDescription__headerStyles_ventureHeader]:
                          hasVariant(variants, "headerStyles", "ventureHeader"),
                        [sty.slotTargetTimelineDescription__showVentureDescription]:
                          hasVariant(
                            variants,
                            "showVentureDescription",
                            "showVentureDescription"
                          ),
                        [sty.slotTargetTimelineDescription__showVentureDescription_headerStyles_ventureHeader]:
                          hasVariant(
                            variants,
                            "showVentureDescription",
                            "showVentureDescription"
                          ) &&
                          hasVariant(variants, "headerStyles", "ventureHeader"),
                      }),
                    })}
                  </div>
                ) : null}
                {(
                  hasVariant(variants, "headerStyles", "timelineHeader") &&
                  hasVariant(
                    variants,
                    "showVentureDescription",
                    "showVentureDescription"
                  )
                    ? false
                    : hasVariant(
                        variants,
                        "showVentureDescription",
                        "showVentureDescription"
                      )
                    ? true
                    : hasVariant(variants, "headerStyles", "onboardingHeader")
                    ? true
                    : hasVariant(variants, "headerStyles", "ventureHeader")
                    ? false
                    : hasVariant(variants, "headerStyles", "timelineHeader")
                    ? false
                    : hasVariant(globalVariants, "screen", "mobile")
                    ? false
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__gg4AP, {
                      [sty.freeBox__headerStyles_onboardingHeader__gg4APk3Tru]:
                        hasVariant(
                          variants,
                          "headerStyles",
                          "onboardingHeader"
                        ),
                      [sty.freeBox__headerStyles_timelineHeader__gg4APRxxpi]:
                        hasVariant(variants, "headerStyles", "timelineHeader"),
                      [sty.freeBox__headerStyles_timelineHeader_showVentureDescription__gg4APRxxpiCtI95]:
                        hasVariant(
                          variants,
                          "headerStyles",
                          "timelineHeader"
                        ) &&
                        hasVariant(
                          variants,
                          "showVentureDescription",
                          "showVentureDescription"
                        ),
                      [sty.freeBox__headerStyles_ventureHeader__gg4APnMQ9]:
                        hasVariant(variants, "headerStyles", "ventureHeader"),
                      [sty.freeBox__showVentureDescription__gg4APctI95]:
                        hasVariant(
                          variants,
                          "showVentureDescription",
                          "showVentureDescription"
                        ),
                    })}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec volutpat magna.",
                      value: args.ventureDescription,
                      className: classNames(sty.slotTargetVentureDescription, {
                        [sty.slotTargetVentureDescription__headerStyles_timelineHeader]:
                          hasVariant(
                            variants,
                            "headerStyles",
                            "timelineHeader"
                          ),
                        [sty.slotTargetVentureDescription__headerStyles_ventureHeader]:
                          hasVariant(variants, "headerStyles", "ventureHeader"),
                        [sty.slotTargetVentureDescription__showVentureDescription]:
                          hasVariant(
                            variants,
                            "showVentureDescription",
                            "showVentureDescription"
                          ),
                      }),
                    })}
                  </div>
                ) : null}
              </p.Stack>
            ) : null}
            {(
              hasVariant(variants, "isOnboarding", "isOnboarding")
                ? false
                : hasVariant(variants, "headerStyles", "onboardingHeader")
                ? true
                : true
            ) ? (
              <p.Stack
                as={"div"}
                data-plasmic-name={"iconContainer"}
                data-plasmic-override={overrides.iconContainer}
                hasGap={true}
                className={classNames(projectcss.all, sty.iconContainer, {
                  [sty.iconContainer__headerStyles_onboardingHeader]:
                    hasVariant(variants, "headerStyles", "onboardingHeader"),
                  [sty.iconContainer__isActive_feed]: hasVariant(
                    variants,
                    "isActive",
                    "feed"
                  ),
                  [sty.iconContainer__isOnboarding]: hasVariant(
                    variants,
                    "isOnboarding",
                    "isOnboarding"
                  ),
                })}
              >
                <IconButton
                  data-plasmic-name={"viewHome"}
                  data-plasmic-override={overrides.viewHome}
                  iconSize={"large" as const}
                  isActive={
                    hasVariant(variants, "isActive", "feed")
                      ? ("isActive" as const)
                      : undefined
                  }
                >
                  <IconFeedIcon
                    className={classNames(projectcss.all, sty.svg__eTdlE, {
                      [sty.svg__headerStyles_ventureHeader__eTdlEnMQ9]:
                        hasVariant(variants, "headerStyles", "ventureHeader"),
                      [sty.svg__isActive_feed__eTdlEfnkZp]: hasVariant(
                        variants,
                        "isActive",
                        "feed"
                      ),
                    })}
                    role={"img"}
                  />
                </IconButton>

                {(
                  hasVariant(variants, "isPublic", "isPublic") ? false : true
                ) ? (
                  <IconButtonMember
                    data-plasmic-name={"viewMembers"}
                    data-plasmic-override={overrides.viewMembers}
                    className={classNames("__wab_instance", sty.viewMembers, {
                      [sty.viewMembers__headerStyles_ventureHeader]: hasVariant(
                        variants,
                        "headerStyles",
                        "ventureHeader"
                      ),
                      [sty.viewMembers__isActive_feed]: hasVariant(
                        variants,
                        "isActive",
                        "feed"
                      ),
                      [sty.viewMembers__isActive_members]: hasVariant(
                        variants,
                        "isActive",
                        "members"
                      ),
                      [sty.viewMembers__isPublic]: hasVariant(
                        variants,
                        "isPublic",
                        "isPublic"
                      ),
                    })}
                    isActive={
                      hasVariant(variants, "isActive", "members")
                        ? ("isActive" as const)
                        : undefined
                    }
                    memberCount={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lssdr
                        )}
                      >
                        {"+"}
                      </div>
                    }
                  />
                ) : null}

                <IconButton
                  data-plasmic-name={"viewSettings"}
                  data-plasmic-override={overrides.viewSettings}
                  className={classNames("__wab_instance", sty.viewSettings, {
                    [sty.viewSettings__headerStyles_ventureHeader]: hasVariant(
                      variants,
                      "headerStyles",
                      "ventureHeader"
                    ),
                    [sty.viewSettings__isActive_settings]: hasVariant(
                      variants,
                      "isActive",
                      "settings"
                    ),
                  })}
                  iconSize={"large" as const}
                  isActive={
                    hasVariant(variants, "isActive", "settings")
                      ? ("isActive" as const)
                      : undefined
                  }
                >
                  <InfosvgIcon
                    className={classNames(projectcss.all, sty.svg__isMis)}
                    role={"img"}
                  />
                </IconButton>
              </p.Stack>
            ) : null}
          </p.Stack>
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  container: [
    "container",
    "breadcrumbLogo",
    "iconContainer",
    "viewHome",
    "viewMembers",
    "viewSettings",
  ],
  breadcrumbLogo: ["breadcrumbLogo"],
  iconContainer: ["iconContainer", "viewHome", "viewMembers", "viewSettings"],
  viewHome: ["viewHome"],
  viewMembers: ["viewMembers"],
  viewSettings: ["viewSettings"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  container: "div";
  breadcrumbLogo: typeof p.PlasmicImg;
  iconContainer: "div";
  viewHome: typeof IconButton;
  viewMembers: typeof IconButtonMember;
  viewSettings: typeof IconButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMainHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMainHeader__VariantsArgs;
    args?: PlasmicMainHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicMainHeader__Fetches;
  } & Omit<PlasmicMainHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMainHeader__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicMainHeader__ArgProps,
      internalVariantPropNames: PlasmicMainHeader__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicMainHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "container") {
    func.displayName = "PlasmicMainHeader";
  } else {
    func.displayName = `PlasmicMainHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicMainHeader = Object.assign(
  // Top-level PlasmicMainHeader renders the root element
  makeNodeComponent("container"),
  {
    // Helper components rendering sub-elements
    breadcrumbLogo: makeNodeComponent("breadcrumbLogo"),
    iconContainer: makeNodeComponent("iconContainer"),
    viewHome: makeNodeComponent("viewHome"),
    viewMembers: makeNodeComponent("viewMembers"),
    viewSettings: makeNodeComponent("viewSettings"),

    // Metadata about props expected for PlasmicMainHeader
    internalVariantProps: PlasmicMainHeader__VariantProps,
    internalArgProps: PlasmicMainHeader__ArgProps,
  }
);

export default PlasmicMainHeader;
/* prettier-ignore-end */
