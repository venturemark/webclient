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
import Reply from '../../Reply'; // plasmic-import: cZqz_iAjea/component

import '@plasmicapp/react-web/lib/plasmic.css';
import defaultcss from '../plasmic__default_style.module.css'; // plasmic-import: global/defaultcss
import projectcss from './plasmic_shared.module.css'; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from './PlasmicUpdateContent.module.css'; // plasmic-import: A1UjtYt6k0/css

import IconDotMenuIcon from './icons/PlasmicIcon__IconDotMenu'; // plasmic-import: Dz069s-rE/icon

export type PlasmicUpdateContent__VariantMembers = {
  state: 'isReply' | 'isUser';
};

export type PlasmicUpdateContent__VariantsArgs = {
  state?: SingleChoiceArg<'isReply' | 'isUser'>;
};

type VariantPropType = keyof PlasmicUpdateContent__VariantsArgs;
export const PlasmicUpdateContent__VariantProps = new Array<VariantPropType>(
  'state',
);

export type PlasmicUpdateContent__ArgsType = {
  userName?: React.ReactNode;
  organizationName?: React.ReactNode;
  date?: React.ReactNode;
  timelineName?: React.ReactNode;
};

type ArgPropType = keyof PlasmicUpdateContent__ArgsType;
export const PlasmicUpdateContent__ArgProps = new Array<ArgPropType>(
  'userName',
  'organizationName',
  'date',
  'timelineName',
);

export type PlasmicUpdateContent__OverridesType = {
  root?: p.Flex<'div'>;
  editorContainer?: p.Flex<'div'>;
  userName?: p.Flex<'span'>;
  organizationName?: p.Flex<'span'>;
  date?: p.Flex<'span'>;
  timelineName?: p.Flex<'span'>;
  svg?: p.Flex<'svg'>;
  dropdown?: p.Flex<typeof Dropdown>;
  textContainer2?: p.Flex<'div'>;
  textContainer?: p.Flex<'div'>;
  replyButton?: p.Flex<'button'>;
  reply?: p.Flex<typeof Reply>;
};

export interface DefaultUpdateContentProps {
  userName?: React.ReactNode;
  organizationName?: React.ReactNode;
  date?: React.ReactNode;
  timelineName?: React.ReactNode;
  state?: SingleChoiceArg<'isReply' | 'isUser'>;
  className?: string;
}

