// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: Rd6ctyxKvRM
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
import TextInput from '../../TextInput'; // plasmic-import: v0nNSTRV39/component
import Button from '../../Button'; // plasmic-import: JU1t0P9pFY/component

import '@plasmicapp/react-web/lib/plasmic.css';
import defaultcss from '../plasmic__default_style.module.css'; // plasmic-import: global/defaultcss
import projectcss from './plasmic_shared.module.css'; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from './PlasmicModalAlt.module.css'; // plasmic-import: Rd6ctyxKvRM/css

export type PlasmicModalAlt__VariantMembers = {
  orgSelected: 'orgSelected';
};

export type PlasmicModalAlt__VariantsArgs = {
  orgSelected?: SingleBooleanChoiceArg<'orgSelected'>;
};

type VariantPropType = keyof PlasmicModalAlt__VariantsArgs;
export const PlasmicModalAlt__VariantProps = new Array<VariantPropType>(
  'orgSelected',
);

export type PlasmicModalAlt__ArgsType = {
  organizationDescription?: React.ReactNode;
};

type ArgPropType = keyof PlasmicModalAlt__ArgsType;
export const PlasmicModalAlt__ArgProps = new Array<ArgPropType>(
  'organizationDescription',
);

export type PlasmicModalAlt__OverridesType = {
  root?: p.Flex<'div'>;
  group64?: p.Flex<'div'>;
  rectangle587?: p.Flex<'div'>;
  label3?: p.Flex<'label'>;
  ventureMark?: p.Flex<'div'>;
  welcomeForm?: p.Flex<'form'>;
  selectUserContainer?: p.Flex<'div'>;
  selectOrganization?: p.Flex<typeof TextInput>;
  selectUserContainer2?: p.Flex<'div'>;
  selectUser?: p.Flex<typeof TextInput>;
  label2?: p.Flex<'label'>;
  selectUserButton?: p.Flex<typeof Button>;
};

export interface DefaultModalAltProps {
  organizationDescription?: React.ReactNode;
  orgSelected?: SingleBooleanChoiceArg<'orgSelected'>;
  className?: string;
}

