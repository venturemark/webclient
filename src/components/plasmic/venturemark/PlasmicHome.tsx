/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mSMs7FqGjFMPgGjdzmbmrV
// Component: JjN6BxLNHHt
import * as React from "react";
import {
  hasVariant,
  classNames,
  Flex,
  wrapWithClassName,
  Renderer,
  NodeRenderer,
  createPlasmicElementProxy,
  makeFragment,
  PlasmicIcon,
  PlasmicSlot,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Metric from "../../Metric"; // plasmic-import: yAnxCRnRr7/component
import MetricGraph from "../../MetricGraph"; // plasmic-import: AqRIboOsVO/component
import ComposeUpdate from "../../ComposeUpdate"; // plasmic-import: HtYltV_zNv/component
import ActionBar from "../../ActionBar"; // plasmic-import: wB9ZqI-HxA/component
import ActionBarSelection from "../../ActionBarSelection"; // plasmic-import: LVHxqJ-yrV/component
import Update from "../../Update"; // plasmic-import: AjWb9YfCceP/component

import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_venturemark.css"; // plasmic-import: mSMs7FqGjFMPgGjdzmbmrV/projectcss
import "./PlasmicHome.css"; // plasmic-import: JjN6BxLNHHt/css

export type PlasmicHome__VariantMembers = {
  userView: "read";
};

export type PlasmicHome__VariantsArgs = {
  userView?: SingleChoiceArg<"read">;
};

type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>("userView");

export type PlasmicHome__ArgsType = {
  organizationName?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>("organizationName");

export type PlasmicHome__OverridesType = {
  root?: Flex<"div">;
  organizationAvatar?: Flex<"img">;
  metricContainer?: Flex<"div">;
  metricItem?: Flex<"div">;
  metricItem2?: Flex<"div">;
  composeUpdate?: Flex<typeof ComposeUpdate>;
  actionBar?: Flex<typeof ActionBar>;
  actionBarSelectionContainer?: Flex<"div">;
  updatesContainer?: Flex<"div">;
};

export interface DefaultHomeProps {
  organizationName?: React.ReactNode;
  userView?: SingleChoiceArg<"read">;
  className?: string;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames({
        "Home__root--desktop__J0_SMU__2W": true,
        "Home__root--read__J0_SMkYSYc": hasVariant(
          variants,
          "userView",
          "read"
        ),

        Home__root__J0_SM: true,
        "plasmic-default__all": true,
        "plasmic-default__div": true,
        root_reset_mSMs7FqGjFMPgGjdzmbmrV: true
      })}
    >
      <div
        className={classNames({
          "Home__box__dOV-j": true,
          "plasmic-default__all": true,
          "plasmic-default__div": true
        })}
      >
        <div
          className={classNames({
            "Home__box--desktop__xSqBCU__2W": true,
            Home__box__xSqBC: true,
            "plasmic-default__all": true,
            "plasmic-default__div": true
          })}
        >
          <div
            className={classNames({
              Home__box__y_9mC: true,
              "plasmic-default__all": true,
              "plasmic-default__div": true
            })}
          >
            <img
              alt={""}
              className={classNames({
                Home__img__E9CF5: true,
                "plasmic-default__all": true,
                "plasmic-default__img": true
              })}
              role={"img"}
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAPCAYAAAAPr1RWAAAAh0lEQVQ4EWNQlrJdoCxt+58GeD6DsrTtexoYDHLsfQZVaQcDJRmbBmpjFQkHB4ZRQHQIqMrY5CtL2+6nBKtI2dRjtVBJ2u48NVIQVsMVpGwDlKRs9lGEJW0LsBo+KsigLGHvSO3cCTJPRdTOEFS23KdGysBixnsGZSnr+crStv+ojVWkbecBACyK9qwkRwJYAAAAAElFTkSuQmCC" as const
              }
            ></img>
          </div>

          <div
            className={classNames({
              Home__box__3orej: true,
              "plasmic-default__all": true,
              "plasmic-default__div": true
            })}
          >
            <img
              alt={""}
              className={classNames({
                Home__img__6wBSl: true,
                "plasmic-default__all": true,
                "plasmic-default__img": true
              })}
              role={"img"}
              src={
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ij4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGw9IiNFOTM4NjYiIGQ9Ik0xMiA4LjE4OTU0QzEzLjkzNzggOC4xODk1NCAxNS41MDg2IDYuMzU2MjUgMTUuNTA4NiA0LjA5NDc3QzE1LjUwODYgMS44MzMyOSAxMy45Mzc4IDAgMTIgMEMxMC4wNjIzIDAgOC40OTE0NiAxLjgzMzI5IDguNDkxNDYgNC4wOTQ3N0M4LjQ5MTQ2IDYuMzU2MjUgMTAuMDYyMyA4LjE4OTU0IDEyIDguMTg5NTRaIi8+CjxwYXRoIGZpbGw9IiMyNjFBM0UiIGQ9Ik0yMy45MjU2IDIyLjY3ODJMMTkuOTIwNCA3LjQ3NTFDMTkuODY1NCA3LjMzMjg2IDE5Ljc4MDUgNy4yMDkyIDE5LjY3MzUgNy4xMTU2NUMxOS41NjY2IDcuMDIyMSAxOS40NDEgNi45NjE3MSAxOS4zMDg2IDYuOTQwMTRDMTkuMTc2MiA2LjkxODU3IDE5LjA0MTMgNi45MzY1MSAxOC45MTY1IDYuOTkyMjlDMTguNzkxNiA3LjA0ODA2IDE4LjY4MSA3LjEzOTg2IDE4LjU5NDggNy4yNTkxTDEyLjAwMzEgMTIuNzA3MUwxMi4wMjM3IDEyLjcyNzRMNS40MDUxOSA3LjI1OTFDNS4zMTg5OSA3LjEzOTg2IDUuMjA4MyA3LjA0ODA2IDUuMDgzNDYgNi45OTIyOUM0Ljk1ODYyIDYuOTM2NTEgNC44MjM3MSA2LjkxODU3IDQuNjkxMzIgNi45NDAxNEM0LjU1ODkzIDYuOTYxNzEgNC40MzMzOCA3LjAyMjEgNC4zMjY0MSA3LjExNTY1QzQuMjE5NDMgNy4yMDkyIDQuMTM0NTIgNy4zMzI4NiA0LjA3OTU5IDcuNDc1MUwwLjA3NTkwMzIgMjIuNjc4MkMwLjAxODA4OTQgMjIuODE5IC0wLjAwODE1Mzc5IDIyLjk3NDcgLTAuMDAwMzY5OCAyMy4xMzA2QzAuMDA3NDE0MTkgMjMuMjg2NiAwLjA0ODk3MDggMjMuNDM3NiAwLjEyMDQxIDIzLjU2OTdDMC4xOTE4NDkgMjMuNzAxOCAwLjI5MDgzNSAyMy44MTA1IDAuNDA4MSAyMy44ODU4QzAuNTI1MzY2IDIzLjk2MSAwLjY1NzA3NyAyNC4wMDA0IDAuNzkwOTA0IDI0SDguNzc5M0M4Ljg1MTg0IDI0LjAwMSA4LjkyMzgzIDIzLjk4NTEgOC45OTEwNyAyMy45NTM0QzkuMDU4MzEgMjMuOTIxNiA5LjExOTQ2IDIzLjg3NDUgOS4xNzA5OCAyMy44MTQ5QzkuMjIyNSAyMy43NTUzIDkuMjYzMzUgMjMuNjg0MyA5LjI5MTE1IDIzLjYwNjFDOS4zMTg5NiAyMy41Mjc5IDkuMzMzMTcgMjMuNDQ0MSA5LjMzMjk2IDIzLjM1OTRWMjEuMzg0QzkuMzMyOTYgMjEuMjE0MSA5LjI3NTEyIDIxLjA1MTIgOS4xNzIxOCAyMC45MzFDOS4wNjkyNCAyMC44MTA5IDguOTI5NjMgMjAuNzQzNCA4Ljc4NDA1IDIwLjc0MzRIMy41MDIyMUw1Ljg5NzE1IDExLjY1MjlMMTkuNTI4IDIzLjcyODZDMTkuNzI2MSAyMy45MDUyIDE5Ljk2ODUgMjQuMDAwNiAyMC4yMTc3IDI0QzIzLjI3NzEgMjQgMjEuMTMzNiAyNCAyMy4yMDI3IDI0QzIzLjMzNzIgMjQuMDAxOSAyMy40Njk5IDIzLjk2MzggMjMuNTg4MiAyMy44ODkyQzIzLjcwNjYgMjMuODE0NiAyMy44MDY3IDIzLjcwNiAyMy44NzkgMjMuNTczNkMyMy45NTE0IDIzLjQ0MTMgMjMuOTkzNyAyMy4yODk2IDI0LjAwMTggMjMuMTMzQzI0LjAxIDIyLjk3NjMgMjMuOTgzNyAyMi44MTk3IDIzLjkyNTYgMjIuNjc4MloiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IGZpbGw9IndoaXRlIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K" as const
              }
            ></img>

            <div
              className={
                classNames({
                  Home__box__KJY6n: true,
                  "plasmic-default__all": true,
                  "plasmic-default__div": true
                }) + " __wab_text"
              }
            >
              {"Venturemark"}
            </div>
          </div>

          <div
            className={classNames({
              Home__box__xV84p: true,
              "plasmic-default__all": true,
              "plasmic-default__div": true
            })}
          >
            <img
              data-plasmic-name={"organizationAvatar"}
              data-plasmic-override={overrides.organizationAvatar}
              alt={""}
              className={classNames({
                "Home__organizationAvatar__-iyBD": true,
                "plasmic-default__all": true,
                "plasmic-default__img": true
              })}
              role={"img"}
              src={
                "https://a.slack-edge.com/80588/img/services/api_200.png" as const
              }
            ></img>

            <div
              className={classNames({
                Home__box__mZtc1: true,
                "plasmic-default__all": true,
                "plasmic-default__div": true
              })}
            >
              <PlasmicSlot
                defaultContents={"Slack"}
                value={args.organizationName}
                className={classNames({
                  Home__slotOrganizationName__u35Cy: true
                })}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={classNames({
          "Home__box--desktop__wdt6NU__2W": true,
          Home__box__wdt6N: true,
          "plasmic-default__all": true,
          "plasmic-default__div": true
        })}
      >
        <div
          data-plasmic-wrap-flex-child={true}
          className={classNames({
            "Home__box--desktop__h7MhHU__2W": true,
            "Home__box--read__h7MhHkYSYc": hasVariant(
              variants,
              "userView",
              "read"
            ),

            Home__box__h7MhH: true,
            "plasmic-default__all": true,
            "plasmic-default__div": true
          })}
        >
          <div
            className={classNames({
              "Home__box--desktop__Jtcs0U__2W": true,
              "Home__box--read__Jtcs0kYSYc": hasVariant(
                variants,
                "userView",
                "read"
              ),

              Home__box__Jtcs0: true,
              "plasmic-default__all": true,
              "plasmic-default__div": true
            })}
          >
            {(hasVariant(variants, "userView", "read") ? true : true) ? (
              <div
                data-plasmic-name={"metricContainer"}
                data-plasmic-override={overrides.metricContainer}
                data-plasmic-wrap-flex-child={true}
                className={classNames({
                  "Home__metricContainer--desktop__pntkaU__2W": true,
                  "Home__metricContainer--read__pntkakYSYc": hasVariant(
                    variants,
                    "userView",
                    "read"
                  ),

                  Home__metricContainer__pntka: true,
                  "plasmic-default__all": true,
                  "plasmic-default__div": true
                })}
              >
                {(hasVariant(variants, "userView", "read") ? true : true) ? (
                  <Metric
                    className={classNames({
                      "Home__metric--desktop__DWvv8U__2W": true,
                      "Home__metric--read__DWvv8kYSYc": hasVariant(
                        variants,
                        "userView",
                        "read"
                      ),

                      Home__metric__DWvv8: true,
                      __wab_instance: true
                    })}
                    name={"Updates"}
                    {...({} as any)}
                  ></Metric>
                ) : null}
                {(hasVariant(variants, "userView", "read") ? true : false) ? (
                  <Metric
                    className={classNames({
                      "Home__metric--read__bmP1jkYSYc": hasVariant(
                        variants,
                        "userView",
                        "read"
                      ),

                      Home__metric__bmP1j: true,
                      __wab_instance: true
                    })}
                    name={"Updates"}
                    {...({} as any)}
                  ></Metric>
                ) : null}
                {(hasVariant(variants, "userView", "read") ? false : false) ? (
                  <div
                    data-plasmic-name={"metricItem"}
                    data-plasmic-override={overrides.metricItem}
                    className={classNames({
                      "Home__metricItem--read__kf91ZkYSYc": hasVariant(
                        variants,
                        "userView",
                        "read"
                      ),

                      Home__metricItem__kf91Z: true,
                      "plasmic-default__all": true,
                      "plasmic-default__div": true
                    })}
                  >
                    <div
                      className={
                        classNames({
                          Home__box__T2vAk: true,
                          "plasmic-default__all": true,
                          "plasmic-default__div": true
                        }) + " __wab_text"
                      }
                    >
                      {"18"}
                    </div>

                    <div
                      className={
                        classNames({
                          Home__box__XVwQY: true,
                          "plasmic-default__all": true,
                          "plasmic-default__div": true
                        }) + " __wab_text"
                      }
                    >
                      {"+12 m/m"}
                    </div>

                    <div
                      className={
                        classNames({
                          "Home__box--read__d8p7fkYSYc": hasVariant(
                            variants,
                            "userView",
                            "read"
                          ),

                          Home__box__d8p7f: true,
                          "plasmic-default__all": true,
                          "plasmic-default__div": true
                        }) + " __wab_text"
                      }
                    >
                      {"Updates"}
                    </div>

                    <MetricGraph
                      className={classNames({
                        "Home__metricGraph--read__n8tSvkYSYc": hasVariant(
                          variants,
                          "userView",
                          "read"
                        ),

                        Home__metricGraph__n8tSv: true,
                        __wab_instance: true
                      })}
                      {...({} as any)}
                    ></MetricGraph>
                  </div>
                ) : null}
                {(hasVariant(variants, "userView", "read") ? false : false) ? (
                  <div
                    data-plasmic-name={"metricItem2"}
                    data-plasmic-override={overrides.metricItem2}
                    className={classNames({
                      "Home__metricItem2--read__4493HkYSYc": hasVariant(
                        variants,
                        "userView",
                        "read"
                      ),

                      Home__metricItem2__4493H: true,
                      "plasmic-default__all": true,
                      "plasmic-default__div": true
                    })}
                  >
                    <div
                      className={
                        classNames({
                          Home__box__wfM3z: true,
                          "plasmic-default__all": true,
                          "plasmic-default__div": true
                        }) + " __wab_text"
                      }
                    >
                      {"18"}
                    </div>

                    <div
                      className={
                        classNames({
                          Home__box__4QaEj: true,
                          "plasmic-default__all": true,
                          "plasmic-default__div": true
                        }) + " __wab_text"
                      }
                    >
                      {"+12 m/m"}
                    </div>

                    <div
                      className={
                        classNames({
                          "Home__box--read__cTLrwkYSYc": hasVariant(
                            variants,
                            "userView",
                            "read"
                          ),

                          Home__box__cTLrw: true,
                          "plasmic-default__all": true,
                          "plasmic-default__div": true
                        }) + " __wab_text"
                      }
                    >
                      {hasVariant(variants, "userView", "read")
                        ? "Updates"
                        : "Updates"}
                    </div>

                    <MetricGraph
                      className={classNames({
                        "Home__metricGraph--read__Om0w3kYSYc": hasVariant(
                          variants,
                          "userView",
                          "read"
                        ),

                        Home__metricGraph__Om0w3: true,
                        __wab_instance: true
                      })}
                      {...({} as any)}
                    ></MetricGraph>
                  </div>
                ) : null}
              </div>
            ) : null}
            {(hasVariant(variants, "userView", "read") ? false : true) ? (
              <div
                className={classNames({
                  "Home__box--read__M99Y-kYSYc": hasVariant(
                    variants,
                    "userView",
                    "read"
                  ),

                  "Home__box__M99Y-": true,
                  "plasmic-default__all": true,
                  "plasmic-default__div": true
                })}
              >
                {(hasVariant(variants, "userView", "read") ? false : true) ? (
                  <ComposeUpdate
                    data-plasmic-name={"composeUpdate"}
                    data-plasmic-override={overrides.composeUpdate}
                    className={classNames({
                      "Home__composeUpdate--read__MROWXkYSYc": hasVariant(
                        variants,
                        "userView",
                        "read"
                      ),

                      Home__composeUpdate__MROWX: true,
                      __wab_instance: true
                    })}
                    errorMessage={""}
                    state={"metric" as const}
                    {...({} as any)}
                  ></ComposeUpdate>
                ) : null}
              </div>
            ) : null}

            <div
              className={classNames({
                Home__box__a6DmS: true,
                "plasmic-default__all": true,
                "plasmic-default__div": true
              })}
            >
              <ActionBar
                data-plasmic-name={"actionBar"}
                data-plasmic-override={overrides.actionBar}
                className={classNames({
                  Home__actionBar__RKxZF: true,
                  __wab_instance: true
                })}
                {...({} as any)}
              ></ActionBar>
            </div>

            <div
              data-plasmic-name={"actionBarSelectionContainer"}
              data-plasmic-override={overrides.actionBarSelectionContainer}
              data-plasmic-wrap-flex-child={true}
              className={classNames({
                "Home__actionBarSelectionContainer--read__4fU2YkYSYc": hasVariant(
                  variants,
                  "userView",
                  "read"
                ),

                Home__actionBarSelectionContainer__4fU2Y: true,
                "plasmic-default__all": true,
                "plasmic-default__div": true
              })}
            >
              <ActionBarSelection
                className={classNames({
                  Home__actionBarSelection__u7QOq: true,
                  __wab_instance: true
                })}
                name={
                  <div
                    className={
                      classNames({
                        Home__box__DZCWR: true,
                        "plasmic-default__all": true,
                        "plasmic-default__div": true
                      }) + " __wab_text"
                    }
                  >
                    {"Angel Investors"}
                  </div>
                }
                {...({} as any)}
              ></ActionBarSelection>

              <ActionBarSelection
                className={classNames({
                  "Home__actionBarSelection__RT-qT": true,
                  __wab_instance: true
                })}
                name={
                  <div
                    className={
                      classNames({
                        Home__box__h6a64: true,
                        "plasmic-default__all": true,
                        "plasmic-default__div": true
                      }) + " __wab_text"
                    }
                  >
                    {"Monthly Recurring Revenue"}
                  </div>
                }
                type={"metric" as const}
                {...({} as any)}
              ></ActionBarSelection>
            </div>

            <div
              data-plasmic-name={"updatesContainer"}
              data-plasmic-override={overrides.updatesContainer}
              data-plasmic-wrap-flex-child={true}
              className={classNames({
                Home__updatesContainer__C6BmN: true,
                "plasmic-default__all": true,
                "plasmic-default__div": true
              })}
            >
              <Update
                className={classNames({
                  "Home__update--desktop__xrspoU__2W": true,
                  "Home__update--read__xrspokYSYc": hasVariant(
                    variants,
                    "userView",
                    "read"
                  ),

                  Home__update__xrspo: true,
                  __wab_instance: true
                })}
                {...({} as any)}
              ></Update>

              <Update
                className={classNames({
                  "Home__update--read__JalDnkYSYc": hasVariant(
                    variants,
                    "userView",
                    "read"
                  ),

                  Home__update__JalDn: true,
                  __wab_instance: true
                })}
                {...({} as any)}
              ></Update>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "organizationAvatar",
    "metricContainer",
    "metricItem",
    "metricItem2",
    "composeUpdate",
    "actionBar",
    "actionBarSelectionContainer",
    "updatesContainer"
  ],

  organizationAvatar: ["organizationAvatar"],
  metricContainer: ["metricContainer", "metricItem", "metricItem2"],
  metricItem: ["metricItem"],
  metricItem2: ["metricItem2"],
  composeUpdate: ["composeUpdate"],
  actionBar: ["actionBar"],
  actionBarSelectionContainer: ["actionBarSelectionContainer"],
  updatesContainer: ["updatesContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  organizationAvatar: "img";
  metricContainer: "div";
  metricItem: "div";
  metricItem2: "div";
  composeUpdate: typeof ComposeUpdate;
  actionBar: typeof ActionBar;
  actionBarSelectionContainer: "div";
  updatesContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & // Specify variants directly as props
  Omit<PlasmicHome__VariantsArgs, ReservedPropsType> &
    // Specify args directly as props
    Omit<PlasmicHome__ArgsType, ReservedPropsType> &
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
  type PropsType = NodeComponentProps<NodeName>;
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    organizationAvatar: makeNodeComponent("organizationAvatar"),
    metricContainer: makeNodeComponent("metricContainer"),
    metricItem: makeNodeComponent("metricItem"),
    metricItem2: makeNodeComponent("metricItem2"),
    composeUpdate: makeNodeComponent("composeUpdate"),
    actionBar: makeNodeComponent("actionBar"),
    actionBarSelectionContainer: makeNodeComponent(
      "actionBarSelectionContainer"
    ),

    updatesContainer: makeNodeComponent("updatesContainer"),

    // Helper for creating a Renderer
    createRenderer: () => new PlasmicHome__Renderer({}, {}),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

type ForNodeRenderer<NodeName extends NodeNameType> = NodeRenderer<
  PlasmicHome__VariantsArgs,
  PlasmicHome__ArgsType,
  NodeOverridesType<NodeName>
>;

class PlasmicHome__Renderer extends Renderer<
  PlasmicHome__VariantsArgs,
  PlasmicHome__ArgsType,
  PlasmicHome__OverridesType,
  "root"
> {
  constructor(
    variants: PlasmicHome__VariantsArgs,
    args: PlasmicHome__ArgsType
  ) {
    super(variants, args, PlasmicHome__RenderFunc, "root");
  }

  protected create(
    variants: PlasmicHome__VariantsArgs,
    args: PlasmicHome__ArgsType
  ) {
    return new PlasmicHome__Renderer(variants, args);
  }

  getInternalVariantProps(): VariantPropType[] {
    return PlasmicHome__VariantProps;
  }

  getInternalArgProps(): ArgPropType[] {
    return PlasmicHome__ArgProps;
  }

  forNode(name: "updatesContainer"): ForNodeRenderer<"updatesContainer">;
  forNode(
    name: "actionBarSelectionContainer"
  ): ForNodeRenderer<"actionBarSelectionContainer">;
  forNode(name: "actionBar"): ForNodeRenderer<"actionBar">;
  forNode(name: "composeUpdate"): ForNodeRenderer<"composeUpdate">;
  forNode(name: "metricItem2"): ForNodeRenderer<"metricItem2">;
  forNode(name: "metricItem"): ForNodeRenderer<"metricItem">;
  forNode(name: "metricContainer"): ForNodeRenderer<"metricContainer">;
  forNode(name: "organizationAvatar"): ForNodeRenderer<"organizationAvatar">;
  forNode(name: "root"): ForNodeRenderer<"root">;
  forNode(name: NodeNameType) {
    return super.forNode(name);
  }
}

export default PlasmicHome;
/* prettier-ignore-end */
