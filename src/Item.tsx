/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';

export interface DropdownItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const DropdownItem: React.FC<DropdownItemProps> = props => {
  const { className, ...otherProps } = props;

  const DropdownItemStyle = css`
    padding: 10px 12px 10px 12px;
    font-size: 14px;
    line-height: 1.3;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;

    &:hover {
      background-color: rgba(243, 244, 246, 1);
      color: inherit;
    }

    &:active {
      background-color: #eeeeee;
    }

    &.selected {
      background-color: rgba(243, 244, 246, 1);
    }
  `;

  return (
    <div css={DropdownItemStyle} className={className} {...otherProps}>
      {props.children}
    </div>
  );
};

DropdownItem.displayName = 'DropdownItem';

export default DropdownItem;
