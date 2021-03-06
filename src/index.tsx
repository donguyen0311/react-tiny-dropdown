/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';
import debounce from 'lodash.debounce';

import { checkBottomPosition, checkRightPosition } from './utils';
import DropdownItem from './Item';
import DropdownToggle from './Toggle';
import DropdownMenu from './Menu';

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  show?: boolean;
  label: React.ReactNode;
  disabled?: boolean;
  onClose?: () => void;
  className?: string;
  uncontrolled?: boolean;
  icon?: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = props => {
  const {
    show,
    label,
    disabled,
    onClose,
    className,
    uncontrolled,
    icon,
    ...otherProps
  } = props;
  const [isOpen, setOpen] = React.useState<boolean>(show || false);
  const [isBottomPosition, setBottomPosition] = React.useState<boolean>(false);
  const [isRightPosition, setRightPosition] = React.useState<boolean>(false);
  const refDropdown = React.useRef<HTMLDivElement>(null);
  const refMenu = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = React.useCallback(
    event => {
      if (!refDropdown?.current?.contains(event.target)) {
        setOpen(false);
        !!onClose && onClose();
      }
    },
    [onClose]
  );

  const handleClick = React.useCallback(() => {
    setOpen(!isOpen);

    if (isOpen) {
      !!onClose && onClose();
    }
  }, [isOpen, onClose]);

  const handleScroll = React.useCallback(
    debounce(() => {
      if (refDropdown.current && refMenu.current) {
        let isBottom = checkBottomPosition(refDropdown.current, refMenu.current);
        setBottomPosition(isBottom);

        let isRight = checkRightPosition(refDropdown.current);
        setRightPosition(isRight);
      }
    }, 50),
    [checkBottomPosition]
  );

  React.useEffect(() => {
    setOpen(show || false);
  }, [show]);

  React.useEffect(() => {
    handleScroll();

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleClickOutside, handleScroll]);

  const DropdownStyle = css`
    position: relative;
    font-size: 14px;
    line-height: 20px;
  `;

  const isShowMenu =
    ((uncontrolled && isOpen) || (!uncontrolled && show)) && !disabled;

  return (
    <div
      css={DropdownStyle}
      className={className}
      ref={refDropdown}
      {...otherProps}
    >
      <DropdownToggle
        icon={icon}
        disabled={disabled}
        onClick={handleClick}
        label={label}
      />
      {isShowMenu ? (
        <DropdownMenu ref={refMenu} isBottom={isBottomPosition} isRight={isRightPosition}>
          {React.Children.map(props.children, (childNode: any) => {
            return !!childNode
              ? React.cloneElement(childNode, {
                  onClose: handleClick,
                })
              : null;
          })}
        </DropdownMenu>
      ) : null}
    </div>
  );
};

Dropdown.defaultProps = {
  show: false,
  onClose: () => {},
  disabled: false,
  uncontrolled: true
};

export default Object.assign(Dropdown, {
  Item: DropdownItem,
});
