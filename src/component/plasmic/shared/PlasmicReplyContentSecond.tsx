// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: 97K6RSBlPOz
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
import Dropdown from '../../Dropdown'; // plasmic-import: Umq3CDOCIR/component
import ReplyInput from '../../ReplyInput'; // plasmic-import: PE9pgtdNju/component

import '@plasmicapp/react-web/lib/plasmic.css';
import defaultcss from '../plasmic__default_style.module.css'; // plasmic-import: global/defaultcss
import projectcss from './plasmic_shared.module.css'; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from './PlasmicReplyContentSecond.module.css'; // plasmic-import: 97K6RSBlPOz/css

import IconDotMenuIcon from './icons/PlasmicIcon__IconDotMenu'; // plasmic-import: Dz069s-rE/icon

export type PlasmicReplyContentSecond__VariantMembers = {
  state: 'isReply' | 'isUser';
};

export type PlasmicReplyContentSecond__VariantsArgs = {
  state?: SingleChoiceArg<'isReply' | 'isUser'>;
};

type VariantPropType = keyof PlasmicReplyContentSecond__VariantsArgs;
export const PlasmicReplyContentSecond__VariantProps = new Array<VariantPropType>(
  'state',
);

export type PlasmicReplyContentSecond__ArgsType = {
  userName?: React.ReactNode;
  textContainer?: React.ReactNode;
  date?: React.ReactNode;
};

type ArgPropType = keyof PlasmicReplyContentSecond__ArgsType;
export const PlasmicReplyContentSecond__ArgProps = new Array<ArgPropType>(
  'userName',
  'textContainer',
  'date',
);

export type PlasmicReplyContentSecond__OverridesType = {
  root?: p.Flex<'div'>;
  editorContainer?: p.Flex<'div'>;
  userName?: p.Flex<'span'>;
  span?: p.Flex<'span'>;
  date?: p.Flex<'span'>;
  svg?: p.Flex<'svg'>;
  dropdown?: p.Flex<typeof Dropdown>;
  replyButton?: p.Flex<'button'>;
  replyInput?: p.Flex<typeof ReplyInput>;
};

export interface DefaultReplyContentSecondProps {
  userName?: React.ReactNode;
  textContainer?: React.ReactNode;
  date?: React.ReactNode;
  state?: SingleChoiceArg<'isReply' | 'isUser'>;
  className?: string;
}

