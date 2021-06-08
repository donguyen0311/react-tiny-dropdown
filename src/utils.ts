export const checkBottomPosition = (
  el: HTMLDivElement,
  elMenu: HTMLDivElement
) => {
  const DropdownBoundingClientRect = el.getBoundingClientRect();

  let offsetTop =
    DropdownBoundingClientRect.top + window.scrollY + elMenu.offsetHeight;

  let outerHeight = el.offsetHeight;
  let windowInnerHeight = window.innerHeight;
  let windowScrollTop = window.pageYOffset;

  return offsetTop + outerHeight > windowInnerHeight + windowScrollTop;
};

export const checkRightPosition = (el: HTMLDivElement) => {
  const DropdownBoundingClientRect = el.getBoundingClientRect();
  let offsetLeft = DropdownBoundingClientRect.right + window.scrollX;

  let outerHeight = el.offsetWidth;
  let windowInnerWidth = window.innerWidth;
  let windowScrollLeft = window.pageXOffset;

  return offsetLeft + outerHeight > windowInnerWidth + windowScrollLeft;
};
