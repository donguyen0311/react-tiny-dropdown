/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';

const Svg = (p: any) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    focusable="false"
    role="presentation"
    {...p}
  />
);

const ChevronDown = (props: any) => (
  <Svg style={{ marginRight: -6, marinLeft: 6 }} {...props}>
    <path
      d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </Svg>
);

interface DropdownToggleProps {
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  label: React.ReactNode;
  icon?: React.ReactNode;
}

const DropdownToggle: React.FC<DropdownToggleProps> = props => {
  const { disabled, onClick, label, icon, ...otherProps } = props;

  const DropdownToggleStyle = css`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 0.375rem;
    background-color: #ffffff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
    font-weight: 500;
  `;

  return (
    <div
      css={DropdownToggleStyle}
      onClick={e => (!disabled ? onClick(e) : undefined)}
      {...otherProps}
    >
      {label}
      {!icon ? <ChevronDown /> : icon}
    </div>
  );
};

DropdownToggle.defaultProps = {
  disabled: false,
  label: 'Dropdown',
};

export default DropdownToggle;