function PlasmicModalAlt__RenderFunc(props: {
  variants: PlasmicModalAlt__VariantsArgs;
  args: PlasmicModalAlt__ArgsType;
  overrides: PlasmicModalAlt__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

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
    >
      <div
        data-plasmic-name={'group64'}
        data-plasmic-override={overrides.group64}
        className={classNames(defaultcss.all, sty.group64)}
      >
        <p.Stack
          as={'div'}
          data-plasmic-name={'rectangle587'}
          data-plasmic-override={overrides.rectangle587}
          hasGap={true}
          className={classNames(defaultcss.all, sty.rectangle587)}
        >
          <label
            data-plasmic-name={'label3'}
            data-plasmic-override={overrides.label3}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.label3,
            )}
          >
            {'Welcome to'}
          </label>

          <div
            data-plasmic-name={'ventureMark'}
            data-plasmic-override={overrides.ventureMark}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.ventureMark,
            )}
          >
            {'VENTUREMARK'}
          </div>
        </p.Stack>

        <p.Stack
          as={'form'}
          data-plasmic-name={'welcomeForm'}
          data-plasmic-override={overrides.welcomeForm}
          hasGap={true}
          className={classNames(defaultcss.all, sty.welcomeForm, {
            [sty.welcomeForm__orgSelected]: hasVariant(
              variants,
              'orgSelected',
              'orgSelected',
            ),
          })}
        >
          <p.Stack
            as={'div'}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box___0WolP, {
              [sty.box__orgSelected___0WolPiQ4Ey]: hasVariant(
                variants,
                'orgSelected',
                'orgSelected',
              ),
            })}
          >
            <div
              data-plasmic-name={'selectUserContainer'}
              data-plasmic-override={overrides.selectUserContainer}
              className={classNames(
                defaultcss.all,
                sty.selectUserContainer,
              )}
            >
              <TextInput
                data-plasmic-name={'selectOrganization'}
                data-plasmic-override={overrides.selectOrganization}
              />
            </div>

            {(
              hasVariant(variants, 'orgSelected', 'orgSelected')
                ? true
                : false
            ) ? (
              <div
                data-plasmic-name={'selectUserContainer2'}
                data-plasmic-override={overrides.selectUserContainer2}
                className={classNames(
                  defaultcss.all,
                  sty.selectUserContainer2,
                  {
                    [sty.selectUserContainer2__orgSelected]: hasVariant(
                      variants,
                      'orgSelected',
                      'orgSelected',
                    ),
                  },
                )}
              >
                <TextInput
                  data-plasmic-name={'selectUser'}
                  data-plasmic-override={overrides.selectUser}
                  label={
                    <label
                      data-plasmic-name={'label2'}
                      data-plasmic-override={overrides.label2}
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.label2,
                        {
                          [sty.label2__orgSelected]: hasVariant(
                            variants,
                            'orgSelected',
                            'orgSelected',
                          ),
                        },
                      )}
                    >
                      {'Select your name'}
                    </label>
                  }
                />
              </div>
            ) : null}
            {(
              hasVariant(variants, 'orgSelected', 'orgSelected')
                ? true
                : false
            ) ? (
              <Button
                data-plasmic-name={'selectUserButton'}
                data-plasmic-override={overrides.selectUserButton}
                className={classNames(
                  '__wab_instance',
                  sty.selectUserButton,
                  {
                    [sty.selectUserButton__orgSelected]: hasVariant(
                      variants,
                      'orgSelected',
                      'orgSelected',
                    ),
                  },
                )}
                text={'Enter'}
              />
            ) : null}
          </p.Stack>

          <p.Stack
            as={'div'}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__ljTa5)}
          >
            <div
              className={classNames(defaultcss.all, sty.box__aUujC)}
            >
              <p.PlasmicSlot
                defaultContents={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec volutpat magna.'
                }
                value={args.organizationDescription}
                className={classNames(
                  sty.slotOrganizationDescription,
                )}
              />
            </div>
          </p.Stack>
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    'root',
    'group64',
    'rectangle587',
    'label3',
    'ventureMark',
    'welcomeForm',
    'selectUserContainer',
    'selectOrganization',
    'selectUserContainer2',
    'selectUser',
    'label2',
    'selectUserButton',
  ],

  group64: [
    'group64',
    'rectangle587',
    'label3',
    'ventureMark',
    'welcomeForm',
    'selectUserContainer',
    'selectOrganization',
    'selectUserContainer2',
    'selectUser',
    'label2',
    'selectUserButton',
  ],

  rectangle587: ['rectangle587', 'label3', 'ventureMark'],
  label3: ['label3'],
  ventureMark: ['ventureMark'],
  welcomeForm: [
    'welcomeForm',
    'selectUserContainer',
    'selectOrganization',
    'selectUserContainer2',
    'selectUser',
    'label2',
    'selectUserButton',
  ],

  selectUserContainer: ['selectUserContainer', 'selectOrganization'],
  selectOrganization: ['selectOrganization'],
  selectUserContainer2: [
    'selectUserContainer2',
    'selectUser',
    'label2',
  ],
  selectUser: ['selectUser', 'label2'],
  label2: ['label2'],
  selectUserButton: ['selectUserButton'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: 'div';
  group64: 'div';
  rectangle587: 'div';
  label3: 'label';
  ventureMark: 'div';
  welcomeForm: 'form';
  selectUserContainer: 'div';
  selectOrganization: typeof TextInput;
  selectUserContainer2: 'div';
  selectUser: typeof TextInput;
  label2: 'label';
  selectUserButton: typeof Button;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicModalAlt__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicModalAlt__VariantsArgs;
    args?: PlasmicModalAlt__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicModalAlt__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicModalAlt__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicModalAlt__ArgProps,
      internalVariantPropNames: PlasmicModalAlt__VariantProps,
    });

    return PlasmicModalAlt__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicModalAlt';
  } else {
    func.displayName = `PlasmicModalAlt.${nodeName}`;
  }
  return func;
}

export const PlasmicModalAlt = Object.assign(
  // Top-level PlasmicModalAlt renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    group64: makeNodeComponent('group64'),
    rectangle587: makeNodeComponent('rectangle587'),
    label3: makeNodeComponent('label3'),
    ventureMark: makeNodeComponent('ventureMark'),
    welcomeForm: makeNodeComponent('welcomeForm'),
    selectUserContainer: makeNodeComponent('selectUserContainer'),
    selectOrganization: makeNodeComponent('selectOrganization'),
    selectUserContainer2: makeNodeComponent('selectUserContainer2'),
    selectUser: makeNodeComponent('selectUser'),
    label2: makeNodeComponent('label2'),
    selectUserButton: makeNodeComponent('selectUserButton'),

    // Metadata about props expected for PlasmicModalAlt
    internalVariantProps: PlasmicModalAlt__VariantProps,
    internalArgProps: PlasmicModalAlt__ArgProps,
  },
);

export default PlasmicModalAlt;
/* prettier-ignore-end */
