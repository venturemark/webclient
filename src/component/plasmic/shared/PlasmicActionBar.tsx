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
import * as React from 'react';

import * as p from '@plasmicapp/react-web';
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
} from '@plasmicapp/react-web';
import SelectItem from '../../SelectItem'; // plasmic-import: ZvAJESOUhw/component
import Button from '../../Button'; // plasmic-import: JU1t0P9pFY/component

import '@plasmicapp/react-web/lib/plasmic.css';
import defaultcss from '../plasmic__default_style.module.css'; // plasmic-import: global/defaultcss
import projectcss from './plasmic_shared.module.css'; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from './PlasmicActionBar.module.css'; // plasmic-import: eUnRsS9UXR/css

import IconPlusIcon from './icons/PlasmicIcon__IconPlus'; // plasmic-import: B5QLKmr2tW/icon

export type PlasmicActionBar__VariantMembers = {
  error: 'hasError';
  text: 'hasText';
  isActive: 'isActive';
  timelineSelected: 'timelineSelected';
};

export type PlasmicActionBar__VariantsArgs = {
  error?: MultiChoiceArg<'hasError'>;
  text?: MultiChoiceArg<'hasText'>;
  isActive?: SingleBooleanChoiceArg<'isActive'>;
  timelineSelected?: SingleBooleanChoiceArg<'timelineSelected'>;
};

type VariantPropType = keyof PlasmicActionBar__VariantsArgs;
export const PlasmicActionBar__VariantProps = new Array<VariantPropType>(
  'error',
  'text',
  'isActive',
  'timelineSelected',
);

export type PlasmicActionBar__ArgsType = {
  errorMessage?: React.ReactNode;
};

type ArgPropType = keyof PlasmicActionBar__ArgsType;
export const PlasmicActionBar__ArgProps = new Array<ArgPropType>(
  'errorMessage',
);

export type PlasmicActionBar__OverridesType = {
  root?: p.Flex<'div'>;
  editorContainer?: p.Flex<'div'>;
  textContainer?: p.Flex<'input'>;
  timelineSelect?: p.Flex<'div'>;
  svg?: p.Flex<'svg'>;
  selectItem?: p.Flex<typeof SelectItem>;
  errorContainer?: p.Flex<'div'>;
  sendUpdate?: p.Flex<typeof Button>;
};

export interface DefaultActionBarProps {
  errorMessage?: React.ReactNode;
  error?: MultiChoiceArg<'hasError'>;
  text?: MultiChoiceArg<'hasText'>;
  isActive?: SingleBooleanChoiceArg<'isActive'>;
  timelineSelected?: SingleBooleanChoiceArg<'timelineSelected'>;
  className?: string;
}

