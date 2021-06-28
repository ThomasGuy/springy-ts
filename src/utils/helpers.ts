function addClass(ratio: number): string {
  switch (true) {
    case ratio < 0.5: // ratio 29/50
      return 'tall2';
    case ratio > 1.4 && ratio <= 2.4:
      return 'wide2';
    case ratio > 2.4:
      return 'wide3';
    default:
      return '';
  }
}

const ariaExpanded = (element: HTMLElement): void => {
  const expanded = element.getAttribute('aria-expanded') === 'true' || false;
  element.setAttribute('aria-expanded', (!expanded).toString());
};

export { addClass, ariaExpanded };
