import React, { PropTypes } from 'react';
import { GeneralPropTypes, createClassName, generalClassNames, objectValues } from '../utils';

/**
 * Menu alignment enumerable.
 *
 * @type {{RIGHT: string, CENTER: string}}
 */
export const MenuAlignments = {
  RIGHT: 'right',
  CENTER: 'center'
};

/**
 * Menu component.
 * http://foundation.zurb.com/sites/docs/menu.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Menu = props => {
  const className = createClassName(
    props.className || 'menu',
    {
      'align-right': props.alignment === MenuAlignments.RIGHT,
      'align-center': props.alignment === MenuAlignments.CENTER,
      'icon-top': props.iconsOnTop,
      'expanded': props.isExpanded,
      'vertical': props.isVertical,
      'simple': props.isSimple,
      'nested': props.isNested
    },
    generalClassNames(props)
  );

  return (
    <ul {...props} className={className}/>
  );
};

Menu.propTypes = {
  ...GeneralPropTypes,
  alignment: PropTypes.oneOf(objectValues(MenuAlignments)),
  iconsOnTop: PropTypes.bool,
  isExpanded: PropTypes.bool,
  isVertical: PropTypes.bool,
  isSimple: PropTypes.bool,
  isNested: PropTypes.bool
};

/**
 * Menu item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const MenuItem = props => {
  const className = createClassName(
    props.className,
    {
      'active': props.isActive
    },
    generalClassNames(props)
  );

  return (
    <li {...props} className={className}/>
  );
};

MenuItem.propTypes = {
  ...GeneralPropTypes,
  isActive: PropTypes.bool
};

/**
 * Menu text wrapper-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const MenuText = props => (
  <MenuItem {...props} className={props.className || 'menu-text'}/>
);
