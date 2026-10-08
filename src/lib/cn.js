/** Joins class names together and skips falsy values. */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
