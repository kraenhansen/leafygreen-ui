import React from 'react';
import PropTypes from 'prop-types';

import Button, { Size } from '@leafygreen-ui/button';
import { cx } from '@leafygreen-ui/emotion';
import { useForwardedRef, useIdAllocator } from '@leafygreen-ui/hooks';
import LeafyGreenProvider, {
  useDarkMode,
} from '@leafygreen-ui/leafygreen-provider';
import {
  InferredPolymorphic,
  useInferredPolymorphic,
} from '@leafygreen-ui/polymorphic';
import { RenderMode } from '@leafygreen-ui/popover';
import { BaseFontSize } from '@leafygreen-ui/tokens';

import { Menu } from '../Menu';

import {
  buttonBaseStyles,
  buttonContainerStyles,
  buttonThemeStyles,
} from './SplitButton.styles';
import { Align, Justify, SplitButtonProps, Variant } from './SplitButton.types';

export const SplitButton = InferredPolymorphic<SplitButtonProps, 'button'>(
  (
    {
      darkMode,
      variant = Variant.Default,
      type = 'button',
      align = Align.Bottom,
      justify = Justify.End,
      size = Size.Default,
      disabled = false,
      menuItems = [],
      as,
      baseFontSize,
      label,
      className,
      maxHeight,
      adjustOnMutation,
      popoverZIndex,
      renderMode = RenderMode.TopLayer,
      portalClassName,
      portalContainer,
      portalRef,
      scrollContainer,
      open,
      setOpen,
      onTriggerClick,
      triggerAriaLabel,
      onChange,
      ...rest
    },
    ref: React.Ref<any>,
  ) => {
    const { Component } = useInferredPolymorphic(as, rest, 'button');
    const { theme } = useDarkMode(darkMode);
    const containerRef = useForwardedRef(ref, null);
    const menuId = useIdAllocator({ prefix: 'lg-split-button-menu' });

    const isAnchor = Component === 'a';

    const buttonProps = {
      // only add these props if not an anchor
      ...(!isAnchor && { type }),
    } as const;

    const sharedButtonProps = {
      darkMode,
      variant,
      size,
      baseFontSize,
      disabled,
    } as const;

    return (
      <div className={cx(buttonContainerStyles, className)} ref={containerRef}>
        <Button
          as={Component}
          {...sharedButtonProps}
          {...buttonProps}
          className={cx(buttonBaseStyles, {
            [buttonThemeStyles(theme, variant)]: !disabled,
          })}
          {...rest}
        >
          {label}
        </Button>
        <Menu
          {...sharedButtonProps}
          maxHeight={maxHeight}
          adjustOnMutation={adjustOnMutation}
          popoverZIndex={popoverZIndex}
          renderMode={renderMode}
          portalClassName={portalClassName}
          portalContainer={portalContainer}
          portalRef={portalRef}
          scrollContainer={scrollContainer}
          align={align}
          justify={justify}
          containerRef={containerRef}
          menuItems={menuItems}
          id={menuId}
          disabled={disabled}
          open={open}
          setOpen={setOpen}
          onTriggerClick={onTriggerClick}
          triggerAriaLabel={triggerAriaLabel}
          onChange={onChange}
        />
      </div>
    );
  },
  'SplitButton',
);

SplitButton.displayName = 'SplitButton';

SplitButton.propTypes = {
  darkMode: PropTypes.bool,
  className: PropTypes.string,
  align: PropTypes.oneOf(Object.values(Align)),
  justify: PropTypes.oneOf(Object.values(Justify)),
  variant: PropTypes.oneOf(Object.values(Variant)),
  label: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.element).isRequired,
  baseFontSize: PropTypes.oneOf(Object.values(BaseFontSize)),
  disabled: PropTypes.bool,
  leftGlyph: PropTypes.element,
  onChange: PropTypes.func,
  onTriggerClick: PropTypes.func,
  triggerAriaLabel: PropTypes.string,
  // Popover Props
  popoverZIndex: PropTypes.number,
  scrollContainer:
    typeof window !== 'undefined'
      ? PropTypes.instanceOf(Element)
      : PropTypes.any,
  portalContainer:
    typeof window !== 'undefined'
      ? PropTypes.instanceOf(Element)
      : PropTypes.any,
  portalClassName: PropTypes.string,
  portalRef: PropTypes.shape({
    current:
      typeof window !== 'undefined'
        ? PropTypes.instanceOf(Element)
        : PropTypes.any,
  }),
  renderMode: PropTypes.oneOf(Object.values(RenderMode)),
} as any;
