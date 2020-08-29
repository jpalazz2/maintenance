// @flow strict
'use strict';

export function classMerge(...classes: Array<?string>): string {
  return classes.filter((str) => str != null && str.length > 0).join(' ');
}

export function conditionClass(classes: { string: boolean }): string {
  const classesToKeep = Object.entries(classes)
    .map(([key, value]) => (value === true ? key : null))
    .filter((val) => val != null);
  return classMerge(...classesToKeep);
}
