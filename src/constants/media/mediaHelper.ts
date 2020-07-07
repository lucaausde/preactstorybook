// slightly modified version of https://github.com/dvpnt/styled-media-helper (MIT LICENSE)

class Invalid extends Error {
  constructor(breakpoint) {
    super(`Invalid breakpoint: '${breakpoint}'.`);
  }
}

class mediaHelper {
  sizes: any;

  constructor(sizes) {
    this.sizes = sizes;
  }
  _isBreakpoint(breakpoint) {
    return Boolean(this.sizes[breakpoint]);
  }

  _next(breakpoint) {
    const keys = Object.keys(this.sizes);
    const index = keys.indexOf(breakpoint);

    return keys[index + 1];
  }

  greaterThan(breakpoint) {
    if (!this._isBreakpoint(breakpoint)) {
      throw new Invalid(breakpoint);
    }

    return `@media (min-width: ${this.sizes[breakpoint]}px)`;
  }

  lessThan(breakpoint) {
    if (!this._isBreakpoint(breakpoint)) {
      throw new Invalid(breakpoint);
    }

    return `@media (max-width: ${this.sizes[breakpoint]}px)`;
  }

  between(min, max) {
    if (!this._isBreakpoint(min)) {
      throw new Invalid(min);
    }

    if (!this._isBreakpoint(max)) {
      throw new Invalid(max);
    }

    return `@media (min-width: ${this.sizes[min]}px) and
			(max-width: ${this.sizes[max] - 0.02}px)`;
  }
}

export default (sizes) => new mediaHelper(sizes);