function PlasmicActionBar__RenderFunc(props: {
  variants: PlasmicActionBar__VariantsArgs;
  args: PlasmicActionBar__ArgsType;
  overrides: PlasmicActionBar__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={'div'}
      data-plasmic-name={'root'}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.root_reset,
        sty.root,
        {
          [sty.root__error_hasError]: hasVariant(
            variants,
            'error',
            'hasError',
          ),
          [sty.root__isActive]: hasVariant(
            variants,
            'isActive',
            'isActive',
          ),
          [sty.root__isActive_error_hasError]:
            hasVariant(variants, 'isActive', 'isActive') &&
            hasVariant(variants, 'error', 'hasError'),
          [sty.root__text_hasText]: hasVariant(
            variants,
            'text',
            'hasText',
          ),
          [sty.root__text_hasText_error_hasError]:
            hasVariant(variants, 'text', 'hasText') &&
            hasVariant(variants, 'error', 'hasError'),
          [sty.root__timelineSelected]: hasVariant(
            variants,
            'timelineSelected',
            'timelineSelected',
          ),
        },
      )}
    >
      <p.Stack
        as={'div'}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__zG8Do, {
          [sty.box__error_hasError__zG8DoxYqMt]: hasVariant(
            variants,
            'error',
            'hasError',
          ),

          [sty.box__isActive__zG8DovjQpn]: hasVariant(
            variants,
            'isActive',
            'isActive',
          ),

          [sty.box__timelineSelected__zG8Do75BwG]: hasVariant(
            variants,
            'timelineSelected',
            'timelineSelected',
          ),

          [sty.box__timelineSelected_isActive__zG8Do75BwGVjQpn]:
            hasVariant(
              variants,
              'timelineSelected',
              'timelineSelected',
            ) && hasVariant(variants, 'isActive', 'isActive'),
        })}
      >
        <div
          className={classNames(defaultcss.all, sty.box__vJy6G, {
            [sty.box__isActive__vJy6GvjQpn]: hasVariant(
              variants,
              'isActive',
              'isActive',
            ),

            [sty.box__timelineSelected__vJy6G75BwG]: hasVariant(
              variants,
              'timelineSelected',
              'timelineSelected',
            ),
          })}
        >
          <div
            className={classNames(defaultcss.all, sty.box__rXa4B, {
              [sty.box__isActive__rXa4BvjQpn]: hasVariant(
                variants,
                'isActive',
                'isActive',
              ),

              [sty.box__timelineSelected__rXa4B75BwG]: hasVariant(
                variants,
                'timelineSelected',
                'timelineSelected',
              ),

              [sty.box__timelineSelected_isActive__rXa4B75BwGVjQpn]:
                hasVariant(
                  variants,
                  'timelineSelected',
                  'timelineSelected',
                ) && hasVariant(variants, 'isActive', 'isActive'),
            })}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__wnwam,
                {
                  [sty.box__isActive__wnwamvjQpn]: hasVariant(
                    variants,
                    'isActive',
                    'isActive',
                  ),
                },
              )}
            >
              {'KO'}
            </div>
          </div>

          <div
            data-plasmic-name={'editorContainer'}
            data-plasmic-override={overrides.editorContainer}
            className={classNames(
              defaultcss.all,
              sty.editorContainer,
              {
                [sty.editorContainer__error_hasError]: hasVariant(
                  variants,
                  'error',
                  'hasError',
                ),

                [sty.editorContainer__isActive]: hasVariant(
                  variants,
                  'isActive',
                  'isActive',
                ),

                [sty.editorContainer__text_hasText_error_hasError]:
                  hasVariant(variants, 'text', 'hasText') &&
                  hasVariant(variants, 'error', 'hasError'),
                [sty.editorContainer__timelineSelected]: hasVariant(
                  variants,
                  'timelineSelected',
                  'timelineSelected',
                ),
              },
            )}
          >
            <input
              data-plasmic-name={'textContainer'}
              data-plasmic-override={overrides.textContainer}
              className={classNames(
                defaultcss.input,
                sty.textContainer,
                {
                  [sty.textContainer__isActive]: hasVariant(
                    variants,
                    'isActive',
                    'isActive',
                  ),

                  [sty.textContainer__timelineSelected]: hasVariant(
                    variants,
                    'timelineSelected',
                    'timelineSelected',
                  ),
                },
              )}
              placeholder={'Write an update ...' as const}
              size={1 as const}
              type={'text' as const}
              value={'' as const}
            />
          </div>
        </div>

        <p.Stack
          as={'div'}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__mQqJf, {
            [sty.box__isActive__mQqJfvjQpn]: hasVariant(
              variants,
              'isActive',
              'isActive',
            ),

            [sty.box__timelineSelected__mQqJf75BwG]: hasVariant(
              variants,
              'timelineSelected',
              'timelineSelected',
            ),
          })}
        >
          <p.Stack
            as={'div'}
            data-plasmic-name={'timelineSelect'}
            data-plasmic-override={overrides.timelineSelect}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.timelineSelect,
              {
                [sty.timelineSelect__isActive]: hasVariant(
                  variants,
                  'isActive',
                  'isActive',
                ),

                [sty.timelineSelect__timelineSelected]: hasVariant(
                  variants,
                  'timelineSelected',
                  'timelineSelected',
                ),

                [sty.timelineSelect__timelineSelected_isActive]:
                  hasVariant(
                    variants,
                    'timelineSelected',
                    'timelineSelected',
                  ) && hasVariant(variants, 'isActive', 'isActive'),
              },
            )}
          >
            <IconPlusIcon
              data-plasmic-name={'svg'}
              data-plasmic-override={overrides.svg}
              className={classNames(defaultcss.all, sty.svg, {
                [sty.svg__isActive]: hasVariant(
                  variants,
                  'isActive',
                  'isActive',
                ),

                [sty.svg__timelineSelected]: hasVariant(
                  variants,
                  'timelineSelected',
                  'timelineSelected',
                ),
              })}
              role={'img'}
            />

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box___0Drgs,
                {
                  [sty.box__isActive___0DrgsvjQpn]: hasVariant(
                    variants,
                    'isActive',
                    'isActive',
                  ),

                  [sty.box__timelineSelected___0Drgs75BwG]: hasVariant(
                    variants,
                    'timelineSelected',
                    'timelineSelected',
                  ),

                  [sty.box__timelineSelected_isActive___0Drgs75BwGVjQpn]:
                    hasVariant(
                      variants,
                      'timelineSelected',
                      'timelineSelected',
                    ) && hasVariant(variants, 'isActive', 'isActive'),
                },
              )}
            >
              {'Select timeline'}
            </div>
          </p.Stack>

          <p.Stack
            as={'div'}
            hasGap={
              hasVariant(
                variants,
                'timelineSelected',
                'timelineSelected',
              )
                ? true
                : false
            }
            className={classNames(defaultcss.all, sty.box__nk1Yz, {
              [sty.box__timelineSelected__nk1Yz75BwG]: hasVariant(
                variants,
                'timelineSelected',
                'timelineSelected',
              ),
            })}
          >
            {(
              hasVariant(
                variants,
                'timelineSelected',
                'timelineSelected',
              )
                ? true
                : false
            ) ? (
              <SelectItem
                data-plasmic-name={'selectItem'}
                data-plasmic-override={overrides.selectItem}
                className={classNames(
                  '__wab_instance',
                  sty.selectItem,
                  {
                    [sty.selectItem__timelineSelected]: hasVariant(
                      variants,
                      'timelineSelected',
                      'timelineSelected',
                    ),
                  },
                )}
              />
            ) : null}
          </p.Stack>
        </p.Stack>
      </p.Stack>

      {(
        hasVariant(variants, 'isActive', 'isActive') ? true : true
      ) ? (
        <p.Stack
          as={'div'}
          hasGap={
            hasVariant(variants, 'isActive', 'isActive')
              ? true
              : false
          }
          className={classNames(defaultcss.all, sty.box__lmDWp, {
            [sty.box__isActive__lmDWpvjQpn]: hasVariant(
              variants,
              'isActive',
              'isActive',
            ),

            [sty.box__timelineSelected__lmDWp75BwG]: hasVariant(
              variants,
              'timelineSelected',
              'timelineSelected',
            ),
          })}
        >
          {(
            hasVariant(variants, 'error', 'hasError') ? true : false
          ) ? (
            <div
              data-plasmic-name={'errorContainer'}
              data-plasmic-override={overrides.errorContainer}
              className={classNames(
                defaultcss.all,
                sty.errorContainer,
                {
                  [sty.errorContainer__error_hasError]: hasVariant(
                    variants,
                    'error',
                    'hasError',
                  ),

                  [sty.errorContainer__isActive]: hasVariant(
                    variants,
                    'isActive',
                    'isActive',
                  ),

                  [sty.errorContainer__text_hasText_error_hasError]:
                    hasVariant(variants, 'text', 'hasText') &&
                    hasVariant(variants, 'error', 'hasError'),
                },
              )}
            >
              <p.PlasmicSlot
                defaultContents={'Please enter a number value'}
                value={args.errorMessage}
                className={classNames(sty.slotErrorMessage, {
                  [sty.slotErrorMessage__error_hasError]: hasVariant(
                    variants,
                    'error',
                    'hasError',
                  ),
                })}
              />
            </div>
          ) : null}

          <Button
            data-plasmic-name={'sendUpdate'}
            data-plasmic-override={overrides.sendUpdate}
            className={classNames('__wab_instance', sty.sendUpdate)}
            text={'Send Update'}
          />
        </p.Stack>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    'root',
    'editorContainer',
    'textContainer',
    'timelineSelect',
    'svg',
    'selectItem',
    'errorContainer',
    'sendUpdate',
  ],

  editorContainer: ['editorContainer', 'textContainer'],
  textContainer: ['textContainer'],
  timelineSelect: ['timelineSelect', 'svg'],
  svg: ['svg'],
  selectItem: ['selectItem'],
  errorContainer: ['errorContainer'],
  sendUpdate: ['sendUpdate'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: 'div';
  editorContainer: 'div';
  textContainer: 'input';
  timelineSelect: 'div';
  svg: 'svg';
  selectItem: typeof SelectItem;
  errorContainer: 'div';
  sendUpdate: typeof Button;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActionBar__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
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
      | ReservedPropsType
      | VariantPropType
      | ArgPropType
      | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(
  nodeName: NodeName,
) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>,
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
  if (nodeName === 'root') {
    func.displayName = 'PlasmicActionBar';
  } else {
    func.displayName = `PlasmicActionBar.${nodeName}`;
  }
  return func;
}

export const PlasmicActionBar = Object.assign(
  // Top-level PlasmicActionBar renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    editorContainer: makeNodeComponent('editorContainer'),
    textContainer: makeNodeComponent('textContainer'),
    timelineSelect: makeNodeComponent('timelineSelect'),
    svg: makeNodeComponent('svg'),
    selectItem: makeNodeComponent('selectItem'),
    errorContainer: makeNodeComponent('errorContainer'),
    sendUpdate: makeNodeComponent('sendUpdate'),

    // Metadata about props expected for PlasmicActionBar
    internalVariantProps: PlasmicActionBar__VariantProps,
    internalArgProps: PlasmicActionBar__ArgProps,
  },
);

export default PlasmicActionBar;
/* prettier-ignore-end */
