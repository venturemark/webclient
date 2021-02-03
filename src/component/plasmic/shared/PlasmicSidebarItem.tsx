// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: KDElHbQmfd
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

import '@plasmicapp/react-web/lib/plasmic.css';
import defaultcss from '../plasmic__default_style.module.css'; // plasmic-import: global/defaultcss
import projectcss from './plasmic_shared.module.css'; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from './PlasmicSidebarItem.module.css'; // plasmic-import: KDElHbQmfd/css

import OvalIcon from './icons/PlasmicIcon__Oval'; // plasmic-import: FUAnm6q86/icon
import IconHashIcon from './icons/PlasmicIcon__IconHash'; // plasmic-import: AVLV6uMr56/icon
import IconDotMenuIcon from './icons/PlasmicIcon__IconDotMenu'; // plasmic-import: Dz069s-rE/icon
import IconPlusIcon from './icons/PlasmicIcon__IconPlus'; // plasmic-import: B5QLKmr2tW/icon

export type PlasmicSidebarItem__VariantMembers = {
  isCurrent: 'isCurrent';
  hasUpdate: 'hasUpdate';
  isOrganization: 'isOrganization';
  isInput: 'isInput';
};

export type PlasmicSidebarItem__VariantsArgs = {
  isCurrent?: SingleBooleanChoiceArg<'isCurrent'>;
  hasUpdate?: SingleBooleanChoiceArg<'hasUpdate'>;
  isOrganization?: SingleBooleanChoiceArg<'isOrganization'>;
  isInput?: SingleBooleanChoiceArg<'isInput'>;
};

type VariantPropType = keyof PlasmicSidebarItem__VariantsArgs;
export const PlasmicSidebarItem__VariantProps = new Array<VariantPropType>(
  'isCurrent',
  'hasUpdate',
  'isOrganization',
  'isInput',
);

