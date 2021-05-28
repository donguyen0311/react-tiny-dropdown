export const checkBottomPosition = (el: HTMLDivElement) => {
  const DropdownBoundingClientRect = el.getBoundingClientRect();

  let offsetTop = DropdownBoundingClientRect.top + window.scrollY + 100;

  let outerHeight = el.offsetHeight;
  let windowInnerHeight = window.innerHeight;
  let windowScrollTop = window.pageYOffset;

  return offsetTop + outerHeight > windowInnerHeight + windowScrollTop;
};