function PlasmicReplyContentSecond__RenderFunc(props: {
  variants: PlasmicReplyContentSecond__VariantsArgs;
  args: PlasmicReplyContentSecond__ArgsType;
  overrides: PlasmicReplyContentSecond__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const [isRootActive, triggerRootActiveProps] = useTrigger(
    'usePressed',
    {},
  );
  const triggers = {
    active_root: isRootActive,
  };

  return (
    <div
      data-plasmic-name={'root'}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.root_reset,
        sty.root,
      )}
      data-plasmic-trigger-props={[triggerRootActiveProps]}
    >
      <div
        data-plasmic-name={'editorContainer'}
        data-plasmic-override={overrides.editorContainer}
        className={classNames(defaultcss.all, sty.editorContainer)}
      >
        <p.Stack
          as={'div'}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__e6Pow)}
        >
          <div
            className={classNames(defaultcss.all, sty.box__yr59G)}
          />

          <div className={classNames(defaultcss.all, sty.box__y7Gdr)}>
            <p.Stack
              as={'div'}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__kPjxs, {
                [sty.box__state_isReply__kPjxs2BJxM]: hasVariant(
                  variants,
                  'state',
                  'isReply',
                ),
              })}
            >
              <p.Stack
                as={'div'}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  sty.box___1Bypj,
                  {
                    [sty.box__state_isUser___1BypjbiMuc]: hasVariant(
                      variants,
                      'state',
                      'isUser',
                    ),
                  },
                )}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    sty.box___5LY0W,
                  )}
                >
                  <p.Stack
                    as={'div'}
                    hasGap={true}
                    className={classNames(
                      defaultcss.all,
                      sty.box__hb8Xt,
                    )}
                  >
                    <p.PlasmicSlot
                      defaultContents={
                        <span
                          data-plasmic-name={'userName'}
                          data-plasmic-override={overrides.userName}
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.userName,
                          )}
                        >
                          <span>
                            <span style={{ fontWeight: 700 }}>
                              {'The Rock'}
                            </span>
                          </span>
                        </span>
                      }
                      value={args.userName}
                      className={classNames(sty.slotUserName)}
                    />

                    <span
                      data-plasmic-name={'span'}
                      data-plasmic-override={overrides.span}
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.span,
                      )}
                    >
                      {'•'}
                    </span>

                    <p.PlasmicSlot
                      defaultContents={
                        <span
                          data-plasmic-name={'date'}
                          data-plasmic-override={overrides.date}
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.date,
                          )}
                        >
                          {'3 hours ago'}
                        </span>
                      }
                      value={args.date}
                    />
                  </p.Stack>
                </div>

                {(
                  hasVariant(variants, 'state', 'isUser')
                    ? true
                    : false
                ) ? (
                  <div
                    className={classNames(
                      defaultcss.all,
                      sty.box__tIZzq,
                      {
                        [sty.box__state_isUser__tIZzqbiMuc]: hasVariant(
                          variants,
                          'state',
                          'isUser',
                        ),
                      },
                    )}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        sty.box__uYdyB,
                        {
                          [sty.box__state_isUser__uYdyBbiMuc]: hasVariant(
                            variants,
                            'state',
                            'isUser',
                          ),
                        },
                      )}
                    >
                      <IconDotMenuIcon
                        data-plasmic-name={'svg'}
                        data-plasmic-override={overrides.svg}
                        className={classNames(
                          defaultcss.all,
                          sty.svg,
                          {
                            [sty.svg__state_isUser]: hasVariant(
                              variants,
                              'state',
                              'isUser',
                            ),
                          },
                        )}
                        role={'img'}
                      />

                      {(triggers.active_root ? true : false) ? (
                        <Dropdown
                          data-plasmic-name={'dropdown'}
                          data-plasmic-override={overrides.dropdown}
                          className={classNames(
                            '__wab_instance',
                            sty.dropdown,
                          )}
                        />
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </p.Stack>

              <div
                className={classNames(
                  defaultcss.all,
                  sty.box___3DEhu,
                )}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    sty.box__qZfSk,
                  )}
                >
                  <p.PlasmicSlot
                    defaultContents={
                      'Lorem ipsum #dolor sit amet, consectetur adipiscing elit. Nam mo'
                    }
                    value={args.textContainer}
                    className={classNames(sty.slotTextContainer)}
                  />
                </div>
              </div>

              <button
                data-plasmic-name={'replyButton'}
                data-plasmic-override={overrides.replyButton}
                className={classNames(
                  defaultcss.button,
                  defaultcss.__wab_text,
                  sty.replyButton,
                )}
              >
                {'Reply'}
              </button>

              {(
                hasVariant(variants, 'state', 'isReply')
                  ? true
                  : false
              ) ? (
                <ReplyInput
                  data-plasmic-name={'replyInput'}
                  data-plasmic-override={overrides.replyInput}
                  className={classNames(
                    '__wab_instance',
                    sty.replyInput,
                    {
                      [sty.replyInput__state_isReply]: hasVariant(
                        variants,
                        'state',
                        'isReply',
                      ),
                    },
                  )}
                />
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
    'root',
    'editorContainer',
    'userName',
    'span',
    'date',
    'svg',
    'dropdown',
    'replyButton',
    'replyInput',
  ],

  editorContainer: [
    'editorContainer',
    'userName',
    'span',
    'date',
    'svg',
    'dropdown',
    'replyButton',
    'replyInput',
  ],

  userName: ['userName'],
  span: ['span'],
  date: ['date'],
  svg: ['svg'],
  dropdown: ['dropdown'],
  replyButton: ['replyButton'],
  replyInput: ['replyInput'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: 'div';
  editorContainer: 'div';
  userName: 'span';
  span: 'span';
  date: 'span';
  svg: 'svg';
  dropdown: typeof Dropdown;
  replyButton: 'button';
  replyInput: typeof ReplyInput;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReplyContentSecond__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicReplyContentSecond__VariantsArgs;
    args?: PlasmicReplyContentSecond__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicReplyContentSecond__VariantsArgs,
    ReservedPropsType
  > &
    // Specify args directly as props
    Omit<PlasmicReplyContentSecond__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicReplyContentSecond__ArgProps,
      internalVariantPropNames: PlasmicReplyContentSecond__VariantProps,
    });

    return PlasmicReplyContentSecond__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicReplyContentSecond';
  } else {
    func.displayName = `PlasmicReplyContentSecond.${nodeName}`;
  }
  return func;
}

export const PlasmicReplyContentSecond = Object.assign(
  // Top-level PlasmicReplyContentSecond renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    editorContainer: makeNodeComponent('editorContainer'),
    userName: makeNodeComponent('userName'),
    span: makeNodeComponent('span'),
    date: makeNodeComponent('date'),
    svg: makeNodeComponent('svg'),
    dropdown: makeNodeComponent('dropdown'),
    replyButton: makeNodeComponent('replyButton'),
    replyInput: makeNodeComponent('replyInput'),

    // Metadata about props expected for PlasmicReplyContentSecond
    internalVariantProps: PlasmicReplyContentSecond__VariantProps,
    internalArgProps: PlasmicReplyContentSecond__ArgProps,
  },
);

export default PlasmicReplyContentSecond;
/* prettier-ignore-end */