function PlasmicUpdateContent__RenderFunc(props: {
  variants: PlasmicUpdateContent__VariantsArgs;
  args: PlasmicUpdateContent__ArgsType;
  overrides: PlasmicUpdateContent__OverridesType;
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
        className={classNames(defaultcss.all, sty.editorContainer, {
          [sty.editorContainer__state_isReply]: hasVariant(
            variants,
            'state',
            'isReply',
          ),
        })}
      >
        <p.Stack
          as={'div'}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__ehjLr, {
            [sty.box__state_isUser__ehjLrU0Xnn]: hasVariant(
              variants,
              'state',
              'isUser',
            ),
          })}
        >
          <div
            className={classNames(defaultcss.all, sty.box__wAdRc)}
          />

          <p.Stack
            as={'div'}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__mkSty)}
          >
            <p.Stack
              as={'div'}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__fjL5B, {
                [sty.box__state_isUser__fjL5Bu0Xnn]: hasVariant(
                  variants,
                  'state',
                  'isUser',
                ),
              })}
            >
              <div
                className={classNames(defaultcss.all, sty.box__nwWG)}
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
              </div>

              <span
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.span__tizM,
                )}
              >
                {'posted to'}
              </span>

              <div
                className={classNames(
                  defaultcss.all,
                  sty.box___8Q6Vp,
                )}
              >
                <p.PlasmicSlot
                  defaultContents={
                    <span
                      data-plasmic-name={'organizationName'}
                      data-plasmic-override={
                        overrides.organizationName
                      }
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.organizationName,
                      )}
                    >
                      <span>
                        <span style={{ fontWeight: 700 }}>
                          {'Venturemark'}
                        </span>
                      </span>
                    </span>
                  }
                  value={args.organizationName}
                  className={classNames(sty.slotOrganizationName)}
                />
              </div>
            </p.Stack>

            <p.Stack
              as={'div'}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__vvzri)}
            >
              <div
                className={classNames(defaultcss.all, sty.box__wDBh5)}
              >
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
                  className={classNames(sty.slotDate)}
                />
              </div>

              <span
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.span__rwEsf,
                )}
              >
                {'•'}
              </span>

              <div
                className={classNames(defaultcss.all, sty.box__lqdFr)}
              >
                <p.PlasmicSlot
                  defaultContents={
                    <span
                      data-plasmic-name={'timelineName'}
                      data-plasmic-override={overrides.timelineName}
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.timelineName,
                      )}
                    >
                      {'Wins'}
                    </span>
                  }
                  value={args.timelineName}
                  className={classNames(sty.slotTimelineName)}
                />
              </div>
            </p.Stack>
          </p.Stack>

          {(
            hasVariant(variants, 'state', 'isUser') ? true : false
          ) ? (
            <div
              className={classNames(defaultcss.all, sty.box__tAhMj, {
                [sty.box__state_isUser__tAhMju0Xnn]: hasVariant(
                  variants,
                  'state',
                  'isUser',
                ),
              })}
            >
              <div
                className={classNames(defaultcss.all, sty.box__vVNrv)}
              >
                <IconDotMenuIcon
                  data-plasmic-name={'svg'}
                  data-plasmic-override={overrides.svg}
                  className={classNames(defaultcss.all, sty.svg)}
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

        <div className={classNames(defaultcss.all, sty.box__z3Q65)}>
          <div
            data-plasmic-name={'textContainer2'}
            data-plasmic-override={overrides.textContainer2}
            className={classNames(defaultcss.all, sty.textContainer2)}
          >
            <div
              data-plasmic-name={'textContainer'}
              data-plasmic-override={overrides.textContainer}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.textContainer,
              )}
            >
              {
                'Lorem ipsum #dolor sit amet, consectetur adipiscing elit. Nam mollis varius ex. In ornare #scelerisque ex, ut 35 ullamcorper dui suscipit id. Mauris #maximus congue ante, sed varius'
              }
            </div>
          </div>
        </div>

        <div
          className={classNames(defaultcss.all, sty.box__khPiB, {
            [sty.box__state_isReply__khPiB4CwlI]: hasVariant(
              variants,
              'state',
              'isReply',
            ),
          })}
        >
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

          <div
            className={classNames(defaultcss.all, sty.box__uciye)}
          />
        </div>

        {(hasVariant(variants, 'state', 'isReply') ? true : false) ? (
          <Reply
            data-plasmic-name={'reply'}
            data-plasmic-override={overrides.reply}
            className={classNames('__wab_instance', sty.reply, {
              [sty.reply__state_isReply]: hasVariant(
                variants,
                'state',
                'isReply',
              ),
            })}
          />
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    'root',
    'editorContainer',
    'userName',
    'organizationName',
    'date',
    'timelineName',
    'svg',
    'dropdown',
    'textContainer2',
    'textContainer',
    'replyButton',
    'reply',
  ],

  editorContainer: [
    'editorContainer',
    'userName',
    'organizationName',
    'date',
    'timelineName',
    'svg',
    'dropdown',
    'textContainer2',
    'textContainer',
    'replyButton',
    'reply',
  ],

  userName: ['userName'],
  organizationName: ['organizationName'],
  date: ['date'],
  timelineName: ['timelineName'],
  svg: ['svg'],
  dropdown: ['dropdown'],
  textContainer2: ['textContainer2', 'textContainer'],
  textContainer: ['textContainer'],
  replyButton: ['replyButton'],
  reply: ['reply'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: 'div';
  editorContainer: 'div';
  userName: 'span';
  organizationName: 'span';
  date: 'span';
  timelineName: 'span';
  svg: 'svg';
  dropdown: typeof Dropdown;
  textContainer2: 'div';
  textContainer: 'div';
  replyButton: 'button';
  reply: typeof Reply;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUpdateContent__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUpdateContent__VariantsArgs;
    args?: PlasmicUpdateContent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUpdateContent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUpdateContent__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicUpdateContent__ArgProps,
      internalVariantPropNames: PlasmicUpdateContent__VariantProps,
    });

    return PlasmicUpdateContent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicUpdateContent';
  } else {
    func.displayName = `PlasmicUpdateContent.${nodeName}`;
  }
  return func;
}

export const PlasmicUpdateContent = Object.assign(
  // Top-level PlasmicUpdateContent renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    editorContainer: makeNodeComponent('editorContainer'),
    userName: makeNodeComponent('userName'),
    organizationName: makeNodeComponent('organizationName'),
    date: makeNodeComponent('date'),
    timelineName: makeNodeComponent('timelineName'),
    svg: makeNodeComponent('svg'),
    dropdown: makeNodeComponent('dropdown'),
    textContainer2: makeNodeComponent('textContainer2'),
    textContainer: makeNodeComponent('textContainer'),
    replyButton: makeNodeComponent('replyButton'),
    reply: makeNodeComponent('reply'),

    // Metadata about props expected for PlasmicUpdateContent
    internalVariantProps: PlasmicUpdateContent__VariantProps,
    internalArgProps: PlasmicUpdateContent__ArgProps,
  },
);

export default PlasmicUpdateContent;
/* prettier-ignore-end */
