/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';

interface DropdownMenuProps {
  isBottom: boolean;
  isRight: boolean;
  children: any;
}

const DropdownMenu= React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  (props, ref) => {
    const { isBottom, isRight, ...otherProps } = props;

    const DropdownMenuStyle = css`
      background-color: #ffffff;
      border-radius: 0.375rem;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
      margin-top: ${!isBottom ? '0.5rem' : '0px'};
      margin-bottom: ${isBottom ? '0.5rem' : '0px'};
      position: absolute;
      z-index: 10;
      min-width: 200px;
      max-height: 300px;
      overflow: auto;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      opacity: 1;
      top: ${isBottom ? 'auto' : 'initial'};
      bottom: ${isBottom ? '100%' : 'initial'};
      right: ${isRight ? '0px' : 'initial'};
    `;

    return (
      <div ref={ref} css={DropdownMenuStyle} {...otherProps}>
        {props.children}
      </div>
    );
  }
);

DropdownMenu.defaultProps = {
  isBottom: true,
};

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;