export type PlasmicSidebarItem__ArgsType = {
  name?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSidebarItem__ArgsType;
export const PlasmicSidebarItem__ArgProps = new Array<ArgPropType>(
  'name',
  'children',
);

export type PlasmicSidebarItem__OverridesType = {
  root?: p.Flex<'div'>;
  itemContainer?: p.Flex<'div'>;
  textbox?: p.Flex<'input'>;
  sidebarForm?: p.Flex<'form'>;
  addTimelineInput?: p.Flex<'input'>;
  iconMenu?: p.Flex<'svg'>;
};

export interface DefaultSidebarItemProps {
  name?: React.ReactNode;
  children?: React.ReactNode;
  isCurrent?: SingleBooleanChoiceArg<'isCurrent'>;
  hasUpdate?: SingleBooleanChoiceArg<'hasUpdate'>;
  isOrganization?: SingleBooleanChoiceArg<'isOrganization'>;
  isInput?: SingleBooleanChoiceArg<'isInput'>;
  className?: string;
}

function PlasmicSidebarItem__RenderFunc(props: {
  variants: PlasmicSidebarItem__VariantsArgs;
  args: PlasmicSidebarItem__ArgsType;
  overrides: PlasmicSidebarItem__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const [isRootHover, triggerRootHoverProps] = useTrigger(
    'useHover',
    {},
  );
  const triggers = {
    hover_root: isRootHover,
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
        {
          [sty.root__hasUpdate]: hasVariant(
            variants,
            'hasUpdate',
            'hasUpdate',
          ),
          [sty.root__isCurrent]: hasVariant(
            variants,
            'isCurrent',
            'isCurrent',
          ),
          [sty.root__isInput]: hasVariant(
            variants,
            'isInput',
            'isInput',
          ),
          [sty.root__isOrganization]: hasVariant(
            variants,
            'isOrganization',
            'isOrganization',
          ),
        },
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <p.Stack
        as={'div'}
        data-plasmic-name={'itemContainer'}
        data-plasmic-override={overrides.itemContainer}
        hasGap={true}
        className={classNames(defaultcss.all, sty.itemContainer, {
          [sty.itemContainer__hasUpdate]: hasVariant(
            variants,
            'hasUpdate',
            'hasUpdate',
          ),

          [sty.itemContainer__isCurrent]: hasVariant(
            variants,
            'isCurrent',
            'isCurrent',
          ),

          [sty.itemContainer__isInput]: hasVariant(
            variants,
            'isInput',
            'isInput',
          ),

          [sty.itemContainer__isOrganization]: hasVariant(
            variants,
            'isOrganization',
            'isOrganization',
          ),
        })}
      >
        {(
          hasVariant(variants, 'hasUpdate', 'hasUpdate')
            ? true
            : false
        ) ? (
          <OvalIcon
            className={classNames(defaultcss.all, sty.svg__p8Yl1, {
              [sty.svg__hasUpdate__p8Yl1AoSlB]: hasVariant(
                variants,
                'hasUpdate',
                'hasUpdate',
              ),
            })}
            role={'img'}
          />
        ) : null}

        <p.Stack
          as={'div'}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__zwdJs, {
            [sty.box__hasUpdate__zwdJsaoSlB]: hasVariant(
              variants,
              'hasUpdate',
              'hasUpdate',
            ),

            [sty.box__isCurrent__zwdJs0Mgpk]: hasVariant(
              variants,
              'isCurrent',
              'isCurrent',
            ),

            [sty.box__isInput__zwdJsVs3Tx]: hasVariant(
              variants,
              'isInput',
              'isInput',
            ),

            [sty.box__isOrganization__zwdJsnLnuO]: hasVariant(
              variants,
              'isOrganization',
              'isOrganization',
            ),
          })}
        >
          {(
            hasVariant(variants, 'isOrganization', 'isOrganization')
              ? false
              : true
          ) ? (
            <div
              className={classNames(defaultcss.all, sty.box__zSbSe, {
                [sty.box__isOrganization__zSbSeNLnuO]: hasVariant(
                  variants,
                  'isOrganization',
                  'isOrganization',
                ),
              })}
            >
              <p.PlasmicSlot
                defaultContents={
                  <IconHashIcon
                    className={classNames(
                      defaultcss.all,
                      sty.svg__mVzHz,
                    )}
                    role={'img'}
                  />
                }
                value={args.children}
                className={classNames(sty.slotChildren, {
                  [sty.slotChildren__hasUpdate]: hasVariant(
                    variants,
                    'hasUpdate',
                    'hasUpdate',
                  ),

                  [sty.slotChildren__isCurrent]: hasVariant(
                    variants,
                    'isCurrent',
                    'isCurrent',
                  ),

                  [sty.slotChildren__isInput]: hasVariant(
                    variants,
                    'isInput',
                    'isInput',
                  ),

                  [sty.slotChildren__isOrganization]: hasVariant(
                    variants,
                    'isOrganization',
                    'isOrganization',
                  ),
                })}
              />
            </div>
          ) : null}
          {(
            hasVariant(variants, 'isInput', 'isInput') ? false : true
          ) ? (
            <p.PlasmicSlot
              defaultContents={
                <React.Fragment>
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__j6CkC,
                    )}
                  >
                    {'Wins'}
                  </div>

                  {false ? (
                    <input
                      data-plasmic-name={'textbox'}
                      data-plasmic-override={overrides.textbox}
                      className={classNames(
                        defaultcss.input,
                        sty.textbox,
                      )}
                      placeholder={'Enter name' as const}
                      size={1 as const}
                      type={'text' as const}
                      value={'' as const}
                    />
                  ) : null}
                </React.Fragment>
              }
              value={args.name}
              className={classNames(sty.slotName, {
                [sty.slotName__hasUpdate]: hasVariant(
                  variants,
                  'hasUpdate',
                  'hasUpdate',
                ),

                [sty.slotName__isCurrent]: hasVariant(
                  variants,
                  'isCurrent',
                  'isCurrent',
                ),

                [sty.slotName__isInput]: hasVariant(
                  variants,
                  'isInput',
                  'isInput',
                ),

                [sty.slotName__isOrganization]: hasVariant(
                  variants,
                  'isOrganization',
                  'isOrganization',
                ),
              })}
            />
          ) : null}
          {(
            hasVariant(variants, 'isInput', 'isInput') ? true : false
          ) ? (
            <form
              data-plasmic-name={'sidebarForm'}
              data-plasmic-override={overrides.sidebarForm}
              className={classNames(defaultcss.all, sty.sidebarForm, {
                [sty.sidebarForm__isInput]: hasVariant(
                  variants,
                  'isInput',
                  'isInput',
                ),
              })}
            >
              <input
                data-plasmic-name={'addTimelineInput'}
                data-plasmic-override={overrides.addTimelineInput}
                className={classNames(
                  defaultcss.input,
                  sty.addTimelineInput,
                  {
                    [sty.addTimelineInput__isInput]: hasVariant(
                      variants,
                      'isInput',
                      'isInput',
                    ),
                  },
                )}
                placeholder={'Enter name' as const}
                size={1 as const}
                type={'text' as const}
              />
            </form>
          ) : null}
        </p.Stack>

        {(
          hasVariant(variants, 'isInput', 'isInput') &&
          triggers.hover_root
            ? false
            : hasVariant(
                variants,
                'isOrganization',
                'isOrganization',
              ) && triggers.hover_root
            ? true
            : triggers.hover_root
            ? false
            : hasVariant(variants, 'isInput', 'isInput')
            ? false
            : false
        ) ? (
          <div
            className={classNames(defaultcss.all, sty.box__eFeO, {
              [sty.box__isInput__eFeOVs3Tx]: hasVariant(
                variants,
                'isInput',
                'isInput',
              ),

              [sty.box__isOrganization__eFeONLnuO]: hasVariant(
                variants,
                'isOrganization',
                'isOrganization',
              ),
            })}
          >
            {(
              triggers.hover_root
                ? true
                : hasVariant(variants, 'isInput', 'isInput')
                ? false
                : true
            ) ? (
              <p.PlasmicIcon
                data-plasmic-name={'iconMenu'}
                data-plasmic-override={overrides.iconMenu}
                PlasmicIconType={
                  hasVariant(
                    variants,
                    'isOrganization',
                    'isOrganization',
                  ) && triggers.hover_root
                    ? IconPlusIcon
                    : IconDotMenuIcon
                }
                className={classNames(defaultcss.all, sty.iconMenu, {
                  [sty.iconMenu__isInput]: hasVariant(
                    variants,
                    'isInput',
                    'isInput',
                  ),

                  [sty.iconMenu__isOrganization]: hasVariant(
                    variants,
                    'isOrganization',
                    'isOrganization',
                  ),
                })}
                role={'img'}
              />
            ) : null}
          </div>
        ) : null}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    'root',
    'itemContainer',
    'textbox',
    'sidebarForm',
    'addTimelineInput',
    'iconMenu',
  ],

  itemContainer: [
    'itemContainer',
    'textbox',
    'sidebarForm',
    'addTimelineInput',
    'iconMenu',
  ],

  textbox: ['textbox'],
  sidebarForm: ['sidebarForm', 'addTimelineInput'],
  addTimelineInput: ['addTimelineInput'],
  iconMenu: ['iconMenu'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: 'div';
  itemContainer: 'div';
  textbox: 'input';
  sidebarForm: 'form';
  addTimelineInput: 'input';
  iconMenu: 'svg';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSidebarItem__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSidebarItem__VariantsArgs;
    args?: PlasmicSidebarItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSidebarItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSidebarItem__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSidebarItem__ArgProps,
      internalVariantPropNames: PlasmicSidebarItem__VariantProps,
    });

    return PlasmicSidebarItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicSidebarItem';
  } else {
    func.displayName = `PlasmicSidebarItem.${nodeName}`;
  }
  return func;
}

export const PlasmicSidebarItem = Object.assign(
  // Top-level PlasmicSidebarItem renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    itemContainer: makeNodeComponent('itemContainer'),
    textbox: makeNodeComponent('textbox'),
    sidebarForm: makeNodeComponent('sidebarForm'),
    addTimelineInput: makeNodeComponent('addTimelineInput'),
    iconMenu: makeNodeComponent('iconMenu'),

    // Metadata about props expected for PlasmicSidebarItem
    internalVariantProps: PlasmicSidebarItem__VariantProps,
    internalArgProps: PlasmicSidebarItem__ArgProps,
  },
);

export default PlasmicSidebarItem;
/* prettier-ignore-end */
